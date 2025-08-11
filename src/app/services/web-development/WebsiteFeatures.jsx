


"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import img from "../../../../public/web/respo.png";

const features = [
  {
    title: "RESPONSIVE WEBSITES",
    content:
      "A responsive, device-optimized website builds trust and keeps customers engaged. It ensures smooth functionality, enhancing credibility and user experience. At Accolades Integrated, we simplify creating responsive websites that adapt seamlessly across devices. Let us help you deliver a flawless online experience and retain loyal customers with ease.",
  },
  {
    title: "OPTIMIZED FOR SEO",
    content:
      "Our SEO-optimized website design and content help businesses achieve top rankings and convert visitors into customers. With a data-driven approach and years of expertise, we craft websites that drive traffic and deliver measurable results. Let Accolades Integrated guide your business to success with powerful SEO strategies that boost visibility and growth.",
  },
  {
    title: "HOSTING AND DOMAIN",
    content:
      "A stunning website design is only effective if backed by reliable hosting and a strong domain. Slow loading times, 404 errors, or frequent downtime can drive customers away. At Accolades Integrated, we provide secure, high-performance hosting services that ensure your website is always up and running smoothly. With optimized solutions, we help your digital presence stay accessible, professional, and profitable. Let us support your online success.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WebsiteFeatures() {
  return (
    <div className="containers py-10">
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block bg-white p-4 rounded-2xl w-full">
        <motion.div
          className="bg-cover bg-no-repeat bg-center rounded-2xl py-12 px-4 md:px-10"
          style={{ backgroundImage: "url(/web/respo.png)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center order-1"></div>

            <motion.div
              className="flex flex-col gap-6 items-end order-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#e9f5fb] p-5 rounded-lg shadow max-w-md"
                  variants={cardVariants}
                >
                  <h3 className="text-[16px] font-mont font-bold text-[#1eb2a6] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] font-mont text-gray-700">
                    {feature.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden rounded-2xl max-w-7xl mx-auto">
        <motion.div
          className="w-full h-50 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image src={img} alt="Responsive Website" fill className="object-fit" />
        </motion.div>

        <motion.div
          className="px-2 py-6 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#e9f5fb] p-2 rounded-lg shadow"
              variants={cardVariants}
            >
              <h3 className="text-[16px] font-mont font-bold text-[#1eb2a6] mb-2">
                {feature.title}
              </h3>
              <p className="text-[12px] font-mont text-gray-700">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
