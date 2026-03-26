"use client";

import Image from "next/image";
import React from "react";
import side from "../../../../../public/google/OBJECTS.png";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="containers pt-[100px]">
      <AnimatedPopTitle text={"Search Engine Marketing"} />

      <div className="flex flex-col-reverse md:grid md:grid-cols-[55%_1fr] py-5 items-center gap-5">

        {/* Text Content - Animate on load */}
        <motion.div
          className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[16px] lg:text-[20px] leading-[100%] font-normal">
            OUR COMMUNITY
          </h1>
          <h3 className="text-[#3FB4BA] text-[20px] lg:text-[30px] font-bold leading-[100%]">
            We Are Optimists Who Love To Work Together
          </h3>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Google Ad is an online advertising service developed by Google to help marketers contact their likely clients instantly...
          </p>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            To naturally obtain an appropriate position in business strategies...
          </p>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Google Certified AddWords partner in Kerala
          </p>
        </motion.div>

        {/* Image - Animate on load */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
