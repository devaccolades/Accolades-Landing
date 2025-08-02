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
    link: "/services/digital-marketing/performance-marketing"
    
  },
  {
    title: "Search Engine Optimization",
    image: seo,
    link: "/services/digital-marketing/seo"
  },
  {
    title: "Social Media Marketing",
    image: smm,
    link: "/services/digital-marketing/smm"
  },
  {
    title: "Content Marketing",
    image: ct,
    link: "/services/digital-marketing/content-marketing"
  },
  {
    title: "Google Ads",
    image: gd,
    link: "/services/digital-marketing/google-ads"
  },
];

const WhatWeDo = () => {
  return (
    <section className="containers">
      <h3 className="text-center font-mont font-extrabold text-[30px] lg:text-[40px] text-[#3FB4BA]">
        What We Do
      </h3>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 pt-3">
    {cards.slice(0, 3).map((card, index) => (
      <Link
     key={index}
     href={card.link}
        className="w-full h-auto rounded-[20px] bg-white shadow-lg overflow-hidden flex flex-col justify-between p-2"
      >
        <Image
          src={card.image}
          alt={card.title}
          width={100}
          height={100}
          className="object-center object-cover h-[200px] lg:h-[200px] 2xl:h-[350px] w-full rounded-[12px]"
        />
        <div className="py-2 flex justify-between items-center">
          <h3 className="text-[16px] xl:text-[18px] leading-[100%] font-mont font-medium text-[#007A8B]">
            {card.title}
          </h3>
          <Image src={arrow} alt="icon" className="w-[32px] h-auto" />
        </div>
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
        <Image
          src={card.image}
          alt={card.title}
          width={100}
          height={100}
          className="object-center object-cover h-[220px] lg:h-[200px] 2xl:h-[350px] w-full rounded-[12px]"
        />
        <div className="py-2 flex justify-between items-center">
          <h3 className="text-[16px] xl:text-[18px] leading-[100%] font-mont font-medium text-[#007A8B]">
            {card.title}
          </h3>
          <Image src={arrow} alt="icon" className="w-[32px] h-auto" />
        </div>
      </Link>
    ))}
  </div>


    </section>
  );
};

export default WhatWeDo;
