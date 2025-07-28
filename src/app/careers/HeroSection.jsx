import Image from "next/image";
import React from "react";
import box from "../../../public/careers/Abox.png";

function HeroSection() {
  return (
    <section className="w-[80%] rounded-2xl bg-white/60 mx-auto mt-32 relative z-10 p-[32px] md:p-[40px]">
      <div className="text-center">
        <h1 className="font-bold font-mont text-[56px] text-[#3FB4BA]">
          Join Our Team
        </h1>
        <p className="text-[16px] line-height-[150%] font-normal font-mont mt-[30px] max-w-6xl">
          Discover the reason why working at Accolades is more than a job. It is
          an opportunity to be part of a dynamic team, unleash your potential,
          and contribute to shaping the future of digital innovation
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-[80px]">
        <div className="bg-white shadow-lg rounded-2xl p-[30px] flex flex-col items-center justify-center gap-[10px] ">
          <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#3CC3C3]/30 rounded-full">
            <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#3CC3C3] rounded-full">
              <div className="flex justify-center items-center bg-[linear-gradient(360deg,rgba(42,193,193,1)_0%,rgba(2,113,113,1)_100%)] w-[60px] h-[60px] rounded-full">
                <Image
                  src={box}
                  alt="this is a box"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </div>
          </div>
          <h2 className="text-[18px] font-mont font-semibold mt-[10px]">Impactful Projects</h2>
          <p className="text-[16px] font-mont text-center max-w-xs">
            You'll have the opportunity to work on exciting and impactful
            projects.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-[30px] flex flex-col items-center justify-center gap-[10px] ">
          <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#3CC3C3]/30 rounded-full">
            <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#3CC3C3] rounded-full">
              <div className="flex justify-center items-center bg-[linear-gradient(360deg,rgba(42,193,193,1)_0%,rgba(2,113,113,1)_100%)] w-[60px] h-[60px] rounded-full">
                <Image
                  src={box}
                  alt="this is a box"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </div>
          </div>
          <h2 className="text-[18px] font-mont font-semibold mt-[10px]">Impactful Projects</h2>
          <p className="text-[16px] font-mont text-center max-w-xs">
            You'll have the opportunity to work on exciting and impactful
            projects.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-[30px] flex flex-col items-center justify-center gap-[10px] ">
          <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#3CC3C3]/30 rounded-full">
            <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#3CC3C3] rounded-full">
              <div className="flex justify-center items-center bg-[linear-gradient(360deg,rgba(42,193,193,1)_0%,rgba(2,113,113,1)_100%)] w-[60px] h-[60px] rounded-full">
                <Image
                  src={box}
                  alt="this is a box"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </div>
          </div>
          <h2 className="text-[18px] font-mont font-semibold mt-[10px]">Impactful Projects</h2>
          <p className="text-[16px] font-mont text-center max-w-xs">
            You'll have the opportunity to work on exciting and impactful
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
