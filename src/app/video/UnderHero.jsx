"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraph = `At Accolades Integrated, we don’t just make videos — we create
business-driven visual stories. Whether it’s a corporate film or an
animated explainer, each frame is designed to resonate with your
audience and support your brand’s growth.`;

function UnderHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"], // Adjust as needed
  });

  const words = paragraph.split(" ");

  return (
    <section ref={ref} className="relative py-12 overflow-hidden">
      {/* White fade overlay */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Word-by-word fading text */}
      <p className="text-[12px] leading-[150%] max-w-64 md:text-[13px] md:max-w-lg lg:text-[14px] font-medium lg:max-w-2xl mx-auto text-center relative z-20 flex flex-wrap justify-center gap-x-[4px]">
        {words.map((word, index) => {
          // Calculate per-word scroll timing
          const start = index / words.length;
          const end = (index + 1) / words.length;
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

          return (
            <motion.span
              key={index}
              style={{ opacity }}
              className="inline-block"
            >
              {word + " "}
            </motion.span>
          );
        })}
      </p>
    </section>
  );
}

export default UnderHero;
