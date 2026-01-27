


"use client";
import Image from "next/image";
import React from "react";
import brand from "../../../../public/creative/Rectangle 6996.svg";
import video from "../../../../public/creative/Rectangle 6996-2.svg";
import motionImg from "../../../../public/creative/Rectangle 6996-1.svg";
import arrow from "../../../../public/creative/Frame 11.svg";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Branding & Packaging",
    image: brand,
    link: "/services/creative/branding-packaging",
    desc: "Branding shapes how people see your business. It drives trust and long term loyalty. As a creative agency in Kochi, we build brand systems that work across digital and print for products."
  },
  {
    title: "Graphics & Motion",
    image: motionImg,
    link: "/services/creative/graphics-motion",
    desc: "Graphic design communicates ideas faster than words. As a leading creative agency in Kochi, we design visuals for digital campaigns, print, websites, social media, and presentations."
  },
  {
    title: "Video Production",
    image: video,
    link: "/services/creative/video-production",
    desc: "Video is the strongest form of content today. It builds emotion and trust within seconds. As a creative agency in Kochi, we plan, script, shoot, and produce videos optimized for digital platforms."
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

const WhatWeDo = () => {
  return (
    <section className="containers py-8 space-y-6">

      {/* HEADER */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="font-mont font-extrabold text-[28px] md:text-[36px] xl:text-[40px] text-[#3FB4BA]">
          What We Do
        </h2>
        <p className="font-mont text-[13px] md:text-[15px] leading-[160%] text-[#2B2A29]">
          Accolades Integrated offers a complete suite of creative solutions that support both digital and offline growth.
          As a top creative agency in Kochi, our goal is to help businesses communicate with strong visuals and stories that stay in mind.
        </p>
      </div>

      {/* CARDS GRID */}
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-6"> */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 
    ${index === 2 ? "md:col-span-2 md:max-w-[50%] md:mx-auto lg:col-span-1 lg:max-w-full" : ""}
  `}
          >

            <Link href={card.link} className="flex flex-col h-full">

              {/* IMAGE */}
              <div className="relative h-[200px] md:h-[240px] xl:h-[300px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-3">

                {/* TITLE + ARROW */}
                <div className="flex items-center justify-between">
                  <h3 className="font-mont text-[16px] md:text-[18px] xl:text-[20px] font-semibold text-[#007A8B]">
                    {card.title}
                  </h3>

                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="shrink-0"
                  >
                    <Image src={arrow} alt="icon" className="w-[26px]" />
                  </motion.div>
                </div>

                {/* DESCRIPTION */}
                <p className="font-mont text-[12px] md:text-[14px] leading-[160%] text-[#2B2A29]">
                  {card.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
