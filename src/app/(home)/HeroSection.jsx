"use client";
import Button from "@/component/Button";
import Image from "next/image";
import React from "react";
import { BASE_URL } from "../Server";
import { motion } from "framer-motion";

function HeroSection({ data }) {
  return (
    <section className="bg-white text-black h-[90vh] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-2 md:gap-4"
      >
        {data?.googleImage?.url && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image
              src={BASE_URL + data.googleImage.url}
              height={100}
              width={100}
              className="h-[56px] w-[61px]"
              alt="google partner"
            />
          </motion.div>
        )}

        {data?.HeroTitle && (
          <motion.h1
            className="text-[24px] leading-[100%] max-w-60 md:text-[40px] md:leading-[40px] md:max-w-sm lg:text-[64px] lg:leading-[64px] text-center lg:max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {data.HeroTitle}
          </motion.h1>
        )}

        {data?.subTitle && (
          <motion.p
            className="text-[12px] max-w-52 md:max-w-xs lg:text-[14px] font-medium  lg:max-w-md text-center text-[#484848]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {data.subTitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            content={"View Our Work"}
            className="text-[12px] md:text-[13px] lg:text-[14px] px-[7px] py-[5px] md:px-[13px] md:py-[7px] xl:py-[13] xl:px-[17px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
