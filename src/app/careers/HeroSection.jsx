"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import box from "../../../public/careers/Abox.png";
import brain from "../../../public/careers/Abrain.png";
import hand from "../../../public/careers/Ahand.png";

function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0.5 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  // Card data for cleaner mapping
  const cardData = [
    {
      icon: box,
      title: "Impactful Projects",
      description: "You'll have the opportunity to work on exciting and impactful projects.",
    },
    {
      icon: hand,
      title: "Collaborative Environment",
      description: "Work alongside talented professionals in a supportive team environment.",
    },
    {
      icon: brain,
      title: "Continuous Learning",
      description: "Grow your skills with access to latest technologies and learning opportunities.",
    },
  ];

  return (
    <section className="pt-8 md:pt-14">
      <motion.div
        className="w-[90%] md:w-[80%] rounded-2xl bg-white/60 mx-auto mt-[60px] relative z-10 p-[15px] md:p-[40px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-[1464px] mx-auto">
          <motion.div 
            className="flex flex-col justify-center items-center text-center"
            variants={textVariants}
          >
            <motion.h1 
              className="text-center font-mont font-bold text-[36px] md:text-[50px] lg:text-[64px] text-[#3FB4BA] leading-[100%]"
              variants={textVariants}
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-[14px] md:text-[16px] line-height-[150%] font-normal font-mont mt-[30px] max-w-6xl text-center"
              variants={textVariants}
            >
              Discover the reason why working at Accolades is more than a job.
              It is an opportunity to be part of a dynamic team, unleash your
              potential, and contribute to shaping the future of digital
              innovation
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center lg:justify-between items-center gap-4 mt-[60px]"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-2xl px-[15px] py-[20px] md:p-[30px] flex flex-col items-center justify-center gap-[10px] cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(60, 195, 195, 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex justify-center items-center w-[100px] h-[100px] bg-[#3CC3C3]/30 rounded-full"
                  variants={iconContainerVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="flex justify-center items-center w-[80px] h-[80px] bg-[#3CC3C3] rounded-full"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="flex justify-center items-center bg-[linear-gradient(360deg,rgba(42,193,193,1)_0%,rgba(2,113,113,1)_100%)] w-[60px] h-[60px] rounded-full"
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.8, ease: "easeInOut" },
                      }}
                    >
                      <motion.div variants={iconVariants}>
                        <Image
                          src={card.icon}
                          alt={card.title}
                          className="h-[30px] w-[30px]"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.h2 
                  className="text-[14px] md:text-[18px] font-mont font-semibold mt-[10px] text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  {card.title}
                </motion.h2>
                <motion.p 
                  className="text-[14px] md:text-[16px] font-mont text-center max-w-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;