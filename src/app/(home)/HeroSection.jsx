import Button from "@/component/Button";
import Image from "next/image";
import React from "react";
import { BASE_URL } from "../Server";

function HeroSection({ data }) {
  console.log("data", data);
  return (
    <section className="bg-white text-black h-[90vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        {data && (
          <Image
            src={BASE_URL + data.googleImage.url}
            height={100}
            width={100}
            className="h-[56px] w-[61px]"
            alt="google paratner"
          />
        )}
        {data && (
          <h1 className="text-[24px] leading-[100%] max-w-60 md:text-[40px] md:leading-[40px] md:max-w-sm lg:text-[64px] lg:leading-[64px] text-center lg:max-w-xl">
            {data.HeroTitle}
          </h1>
        )}
        {data && (
          <p className="text-[12px] max-w-52 md:max-w-xs lg:text-[14px] font-medium  lg:max-w-md text-center text-[#484848]">
            {data.subTitle}
          </p>
        )}

        <Button
          content={"View Our Work"}
          className="text-[12px] md:text-[13px] lg:text-[14px] px-[7px] py-[5px] md:px-[13px] md:py-[7px] xl:py-[13] xl:px-[17px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
