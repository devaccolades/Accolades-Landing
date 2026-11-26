"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

const whatsappUrl = "https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team.";

// desktop/mobile hold each step's position (in %) inside the ring artwork, so the text stays in its band at every width
const steps = [
  { number: "01", title: "Understand", description: "We check your goals and existing systems.", desktop: { left: 14.4, top: 76, edge: 40 }, mobile: { left: 10, top: 13.5 } },
  { number: "02", title: "Plan", description: "We set clear steps, budgets and success metrics.", desktop: { left: 40.6, top: 64.5, edge: 60 }, mobile: { left: 16.7, top: 36.9 } },
  { number: "03", title: "Build", description: "Our team designs and builds your new digital tools.", desktop: { left: 57.3, top: 50.3, edge: 80 }, mobile: { left: 25, top: 57.7 } },
  { number: "04", title: "Measure", description: "We track results and adjust using real data.", desktop: { left: 74.7, top: 38, edge: 100 }, mobile: { left: 35, top: 78.8 } },
];

const ringStroke = { fill: "#fff", stroke: "#e4e4e4", strokeWidth: 1.5, vectorEffect: "non-scaling-stroke" };

// Mobile rings all touch at (40, 6) and grow down along the same steep diagonal
const mobileTouch = [-0.38, -0.925];
const mobileRings = [267, 200, 145, 92].map((r) => ({ r, cx: 40 + r * 0.38, cy: 6 + r * 0.925 }));

// The yellow is drawn as the crescent between the outer ring and the next one, so a mask can sweep it in like a line
const circlePath = ({ cx, cy, r }) => `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${r * 2} 0 a${r} ${r} 0 1 0 ${-r * 2} 0`;
const desktopCrescent = "M0 500 A500 500 0 0 1 1000 500 Z M0 500 A400 400 0 0 1 800 500 Z";
const mobileCrescent = `${circlePath(mobileRings[0])} ${circlePath(mobileRings[1])}`;

// The sweep starts where the rings touch and runs clockwise through the middle of the crescent
const desktopSweep = "M100 500 A400 400 0 0 1 900 500";
const mobileSweep = (() => {
  const { cx, cy } = mobileRings[0];
  const [ux, uy] = mobileTouch;
  const [sx, sy, ex, ey] = [cx + ux * 200, cy + uy * 200, cx - ux * 200, cy - uy * 200];
  return `M${sx} ${sy} A200 200 0 1 1 ${ex} ${ey} A200 200 0 1 1 ${sx} ${sy}`;
})();

// Each stage's share of the scroll progress: the yellow line, then the rings from the touch point, then the steps. With reduced motion the values are held at their final state, because removing a motion value from style leaves its last value on the element
const SWEEP_END = 0.4;
const ringWindow = (index) => [0.34 + index * 0.09, 0.52 + index * 0.09];
const stepWindow = (index) => [0.56 + index * 0.09, 0.7 + index * 0.09];
const spring = { stiffness: 140, damping: 30, restDelta: 0.001 };

function Sweep({ progress, reduceMotion, ...path }) {
  const pathLength = useTransform(progress, [0, SWEEP_END], reduceMotion ? [1, 1] : [0, 1]);
  return <motion.path {...path} fill="none" stroke="#fff" style={{ pathLength }} />;
}

function Ring({ progress, index, origin: [originX, originY], reduceMotion, ...circle }) {
  const range = ringWindow(index);
  const scale = useTransform(progress, range, reduceMotion ? [1, 1] : [0, 1]);
  const opacity = useTransform(progress, range, reduceMotion ? [1, 1] : [0, 1]);
  return <motion.circle {...circle} {...ringStroke} style={{ originX, originY, scale, opacity }} />;
}

function StepText({ step, mobile }) {
  return (
    <>
      <h3 className={`leading-tight tracking-[-.02em] ${mobile ? "text-[clamp(16px,4.9cqw,26px)]" : "text-[clamp(14px,2.1cqw,26px)]"}`}>
        <span aria-hidden="true" className={`mr-1.5 ${step.number === "04" ? "text-[#008391]" : "text-[#ffdf00]"}`}>✦</span>{step.title}
      </h3>
      <p className={`mt-[.6em] leading-[1.5] ${mobile ? "text-[clamp(12px,3.4cqw,17px)]" : "text-[clamp(11px,1.35cqw,16px)]"}`}>{step.description}</p>
    </>
  );
}

