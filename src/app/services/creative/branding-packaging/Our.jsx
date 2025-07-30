import Image from "next/image";
import React from "react";

import sun from "../../../../../public/creative/branding/Frame 37420.svg";

const Our = () => {
  return (
    <section className="containers">
      <h3 className="text-center text-[#3FB4BA] text-[28px] lg:text-[40px] font-extrabold font-mont">
        Our Branding Process
      </h3>
      <Image src={sun} alt="img" className="h-full w-auto" />
    </section>
  );
};

export default Our;
