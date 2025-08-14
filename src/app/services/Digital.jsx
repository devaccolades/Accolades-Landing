import Image from "next/image";
import React from "react";
import image1 from "../../../public/services/digital.png";
import digital from "../../../public/services/digitals.png";
import Link from "next/link";

function Digital() {
  return (
    <seciton className="flex justify-center overflow-visible relative z-10 mx-auto w-[90%]">
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
          <p className="font-mont text-[28px] md:text-[35px] lg:text-[75px] font-semibold leading-[110%] text-center text-[#3FB4BA] mt-[17px] md:mt-[35px]">
            Digital Marketing
          </p>
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
              <h1 className="text-[#3FB4BA] text-[28px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Search Engine Marketing
              </h1>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                It’s the prevalent method of strategically placing online
                advertisements on web pages that accurately report desired
                results from search engine queries. That is, when a user
                searches for something on Google, the official list of the ads
                that instantly appear above the organic listing is called Search
                Ad.
              </p>
              <Link href={"/services/digital-marketing/search-engine-marketing"}>
                <button className="bg-[#3FB4BA] px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* second section  */}
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
              <h1 className="text-[#3FB4BA] text-[28px]md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Search Engine Optimization
              </h1>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Our team, Accolades Media the digital marketing agency in Kochi
                possesses the top Search Engine Optimization experts, who are
                professionally specialized, in Search Engine Optimization
                Services, to elevate our prospective clientele to the front
                runner in any search engine, by prioritizing the appropriate
                keywords that are suitable to generate the potential traffic to
                experience enhanced webpage visibility. The add-on advantage of
                receiving the professional guidance of a Search Engine Optimizer
                like us is to uplift and prioritize the randomly gathered
                contents from the internet.
              </p>
              <Link href={"/services/digital-marketing/seo"}>
                <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* third secton  */}

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
              <h1 className="text-[#3FB4BA] text-[28px]md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Social Media Marketing
              </h1>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                We are a leading social media marketing agency Kochi that aims
                to develop successful content, run effective campaigns, and
                forge strong customer bonds for a brand. With a focus on
                creative work combined with data analysis, we provide you with
                engaging content for your social media profiles that do more
                than grab people’s attention.
              </p>
              <Link href={"/services/digital-marketing/smm"}>
                <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* fourth secton  */}
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
              <h1 className="text-[#3FB4BA] text-[28px]md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Content Marketing
              </h1>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                A category of marketing that involves the creation and sharing
                of relevant and consistent online content, such as videos,
                blogs, and social media posts that do not explicitly promote a
                brand but is intended to stimulate interest in its products or
                services. Its long-term strategy builds a strong relationship
                with your target audience by giving them high-quality content
                that is appropriate.
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
    </seciton>
  );
}

export default Digital;
