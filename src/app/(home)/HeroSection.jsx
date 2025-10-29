"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import socialgiff from "../../../public/home/Accolades-banner-elements.gif";
import topline from "../../../public/home/top-line.webp";
import LightRays from "@/components/LightRays";

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
      <div className="relative h-[110vh] -mt-21">
        <LightRays
          raysOrigin="top-center"
          raysColor="#34c3cb"
          raysSpeed={1.5}
          lightSpread={1.3}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          opacity={0.02}
          className="absolute inset-0 opacity-60"
        />

        <div className="absolute inset-0 h-screen containers flex flex-col pt-[200px]">
          <div className="relative z-20 text-center flex flex-col justify-center items-center ">
            <div className="bg-black w-fit px-[20px] py-[10px] rounded-full">
              <p className="text-[16px] font-bold text-white">
                Digital Creative Web
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-[10px]">
              <p className="font-mont uppercase text-[64px] leading-[62px] font-extrabold">
                Ideas that <span className="text-[#0C7379]"> Inspire.</span>{" "}
              </p>
              <p className="font-mont uppercase text-[64px] leading-[62px] font-extrabold">
                Design that <span className="text-[#0C7379]"> Engages.</span>{" "}
              </p>
              <p className="font-mont uppercase text-[64px] leading-[62px] font-extrabold">
                Tech that <span className="text-[#0C7379]"> Works.</span>{" "}
              </p>
            </div>
            <p className="text-[14px] leading-[18px] font-normal mt-[14px]">
              From campaigns to code — we shape digital experiences that
              perform.
            </p>
          </div>
          <div className="flex w-full mt-10">
            <Image
              src={"/home/todo.svg"}
              alt="todos image"
              width={100}
              height={100}
              className="h-[193px] w-fit object-contain object-center"
            />
            <Image
              src={"/home/todo2.svg"}
              alt="todos image"
              width={100}
              height={100}
              className="h-[193px] w-fit object-contain object-center"
            />
            <Image
              src={"/home/todo3.svg"}
              alt="todos image"
              width={100}
              height={100}
              className="h-[193px] w-fit object-contain object-center"
            />
            <Image
              src={"/home/todo4.svg"}
              alt="todos image"
              width={100}
              height={100}
              className="h-[193px] w-fit object-contain object-center"
            />
            <Image
              src={"/home/todo5.svg"}
              alt="todos image"
              width={100}
              height={100}
              className="h-[193px] w-fit object-contain object-center"
            />
            <Image
              src={"/home/todo6.svg"}
              alt="todos image"
              width={100}
              height={100}
              className="h-[193px] w-fit object-contain object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
