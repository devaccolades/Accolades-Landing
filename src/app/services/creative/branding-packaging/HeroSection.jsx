import React from "react";
import Image from "next/image";
import side from "../../../../../public/creative/branding/hero.webp";
import AnimatedTitle from "@/component/AnimatedTitle";

const HeroSection = () => {
  return (
    <section className="containers font-mont pt-[100px]">
      <AnimatedTitle text={"Branding & Packaging"} />
      <div className="flex flex-col-reverse md:grid md:grid-cols-[50%_1fr] py-[3%] items-center gap-5">
        <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] space-y-3">
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[32px] font-extrabold leading-[100%]">
            Build a Brand That Commands Attention
          </h3>
          <h3 className="text-[16px] lg:text-[20px] text-[#333333] leading-[110%] font-normal">
            From logo to label, we craft cohesive brand identities that turn
            first impressions into lasting connections.
          </h3>
          <button className="w-fit bg-[#3FB4BA] px-3 py-2 rounded-full text-[12px] md:text-[14px] text-white font-medium">
            Get a creative proposal
          </button>
        </div>
        <div className="h-full w-auto rounded-[30px]">
          <Image
            src={side}
            alt="side-image"
            className="w-full h-full object-cover rounded-[30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
