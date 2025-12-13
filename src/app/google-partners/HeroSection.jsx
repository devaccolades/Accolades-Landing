"use client";
import Image from "next/image";
import React from "react";

// ✅ Replace with your actual image paths
// import robotHands from "@/public/google/robot-hands.png";
import googleLogo from "../../../public/google-partner/g-logo.svg";
import hero from "../../../public/google-partner/hg.svg";
import { ArrowUpRight } from "lucide-react";

const features = [
  "Google-certified advertising experts",
  "Direct access to Google support",
  "Early access to new features",
  "Proven track record of success",
];

const HeroSection = () => {
  return (
    <section className="py-4 md:py-10 lg:py-14 bg-[#F5F5F5]">
      <div className="pt-2 md:pt-10 lg:pt-20 containers  text-center font-mont ">

        {/* ✅ GOOGLE PARTNERS BADGE */}
        <div className="flex justify-center mb-1 md:mb-4">
          <Image
            src={googleLogo}
            alt="Google Partner"
            width={160}
            height={50}
            className="object-contain w-[80px] md:w-[160px]"
          />
        </div>

        {/* ✅ HEADING */}
        <h2 className="font-mont font-extrabold text-[22px] sm:text-[28px] md:text-[36px] text-[#007A8B] leading-tight">
          GOOGLE PARTNERS KOCHI
        </h2>

        <p className="font-mont font-extrabold text-[18px] sm:text-[24px] md:text-[32px] text-black mt-1">
          MAXIMIZE YOUR BRAND'S GROWTH
        </p>

        {/* ✅ MAIN VISUAL */}
        <div className="relative flex items-center justify-center mt-0">
          <Image
            src={hero}
            alt="Google Growth Visual"
            width={600}
            height={350}
            className="object-contain "
            priority
          />
        </div>

        {/* ✅ DESCRIPTION */}
        <p className="font-mont text-[12px] sm:text-[14px] md:text-[15px] leading-[160%] text-gray-700 max-w-4xl mx-auto mt-0">
          Accolades Integrated is a certified Google Partner agency based in Kochi, Kerala. We deliver expert
          Google Ads management with proven results and exclusive access to Google’s latest tools and support.
        </p>

        {/* ✅ FEATURES / BADGES */}
        {/* <div className="flex flex-wrap justify-center gap-3 mt-6"> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3 justify-center mt-6">
          {features.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-0 md:gap-2 px-2 md:px-5 py-2 text-[11px] sm:text-[12px] font-mont rounded-full bg-black text-white"
            >
              <ArrowUpRight size={14} className="shrink-0" />
              <span className="leading-none">{item}</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
