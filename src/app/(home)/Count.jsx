import Image from "next/image";
import React from "react";

import cover from "../../../public/home/Line 1.svg";
import line from "../../../public/Line 1 (2).svg";

const Count = () => {
  return (
    <section className="relative w-full py-14 bg-cover bg-center">
      <div className="cover-count h-full w-full relative">
        <Image
          src={cover}
          alt="line"
          className="count-desktop w-full h-full min-h-[300px] object-cover"
        />
        <Image
          src={line}
          alt="line"
          className="count-mobile w-full h-auto object-contain"
        />
      </div>

      <div className="count-text containers absolute top-1/2 left-1/2 -translate-1/2 px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        <div>
          <h2 className="text-white text-[60px] xl:text-[96px] font-bold mb-2">
            150+
          </h2>
          <p className="text-white text-sm md:text-lg font-medium">
            Projects Done
          </p>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-white h-full flex flex-col justify-center">
          <h2 className="text-white text-[60px] xl:text-[96px] font-bold mb-2">
            500+
          </h2>
          <p className="text-white text-sm md:text-lg font-medium">
            Happy Customers
          </p>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-white h-full flex flex-col justify-center">
          <h2 className="text-white text-[60px] xl:text-[96px] font-bold mb-2">
            75+
          </h2>
          <p className="text-white text-sm md:text-lg font-medium">
            Team Members
          </p>
        </div>
      </div>
    </section>
  );
};

export default Count;
