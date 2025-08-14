"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import adobeE from "../../../../public/creative/Adobe_After_Effects_CC_icon.svg 1.webp";
import adobeC from "../../../../public/creative/Adobe_Creative_Cloud_rainbow_icon.svg 1.webp";
import adobeP from "../../../../public/creative/Adobe_Premiere_Pro_CC_icon.svg 1.webp";
import canva from "../../../../public/creative/Canva-New-Logo-1440x810 1.webp";
import illus from "../../../../public/creative/c3e0457062b464bcdaa727faec5642528bcb2fb7.webp";
import Photoshop from "../../../../public/graphics-motion/4.svg";

const tools = [
  { name: "After Effects", icon: adobeE },
  { name: "Adobe Creative Cloud", icon: adobeC },
  { name: "Canva Pro", icon: canva },
  { name: "Photoshop", icon: Photoshop },
  { name: "Adobe Illustrator", icon: illus },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const paragraph = `Our team leverages industry-leading tools to bring creativity and precision to every project. From motion graphics with After Effects to design and layout with Illustrator and Canva Pro, we ensure every visual asset meets the highest standards. These platforms empower us to craft compelling content, streamline collaboration, and deliver impactful results across digital and print media.`;

const Tools = () => {
  return (
    <main style={{ background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)" }}>
      <section className="containers font-mont pb-32">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0199A4] mb-8">
            Tools & Platforms We Use
          </h2>

          {/* Animated Logos */}
          <motion.div
            className="flex flex-wrap justify-center items-start gap-8 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
                <Image src={tool.icon} alt={tool.name} width={64} height={64} className="mb-2" />
                <p className="font-semibold text-xs md:text-sm">{tool.name}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Paragraph Word-by-Word */}
          <motion.p
            className="text-gray-700 text-sm max-w-3xl mx-auto flex flex-wrap gap-[4px] justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {paragraph.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default Tools;
