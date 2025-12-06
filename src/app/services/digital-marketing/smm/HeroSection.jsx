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
          <h3 className="text-[16px] lg:text-[18px] leading-[110%] font-normal">
            WHY YOU CHOOSE OUR SOCIAL MEDIA MARKETING SERVICE?
          </h3>
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[34px] font-bold leading-[100%]">
           Social Media Marketing Services in Kochi
          </h3>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Social Media Marketing (SMM) uses platforms like Facebook, Instagram (Meta),
           LinkedIn, and YouTube. It promotes your products and engages your audience across
            these channels. Accolades Integrated is a leading digital marketing agency in Kochi. 
            Many brands trust us as leading creative force for digital marketing in Kerala. 
            We help local businesses grow by driving traffic and converting visitors into customers. 
            By harnessing SMM, companies in Kochi can boost their brand awareness and reach new customers 
            in India. Our tailored social media strategies ensure your content resonates with viewers,
             builds trust, and drives measurable results
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src={side}
            alt="side-image"
            className="w-full h-auto"
            priority={false}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
