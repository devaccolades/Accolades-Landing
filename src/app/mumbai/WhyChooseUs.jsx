"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

const benefits = [
  {
    title: <>One brief,<br />one team</>,
    description: "Strategy, design, development and campaigns are planned together",
    position: "top-[80%] left-[12%] -rotate-[7deg] md:top-[58%] md:left-[12%] md:-rotate-[7deg]",
  },
  {
    title: <>Business<br />first</>,
    description: "We define the objective before choosing the solution",
    position: "top-[63%] left-[46%] -rotate-[9deg] md:top-[61%] md:left-[32.5%] md:rotate-[7deg]",
  },
  {
    title: <>Creative<br />included</>,
    description: "Branding, video, animation and design sit in the same company",
    position: "top-[45%] left-[5%] rotate-[7deg] md:top-[35%] md:left-[50.5%] md:rotate-[7deg]",
  },
  {
    title: <>Measured<br />work</>,
    description: "We track what matters and keep improving it",
    position: "top-[30%] left-[48%] -rotate-[13deg] md:top-[13%] md:left-[69.5%] md:-rotate-[13deg]",
  },
];

// Share of the scroll progress spent drawing the line. On desktop the section is pinned and the cards wait for the full line, on mobile the section is taller than the screen so the cards follow the line down
const LINE_END = { desktop: 0.4, mobile: 0.7 };
const cardWindow = (order, isDesktop) => (isDesktop ? [0.42 + order * 0.13, 0.57 + order * 0.13] : [0.15 + order * 0.2, 0.3 + order * 0.2]);

const star = "[clip-path:polygon(50%_0,62%_37%,100%_50%,62%_62%,50%_100%,38%_62%,0_50%,38%_37%)]";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

// A star that rides the tip of the line while it is being drawn. The svg is stretched with preserveAspectRatio="none", so viewBox units map straight to percentages of the canvas
function LineTip({ pathRef, length, viewBox: [width, height], className }) {
  const point = (value) => pathRef.current?.getPointAtLength(value * pathRef.current.getTotalLength());
  const left = useTransform(length, (value) => `${((point(value)?.x ?? 0) / width) * 100}%`);
  const top = useTransform(length, (value) => `${((point(value)?.y ?? 0) / height) * 100}%`);
  const opacity = useTransform(length, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);

  return <motion.span aria-hidden="true" style={{ left, top, opacity }} className={`pointer-events-none absolute size-8 -translate-x-1/2 -translate-y-1/2 bg-[#ffed00] ${star} ${className}`} />;
}

function BenefitCard({ benefit, order, isDesktop, progress, reduceMotion }) {
  const range = cardWindow(order, isDesktop);
  const opacity = useTransform(progress, range, reduceMotion ? [1, 1] : [0, 1]);
  const y = useTransform(progress, range, reduceMotion ? [0, 0] : [70, 0]);
  const scale = useTransform(progress, range, reduceMotion ? [1, 1] : [0.8, 1]);

  return (
    <motion.article style={{ opacity, y, scale }} className={`group absolute w-[50%] rounded-[22px] bg-white px-[5%] py-[6%] shadow-[-12px_-14px_40px_-15px_rgba(47,77,65,0.22)] transition-[rotate,translate,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:rotate-0 hover:shadow-[-12px_-14px_50px_-12px_rgba(47,77,65,0.35)] md:w-[16.5%] md:px-[2%] md:py-[2.2%] md:hover:rotate-0 ${benefit.position}`}>
      <h3 className="relative mb-3 pl-3 text-lg leading-[1.05] tracking-[-.04em] md:text-[clamp(14px,1.65vw,25px)]"><span aria-hidden="true" className="absolute top-0 left-[-3px] text-sm text-[#ffdf00] transition-[rotate,scale] duration-300 group-hover:rotate-45 group-hover:scale-125">✦</span>{benefit.title}</h3>
      <p className="pl-3 text-xs leading-[1.5] text-[#58696a] md:text-[clamp(10px,1.05vw,15px)]">{benefit.description}</p>
    </motion.article>
  );
}

