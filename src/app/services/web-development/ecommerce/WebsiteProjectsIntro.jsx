"use client";

import { motion } from "framer-motion";
import React from "react";

const WebsiteProjectsIntro = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FCFF] to-white py-12 containers">
      <motion.div
        className="bg-white rounded-2xl shadow-md p-6 md:p-10  mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mb-4">
          Website Projects
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Eget porttitor elementum hendrerit
          a diam suspendisse tellus. Consequat enim auctor dignissim mattis vitae
          tincidunt. Facilisis mi neque tellus viverra ac mauris adipiscing nulla.
          Praesent purus ornare non eros et.
        </p>
      </motion.div>
    </section>
  );
};

export default WebsiteProjectsIntro;
