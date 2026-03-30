"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Img9 from "../../../../public/blog/heroImg.png";
import { BASE_URL } from "@/app/Server";

export default function HeroSection({ data }) {
  // console.log('data', data)
  return (
    <>
      <motion.div
        className="bg-gradient-to-br from-white to-[#e6f4f9] pt-12 mt-20 "
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}   // ✅ animate on page load
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="containers w-full h-full bg-white p-3 rounded-2xl">
          <Image
            // src={BASE_URL + data?.innerImage?.url}
            src={
    data?.image
      ? data.image.startsWith("http")
        ? data.image
        : BASE_URL + data.image
      : "/fallback.jpg"
  }
            height={100}
            width={100}
            alt="hero-img"
            className="w-full h-[300px] md:h-[600px] rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </>
  );
}
