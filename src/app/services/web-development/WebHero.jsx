"use client";
import Image from "next/image";
import React from "react";
import Hero from "../../../../public/web/banner.png";
import AnimatedWebTitle from "@/component/AnimatedWebTitle";

export default function WebHero() {
  return (
    <div className="containers pt-[100px]">
      <div className="">
        <AnimatedWebTitle text={"Web Development"} />
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
            <p className="text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[156%]">
              Accolades Integrated deliver innovative and cost-effective web
              development services for businesses in Kerala. With over five
              years of expertise, our skilled web designers create responsive,
              lead-generating websites that elevate your business.
            </p>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[156%] mt-2">
              We focus on functionality, usability, and conversion optimization,
              ensuring your site turns visitors into loyal customers. Our
              designs are both visually appealing and performance-driven,
              tailored to meet your business goals.
            </p>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[156%] mt-2">
              As a trusted web development company in Kochi, we provide scalable
              solutions that align with your needs. Our commitment to your
              success drives us to craft websites that stand out and perform
              exceptionally.
            </p>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[156%] mt-2">
              Choose Accolades for professional web design services that amplify
              your digital presence and help you achieve measurable results.
              Let’s transform your vision into a powerful, lead-generating
              website that stands above the competition.
            </p>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[156%] mt-2">
              Optimize your online growth with us—your trusted partner in web
              development in Kerala.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
