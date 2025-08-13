"use client";

import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import AnimatedWebTitle from "@/component/AnimatedWebTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Herosection = ({ main_title, title, subtitle, button_text, image }) => {
  return (
    <section className="w-full  containers pt-[100px] ">
      {/* Title with White Background */}
     
      <AnimatedPopTitle text={main_title} />

      {/* Content Box */}
      <div className=" flex flex-col-reverse md:flex-row items-center gap-8 overflow-hidden my-6 ">
        {/* Text Section */}
        <motion.div
          className="flex-1 p-4  md:p-6 bg-white rounded-3xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.3 }}
          
        >
          <h3 className="text-lg  md:text-xl lg:text-2xl leading-[136%] font-mont font-bold text-[#3FB4BA] mb-4">
            {title}
          </h3>
          <p className="text-[13px]  md:text-[16px] font-mont text-gray-700 mb-6">{subtitle}</p>
          <a
            href="/contact-us"
            className="text-[12px]  md:text-[14px] bg-[#3FB4BA] text-white font-mont font-medium px-3 py-2 rounded-full shadow hover:bg-[#3FB4BA] transition-all"
          >
            {button_text}
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          
        >
          <Image
            src={image}
            alt="Performance Marketing"
            width={500}
            height={350}
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
