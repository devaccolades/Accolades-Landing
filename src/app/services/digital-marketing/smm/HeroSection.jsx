


"use client";

import React from "react";
import side from "../../../../../public/google/Frame 1171275830.png";
import Image from "next/image";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="containers pt-[100px] font-mont overflow-hidden">
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AnimatedPopTitle text={"SMM"} />
      </motion.div>

      {/* Content Row */}
      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        {/* Text Section */}
        <motion.div
          className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h3 className="text-[16px] lg:text-[20px] leading-[110%] font-normal">
            WHY YOU CHOOSE OUR SOCIAL MEDIA MARKETING SERVICE?
          </h3>
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[36px] font-bold leading-[100%]">
            Social Media Marketing
          </h3>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Social Media Marketing, or SMM has become an inevitable phenomenon
            in the present scenario, as our world is at fast pace with advancing
            technology. At Accolades the digital marketing agency in Kerala, we
            adopt and execute exceptional Social Media Marketing Services, to
            identify target audience for our distinguished clientele by
            creating, attractive Social Media posts of their esteemed
            establishment. We depict excellent piece of designs, which captivate
            the broad attention of multitude.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
