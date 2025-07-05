"use client";

import Image from "next/image";
import React from "react";
import national from '../../../public/images/national.png'
import cidbi from '../../../public/images/cidbi.png'
import conf from '../../../public/images/confident.png'

const partners = [
  { src: national, alt: "National Builders" },
  { src: cidbi, alt: "GDSI" },
  { src: conf, alt: "Confident Group" },
  { src: national, alt: "National Builders" },
  { src: cidbi, alt: "GDSI" },
  { src: conf, alt: "Confident Group" },
  { src: conf, alt: "National Builders" },
  { src: national, alt: "GDSI" },
  { src: cidbi, alt: "Confident Group" },
];

const OurPartners = () => {
  return (
    <section className="relative overflow-hidden py-12 bg-white">
      {/* Title aligned exactly like in your image */}
      <div className="mx-auto px-4">
        <h2 className="font-poppins text-[20px] leading-[156%] font-semibold mb-8 text-left">Our Partners</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 py-2 sm:py-4"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={250}
                height={125}
                className="object-contain  h-32 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
