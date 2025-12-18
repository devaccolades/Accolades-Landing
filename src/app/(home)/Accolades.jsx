"use client";
import { motion } from "framer-motion"
import React from "react";
import Image from "next/image";
import stack from "../../../public/home/1133de05fd2a190083088cb835978a45d95b9e4e.webp";
import bottom from "../../../public/home/bottom-line.webp";

const Accolades = () => {
  return (
    <>
      {/* <section className="containers flex flex-col md:grid md:grid-cols-2 justify-center items-center  gap-10"> */}
      <section className="containers flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-10 pt-5">
        <div className="flex justify-center items-center">
          <Image
            src={stack}
            alt="top-line"
            className="
                w-[240px] h-[200px]
                md:w-[420px] md:h-[270px]
                lg:w-[500px] lg:h-[360px]
                object-contain
              "
          />
        </div>

        <motion.div className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}>

          <p className="text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-mont font-normal">
            Accolades is a full-service branding agency in Kochi, delivering strategic digital marketing and branding
            solutions tailored to business growth. As one of the leading digital marketing companies in Kochi, we help brands
            increase visibility, attract qualified traffic, and generate consistent leads. Our expertise spans SEO, Google Ads,
            Meta Ads, social media marketing, content creation, video production, web development, and creative design.
            From startups to established enterprises, we build scalable strategies that convert visitors into customers.
            Headquartered in Kochi, Kerala, we serve brands across India with offices in Mumbai, Bengaluru, Trivandrum, and Calicut.
          </p>
        </motion.div>
      </section>
      <Image
        src={bottom}
        alt="bottom-line"
        className="containers py-10 md:py-20 xl:py-28"
      />
    </>
  );
};

export default Accolades;
