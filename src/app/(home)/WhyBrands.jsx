import Image from "next/image";
import React from "react";
import ScrollingRow from "./ScrollingRow";

function WhyBrands() {
  return (
    <section className="containers py-4 grid relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      <div className=" grid grid-cols-2 ">
        <div className="row-span-1 px-4">
          <div className="flex items-center mt-[100px]">
            <Image
              src={"/images/sidebar.png"}
              alt="sidebar"
              height={1000}
              width={1000}
              className="w-[63px] h-full"
            />
            <p className="text-[14px] font-medium px-4"> Why Accolades </p>
            <Image
              src={"/images/sidebar.png"}
              alt="sidebar"
              height={1000}
              width={1000}
              className="rotate-180 w-[63px] h-full"
            />
          </div>
          <p className="font-zen text-[40px] font-bold leading-[40px] mt-[10px]">
            Why Brands <br />
            Choose <span className="text-[#0C7379]">Accolades</span>
          </p>

          <div className="flex flex-col gap-[16px] mt-[15px]">
            <p className="text-[14px] leading-[156%] font-medium text-[#747474]">
              At Accolades Integrated, we don’t just produce videos—we create
              powerful brand assets that speak, sell, and scale. With a unique
              blend of cinematic storytelling and business-driven strategy,
              every project we take on is designed to leave a lasting impact.
            </p>
            <p className="text-[14px] leading-[156%] font-medium ">
              From scripting to shooting, voiceovers to motion graphics, we
              offer complete end-to-end video production under one roof. Whether
              you're launching a new product, building credibility, or engaging
              your audience on social media, our videos are tailored to meet
              real business goals—not just look good.
            </p>
            <p className="text-[14px] leading-[156%] font-medium ">
              We’ve worked with startups, corporates, and event giants across
              industries—earning their trust by consistently delivering videos
              that not only impress visually but also convert viewers into
              customers.
            </p>
          </div>
        </div>
        <div className="row-span-1 h-[600px] overflow-hidden -mt-[10px]">
          <div className="flex gap-4">
            <ScrollingRow direction="up" />
            <ScrollingRow direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyBrands;