function Step({ step, index, progress, reduceMotion, mobile }) {
  const range = stepWindow(index);
  const opacity = useTransform(progress, range, reduceMotion ? [1, 1] : [0, 1]);
  const y = useTransform(progress, range, reduceMotion ? [0, 0] : [16, 0]);

  if (mobile) {
    return (
      <li>
        <motion.span aria-hidden="true" className="absolute left-[4%] mt-[.4em] text-[clamp(10px,2.8cqw,14px)] text-[#7b8586]" style={{ top: `${step.mobile.top}%`, opacity }}>{step.number}</motion.span>
        <motion.div className="absolute max-w-[38%]" style={{ left: `${step.mobile.left}%`, top: `${step.mobile.top}%`, opacity, y }}><StepText step={step} mobile /></motion.div>
      </li>
    );
  }

  return (
    <li>
      <motion.div className="absolute max-w-[16.5%]" style={{ left: `${step.desktop.left}%`, top: `${step.desktop.top}%`, opacity, y }}><StepText step={step} /></motion.div>
      <motion.span aria-hidden="true" className="absolute bottom-[1.5%] text-[clamp(10px,1.1cqw,14px)] text-[#7b8586]" style={{ right: `${100 - step.desktop.edge + 1.5}%`, opacity }}>{step.number}</motion.span>
    </li>
  );
}

export default function HowWeWork() {
  const pinRef = useRef(null);
  const mobileRef = useRef(null);
  const reduceMotion = useSafeReducedMotion();

  // Desktop: progress runs while the section is pinned. Mobile: the diagram is taller than the screen, so it runs while the diagram scrolls through
  const { scrollYProgress: desktopScroll } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const { scrollYProgress: mobileScroll } = useScroll({ target: mobileRef, offset: ["0 0.7", "1 0.95"] });
  const desktopProgress = useSpring(desktopScroll, spring);
  const mobileProgress = useSpring(mobileScroll, spring);

  return (
    <section aria-labelledby="mumbai-process-heading" className="overflow-clip bg-white text-black">
      <div ref={pinRef} className={reduceMotion ? "" : "md:h-[200svh]"}>
      <div className={`bg-[radial-gradient(ellipse_at_75%_0%,#f1f1f1,transparent_45%)] pt-12 ${reduceMotion ? "md:pt-16 lg:pt-20" : "md:sticky md:top-0 md:flex md:h-svh md:flex-col md:justify-between md:pt-[100px]"}`}>
      <div className="containers relative z-10 flex flex-col items-start gap-6 md:flex-row md:justify-between">
        <div>
          <p className="mb-4 text-sm lg:text-lg"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> How we work</p>
          <h2 id="mumbai-process-heading" className="text-[32px] leading-[1.08] font-medium tracking-[-.04em] lg:text-[44px]">How We Work<br />Together</h2>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#16767c] px-4 py-3 text-xs font-semibold text-[#ffed00] transition-colors hover:bg-[#0f6166] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16767c] md:mt-12 lg:px-5 lg:py-4 lg:text-sm">Book a Call With Our Team <ArrowUpRight aria-hidden="true" size={16} /></a>
      </div>

      {/* Desktop: semicircles sharing the bottom-left corner. While pinned the width also follows the screen height, so the heading and the diagram both fit */}
      <div className={`relative hidden aspect-[2/1] [container-type:inline-size] md:block ${reduceMotion ? "w-[min(89vw,1300px)]" : "w-[min(89vw,1300px,max(480px,calc((100svh-240px)*2)))]"}`}>
        <svg aria-hidden="true" viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full">
          <mask id="how-we-work-sweep-desktop">
            <Sweep d={desktopSweep} strokeWidth="220" progress={desktopProgress} reduceMotion={reduceMotion} />
          </mask>
          <path d={desktopCrescent} fillRule="evenodd" fill="#ffed00" mask="url(#how-we-work-sweep-desktop)" />
          {[400, 300, 200].map((r, index) => <Ring key={r} cx={r} cy="500" r={r} index={index} origin={[0, 0.5]} progress={desktopProgress} reduceMotion={reduceMotion} />)}
        </svg>
        <ol data-no-text-reveal>
          {steps.map((step, index) => <Step key={step.number} step={step} index={index} progress={desktopProgress} reduceMotion={reduceMotion} />)}
        </ol>
      </div>

      {/* Mobile: circles sharing a top-left point, stepping down the page */}
      <div ref={mobileRef} className="relative mt-8 aspect-[300/520] w-full [container-type:inline-size] md:hidden">
        <svg aria-hidden="true" viewBox="0 0 300 520" className="absolute inset-0 h-full w-full overflow-visible">
          <mask id="how-we-work-sweep-mobile">
            <Sweep d={mobileSweep} strokeWidth="150" progress={mobileProgress} reduceMotion={reduceMotion} />
          </mask>
          <path d={mobileCrescent} fillRule="evenodd" fill="#ffed00" mask="url(#how-we-work-sweep-mobile)" />
          {mobileRings.slice(1).map(({ r, cx, cy }, index) => <Ring key={r} cx={cx} cy={cy} r={r} index={index} origin={[(1 + mobileTouch[0]) / 2, (1 + mobileTouch[1]) / 2]} progress={mobileProgress} reduceMotion={reduceMotion} />)}
        </svg>
        <ol data-no-text-reveal>
          {steps.map((step, index) => <Step key={step.number} step={step} index={index} progress={mobileProgress} reduceMotion={reduceMotion} mobile />)}
        </ol>
      </div>
      </div>
      </div>
    </section>
  );
}
