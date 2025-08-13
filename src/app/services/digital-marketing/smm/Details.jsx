

"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import data from "../../../../../public/google/Group 249.svg";
import mobile from "../../../../../public/google/OBJECTS (2).svg";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const Details = () => {
  return (
    <section className="containers">
      <motion.div
        className="bg-white p-[5%] md:p-[3%] rounded-[20px] md:rounded-[30px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Intro text */}
        <motion.p
          className="font-mont text-[16px] md:text-[18px] font-semibold leading-[156%] pb-10"
          variants={textVariants}
          custom={0}
        >
          We are experienced professionals, who sketch out efficient Social
          Media Marketing strategy and Packages to help you.
        </motion.p>

        {/* Images */}
        <motion.div variants={textVariants} custom={0.2}>
          <Image src={data} alt="cover" className="hidden md:block" />
          <Image src={mobile} alt="cover" className="md:hidden" />
        </motion.div>

        {/* Mobile feature list */}
        <motion.div
          className="pt-5 block md:hidden space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "Boost your sales and leads",
            "Improve search engine rankings",
            "To actively involve with your wide range of customers",
            "Increase awareness about your brand",
            "Choose the best social media platform to cultivate an engaging customer base which fits the personality of your brand",
            "Identify key influencers",
            "Monitor engagements and backlinks you receive through campaigns (likes, shares)",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2"
              variants={textVariants}
              custom={0.3 + i * 0.1}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Outro text */}
        <motion.p
          className="font-mont text-[13px] md:text-[16px] font-normal leading-[156%] pt-7"
          variants={textVariants}
          custom={0.4}
        >
          We are one of the leading Best Social media marketing agency Kochi and
          also Google AdWords partner in kochi , as we have extended our Social
          Media Management sector to Calicut also. The key element to success in
          your business is, to realize the potential for growth in this platform
          by, utilizing the opportunities that is offered from our proficient
          team in Social Media Marketing.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Details;
