import Image from "next/image";
import heroImg from "../../../../../public/video-production/heroImg.png";
import AnimatedTitle from "@/component/AnimatedTitle";

export default function HeroSection() {
  return (
    <>
      <div className="containers pt-[100px]">
        <AnimatedTitle text={"Video Production"} />
      </div>
      <section className="lg:py-16 md:py-12 py-6">
        <div className="containers grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
          <span className="bg-white md:p-8 p-6 rounded-xl shadow-md">
            <h2 className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%]  text-[#199eb8] md:mb-4 mb-2 ">
              Videos That Captivate, Convert & Communicate
            </h2>
            <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
              From product explainers to cinematic brand films — we shoot, edit,
              and deliver videos your audience will remember.
            </p>
            <button className="font-mont font-semibold lg:text-[14px] text-[12px] leading-[100%] text-[#FFFFFF] bg-[#3FB4BA] px-6 py-3 rounded-[25px] mt-2 ">
              Get a Creative Proposal
            </button>
          </span>

          <div className="flex justify-center items-center lg:justify-end w-full h-full">
            <Image
              src={heroImg}
              alt="Accolades Graphic"
              className="xl:w-[500px] lg:w-[415px] md:w-[300px] w-full md:h-[250px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
