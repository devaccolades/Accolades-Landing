"use client";
import Image from "next/image";
import React from "react";
import Hero from "../../../../public/web/banner.png";


export default function WebHero() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-20">
      <div className="mx-[50px]">
        {/* Header */}
        <div className="bg-white rounded-[30px]  py-6">
        <h1 className="text-[#3FB4BA] font-mont font-bold xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] leading-[130%] text-center mb-2">
         Web Development
        </h1>
      </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Box */}
          <div className="bg-white rounded-2xl shadow p-8">
            <p className="uppercase text-sm text-gray-500 font-mont font-semibold mb-2">Development</p>
            <h2 className="text-2xl font-bold font-mont text-[#1eb2a6] mb-4">Web Development</h2>
            <p className="text-gray-700 font-mont text-sm leading-relaxed">
              Accolades is envisioned to cater the newest and finest web development
              solutions to businesses in Kerala. We perceive the worth of your
              investments, which is why our professional web development team is
              here to supply you with a host of robust services. Our classy website
              styles are aesthetically pleasing and elevate your business to
              unprecedented heights of success. We have 5 + years' expertise and
              expert web designers who offer cost-effective creative web design and
              web development solutions. We style websites that nurture your leads
              and turn them into long-lasting high-paying customers. Accolades the
              digital marketing companies in cochin offers the most affordable,
              responsive & professional web design services in Kochi that help you
              optimize your lead conversion. We proactively commit to the success
              of your website. Our specialty in functionality, lead generating
              potential, and conversion ability of your website rather than
              aesthetics alone helps us bring you measurable results. Let's Stand
              above the cloud and rise above the noise.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={Hero}
              alt="Web Development Illustration"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