export default function WhyChooseUs() {
  const pinRef = useRef(null);
  const canvasRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);
  const reduceMotion = useSafeReducedMotion();
  const isDesktop = useIsDesktop();

  // Desktop: progress runs while the canvas is pinned. Mobile: it runs while the canvas scrolls through the screen
  const { scrollYProgress: desktopScroll } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const { scrollYProgress: mobileScroll } = useScroll({ target: canvasRef, offset: ["0 0.6", "1 0.95"] });
  const desktopProgress = useSpring(desktopScroll, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const mobileProgress = useSpring(mobileScroll, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const desktopLine = useTransform(desktopProgress, [0, LINE_END.desktop], reduceMotion ? [1, 1] : [0, 1]);
  const mobileLine = useTransform(mobileProgress, [0, LINE_END.mobile], reduceMotion ? [1, 1] : [0, 1]);

  return (
    <section aria-labelledby="why-mumbai-heading" className="relative isolate overflow-clip rounded-t-[28px] bg-[#edf5f1] pb-[124px] text-black md:pb-0">
      <div ref={pinRef} className={reduceMotion ? "" : "md:h-[200svh]"}>
      <div className={reduceMotion ? "" : "md:sticky md:top-0 md:flex md:h-svh md:items-center md:pt-[60px]"}>
      <div ref={canvasRef} className="relative isolate h-[clamp(900px,285vw,1200px)] w-full md:h-[min(540px,calc(100svh-60px))] lg:h-[min(clamp(560px,52.8vw,800px),calc(100svh-60px))]">
      <svg aria-hidden="true" viewBox="0 0 756 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block">
        <motion.path ref={desktopPathRef} style={{ pathLength: desktopLine }} d="M-30 386 C35 265 90 299 230 296 C342 295 377 314 448 211 C521 101 556 104 644 104 C702 104 736 105 783 63" fill="none" stroke="#0b7980" strokeWidth="26" />
      </svg>

      <div className="containers relative pt-8 max-md:w-[94%] md:absolute md:pt-0 md:top-[9%] md:left-1/2 md:-translate-x-1/2">
        <h2 id="why-mumbai-heading" className="max-w-[640px] text-[28px] leading-[1.08] font-medium tracking-[-.045em] md:max-w-[50%] md:text-[clamp(25px,2.65vw,42px)]">Why Choose One Software Development and Marketing Partner in <span className="relative whitespace-nowrap">Mumbai<span aria-hidden="true" className="absolute right-[-4px] bottom-0 h-[.8em] w-[3px] bg-[#ffed00]" /></span></h2>
        <p className="mt-4 max-w-[520px] text-xs leading-[1.6] text-[#58696a] md:max-w-[46%] md:text-[clamp(10px,1vw,15px)]">A CRM works better when it connects to your sales process. An app needs a launch plan. A website needs traffic. When one team handles marketing, creative and technology, nothing gets lost between vendors.</p>
      </div>

      <svg aria-hidden="true" viewBox="0 0 202 586" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 h-full w-full md:hidden">
        <motion.path ref={mobilePathRef} style={{ pathLength: mobileLine }} d="M220 148 C192 218 170 232 108 242 C32 251 34 288 78 323 C128 363 185 355 165 426 C146 492 105 520 52 529 C19 535 1 548 -20 568" fill="none" stroke="#0b7980" strokeWidth="27" />
      </svg>

      {!reduceMotion && (isDesktop
        ? <LineTip key="desktop" pathRef={desktopPathRef} length={desktopLine} viewBox={[756, 400]} className="hidden md:block" />
        : <LineTip key="mobile" pathRef={mobilePathRef} length={mobileLine} viewBox={[202, 586]} className="md:hidden" />)}

      <div data-no-text-reveal>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} order={isDesktop ? index : benefits.length - 1 - index} isDesktop={isDesktop} progress={isDesktop ? desktopProgress : mobileProgress} reduceMotion={reduceMotion} />
        ))}
      </div>

      <div className="containers absolute inset-x-0 top-[calc(100%+40px)] flex justify-center md:top-[81%] md:justify-end">
        <a href="https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-[#ffed00] px-4 py-3 text-xs font-semibold text-[#007b89] transition-colors hover:bg-[#fff56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007b89] lg:px-5 lg:py-4 lg:text-sm">Talk to our Mumbai team <span aria-hidden="true">↗</span></a>
      </div>

      </div>
      </div>
      </div>
    </section>
  );
}
