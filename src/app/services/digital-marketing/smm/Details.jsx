import Image from "next/image";
import React from "react";

import data from "../../../../../public/google/Group 249.svg";
import mobile from "../../../../../public/google/OBJECTS (2).svg";

const Details = () => {
  return (
    <section className="containers">
      <div className="bg-white p-[5%] md:p-[3%] rounded-[20px] md:rounded-[30px]">
        <p className="font-mont text-[16px] md:text-[18px] font-bold leading-[156%] pb-10">
          We are experienced professionals, who sketch out efficient Social
          Media Marketing strategy and Packages to help you.
        </p>
        <div className="flex justify-center items-center">
          <Image src={data} alt="cover" className="hidden md:block " />
          <Image src={mobile} alt="cover" className=" md:hidden " />
        </div>
        <div className="pt-5 block md:hidden space-y-2">
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            Boost your sales and leads
          </p>
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            Improve search engine rankings
          </p>
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            To actively involve with your wide range of customers
          </p>
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            Increase awareness about your brand
          </p>
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            Choose the best social media platform to cultivate an engaging
            customer base which fits the personality of your brand
          </p>
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            Identify key influencers
          </p>
          <p className="bg-[#F2FBFB] border border-[#BFE1DE] rounded-[20px] text-center text-[13px] p-2">
            Monitor engagements and backlinks you receive through campaigns
            (likes, shares)
          </p>
        </div>
        <p className="font-mont text-[13px] md:text-[16px] font-normal leading-[156%] pt-10">
          We are one of the leading Best Social media marketing agency Kochi and
          also Google AdWords partner in kochi , as we have extended our Social
          Media Management sector to Calicut also. The key element to success in
          your business is, to realize the potential for growth in this platform
          by, utilizing the opportunities that is offered from our proficient
          team in Social Media Marketing.
        </p>
      </div>
    </section>
  );
};

export default Details;
