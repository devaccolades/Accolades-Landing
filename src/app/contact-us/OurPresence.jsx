"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function OurPresence() {
  const locations = [
    "Kochi (HQ)",
    "Calicut",
    "Trivandrum",
    "Bengaluru",
    "Mumbai",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.section
        className="relative containers mx-auto py-2 md:py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-center font-mont font-bold text-[36px] md:text-[50px] lg:text-[64px] leading-[96%] text-[#3FB4BA] mb-4"
          >
            Our Presence
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center font-mont text-gray-600 text-[13px] mdtext-[16px] lg:text-[18px] mx-auto mb-4 md:mb-10"
          >
            We operate globally and have strong local presence across India as a
            leading digital marketing company. We’re strategically positioned to
            meet diverse client needs worldwide with headquarters at Kochi,
            branches at Trivandrum, Calicut, Mumbai, and Bengaluru.
          </motion.p>
        </motion.div>
      </motion.section>

      <section className="relative containers mx-auto">
        <div className="py-6">
          {/* Desktop view */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="hidden md:flex flex-wrap justify-between gap-4 text-[18px] md:text-[24px]"
          >
            {locations.map((loc) => (
              <motion.button
                key={loc}
                className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300"
                variants={itemVariants}
              >
                {loc}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile swiper */}
          <div className="block md:hidden">
            <Swiper spaceBetween={12} slidesPerView={1.6}>
              {locations.map((loc) => (
                <SwiperSlide key={loc}>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-full bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300"
                  >
                    {loc}
                  </motion.button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
