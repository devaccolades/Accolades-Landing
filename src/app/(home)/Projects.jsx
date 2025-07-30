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
            Recent
          </h3>
          <h3 className="font-bold text-[48px] md:text-[64px] xl:text-[86px] leading-[100%">
            Highlights
          </h3>
        </div>
      </div>
      <div className="w-full">
        <p className="text-[14px] xl:text-[18px] font-mont font-normal">
          Discover our latest work, where creativity meets strategy to deliver 
          exceptional results. Each project reflects our dedication to helping 
          brands thrive through innovative digital solutions.	
        </p>
      </div>
    </section>
  );
};

export default Projects;
