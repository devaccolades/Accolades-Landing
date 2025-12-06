"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "🎯",
    title: "Strong Market Insight",
    desc: "We know how customers in Kerala think, engage, and buy. This helps us design creative assets that feel relevant and local.",
  },
  {
    emoji: "🧠",
    title: "Multi Sector Expertise",
    desc: "We have worked with brands across Real estate, Retail, Healthcare, Education, and Corporate sectors. Our work blends creativity with business goals.",
  },
  {
    emoji: "🚀",
    title: "Transparent Collaboration",
    desc: "We involve you at every step. You review early drafts, share input, and guide the final output. This ensures every design matches your expectations.",
  },
  {
    emoji: "📈",
    title: "Creative Partnership",
    desc: "We support brands even after delivery with updates, new design assets, campaign creativity, and brand expansion.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.1, 
    rotateY: 90,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const WhyChoose = () => {
  return (
    <section className="containers py-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-mont font-bold text-[#0199A4] mb-5">
        Why Choose Accolades Integrated as Your Creative Agency in Kochi
      </h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white shadow-md rounded-2xl p-6 text-center relative overflow-hidden"
          >
            {/* Particle Burst Background */}
            <motion.div 
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
              transition={{ duration: 1.2, delay: idx * 0.25 }}
              style={{
                background: "radial-gradient(circle, rgba(3, 192, 202, 0.3), transparent 70%)"
              }}
            />
            <motion.div variants={textVariants} className="font-mont text-3xl mb-4 relative z-10">
              {feature.emoji}
            </motion.div>
            <motion.h3 variants={textVariants} className="font-mont font-semibold text-lg text-[#0199A4] mb-2 leading-[110%] relative z-10">
              {feature.title}
            </motion.h3>
            <motion.p variants={textVariants} className="text-gray-700 font-mont text-sm relative z-10">
              {feature.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChoose;
