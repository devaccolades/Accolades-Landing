import Image from "next/image";
import React from "react";

import socialgiff from "../../../public/home/Accolades-banner-elements.gif";
import topline from "../../../public/home/top-line.svg";

const HeroSection = () => {
  return (
    <>
      <div className="containers flex flex-col-reverse md:flex-row justify-between gap-5 pt-10  items-center">
        <div className="w-full flex-1   flex justify-start ">
          <div className="">
            <h3 className="text-[36px] font-normal leading-[100%]">We are </h3>
            <h3 className="text-[#3FB4BA] text-[76px] font-semibold leading-[100%]">
              Creatively
            </h3>
            <h3 className="font-bold text-[86px] leading-[100%]">Different</h3>
            <h3 className="text-[36px] font-normal leading-[100%]">
              We take your business to new heights
            </h3>
          </div>
        </div>
        <div className="w-full flex-1  flex justify-end ">
          <Image src={socialgiff} alt="Social" className="w-auto h-[500px]" />
        </div>
      </div>
      <Image src={topline} alt="line" className="containers h-auto py-28" />
    </>
  );
};

export default HeroSection;
