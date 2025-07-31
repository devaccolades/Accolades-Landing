"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const approaches = [
  {
    id: 1,
    title: "Result-Focused Strategy",
    desc: "Campaigns are built with a performance-first mindset.",
    icon: "/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast Launch Cycles",
    desc: "Campaigns live in as little as 3-5 business days.",
    icon: "/services/icon2.png",
  },
  {
    id: 3,
    title: "Creative + Technical Edge",
    desc: "We write, design, track, and optimize in-house.",
    icon: "/services/icon3.png",
  },
  {
    id: 4,
    title: "Transparent Reporting",
    desc: "Live dashboards and weekly summaries. No fluff, just numbers.",
    icon: "/services/icon4.png",
  },
];

const CreativeApproach = () => {
  return (
    <section className="w-full bg-white p-10 rounded-[30px]  containers">
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-teal-600 mb-5 text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Creative Approach
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
        {approaches.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-start gap-4 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={50}
              className="object-contain"
            />
            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-teal-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativeApproach;
