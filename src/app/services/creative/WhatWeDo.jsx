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
    link: "/services/creative/branding-packaging"
  },
  {
    title: "Graphics & Motion",
    image: motionImg,
    link: "/services/creative/graphics-motion"
  },
  {
    title: "Video Production",
    image: video,
    link: "/services/creative/video-production"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  }),
};

const WhatWeDo = () => {
  return (
    <section className="containers">
      <h3 className="text-center font-mont font-extrabold text-[40px] text-[#3FB4BA]">
        What We Do
      </h3>
      <div className="flex flex-col md:flex-row justify-between gap-5 xl:gap-10 pt-3">
        {cards.map((card, index) => (
          <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={index}
            className="group w-full h-auto rounded-[20px] bg-white shadow-lg overflow-hidden flex flex-col justify-between p-2 transform-gpu transition-transform duration-500 hover:scale-[1.03] hover:-rotate-x-2 hover:rotate-y-2 hover:shadow-2xl"
            style={{ perspective: "1000px" }}
          >
            <Link href={card.link} className="flex flex-col h-full">
              <div className="relative overflow-hidden rounded-[12px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="object-top object-cover h-[200px] lg:h-[300px] 2xl:h-[450px] w-full rounded-[12px] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="py-2 flex justify-between items-center">
                <h3 className="text-[16px] xl:text-[24px] leading-[100%] font-mont font-medium text-[#007A8B]">
                  {card.title}
                </h3>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image src={arrow} alt="icon" className="w-[32px] h-auto" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
