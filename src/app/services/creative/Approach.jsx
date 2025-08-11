"use client";
import React from "react";
import icon1 from "../../../../public/creative/research (2) 1.svg";
import icon2 from "../../../../public/creative/concept 1.svg";
import icon3 from "../../../../public/creative/graphic-design 1.svg";
import icon4 from "../../../../public/creative/picture 1.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Briefing",
    description:
      "We kick things off with workshops, competitor scans, and mood-board sessions to clarify your goals and audience.",
    icon: icon1,
  },
  {
    title: "Strategy & Concept Development",
    description:
      "Concept decks map visual territory, tone, and messaging directions before design begins.",
    icon: icon2,
  },
  {
    title: "Design & Storyboarding",
    description:
      "Styleframes, color ways, and frame-by-frame boards bring concepts to life and lock in the look.",
    icon: icon3,
  },
  {
    title: "Execution",
    description:
      "Designers, animators, and videographers build, animate, shoot, and edit the approved concept.",
    icon: icon4,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const iconVariants = {
  hidden: { opacity: 0, x: -20, filter: "contrast(0) blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "contrast(1) blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const Approach = () => {
  return (
    <section className="containers py-10">
      <h3 className="font-mont font-extrabold text-[24px] md:text-[32px] xl:text-[40px] text-[#3FB4BA]">
        Our Creative Approach
      </h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4 overflow-hidden relative"
          >
            <motion.div variants={iconVariants}>
              <Image
                src={step.icon}
                alt={step.title}
                width={90}
                height={90}
                className="min-w-[90px]"
              />
            </motion.div>
            <div>
              <motion.h4
                variants={textVariants}
                className="text-[#007A8B] font-mont font-semibold leading-[110%] mb-1"
              >
                {step.title}
              </motion.h4>
              <motion.p
                variants={textVariants}
                className="text-gray-700 font-mont text-sm"
              >
                {step.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Approach;
