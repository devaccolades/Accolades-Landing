"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import socialgiff from "../../../public/home/Accolades-banner-elements.gif";
import topline from "../../../public/home/top-line.webp";
import LightRays from "@/components/LightRays";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";

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

  // Alternative with image sources
  const imageLogos = [
    { src: "/home/logos/logo (1).svg", alt: "Company 1" },
    { src: "/home/logos/logo (2).svg", alt: "Company 2" },
    { src: "/home/logos/logo (3).svg", alt: "Company 3" },
    { src: "/home/logos/logo (4).svg", alt: "Company 4" },
    { src: "/home/logos/logo (10).svg", alt: "Company 10" },
    { src: "/home/logos/logo (5).svg", alt: "Company 5" },
    { src: "/home/logos/logo (11).svg", alt: "Company 11" },
    { src: "/home/logos/logo (6).svg", alt: "Company 6" },
    { src: "/home/logos/logo (7).svg", alt: "Company 7" },
    { src: "/home/logos/logo (8).svg", alt: "Company 8" },
    { src: "/home/logos/logo (9).svg", alt: "Company 9" },
    { src: "/home/logos/logo (15).svg", alt: "Company 15" },
    { src: "/home/logos/logo (12).svg", alt: "Company 12" },
    { src: "/home/logos/logo (13).svg", alt: "Company 13" },
    { src: "/home/logos/logo (14).svg", alt: "Company 14" },
    { src: "/home/logos/logo (16).svg", alt: "Company 16" },
    { src: "/home/logos/logo (17).svg", alt: "Company 17" },
    { src: "/home/logos/logo (18).svg", alt: "Company 18" },
    { src: "/home/logos/logo (19).svg", alt: "Company 19" },
    { src: "/home/logos/logo (20).svg", alt: "Company 20" },
    { src: "/home/logos/logo (21).svg", alt: "Company 21" },
  ];

  const todo = [
    { label: "/home/todo.svg", route: "/google-ads" },
    { label: "/home/todo2.svg", route: "/services/digital-marketing/smm" },
    { label: "/home/todo3.svg", route: "/services/digital-marketing/seo" },
    {
      label: "/home/todo4.svg",
      route: "/services/digital-marketing/content-marketing",
    },
    {
      label: "/home/todo5.svg",
      route: "/services/creative/branding-packaging",
    },
    { label: "/home/todo6.svg", route: "/services/services/web-development" },
  ];

  return (
    <>
      <div className="relative h-full  [@media(min-width:1800px)]:h-[95vh] -mt-21 pb-10">
        <div className="absolute inset-0 opacity-60 z-0">
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
          />
        </div>
        <div className="relative h-full md:containers flex flex-col pt-[150px] z-40">
          <div className="relative z-20 text-center flex flex-col justify-center items-center ">
            <div className="bg-black w-fit px-[16px] py-[8px] md:px-[20px] md:py-[10px] rounded-full">
              <p className="text-[12px] md:text-[16px] font-semibold text-white">
                Digital Creative Web
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-[10px]">
              <p className="font-mont uppercase text-[24px] md:text-[48px] md:leading-[46px] xl:text-[64px] leading-[28px] tracking-[0%]  xl:leading-[62px] font-extrabold">
                Ideas that <span className="text-[#0C7379]"> Inspire.</span>{" "}
              </p>
              <p className="font-mont uppercase text-[24px] md:text-[48px] md:leading-[46px] xl:text-[64px] leading-[28px] tracking-[0%]  xl:leading-[62px] font-extrabold">
                Design that <span className="text-[#0C7379]"> Engages.</span>{" "}
              </p>
              <p className="font-mont uppercase text-[24px] md:text-[48px] md:leading-[46px] xl:text-[64px] leading-[28px] tracking-[0%]  xl:leading-[62px] font-extrabold">
                Tech that <span className="text-[#0C7379]"> Works.</span>{" "}
              </p>
            </div>
            <p className="text-[14px] font-monst leading-[18px] font-normal mt-[14px] max-w-[300px]">
              From campaigns to code — we shape digital experiences that
              perform.
            </p>
          </div>
          <div className="flex flex-wrap justify-center w-full mt-10 ">
            {todo && todo.map((item) => <Todos key={item.label} item={item} />)}

            <style jsx>{`
              @keyframes shake {
                0%,
                100% {
                  transform: rotate(0deg);
                }
                25% {
                  transform: rotate(2deg);
                }
                50% {
                  transform: rotate(-2deg);
                }
                75% {
                  transform: rotate(1deg);
                }
              }

              /* 👇 mobile-only animation */
              @media (max-width: 768px) {
                .mobile-shake {
                  animation: shake 1s ease-in-out 1s 1; /* (name duration timing delay iteration) */
                }
              }
            `}</style>
          </div>
          <div className="mt-[30px] lg:mt-[89px]">
            <p className="text-[16px] font-monst font-semibold capitalize text-center">
              who trust us
            </p>
            <LogoLoop
              logos={imageLogos}
              speed={120}
              direction="left"
              logoHeight={80}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
              className="hidden md:block"
            />
            <LogoLoop
              logos={imageLogos}
              speed={120}
              direction="left"
              logoHeight={60}
              gap={20}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
              className="md:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

const Todos = ({ item }) => {
  return (
    <Link href={item.route}>
      <div className="mobile-shake">
        <Image
          src={item.label}
          alt="todos image"
          width={100}
          height={100}
          className="h-[144px] md:h-[193px] w-fit object-contain object-center 
        hover:[animation:shake_0.3s_ease-in-out_infinite] "
        />
      </div>
    </Link>
  );
};
