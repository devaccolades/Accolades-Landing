import Image from "next/image";
import React from "react";

import sun from "../../../../../public/creative/branding/Frame 37420.svg";

const Our = () => {
  return (
    <section className="containers">
      <h3 className="text-center text-[#3FB4BA] text-[28px] lg:text-[40px] font-extrabold font-mont leading-[110%]">
        Our Branding Process
      </h3>
      <div className="flex justify-center">
        <Image
          src={sun}
          alt="img"
          className="h-full w-auto object-contain items-center"
        />
      </div>
    </section>
  );
};

export default Our;
