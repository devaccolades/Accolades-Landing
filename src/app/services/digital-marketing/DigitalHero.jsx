import React from "react";
import side from "../../../../public/digital/digi.jpg";
import Image from "next/image";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";

const DigitalHero = () => {
  return (
    <section className="containers pt-[100px]">
      {/* <h1
        className="bg-white text-center text-[#3FB4BA] text-[36px] md:text-[50px] lg:text-[64px] font-mont py-5 rounded-[30px] font-bold
        leading-[100%]"
      >
        Digital Marketing
      </h1> */}
      <AnimatedPopTitle text={"Digital  Marketing"}/>
      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2">
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[40px] font-bold leading-[120%]">
            Full-Spectrum Digital Marketing Services: Target. Engage. Convert.
          </h3>
          
          <p className="text-[13px] md:text-[16px]  leading-[156%]">
            At Accolades Integrated, we harness the power of digital to transform brands and accelerate business growth.
           Our expert team blends strategy, creativity, and technology to deliver performance-driven digital marketing 
           solutions tailored to your goals. From Google Ads and Meta Campaigns to SEO, content creation, LinkedIn marketing, 
           and analytics—every service is built to boost visibility, engage audiences, and drive measurable results.
          </p>
        </div>
        <div>
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default DigitalHero;
