import React from "react";
import one from "../../../../../public/google/Google-Ads (1).svg";
import two from "../../../../../public/google/Display-Ads.svg";
import three from "../../../../../public/google/Video-Ads.svg";
import four from "../../../../../public/google/Mobile-In-App-Ads.svg";
import five from "../../../../../public/google/Product-Listing-Ads.svg";
import six from "../../../../../public/google/Remarketing-Ad.svg";
import Image from "next/image";

const adTypes = [
  {
    icon: one,
    title: "Google Search Ads",
    description:
      "It’s the prevalent method of strategically placing online advertisements on web pages that accurately report desired results from search engine queries. That is, when a user searches for something on Google, the official list of the ads that instantly appear above the organic listing is called Search Ad.",
  },
  {
    icon: two,
    title: "Display Ads",
    description:
      "They invariably refer to the creative process of properly advertising a specific product or service through impressive visuals on social networks of publisher websites such as the Google Display Network and Facebook. It’s extremely effective in promoting business services.",
  },
  {
    icon: three,
    title: "Video Ads",
    description:
      "It refers to advertising that occurs before, during and/or after a video stream on the internet. This distinct type of Ads grants the advertisers to intentionally run Video Ad on YouTube and other Google Display Networks.",
  },
  {
    icon: four,
    title: "Mobile In - App Ads",
    description:
      "An approach that is helpful for businesses, with Mobile App. With this the advertiser can promote the Mobile App across search, Play Store, Display, and YouTube.",
  },
  {
    icon: five,
    title: "Product Listing Ads",
    description:
      "If you are a retailer, this campaign type would make more sense for you. It boosts traffic to your website especially for E-commerce websites and helps in generating quality leads as well as increasing conversions.",
  },
  {
    icon: six,
    title: "Remarketing Ads",
    description:
      "Remarketing allows reconnecting with users who previously interacted with a website or mobile apps. It helps strategically position ads to increase brand awareness or remind spectators to make a purchase.",
  },
];

const Cards = () => {
  return (
    <section
      className=" font-mont py-5 pb-40"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <section className="containers">
        <h1 className="text-center text-[24px] md:text-[40px] font-extrabold text-[#3FB4BA] pb-5">
          Types Of Google Ads
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {adTypes.map((ad, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#e4e4e4]"
            >
              <div className="flex justify-center">
                <Image
                  src={ad.icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="h-[80px] w-auto pb-3 mb-3"
                />
              </div>
              <h2 className="text-[#3FB4BA] text-xl font-semibold text-center mb-2 mt-1">
                {ad.title}
              </h2>
              <p className="text-center text-gray-700 text-sm">
                {ad.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
