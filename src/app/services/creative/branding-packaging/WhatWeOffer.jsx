import React from "react";

import arrow from "../../../../../public/creative/Frame 11.svg";
import brand1 from "../../../../../public/creative/branding/Rectangle 6996-1.svg";
import brand2 from "../../../../../public/creative/branding/Rectangle 6996-2.svg";
import brand3 from "../../../../../public/creative/branding/Rectangle 6996-3.svg";
import brand4 from "../../../../../public/creative/branding/Rectangle 6996.svg";

import Image from "next/image";

const cards = [
  {
    title: "Logo Design",
    image: brand1,
  },
  {
    title: "Packaging Design",
    image: brand2,
  },
  {
    title: "Brand Guidelines",
    image: brand3,
  },
  {
    title: "Rebranding",
    image: brand4,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="containers py-8 lg:py-16">
      <h3 className="text-center font-mont font-extrabold text-[24px] md:text-[32px] xl:text-[40px] text-[#3FB4BA]">
        What We Offer
      </h3>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 xl:gap-5 pt-3">
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
              className="object-top object-cover h-[200px] xl:h-[300px] 2xl:h-[450px] w-full rounded-[12px]"
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

export default WhatWeOffer;
