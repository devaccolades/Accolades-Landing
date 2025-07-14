"use client";
import Image from "next/image";
import React from "react";
import ScrollingRow from "./ScrollingRow";
import { motion } from "framer-motion";

function WhyBrands({ data }) {
  return (
    <section className="containers py-4 grid">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* TEXT SECTION */}
        <div className="row-span-1 px-4">
          {/* Top strip with arrows */}
          <motion.div
            className="flex items-center mt-[100px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={"/images/sidebar.png"}
              alt="sidebar"
              height={1000}
              width={1000}
              className="w-[63px] h-full"
            />
            <p className="text-[14px] font-medium px-4"> Why Accolades </p>
            <Image
              src={"/images/sidebar.png"}
              alt="sidebar"
              height={1000}
              width={1000}
              className="rotate-180 w-[63px] h-full"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.p
            className="font-zen text-[40px] font-bold leading-[40px] mt-[10px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why Brands <br />
            Choose <span className="text-[#0C7379]">Accolades</span>
          </motion.p>

          {/* Paragraphs with staggered fade-in */}
          <motion.div
            className="flex flex-col gap-[16px] mt-[15px]"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              `At Accolades Integrated, we don’t just produce videos—we create powerful brand assets that speak, sell, and scale. With a unique blend of cinematic storytelling and business-driven strategy, every project we take on is designed to leave a lasting impact.`,
              `From scripting to shooting, voiceovers to motion graphics, we offer complete end-to-end video production under one roof. Whether you're launching a new product, building credibility, or engaging your audience on social media, our videos are tailored to meet real business goals—not just look good.`,
              `We’ve worked with startups, corporates, and event giants across industries—earning their trust by consistently delivering videos that not only impress visually but also convert viewers into customers.`,
            ].map((text, idx) => (
              <motion.p
                key={idx}
                viewport={{ once: true, amount: 0.3 }}
                className={`text-[14px] leading-[156%] font-medium ${
                  idx === 0 ? "text-[#747474]" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* SCROLLING VIDEO SECTION */}
        <div className="row-span-1 h-[600px] overflow-hidden md:-mt-[10px] relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
          <div className="flex gap-4">
            <ScrollingRow direction="up" video={data} />
            <ScrollingRow direction="down" video={data} />
            <div className="md:hidden">
              <ScrollingRow direction="up" video={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBrands;
