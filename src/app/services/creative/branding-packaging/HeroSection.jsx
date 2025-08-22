"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import side from "../../../../../public/creative/branding/hero.webp";
import AnimatedTitle from "@/component/AnimatedTitle";
import Link from "next/link";

const HeroSection = () => {
  // Parent container for stagger (only for card + image, not subtitle)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.15, // smaller stagger
        delayChildren: 0.05,
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
        duration: 0.4,
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
        duration: 0.4,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier
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
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const subtitle =
    // "From logo to label, we craft cohesive brand identities that turn first impressions into lasting connections.";
    "From your logo to every label, color, and touchpoint, we design complete and cohesive brand identities that don’t just capture attention in the moment—but create meaningful first impressions that grow into long-term recognition, credibility, and emotional connection with your audience.";

  return (
    <section className="containers font-mont pt-[100px]">
      <AnimatedTitle text={"Branding & Packaging"} />

      <motion.div
        className="flex flex-col-reverse md:grid md:grid-cols-2 py-[3%] items-center gap-5 2xl:gap-[10%]"
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
            className="text-[#3FB4BA] text-[24px] lg:text-[32px] font-extrabold font-mont leading-[100%]"
            variants={titleVariants}
          >
            Build a Brand That Commands Attention
          </motion.h3>

          {/* Subtitle (independent animation, not staggered word by word) */}
          <motion.div
            initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-[16px] lg:text-[18px] text-[#333333] leading-[156%] font-mont font-normal">
              {subtitle}
            </h3>
          </motion.div>

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
