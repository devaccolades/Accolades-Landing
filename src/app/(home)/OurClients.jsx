import React from "react";
import float from "../../../public/home/floating.gif";
import Image from "next/image";

const OurClients = () => {
  return (
    <section className="containers flex flex-col md:flex-row justify-between items-center gap-10 pb-10">
      <div className="w-full">
        <p className="text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px]  font-mont font-normal">
          We’re honoured to serve over 500 clients, including National Builders,
          Classic Builders, English Cafe, TJP Rubber Industries, Radisson Blu,
          CIDBI, Abe Services and more. Our dedication to quality,
          collaboration, and timely delivery has fostered lasting partnerships
          and outstanding results.
        </p>
      </div>
      <div className="relative w-full">
        <Image src={float} alt="gif" className="w-full" />
        <div className="absolute inset-0 flex flex-col justify-center items-start md:pl-[15%]">
          <h3 className="text-[36px] text-[#3F3F3F] font-normal leading-[100%]">
            Trusted Partnerships
          </h3>
          <h3 className="text-[#3FB4BA] text-[48px] md:text-[56px] xl:text-[76px] font-semibold leading-[100%]">
            Our Valued
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
