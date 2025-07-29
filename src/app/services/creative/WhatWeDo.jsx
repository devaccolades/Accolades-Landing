import Image from "next/image";
import React from "react";
import brand from "../../../../public/creative/Rectangle 6996.svg";
import video from "../../../../public/creative/Rectangle 6996-2.svg";
import motion from "../../../../public/creative/Rectangle 6996-1.svg";
import arrow from "../../../../public/creative/Frame 11.svg";

const cards = [
  {
    title: "Branding & Packaging",
    image: brand,
    bgColor: "bg-[#26C5D9]",
  },
  {
    title: "Graphics & Motion",
    image: motion,
    bgColor: "bg-[#EF3E3E]",
  },
  {
    title: "Video Production",
    image: video,
    bgColor: "bg-[#62C5F8]",
  },
];

const WhatWeDo = () => {
  return (
    <section className="containers">
      <h3 className="text-center font-mont font-extrabold text-[40px] text-[#3FB4BA]">
        What We Do
      </h3>
      <div className="flex flex-col md:flex-row justify-between gap-5 xl:gap-10 pt-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full h-auto rounded-[20px] bg-white shadow-lg overflow-hidden flex flex-col justify-between p-2"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={100}
              height={100}
              className="object-top object-cover h-[200px] lg:h-[300px] 2xl:h-[450px] w-full rounded-[12px]"
            />

            <div className="py-2 flex justify-between items-center">
              <h3 className="text-[16px] xl:text-[24px] leading-[100%] font-medium text-[#007A8B]">
                {card.title}
              </h3>
              <Image src={arrow} alt="icon" className="w-[32px]  h-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
