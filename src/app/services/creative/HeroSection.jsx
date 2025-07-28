import React from "react";
import side from "../../../../public/creative/OBJECTS (3).svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="containers">
      <h1
        className="bg-white text-center text-[#3FB4BA] text-[36px] md:text-[50px] lg:text-[86px] font-mont py-5 my-5 rounded-[30px] font-extrabold
        leading-[100%]"
      >
        Creative
      </h1>
      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2">
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[40px] font-extrabold leading-[120%]">
            Bringing Ideas to Life with Design That Inspires
          </h3>
          <h3 className="text-[16px] lg:text-[20px] text-[#333333] leading-[110%] font-normal">
            Fuel your growth with scroll-stopping visuals, thumb-stopping
            videos, and packaging that leaps off the shelf.
          </h3>
          <p className="text-[13px] md:text-[16px]  leading-[156%]">
            Whether you’re launching a startup or refreshing an iconic brand,
            our creative squad blends art and strategy to turn attention into
            action.
          </p>
        </div>
        <div>
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
