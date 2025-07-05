import React from "react";
import arrow from "../../../public/Arrow 4.svg";
import Image from "next/image";

const WhyAccolades = () => {
  return (
    <section className="">
      <div className="w-[80%] mx-auto flex gap-2 justify-center text-center">
        <Image src={arrow} alt="image" />
        <span className="font-poppins font-medium text-[14px]">
          Why Accoaldes
        </span>
        <Image src={arrow} alt="image" className="rotate-180" />
      </div>
      <h4 className="text-[40px] font-zen font-bold ">
        What Our Clients <span className="text-[#0C7379]">Say</span>
      </h4>
    </section>
  );
};

export default WhyAccolades;
