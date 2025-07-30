import React from "react";

function HeroSection() {
  return (
    <section className="h-[400px] md:h-[400px] w-full pt-16">
      <div className="flex flex-col items-center justify-center bg-white w-[90%] mx-auto p-4 rounded-2xl relative z-10">
        <h1 className="font-monst text-[32px] md:text-[86px] font-bold leading-[130%] text-[#3FB4BA]">
          Services
        </h1>
        <p className="max-w-6xl text-center mt-[30px] text-[16px] leading-[150%] ">
          Lorem ipsum dolor sit amet consectetur. Lobortis enim ante enim metus
          et ultricies interdum. Netus malesuada fermentum enim at sed morbi dis
          in lorem. Proin sapien tincidunt sed malesuada consequat pellentesque
          ipsum. Nibh lectus cras id metus magna.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
