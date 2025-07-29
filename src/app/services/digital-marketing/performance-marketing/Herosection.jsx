"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Herosection = ({ main_title, title, subtitle, button_text, image }) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FCFF] to-white containers py-10">
      {/* Title with White Background */}
      <motion.div
        className="bg-white rounded-2xl px-6 py-3 mx-auto w-full shadow-md mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#3FB4BA]">
          {main_title}
        </h2>
      </motion.div>

      {/* Content Box */}
      <div className=" flex flex-col-reverse md:flex-row items-center gap-8 overflow-hidden ">
        {/* Text Section */}
        <motion.div
          className="flex-1 p-4 sm:p-6 md:p-10 bg-white rounded-3xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-[#3FB4BA] mb-4">
            {title}
          </h3>
          <p className="text-sm  md:text-lg text-gray-700 mb-6">{subtitle}</p>
          <button className="text-[12px]  md:text-[14px] bg-[#3FB4BA] text-white font-medium px-3 py-2 rounded-full shadow hover:bg-[#3FB4BA] transition-all">
            {button_text}
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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
