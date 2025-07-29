

"use client";
import Image from "next/image";
import React from "react";
import Hero from "../../../../public/web/banner.png";

export default function WebHero() {
  return (
    <div className="py-6 md:py-12 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-[30px] py-6 px-4">
          <h1 className="text-[#3FB4BA] font-mont font-bold text-center leading-[130%]  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px]">
            Web Development
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8 mt-10 items-center">
          {/* Right Image First on Mobile */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={Hero}
              alt="Web Development Illustration"
              className="object-contain w-64 md:w-96 lg:w-[500px] h-auto"
              priority
            />
          </div>

          {/* Left Text Second on Mobile */}
          <div className="bg-white rounded-2xl shadow-md p-2 md:p-4 order-2 md:order-1">
            <p className="uppercase text-xs sm:text-sm text-gray-500 font-mont font-semibold mb-1 lg:mb-2">
              Development
            </p>
            <h2 className="text-[20px] lg:text-[24px] leading-[130%] font-bold font-mont text-[#1eb2a6] mb-2">
              Web Development
            </h2>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[130%]">
              Accolades is envisioned to cater the newest and finest web development
              solutions to businesses in Kerala. We perceive the worth of your
              investments, which is why our professional web development team is
              here to supply you with a host of robust services. Our classy website
              styles are aesthetically pleasing and elevate your business to
              unprecedented heights of success. We have 5+ years' expertise and
              expert web designers who offer cost-effective creative web design and
              web development solutions. We style websites that nurture your leads
              and turn them into long-lasting high-paying customers. Accolades, the
              digital marketing company in Cochin, offers the most affordable,
              responsive & professional web design services in Kochi that help you
              optimize your lead conversion. We proactively commit to the success
              of your website. Our specialty in functionality, lead-generating
              potential, and conversion ability of your website — rather than
              aesthetics alone — helps us bring you measurable results. Let's stand
              above the cloud and rise above the noise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
