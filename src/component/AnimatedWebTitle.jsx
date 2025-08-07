

"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";

const AnimatedWebTitle = ({ text }) => {
  const titleRef = useRef(null);
  const [hydrated, setHydrated] = useState(false);

  // 1. Ensure component is mounted before animating
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 2. Run animation AFTER hydration and text change
  useLayoutEffect(() => {
    if (!hydrated) return; // Prevent animation too early

    const ctx = gsap.context(() => {
      const chars = titleRef.current.querySelectorAll(".char");

      gsap.killTweensOf(chars);

      requestAnimationFrame(() => {
        setTimeout(() => {
          gsap.from(chars, {
            x: 150,
            opacity: 0,
            duration: 0.7,
            ease: "power4.out",
            stagger: 0.04,
          });
        }, 30);
      });
    }, titleRef);

    return () => ctx.revert();
  }, [hydrated, text]);

  return (
    <h1
      ref={titleRef}
      className="creative bg-white text-center text-[#3FB4BA] text-[36px] md:text-[50px] lg:text-[64px] font-mont py-5 rounded-[30px] font-bold leading-[100%]"
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[6px]">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block"
              style={{ display: "inline-block" }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedWebTitle;
