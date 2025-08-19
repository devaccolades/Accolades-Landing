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
    <section className="mx-0 md:mx-20  relative overflow-hidden py-6 bg-white">
      {/* Title aligned exactly like in your image */}
      <div className="mx-auto px-4">
        <h2 className="font-poppins text-[20px] leading-[156%] font-semibold mx-4 sm:mx-20  mb-[7px] lg:mb-8 text-left">
          Our Partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* First row - scrolling left */}
        <div className="flex animate-marquee whitespace-nowrap items-center mb-[3px] lg:mb-4 gap-[3px]">
          {loopedPartners.map((partner, index) => (
            <div
              key={`left-${index}`}
              className="flex items-center justify-center shadow-lg rounded-lg px-[10px] py-[10px]"
            >
              <div className="relative h-12 w-24 lg:h-20 lg:w-32 ">
                <Image
                  src={partner.logo}
                  alt="partner logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  // sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {loopedPartners.map((partner, index) => (
            <div
              key={`left-${index}`}
              className="flex items-center justify-center  shadow-lg rounded-lg px-[10px] py-[10px]"
            >
              <div className="relative h-12 w-24 lg:h-20 lg:w-32">
                <Image
                  src={partner.logo}
                  alt="partner logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  // sizes="128px"
                />
              </div>
            </div>
          ))}
          {loopedPartners.map((partner, index) => (
            <div
              key={`right-${index}`}
              className="flex items-center justify-center shadow-lg rounded-lg px-[10px] py-[10px]"
            >
              <div className="relative h-12 w-24 lg:h-20 lg:w-32">
                <Image
                  src={partner.logo}
                  alt="partner logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
