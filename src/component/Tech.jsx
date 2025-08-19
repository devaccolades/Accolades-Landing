"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Tech({ tools, title, para }) {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const paraVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className="lg:pt-12 md:pt-10  pb-32 2xl:pb-48"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="containers px-4 bg-white p-6 md:p-10 rounded-[30px] shadow">
        {/* Animated Title */}
        <motion.h2
          className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] text-[#3FB4BA] mb-6"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Animated Tools Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-2">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-poppins font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-[#0C0902]">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Paragraph (ONE block, not word by word) */}
        <motion.p
          className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]"
          variants={paraVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {para}
        </motion.p>
      </div>
    </section>
  );
}
