"use client";

import Image from "next/image";
import React from "react";

const OurPartners = ({ data }) => {
  const partners = data;

  function generateLoopedPartners(partners, minItems = 10) {
    if (partners.length === 0) return [];
    const repeatCount = Math.ceil(minItems / partners.length);
    return Array(repeatCount).fill(partners).flat();
  }

  const loopedPartners = generateLoopedPartners(partners, 14);

  return (
    <section className="containers relative overflow-hidden py-2 md:py-6 bg-white">
      {/* Title aligned exactly like in your image */}
      <div className="">
        <h2 className="font-poppins text-[20px] leading-[156%] font-semibold mb-[7px] lg:mb-[8px] text-left">
          Our Partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling marquee */}
        <div className="flex animate-marquee whitespace-nowrap items-center p-2 gap-[6px]">
          {loopedPartners.map((partner, index) => (
            <div key={`left-${index}`} className="flex items-center justify-center  rounded-lg px-[10px] py-[10px]">
              <div className="relative h-14 w-26 md:h-16 md:w-32 lg:h-20 lg:w-40 xl:h-30 xl:w-45"><Image src={partner.logo} alt="partner logo" fill className="object-contain" loading="lazy" /></div>
            </div>
          ))}
          {loopedPartners.map((partner, index) => (
            <div key={`right-${index}`} className="flex items-center justify-center  rounded-lg px-[10px] py-[10px]">
              <div className="relative h-14 w-26 md:h-16 md:w-32 lg:h-20 lg:w-40 xl:h-30 xl:w-45"><Image src={partner.logo} alt="partner logo" fill className="object-contain" loading="lazy" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
