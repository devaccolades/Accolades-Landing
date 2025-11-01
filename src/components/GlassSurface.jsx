"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handler = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDark;
};

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}) => {
  const uniqueId = useId().replace(/:/g, "-");
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;

  const containerRef = useRef(null);
  const feImageRef = useRef(null);
  const redChannelRef = useRef(null);
  const greenChannelRef = useRef(null);
  const blueChannelRef = useRef(null);
  const gaussianBlurRef = useRef(null);

  const isDarkMode = useDarkMode();

  // Feature detection state — default false to avoid SSR/CSR mismatch
  const [svgSupported, setSvgSupported] = useState(false);
  const [backdropFilterSupported, setBackdropFilterSupported] = useState(false);

  const generateDisplacementMap = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = Math.max(1, Math.round(rect?.width || 400));
    const actualHeight = Math.max(1, Math.round(rect?.height || 200));
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }, [
    borderRadius,
    borderWidth,
    redGradId,
    blueGradId,
    mixBlendMode,
    brightness,
    opacity,
    blur,
  ]);

  const updateDisplacementMap = useCallback(() => {
    if (!feImageRef.current || !containerRef.current) return;
    const href = generateDisplacementMap();
    // setAttribute should work for href on feImage in modern browsers
    feImageRef.current.setAttribute("href", href);
  }, [generateDisplacementMap]);

  // set displacement and channel attributes when relevant props change
  useEffect(() => {
    if (redChannelRef.current) {
      redChannelRef.current.setAttribute("scale", (distortionScale + redOffset).toString());
      redChannelRef.current.setAttribute("xChannelSelector", xChannel);
      redChannelRef.current.setAttribute("yChannelSelector", yChannel);
    }
    if (greenChannelRef.current) {
      greenChannelRef.current.setAttribute("scale", (distortionScale + greenOffset).toString());
      greenChannelRef.current.setAttribute("xChannelSelector", xChannel);
      greenChannelRef.current.setAttribute("yChannelSelector", yChannel);
    }
    if (blueChannelRef.current) {
      blueChannelRef.current.setAttribute("scale", (distortionScale + blueOffset).toString());
      blueChannelRef.current.setAttribute("xChannelSelector", xChannel);
      blueChannelRef.current.setAttribute("yChannelSelector", yChannel);
    }

    if (gaussianBlurRef.current) {
      gaussianBlurRef.current.setAttribute("stdDeviation", displace.toString());
    }
    // only run when these props change
  }, [
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    displace,
  ]);

  // Observe container resize and update displacement map
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      // schedule map update on the next frame
      requestAnimationFrame(updateDisplacementMap);
    });

    ro.observe(containerRef.current);

    // initial update
    requestAnimationFrame(updateDisplacementMap);

    return () => ro.disconnect();
  }, [updateDisplacementMap]);

  // run any updates when width/height props change
  useEffect(() => {
    requestAnimationFrame(updateDisplacementMap);
  }, [width, height, updateDisplacementMap]);

  // Client-only feature detection for SVG filters & backdrop-filter
  useEffect(() => {
    if (typeof window === "undefined") return;

    // detect backdrop-filter support using CSS.supports (safe on client)
    const bfSupported =
      typeof CSS !== "undefined" && typeof CSS.supports === "function"
        ? CSS.supports("backdrop-filter", "blur(10px)")
        : false;
    setBackdropFilterSupported(Boolean(bfSupported));

    // Detect SVG filter support (conservative)
    // We avoid relying on userAgent where possible; keep a safe check:
    let svgOk = false;
    try {
      // Attempt to create an element and set backdropFilter style using url(#id) approach
      const div = document.createElement("div");
      // use filterId purely for detection — set but don't rely on value
      div.style.backdropFilter = `url(#${filterId})`;
      svgOk = div.style.backdropFilter !== "";
    } catch (e) {
      svgOk = false;
    }

    // Heuristic: some browsers (Safari & Firefox) may claim filter but not support feImage href properly.
    // If you want to block those explicitly, detect from UA (optional). Here we keep the detection conservative.
    const ua = navigator.userAgent || "";
    const isSafari = /\bSafari\b/.test(ua) && !/\bChrome\b/.test(ua);
    const isFirefox = /\bFirefox\b/.test(ua);

    if (isSafari || isFirefox) {
      // set to false if we want to avoid SVG filters on Safari/Firefox
      svgOk = false;
    }

    setSvgSupported(Boolean(svgOk));
  }, [filterId]);

  const getContainerStyles = () => {
    const baseStyles = {
      ...style,
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      borderRadius: `${borderRadius}px`,
      "--glass-frost": backgroundOpacity,
      "--glass-saturation": saturation,
    };

    // Use the precomputed feature flags (both default to false during SSR)
    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode
          ? `hsl(0 0% 0% / ${backgroundOpacity})`
          : `hsl(0 0% 100% / ${backgroundOpacity})`,
        backdropFilter: `url(#${filterId}) saturate(${saturation})`,
        boxShadow: isDarkMode
          ? `0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset`
          : `0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset`,
      };
    } else {
      // Fallbacks using backdropFilter where available
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.2)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)`,
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            WebkitBackdropFilter: "blur(12px) saturate(1.8) brightness(1.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)`,
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    "relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out";

  const focusVisibleClasses = isDarkMode
    ? "focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2"
    : "focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";

  return (
    <div
      ref={containerRef}
      className={`${glassSurfaceClasses} ${focusVisibleClasses} ${className}`}
      style={getContainerStyles()}
    >
      {/* SVG filter is included unconditionally in the DOM,
          but the component only applies it via CSS when svgSupported is true.
          The svg itself won't force the hydratation mismatch because it's static markup. */}
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full py-[8px] px-[10px] md:p-[10px] rounded-[inherit] relative z-50 flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
