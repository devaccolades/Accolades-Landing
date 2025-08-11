"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import side from "../../../../../public/creative/branding/hero.webp";
import AnimatedTitle from "@/component/AnimatedTitle";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  const subtitle =
    "From logo to label, we craft cohesive brand identities that turn first impressions into lasting connections.";

  return (
    <section className="containers font-mont pt-[100px]">
      <AnimatedTitle text={"Branding & Packaging"} />

      <motion.div
        className="flex flex-col-reverse md:grid md:grid-cols-[50%_1fr] py-[3%] items-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {/* Content Card */}
        <motion.div
          className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] space-y-3"
          variants={cardVariants}
        >
          {/* Main Title */}
          <motion.h3
            className="text-[#3FB4BA] text-[24px] lg:text-[32px] font-extrabold leading-[100%]"
            variants={textVariants}
          >
            Build a Brand That Commands Attention
          </motion.h3>

          {/* Subtitle with word-by-word animation */}
          <motion.h3
            className="text-[16px] lg:text-[20px] text-[#333333] leading-[110%] font-normal flex flex-wrap gap-[3px]"
            variants={containerVariants}
          >
            {subtitle.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h3>

          {/* Button */}
          <Link href="/contact-us">
            <motion.button
              className="w-fit bg-[#3FB4BA] px-3 py-2 rounded-full text-[12px] md:text-[14px] text-white font-medium"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(63, 180, 186, 0.3)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a creative proposal
            </motion.button>
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          className="h-full w-auto rounded-[30px]"
          variants={imageVariants}
        >
          <Image
            src={side}
            alt="side-image"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
