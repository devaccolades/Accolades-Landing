"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import one from "../../../../../public/google/Google-Ads (1).svg";
import two from "../../../../../public/google/Display-Ads.svg";
import three from "../../../../../public/google/Video-Ads.svg";
import four from "../../../../../public/google/Mobile-In-App-Ads.svg";
import five from "../../../../../public/google/Product-Listing-Ads.svg";
import six from "../../../../../public/google/Remarketing-Ad.svg";

const adTypes = [
  {
    icon: one,
    title: "Google Search Ads",
    description:
      "It’s the prevalent method of strategically placing online advertisements...",
  },
  {
    icon: two,
    title: "Display Ads",
    description:
      "They invariably refer to the creative process of properly advertising...",
  },
  {
    icon: three,
    title: "Video Ads",
    description:
      "It refers to advertising that occurs before, during and/or after a video...",
  },
  {
    icon: four,
    title: "Mobile In - App Ads",
    description:
      "An approach that is helpful for businesses, with Mobile App...",
  },
  {
    icon: five,
    title: "Product Listing Ads",
    description:
      "If you are a retailer, this campaign type would make more sense...",
  },
  {
    icon: six,
    title: "Remarketing Ads",
    description:
      "Remarketing allows reconnecting with users who previously interacted...",
  },
];

const Cards = () => {
  return (
    <section
      className="font-mont py-5 pb-40"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <section className="containers">
        <h2 className="text-center text-[24px] md:text-[40px] font-extrabold text-[#3FB4BA] pb-5">
          Types Of Google Ads
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {adTypes.map((ad, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#e4e4e4]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center">
                <Image
                  src={ad.icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="h-[80px] w-auto pb-3 mb-3"
                  priority={false}
                  loading="lazy"
                />
              </div>
              <h2 className="text-[#3FB4BA] text-xl font-semibold text-center mb-2 mt-1">
                {ad.title}
              </h2>
              <p className="text-center text-gray-700 text-sm">
                {ad.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
