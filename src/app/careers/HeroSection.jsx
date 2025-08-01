import Image from "next/image";
import React from "react";
import box from "../../../public/careers/Abox.png";
import brain from "../../../public/careers/Abrain.png";
import hand from "../../../public/careers/Ahand.png";

function HeroSection() {
  return (
    <section className="pt-8 md:pt-14">
      <div className="w-[90%] md:w-[80%] rounded-2xl bg-white/60 mx-auto mt-[60px] relative z-10  p-[15px] md:p-[40px]">
        <div className="max-w-[1464px] mx-auto">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-center font-mont font-bold text-[36px] md:text-[50px] lg:text-[64px] text-[#3FB4BA] leading-[100%]">
              Join Our Team
            </h1>
            <p className="text-[14px] md:text-[16px] line-height-[150%] font-normal font-mont mt-[30px] max-w-6xl text-center">
              Discover the reason why working at Accolades is more than a job.
              It is an opportunity to be part of a dynamic team, unleash your
              potential, and contribute to shaping the future of digital
              innovation
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center lg:justify-between items-center gap-4 mt-[80px] ">
            <div className="bg-white shadow-lg rounded-2xl px-[15px] py-[20px] md:p-[30px] flex flex-col items-center justify-center gap-[10px] ">
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
              <h2 className="text-[14px] md:text-[18px] font-mont font-semibold mt-[10px] text-center ">
                Impactful Projects
              </h2>
              <p className="text-[14px] md:text-[16px] font-mont text-center max-w-xs">
                You'll have the opportunity to work on exciting and impactful
                projects.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl px-[15px] max-h-[313px] py-[20px] md:p-[30px] flex flex-col items-center justify-center gap-[10px] ">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#3CC3C3]/30 rounded-full">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#3CC3C3] rounded-full">
                  <div className="flex justify-center items-center bg-[linear-gradient(360deg,rgba(42,193,193,1)_0%,rgba(2,113,113,1)_100%)] w-[60px] h-[60px] rounded-full">
                    <Image
                      src={hand}
                      alt="this is a box"
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-[14px] md:text-[18px] font-mont font-semibold mt-[10px] text-center ">
                Impactful Projects
              </h2>
              <p className="text-[14px] md:text-[16px] font-mont text-center max-w-xs">
                You'll have the opportunity to work on exciting and impactful
                projects.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl px-[15px] max-h-[313px] py-[20px] md:p-[30px] flex flex-col items-center justify-center gap-[10px] ">
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-[#3CC3C3]/30 rounded-full">
                <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#3CC3C3] rounded-full">
                  <div className="flex justify-center items-center bg-[linear-gradient(360deg,rgba(42,193,193,1)_0%,rgba(2,113,113,1)_100%)] w-[60px] h-[60px] rounded-full">
                    <Image
                      src={brain}
                      alt="this is a box"
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-[14px] md:text-[18px] font-mont font-semibold mt-[10px] text-center ">
                Impactful Projects
              </h2>
              <p className="text-[14px] md:text-[16px] font-mont text-center max-w-xs">
                You'll have the opportunity to work on exciting and impactful
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
