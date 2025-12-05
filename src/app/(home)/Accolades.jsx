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
        <div className="w-auto h-full flex justify-center items-center">
          <Image
            src={stack}
            alt="top-line"
            className="w-full object-center object-cover"
          />
        </div>
        <motion.div className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true ,amount: 0.3}}>
            
          <p className="text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-mont font-normal">
            Accolades, the creative hub for digital marketing, keenly takes care of your diverse internet
           marketing and branding solutions for your business. As a branding agency in Kochi and one of the
            top digital marketing company, we help you grow your business by driving traffic to your website 
            and generating leads. Our services include Google Ads, Meta Ads, Social Media Marketing,
             Content Marketing, Graphics Designing, Video Production, Web Development and SEO Services.
              We also undertake other conventional advertisements and offline event marketing too. 
            Regardless of the business’s size we can convert visitors into your potential customers.
             We operate globally while being centralized in Kochi, Kerala and regional offices at
              Mumbai, Bengaluru, Trivandrum and Calicut.
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
