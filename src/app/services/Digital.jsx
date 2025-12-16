import Image from "next/image";
import React from "react";
import image1 from "../../../public/services/digital.png";
import digital from "../../../public/services/digitals.png";
import Link from "next/link";

function Digital() {
  return (
    <section className="flex justify-center overflow-visible relative  z-10 mx-auto w-[90%] mb-20">
      <div className="flex gap-[10px] w-full relative">
        <div className="absoulte w-[10%] md:w-[10%] lg:w-[15%] ">
          <Image
            src={digital}
            alt="digital"
            height={100}
            width={100}
            className="w-fit h-fit sticky top-50 mt-0"
          />
        </div>
        <div className="w-full flex flex-col md:gap-[40px] lg:gap-[60px] bg-white/60 p-5 rounded-[30px]">
          <h2 className="font-mont text-[20px] md:text-[35px] lg:text-[40px] font-semibold leading-[110%] text-center text-[#3FB4BA] mt-[17px] md:mt-[35px]">
            Digital Marketing Services Kochi
          </h2>

          <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Performance Marketing
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Our performance marketing programs are built to deliver measurable ROI. We combine paid media
                with data insights to optimize every ad rupee. From display to YouTube campaigns, we focus on
                conversions, not clicks. As one of the top providers of services for digital marketing in Kochi, we
                ensure each campaign is tracked, refined, and results-driven.

              </p>
              <Link href={"/services/digital-marketing/performance-marketing"}>
                <button className="bg-[#3FB4BA] px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Search Engine Marketing
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                We create SEM campaigns that capture demand at the right moment. Using Google Ads and YouTube
                Ads, we target high-intent keywords and design smart bidding strategies that maximize reach and
                relevance. Our digital marketing services Kochi offering includes structured campaigns, precise
                audience targeting, and continuous optimization for better ROI.

              </p>
              <Link href={"/services/digital-marketing/search-engine-marketing"}>
                <button className="bg-[#3FB4BA] px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* second section  */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Search Engine Optimization
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Visibility starts with search. Our SEO experts improve rankings through technical audits, keyword
                research, and on-page optimization. We develop content that ranks organically and attracts the right
                traffic. As part of our services, digital marketing Kochi, we deliver sustainable SEO growth that helps
                brands dominate their niche in Kerala and beyond.
              </p>
              <Link href={"/services/digital-marketing/seo"}>
                <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* third secton  */}

          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Social Media Marketing
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                We manage complete social media ecosystems — from planning and content creation to ad
                management and performance tracking. We craft visuals, captions, and campaigns that engage users
                on platforms like Facebook, Instagram and LinkedIn. Our digital marketing services, Kochi team
                blends creativity with analytics to ensure every post supports your business goals.

              </p>
              <Link href={"/services/digital-marketing/smm"}>
                <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* fourth secton  */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] lg:text-[40px] font-semibold  font-mont leading-[100%]">
                Content Marketing
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Content defines your digital voice. We develop high-quality blogs, articles, videos, and visuals that
                educate, engage, and convert. Our content marketing approach strengthens SEO, boosts traffic, and
                builds brand authority. Accolades Integrated is known for providing services for digital marketing in
                Kochi that businesses use to tell their stories with clarity and impact.

              </p>
              <Link href={"/services/digital-marketing/content-marketing"}>
                <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Digital;
