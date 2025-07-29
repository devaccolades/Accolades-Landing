import Image from "next/image";
import React from "react";
import image1 from "../../../public/services/digital.png";
import web from "../../../public/services/web.png";
import creative from "../../../public/services/creative.png";

function Creative() {
  return (
    <seciton className="w-[90%] mx-auto flex justify-end overflow-visible mt-24 md:mt-96 relative z-10">
      <div className="flex gap-[10px] w-full">
        <div className="w-[10%] md:w-[10%] lg:w-[15%]">
          <Image
            src={creative}
            alt="creative"
            height={100}
            width={100}
            className="w-fit h-fit sticky top-50 mt-0"
          />
        </div>
        <div className="w-full flex flex-col gap-10 md:gap-[100px] lg:gap-[130px]  p-5 rounded-xl">
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
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-lg max-w-[338px] lg:max-w-[608px]">
              <h1 className="text-[#3FB4BA] text-[28px] md:text-[35px] lg:text-[75px] font-semibold font-mont leading-[100%]">
                Creative Design
              </h1>
              <h1 className="text-[24px] leading-[150%] font-semibold font-mont">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Lorem ipsum dolor sit amet consectetur. Ultrices tristique orci
                non a ultrices eget libero. Convallis aliquet ac sed sit gravida
                eget. Nunc lacus velit quisque mauris vulputate hendrerit lorem
                mauris massa. Amet posuere eu elit in.
              </p>
              <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-xl font-semibold mt-[15px]">
                see more
              </button>
            </div>
          </div>
        </div>
      </div>
    </seciton>
  );
}

export default Creative;
