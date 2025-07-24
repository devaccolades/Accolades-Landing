import React from "react";
import float from "../../../public/home/floating.gif";
import Image from "next/image";

const OurClients = () => {
  return (
    <section className="containers flex flex-col md:flex-row justify-between items-center gap-10 pb-10">
      <div className="w-full">
        <p className="text-[14px] xl:text-[18px] font-mont font-normal">
          We have given services for about 250 plus happy clients including
          Benoy Marbles, National Builders, Manappu- ram, Karikkineth, Ocean,
          etc. Timebound work comple tion, teamwork and unity makes us stand out
        </p>
      </div>
      <div className="relative w-full">
        <Image src={float} alt="gif" className="w-full" />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-[15%]">
          <h3 className="text-[36px] text-[#3F3F3F] font-normal leading-[100%]">
            Happy Clients
          </h3>
          <h3 className="text-[#3FB4BA] text-[48px] md:text-[56px] xl:text-[76px] font-semibold leading-[100%]">
            Our
          </h3>
          <h3 className="font-bold text-[48px] md:text-[64px] xl:text-[86px] leading-[100%">
            Clients
          </h3>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
