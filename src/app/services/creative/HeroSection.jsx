'use client';
import React from "react";
import side from "../../../../public/creative/OBJECTS (3).svg";
import Image from "next/image";
import AnimatedTitle from "@/component/AnimatedTitle";
import { motion } from "framer-motion";

const HeroSection = () => {

  const paragraphText1 = "Accolades Integrated is a creative agency based in Kochi that builds brands with strategy, design, and compelling visual stories. Our creative team blends design thinking with modern tools to help brands look sharper and sound clearer for faster growth. As one of the most trusted creative agency in Kochi, we deliver branding, packaging, motion graphics, and full scale video production. We design with purpose and create visuals that match your goals. From Kochi to Calicut, Trivandrum, Bengaluru, and Mumbai, we serve across India. Our core creative services include, Branding & Packaging, Graphics & Motion Graphics, and Video Production."

    const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

    const word = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="containers pt-[100px]">
      <AnimatedTitle text={"Creative"} />
      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2">
          <h1 className="text-[#3FB4BA] text-[24px] lg:text-[36px] font-bold leading-[100%]">
Creative Agency in Kochi for Visual Storytelling
          </h1>
          <h3 className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">

          </h3>
              <motion.p
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify"
              >
                {paragraphText1.split(" ").map((wordText, i) => (
                  <motion.span
                    key={i}
                    variants={word}
                    style={{ display: "inline-block", marginRight: "5px" }}
                  >
                    {wordText}
                  </motion.span>
                ))}
              </motion.p>
        </div>
        <div>
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
