import Image from "next/image";
import React from "react";

import cover from "../../../public/home/Line 1.svg";


const Count = () => {
  return (
    // <section className="py-20">
    //   <Image src={cover} alt="line" className="w-full" />

    // </section>
    <section className="relative w-full py-14 bg-cover bg-center">
      <Image src={cover} alt="line" className="w-full h-full" />
      <div className="containers absolute top-1/2  left-1/2 -translate-1/2 px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        <div>
          <h2 className="text-white text-[64px] xl:text-[96px] font-bold mb-2">
            150+
          </h2>
          <p className="text-white text-lg font-medium">Projects Done</p>
        </div>
        <div className="border-t md:border-t-0 md:border-l md:border-r border-white h-full flex flex-col justify-center">
          <h2 className="text-white text-[64px] xl:text-[96px] font-bold mb-2">
            500+
          </h2>
          <p className="text-white text-lg font-medium">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-white text-[64px] xl:text-[96px] font-bold mb-2">
            75+
          </h2>
          <p className="text-white text-lg font-medium">Team Members</p>
        </div>
      </div>
    </section>
  );
};

export default Count;
