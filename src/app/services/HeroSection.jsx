import React from "react";

function HeroSection() {
  return (
    <section className="h-[400px] md:h-[400px] w-full pb-30 pt-20 md:pt-24 lg:pt-30">
      <div className="flex flex-col items-center justify-center bg-white w-[90%] mx-auto p-4 rounded-2xl relative z-10">
        <h1 className="font-mont text-[30px] md:text-[50px] lg:text-[64px] font-bold leading-[130%] text-[#3FB4BA]">
          Our Expertise Services
        </h1>
        <p className="max-w-6xl font-mont text-center mt-[30px] text-[14px] md:text-[16px] leading-[150%] ">
          We deliver a complete suite of digital marketing solutions, from
          graphic design, social media marketing & management, Google & Meta Ads
          to web development and SEO. Our goal is to drive measurable growth by
          crafting personalized strategies for your brand’s success.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
