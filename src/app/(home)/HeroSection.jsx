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
    { src: "/home/logos/logo (18).svg", alt: "Company 18" },
    { src: "/home/logos/logo (1).svg", alt: "Company 1" },
    { src: "/home/logos/logo (2).svg", alt: "Company 2" },
    // { src: "/home/logos/logo (3).svg", alt: "Company 3" },
    { src: "/home/logos/logo (4).svg", alt: "Company 4" },
    { src: "/home/logos/logo (10).svg", alt: "Company 10" },
    // { src: "/home/logos/logo (5).svg", alt: "Company 5" },
    // { src: "/home/logos/logo (11).svg", alt: "Company 11" },
    { src: "/home/logos/logo (6).svg", alt: "Company 6" },
    { src: "/home/logos/logo (7).svg", alt: "Company 7" },
    // { src: "/home/logos/logo (8).svg", alt: "Company 8" },
    { src: "/home/logos/logo (9).svg", alt: "Company 9" },
    { src: "/home/logos/logo (15).svg", alt: "Company 15" },
    { src: "/home/logos/logo (19).svg", alt: "Company 19" },
    { src: "/home/logos/asa.svg", alt: "Company 12" },
    { src: "/home/logos/logo (13).svg", alt: "Company 13" },
    { src: "/home/logos/logo (14).svg", alt: "Company 14" },
    { src: "/home/logos/logo (16).svg", alt: "Company 16" },
    { src: "/home/logos/logo (17).svg", alt: "Company 17" },
    
   
    { src: "/home/logos/logo (20).svg", alt: "Company 20" },
    { src: "/home/logos/logo (21).svg", alt: "Company 21" },
    { src: "/home/logos/logo 1.png", alt: "Company 22" },
    { src: "/home/logos/nesto.svg", alt: "Company 23" },
    { src: "/home/logos/silk.png", alt: "Company 24" },
    { src: "/home/logos/cureg.svg", alt: "Company 25" },
    { src: "/home/logos/recru.svg", alt: "Company 26" },
    { src: "/home/logos/skyline.svg", alt: "Company 27" },
    { src: "/home/logos/tyr.svg", alt: "Company 28" },
    { src: "/home/logos/vvo-kl.svg", alt: "Company 29" },
    { src: "/home/logos/radis.svg", alt: "Company 30" },
    { src: "/home/logos/au.svg", alt: "Company 31" },
    { src: "/home/logos/bm.svg", alt: "Company 28" },
    { src: "/home/logos/paris.svg", alt: "Company 29" },
    { src: "/home/logos/svo.svg", alt: "Company 30" },
    // { src: "/home/logos/ves.svg", alt: "Company 31" },
     { src: "/home/logos/manapuram.svg", alt: "Company 29" },
    { src: "/home/logos/friday.svg", alt: "Company 30" },
    { src: "/home/logos/nandilat.svg", alt: "Company 31" },
  ];

  const todo = [
    { label: "/home/todo.svg", route: "/services/digital-marketing/search-engine-marketing" },
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
      <div className="relative h-full  [@media(min-width:1800px)]:h-[95vh]  pb-10 ">
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
        <div className="relative h-full md:containers flex flex-col pt-[100px] md:pt-[150px] z-40">
          <div className="relative z-20 text-center flex flex-col justify-center items-center ">
            <div className=" w-fit px-[16px] py-[8px] md:px-[20px] md:py-[10px] rounded-full">
              <p className="text-[12px] md:text-[16px] font-semibold font-mont text-[#0C7379]">
                Digital . Creative . Web
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-[10px]">
              <p className="font-urbanist  text-[30px] md:text-[48px] md:leading-[46px]  xl:text-[64px] leading-[28px] tracking-[0%]  xl:leading-[62px] font-regular">
                Ideas That <span className="text-[#0C7379]"> Inspire</span>{" "}
              </p>
              <p className="font-urbanist   text-[30px] md:text-[48px] md:leading-[46px] xl:text-[64px] leading-[28px] tracking-[0%]  xl:leading-[62px] font-regular">
                Design That <span className="text-[#0C7379]"> Engages</span>{" "}
              </p>
              <p className="font-urbanist  text-[30px] md:text-[48px] md:leading-[46px] xl:text-[64px] leading-[28px] tracking-[0%]  xl:leading-[62px] font-regular">
                Tech That <span className="text-[#0C7379]"> Works</span>{" "}
              </p>

            </div>
            <p className="text-[12px] lg:text-[14px] px-6 md:px-0 font-mont leading-[18px] font-normal mt-[14px]">
              Your trusted branding agency in Kochi.  We shape digital experiences that perform.
            </p>
            <div className="flex justify-center font-mont items-center py-4 gap-[10px]">
              <Link href="tel:+919048689977">
                <button className="bg-[#0C7379] py-[10px] px-[14px] md:py-[10px] md:px-[16px] text-white rounded-[10px] text-[12px] md:text-[16px] font-bold leading-[100%] cursor-pointer">
                  Get A Free Brand Audit
                </button>
              </Link>

             
            </div>

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


          <div className="mt-[30px] lg:mt-[30px]">
            <p className="text-[16px] font-mont font-semibold capitalize text-center mb-3">
              Growing With Us
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
          className="h-[94px] md:h-[193px] w-fit object-contain object-center 
        hover:[animation:shake_0.3s_ease-in-out_infinite] "
        />
      </div>
    </Link>
  );
};
