import React from "react";

function HeroSection() {
  return (
    <section className="h-[400px] md:h-[400px] w-full pt-16">
      <div className="flex flex-col items-center justify-center bg-white w-[90%] mx-auto p-4 rounded-2xl relative z-10">
        <h1 className="font-monst text-[32px] md:text-[86px] font-bold leading-[130%] text-[#3FB4BA]">
          Our Expertise Services
        </h1>
        <p className="max-w-6xl text-center mt-[30px] text-[16px] leading-[150%] ">
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
