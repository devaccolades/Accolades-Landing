import React from "react";
import float from "../../../public/home/floating.gif";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="containers flex flex-col md:flex-row justify-between items-center gap-10 pb-10">
      <div className="relative w-full">
        <Image src={float} alt="gif" className="w-full" />
        <div className="absolute inset-0 flex flex-col justify-center items-start md:pl-[15%]">
          <h3 className="text-[36px] text-[#3F3F3F] font-normal leading-[100%]">
            Latest Projects
          </h3>
          <h3 className="text-[#3FB4BA] text-[48px] md:text-[56px] xl:text-[76px] font-semibold leading-[100%]">
            Creative 
          </h3>
          <h3 className="font-bold text-[36px] md:text-[48px] xl:text-[64px] leading-[100%">
            Highlights
          </h3>
        </div>
      </div>
      <div className="w-full">
        <p className="text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]  font-mont font-normal leading-[156%]">
          Our portfolio showcases recent creative work that blends strategy with striking visuals. As a trusted Branding Agency in Kochi, 
          we've delivered brand identities, campaign creatives, motion graphics, packaging and high-converting web banners for clients 
          across sectors. Each image tells a story of research led design, higher engagement and clearer messaging. Trusted among leading
           Branding Companies in Kochi, these projects demonstrate our capability to transform concepts into polished assets that perform
            across social, web and print channels. 
        </p>
      </div>
    </section>
  );
};

export default Projects;
