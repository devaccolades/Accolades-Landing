

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OfferAndFeatures() {
  const offers = [
    {
      icon: "🎨",
      title: "Theme Customization",
      desc: "Modify any theme to fit your brand’s tone & layout",
    },
    {
      icon: "📋",
      title: "Landing Pages",
      desc: "High-converting sales pages for campaigns",
    },
    {
      icon: "✍️",
      title: "Blog Setup",
      desc: "Author pages, categories, SEO-friendly blog structure",
    },
  ];

  const features = [
    {
      icon: "🔍",
      title: "SEO-Ready",
      desc: "Structured markup, clean URLs, optimized tags",
    },
    {
      icon: "⚡",
      title: "Speed Optimized",
      desc: "Caching, image compression, CDN setup",
    },
    {
      icon: "👨‍💻",
      title: "Easy to Manage",
      desc: "Custom admin dashboard with drag & drop editor",
    },
  ];

  return (
    <div className="containers py-10">
      <div className="text-center">
        {/* We Offer */}
        <motion.h2
          className="text-[20px] md:text-[30px] lg:text-[40px] font-mont font-bold text-[#1eb2a6] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We Offer
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {offers.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-3 lg:p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-md font-bold font-mont text-[#1eb2a6] mb-2">
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-sm font-mont text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Highlight */}
        <motion.h2
          className="text-[20px] md:text-[30px] lg:text-[40px] font-mont font-bold text-[#1eb2a6] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Features Highlight
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 lg:p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-md font-mont font-bold text-[#1eb2a6] mb-2">
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-sm font-mont text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
