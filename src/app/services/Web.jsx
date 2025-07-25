import React from "react";
import image1 from "../../../public/services/digital.png";
import Image from "next/image";

function Web() {
  return (
    <seciton className="w-full flex justify-end overflow-visible mt-96">
      <p className="text-[#3FB4BA] text-[91px] font-bold font-mont w-fit transform -rotate-[90deg] h-fit sticky top-50">
        WEB
      </p>
      <div className="flex flex-col gap-[10 px] w-[80%] ">
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          <div className="w-[343px] h-[343px] ">
            <Image
              src={image1}
              alt="google ads image"
              height={100}
              width={100}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-4 p-[30px]">
            <h1 className="text-[#3FB4BA] text-[50px] font-mont leading-[100%]">
              Creative Design
            </h1>
            <h2 className="text-[#6D6D6D] text-[36px] font-mont font-normal leading-[130%] max-w-md">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur. Ultrices tristique orci
              non a ultrices eget libero. Convallis aliquet ac sed sit gravida
              eget. Nunc lacus velit quisque mauris vulputate hendrerit lorem
              mauris massa. Amet posuere eu elit in.
            </p>
            <button className="bg-[#3FB4BA] px-[40px] py-[12px] text-white w-fit text-[16px] font-mont rounded-xl font-semibold mt-[15px]">
              see more
            </button>
          </div>
        </div>
      </div>
    </seciton>
  );
}

export default Web;
