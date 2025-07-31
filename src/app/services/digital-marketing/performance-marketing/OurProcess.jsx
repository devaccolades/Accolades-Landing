"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const OurProcess = () => {
  return (
    <section className="w-full pt-6 lg:py-12 containers text-center ">
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-teal-600 "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Process
      </motion.h2>

      {/* Image */}
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/services/sun.svg"
          alt="Our Process"
          width={800}
          height={450}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
};

export default OurProcess;
