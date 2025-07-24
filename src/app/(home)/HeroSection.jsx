import Image from "next/image";
import React from "react";

import socialgiff from "../../../public/home/Accolades-banner-elements.gif";
import topline from "../../../public/home/top-line.svg";

const HeroSection = () => {
  return (
    <>
      <div className="containers flex flex-col-reverse md:flex-row justify-between gap-6 pt-8 md:pt-14 items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="text-left">
            <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight">
              We are
            </h3>
            <h3 className="text-[#3FB4BA] text-[60px] lg:text-[76px] font-semibold leading-tight">
              Creatively
            </h3>
            <h3 className="font-bold text-[72px] lg:text-[86px] leading-tight">
              Different
            </h3>
            <h3 className="text-[20px]  md:text-[28px] lg:text-[36px] font-normal leading-tight mt-2">
              We take your business to new heights
            </h3>
          </div>
        </div>

        {/* Animated Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image src={socialgiff} alt="Social" className="h-[500px]  w-auto" />
        </div>
      </div>

      {/* Bottom Topline */}
      <div className="containers py-10 sm:py-16 md:py-24">
        <Image src={topline} alt="Decorative Line" className="w-full h-auto" />
      </div>
    </>
  );
};

export default HeroSection;
