import Image from "next/image";
import React from "react";
import pr from "../../../../public/digital/performance.jpg";
import seo from "../../../../public/digital/seo.jpg";
import smm from "../../../../public/digital/smm.jpg";
import ct from "../../../../public/digital/content.jpg";
import gd from "../../../../public/digital/g-ads.jpg";
import motion from "../../../../public/creative/Rectangle 6996-1.svg";
import arrow from "../../../../public/creative/Frame 11.svg";
import Link from "next/link";

const cards = [
  {
    title: "Performance Marketing ",
    image: pr,
    link: "/services/digital-marketing/performance-marketing",
    desc: "Performance marketing turns ad spend into measurable outcomes. As a data driven Digital Marketing Agency in Kochi, we run targeted PPC, display, and video campaigns. "
  },
  {
    title: "Search Engine Optimization",
    image: seo,
    link: "/services/digital-marketing/seo",
    desc: "As a Digital Marketing Agency in Kochi, We research keywords and do all SEOs. Our content targets user intent and drives qualified organic traffic. "
  },
  {
    title: "Social Media Marketing",
    image: smm,
    link: "/services/digital-marketing/smm",
    desc: "Accolades act as your Digital Marketing Agency in Kochi for social growth. We run targeted ads on Facebook, Instagram, LinkedIn, and YouTube. "
  },
  {
    title: "Content Marketing",
    image: ct,
    link: "/services/digital-marketing/content-marketing",
    desc: "Content fuels every digital channel. As a pioneer Digital Marketing Agency in Kochi, we plan blogs, videos, and social assets to move buyers through the funnel. "
  },
  {
    title: "Search Engine Marketing",
    image: gd,
    link: "/services/digital-marketing/google-ads",
    desc: "SEM captures customers who search to buy. As a specialist Digital Marketing Agency in Kochi, we align SEM with broader marketing goals and local search patterns. "
  },
];

const WhatWeDo = () => {
  return (
    <section className="containers">
      <div className="text-center items-center justify-center space-y-3  mx-auto">
      <h3 className="text-center font-mont font-extrabold text-[30px] lg:text-[40px] text-[#3FB4BA]">
        Our Digital Marketing Services
      </h3>
      <p className="font-mont font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
        We offer end to end digital marketing services for startups, SMEs, and enterprises as a trusted Digital Marketing Agency in Kochi.
        Our core services include, Performance Marketing (PPC), Search Engine Marketing (Google Ads), Search Engine Optimization,
        Social Media Marketing Content Marketing We integrate these services into a single growth plan and design campaigns that work together.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 pt-3">
        {cards.slice(0, 3).map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className="w-full h-auto rounded-[20px] bg-white shadow-lg overflow-hidden flex flex-col justify-between p-2"
          >
            
            <div className="relative h-[200px] md:h-[240px] xl:h-[300px] rounded-[10px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="py-2 flex justify-between items-center">
              <h3 className="text-[16px] xl:text-[18px] leading-[100%] font-mont font-medium text-[#007A8B]">
                {card.title}
              </h3>
              <Image src={arrow} alt="icon" className="w-[32px] h-auto" />
            </div>

            {/* ✅ DESCRIPTION ADDED HERE */}
            <p className="font-mont font-normal text-[12px] lg:text-[13px] leading-[150%] text-[#2B2A29] pt-1">
              {card.desc}
            </p>

          </Link>
        ))}
      </div>

      {/* Second row: 2 cards centered */}
      <div className="flex justify-center gap-5 xl:gap-10 pt-5 flex-wrap">
        {cards.slice(3).map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className="w-full md:w-[45%] lg:w-[30%] h-auto rounded-[20px] bg-white shadow-lg overflow-hidden flex flex-col justify-between p-2"
          >
           
            <div className="relative h-[200px] md:h-[240px] xl:h-[300px] rounded-[10px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="py-2 flex justify-between items-center">
              <h3 className="text-[16px] xl:text-[18px] leading-[100%] font-mont font-medium text-[#007A8B]">
                {card.title}
              </h3>
              <Image src={arrow} alt="icon" className="w-[32px] h-auto" />
            </div>

            {/* ✅ DESCRIPTION ADDED HERE */}
            <p className="font-mont font-normal text-[12px] lg:text-[13px] leading-[150%] text-[#2B2A29] pt-1">
              {card.desc}
            </p>

          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;



