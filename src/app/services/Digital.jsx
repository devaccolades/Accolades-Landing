import Image from "next/image";
import React from "react";
import image1 from "../../../public/services/digital.png";

function Digital() {
  return (
    <seciton>
      <div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-[343px] h-[343px] ">
            <Image
              src={image1}
              alt="google ads image"
              height={100}
              width={100}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[#3FB4BA] text-[50px] font-mont leading-[100%]">
              Google Ads
            </h1>
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur. Ultrices tristique orci
              non a ultrices eget libero. Convallis aliquet ac sed sit gravida
              eget. Nunc lacus velit quisque mauris vulputate hendrerit lorem
              mauris massa. Amet posuere eu elit in.
            </p>
            <button className="bg-[#3FB4BA] px-[40px] py-[12px] text-white w-fit">
              see more
            </button>
          </div>
        </div>
      </div>
    </seciton>
  );
}

export default Digital;
