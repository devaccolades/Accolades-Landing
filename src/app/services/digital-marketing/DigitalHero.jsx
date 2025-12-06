
"use client";

import React from "react";
import side from "../../../../public/digital/digi.jpg";
import Image from "next/image";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import { motion } from "framer-motion";

const DigitalHero = () => {
  return (
    <section className="containers pt-[100px]">
      <AnimatedPopTitle text={"Digital  Marketing"} />

      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        {/* Text Section */}
        <motion.div
          className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[40px] font-bold leading-[120%]">
            Digital Marketing Agency in Kochi for Strategy & Growth
          </h3>

          <p className="text-[13px] md:text-[16px] leading-[156%]">
            Accolades Integrated is an end to end Digital Marketing Agency in Kochi. 
            Our services cover performance marketing, search engine marketing, SEO, 
            social media marketing, and content marketing. We plan campaigns, run ads, 
            and build systems that drive leads and sales. Our team blends local insight 
            with modern ad tech to help brands grow. We focus on measurable growth. 
            If you seek a reliable Digital Marketing Agency in Kochi, we pair strategy
             with action. Our work aims to scale wins, and build long term value.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={side}
            alt="side-image"
            className="w-full h-auto"
            priority={false}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalHero;
