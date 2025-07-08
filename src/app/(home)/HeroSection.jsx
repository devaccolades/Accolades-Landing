import Button from "@/component/Button";
import Image from "next/image";
import React from "react";
import { BASE_URL } from "../Server";

function HeroSection({ data }) {
  console.log("data", data);
  return (
    <section className="bg-white text-black h-[90vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        {data && (
          <Image
            src={BASE_URL + data.googleImage.url}
            height={100}
            width={100}
            alt="google paratner"
          />
        )}
        {data && (
          <h1 className="text-[64px] leading-[64px] text-center max-w-xl">
            {data.HeroTitle}
          </h1>
        )}
        {data && (
          <p className="text-[14px] font-medium max-w-md text-center ">
            {data.subTitle}
          </p>
        )}

        <Button
          content={"View Our Work"}
          className="px-3 py-2 xl:py-3 xl:px-4"
        />
      </div>
    </section>
  );
}

export default HeroSection;
