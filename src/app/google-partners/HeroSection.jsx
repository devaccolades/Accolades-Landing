"use client";
import Image from "next/image";
import React from "react";

// ✅ Replace with your actual image paths
// import robotHands from "@/public/google/robot-hands.png";
import googleLogo from "../../../public/google-partner/g-logo.svg";
import hero from "../../../public/google-partner/hero-gp.png";

const features = [
  "Google-certified advertising experts",
  "Direct access to Google support",
  "Early access to new features",
  "Proven track record of success",
];

const HeroSection = () => {
  return (
    <section className="container mt-20 py-14">
      <div className="   text-center ">

        {/* ✅ GOOGLE PARTNERS BADGE */}
        <div className="flex justify-center mb-4">
          <Image
            src={googleLogo}
            alt="Google Partner"
            width={160}
            height={50}
            className="object-contain"
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
            width={650}
            height={350}
            className="object-contain w-full"
            priority
          />
        </div>

        {/* ✅ DESCRIPTION */}
        <p className="font-mont text-[12px] sm:text-[14px] md:text-[15px] leading-[160%] text-gray-700 max-w-4xl mx-auto mt-0">
          Accolades Integrated is a certified Google Partner agency based in Kochi, Kerala. We deliver expert
          Google Ads management with proven results and exclusive access to Google’s latest tools and support.
        </p>

        {/* ✅ FEATURES / BADGES */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {features.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 text-[11px] sm:text-[12px] font-mont rounded-full bg-black text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
