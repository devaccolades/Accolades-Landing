"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// const services = [
//   {
//     id: 1,
//     name: "Google Ads",
//     image: "/services/gads.png",
//   },
//   {
//     id: 2,
//     name: "Meta Ads",
//     image: "/services/meta.png",
//   },
//   {
//     id: 3,
//     name: "LinkedIn Ads",
//     image: "/services/lin.png",
//   },
//   {
//     id: 4,
//     name: "YouTube Ads",
//     image: "/services/yt.png",
//   },
// ];

const WhatWeOffer = ({ title, services, desc }) => {
  return (
    <section className="w-full  py-12 containers">
      <div className="bg-white rounded-3xl shadow-md p-6 md:p-10">
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-teal-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform"
            >
              <Image
                src={service.image}
                alt={service.name}
                width={80}
                height={80}
                className="object-contain h-[60px] md:h-[80px]"
              />
              <p className="font-semibold text-sm md:text-xl">{service.name}</p>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {desc}
        </motion.p>
      </div>
    </section>
  );
};

export default WhatWeOffer;
