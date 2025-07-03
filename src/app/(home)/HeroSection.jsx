import Button from "@/component/Button";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="bg-white text-black h-[90vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/images/google.png"}
          height={100}
          width={100}
          alt="google paratner"
        />
        <h1 className="text-[64px] leading-[64px] text-center max-w-xl">
          Visual Stories That Drive Impact
        </h1>
        <p className="text-[14px] font-medium max-w-md text-center ">
          Explore our expert video production services that build brand reach
          and boost sales.{""}
        </p>

        <Button content={"View Our Work"} py={15} px={20}/>
      </div>
    </section>
  );
}

export default HeroSection;
