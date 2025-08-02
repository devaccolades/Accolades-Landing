"use client";
import Image from "next/image";
import React from "react";
import Hero from "../../../../../public/web/word.png";
import Link from "next/link";
import AnimatedWebTitle from "@/component/AnimatedWebTitle";

export default function WordpressHero() {
  return (
    <div className="containers pt-[100px]">
      <div className="">
        <AnimatedWebTitle text={"Wordpress Pages"} />
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8 mt-10 items-center">
          {/* Right Image First on Mobile */}
          <div className="flex justify-center  order-1 md:order-2">
            <Image
              src={Hero}
              alt="Web Development Illustration"
              className="object-contain w-64 md:w-96 lg:w-[500px] h-auto"
              priority
            />
          </div>

          {/* Left Text Second on Mobile */}
          <div className="bg-white rounded-2xl shadow-md p-2 md:p-4 order-2 md:order-1">
            <h2 className="text-[20px] lg:text-[30px] xl:text-[40px] leading-[130%] font-bold font-mont text-[#1eb2a6] mb-2">
              Custom WordPress Solutions for All Needs
            </h2>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[14px] xl:text-[16px] leading-[130%]">
              From lightning-fast blogs to stunning landing pages — we make
              WordPress work for you.
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
