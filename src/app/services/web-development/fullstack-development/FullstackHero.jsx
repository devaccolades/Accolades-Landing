

"use client";
import Image from "next/image";
import React from "react";
import Hero from "../../../../../public/web/fullstack.jpg";
import Link from "next/link"


export default function FullstackHero() {
  return (
    <div className="pt-20 pb-8 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-[30px] py-6 px-4">
          <h1 className="text-[#3FB4BA] font-mont font-bold text-center leading-[130%]  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px]">
            Full Stack Web Development
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8 mt-10 items-center">
          {/* Right Image First on Mobile */}
          <div className="flex justify-center  order-1 md:order-2">
            <Image
              src={Hero}
              alt="Web Development Illustration"
              className="object-contain w-64 md:w-96 lg:w-[500px] h-auto rounded-2xl"
              priority
            />
          </div>

          {/* Left Text Second on Mobile */}
          <div className="bg-white rounded-2xl shadow-md p-2 md:p-4 order-2 md:order-1">
           
            <h2 className="text-[20px] lg:text-[30px] xl:text-[40px] leading-[130%] font-bold font-mont text-[#1eb2a6] mb-2">
             End-to-End Web Development Solutions
            </h2>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[14px] xl:text-[16px] leading-[130%]">
             Scalable, secure, and modern web applications — custom-coded to match your business.
            </p>
           <Link href="/contact-us">
        <button className="mt-4 px-6 py-2 bg-[#4bb9af] text-white rounded-4xl font-mont font-semibold hover:bg-[#17a19b] transition-colors">
          Get a Creative Proposal
        </button>
      </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
