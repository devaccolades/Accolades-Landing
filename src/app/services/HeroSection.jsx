import React from "react";

function HeroSection() {
  return (
    <section className="h-[400px] md:h-[400px] w-full pb-30 pt-20 md:pt-24 lg:pt-30 mb-140 md:mb-80 lg:mb-30">
    {/* <section className=" "> */}
      <div className="flex flex-col items-center justify-center bg-white w-[90%] mx-auto p-4 rounded-2xl relative z-10">
        <h1 className="font-mont text-[20px] md:text-[30px] lg:text-[36px] text-center font-bold leading-[130%] text-[#3FB4BA]">
          Complete Digital Marketing Services in Kochi, Creative & Web Solutions
          for Modern Brands
        </h1>
        <p className="max-w-7xl font-mont text-left mt-[30px] text-[14px] md:text-[16px] leading-[150%] ">
          Accolades Integrated creates strategies that connect and designs that perform. As a leading name in
          marketing and technology, we deliver comprehensive digital marketing services Kochi businesses rely
          on.
          Our services are structured across three main areas — Digital, Creative, and Web. These 3 pillars
          ensure every brand touch point, from awareness to conversion. We manage this with clarity and
          creativity.
        </p>
        <p className="font-mont text-left text-[14px] md:text-[16px] leading-[150%]" >
          We Provide:
        </p>

        <ul className="max-w-7xl font-mont  text-left mt-[0px] text-[14px] md:text-[16px] leading-[150%] list-disc mx-auto">
          <li>Digital Marketing in Kochi — Performance Marketing, SEM, SEO, Social Media, and Content Marketing</li>
          <li>Creative Services in Kochi — Graphic Design, Motion Graphics, Branding, Packaging, and Video Production</li>
          <li>Web Services in Kochi — Full Stack Development, WordPress Pages, and E-commerce Websites</li>
        </ul>

        <p className="max-w-7xl font-mont text-left mt-[0px] text-[14px] md:text-[16px] leading-[150%] ">
          With over a decade of experience, Accolades Integrated has become one of the most trusted
          branding and digital marketing companies in Kochi. From Kochi to Mumbai, Calicut, Trivandrum, and
          Bengaluru, we help businesses across India grow through focused design and marketing strategies.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
