"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import socialgiff from "../../../public/home/Accolades-banner-elements.gif";
import topline from "../../../public/home/top-line.svg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Creatively";

  useEffect(() => {
    let currentIndex = 0;
    let isForward = true;

    const animationInterval = setInterval(() => {
      if (isForward) {
        // Typing forward
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          // Pause at the end before reversing
          setTimeout(() => {
            isForward = false;
            currentIndex = fullText.length;
          }, 1000); // 1 second pause
        }
      } else {
        // Typing backward (erasing)
        if (currentIndex >= 0) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex--;
        } else {
          // Pause at the beginning before typing again
          setTimeout(() => {
            isForward = true;
            currentIndex = 0;
          }, 500); // 0.5 second pause
        }
      }
    }, 150); // Adjust speed here (lower = faster)

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
      <div className="containers flex flex-col-reverse md:flex-row justify-between gap-6 pt-8 md:pt-14 items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex justify-start md:justify-start">
          <div className="text-left">
            <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight">
              We are
            </h3>
            <h3 className="text-[#3FB4BA] text-[60px] xl:text-[76px] font-semibold leading-tight relative">
              <span>{displayText}</span>
              <span className="animate-pulse text-[#3FB4BA]">|</span>
            </h3>
            <h3 className="font-bold text-[72px] xl:text-[86px] leading-tight">
              Different
            </h3>
            <h3 className="text-[20px] md:text-[28px] xl:text-[36px] font-normal leading-tight mt-2">
              We take your business to new heights
            </h3>
          </div>
        </div>
        {/* Animated Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={socialgiff}
            alt="Social"
            className="w-[80%] ml-auto h-auto md:h-[400px] xl:h-[500px] md:w-auto"
          />
        </div>
      </div>
      {/* Bottom Topline */}
      <div className="containers py-10  md:py-24">
        <Image src={topline} alt="Decorative Line" className="w-full h-auto" />
      </div>
    </>
  );
};

export default HeroSection;
