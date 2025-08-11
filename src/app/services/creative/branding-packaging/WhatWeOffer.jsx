'use client';
import React from "react";
import { motion } from "framer-motion";
import arrow from "../../../../../public/creative/Frame 11.svg";
import brand1 from "../../../../../public/creative/branding/Rectangle 6996-1.svg";
import brand2 from "../../../../../public/creative/branding/Rectangle 6996-2.svg";
import brand3 from "../../../../../public/creative/branding/Rectangle 6996-3.svg";
import brand4 from "../../../../../public/creative/branding/Rectangle 6996.svg";
import Image from "next/image";

const cards = [
  {
    title: "Logo Design",
    image: brand1,
  },
  {
    title: "Packaging Design",
    image: brand2,
  },
  {
    title: "Brand Guidelines",
    image: brand3,
  },
  {
    title: "Rebranding",
    image: brand4,
  },
];

const WhatWeOffer = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Individual card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Content animation (title + arrow)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Arrow icon animation
  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="containers py-8 lg:py-16">
      {/* Animated Title */}
      <motion.h3 
        className="text-center font-mont font-extrabold text-[24px] md:text-[32px] xl:text-[40px] text-[#3FB4BA]"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        What We Offer
      </motion.h3>

      {/* Animated Cards Container */}
      <motion.div 
        className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 xl:gap-5 pt-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="w-full h-auto rounded-[20px] bg-white shadow-lg overflow-hidden flex flex-col justify-between p-2"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated Image */}
            <motion.div
              variants={imageVariants}
              className="overflow-hidden rounded-[12px]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
                className="object-top object-cover h-[200px] xl:h-[300px] 2xl:h-[450px] w-full rounded-[12px]"
              />
            </motion.div>

            {/* Animated Content */}
            <motion.div 
              className="py-2 flex justify-between items-center"
              variants={contentVariants}
            >
              <h3 className="text-[16px] xl:text-[24px] leading-[100%] font-medium text-[#007A8B]">
                {card.title}
              </h3>
              <motion.div variants={arrowVariants}>
                <Image src={arrow} alt="icon" className="w-[32px] h-auto" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;