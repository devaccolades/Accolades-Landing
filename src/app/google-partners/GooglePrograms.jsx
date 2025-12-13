"use client";
import Image from "next/image";
import React from "react";

// 🔹 Replace with your actual paths
import bg from "../../../public/google-partner/partner-bg.jpg";
import memberIcon from "../../../public/google-partner/mem.svg";
import partnerIcon from "../../../public/google-partner/par.svg";
import premierIcon from "../../../public/google-partner/pre.svg";

const cards = [
  {
    title: "MEMBER",
    desc: "Entry level with basic certifications",
    icon: memberIcon,
    border: "border-orange-300",
    bg: "bg-orange-50",
  },
  {
    title: "PARTNER",
    desc: "Proven expertise and performance",
    icon: partnerIcon,
    border: "border-green-300",
    bg: "bg-green-50",
  },
  {
    title: "PREMIER",
    desc: "Highest tier with exclusive benefits",
    icon: premierIcon,
    border: "border-blue-300",
    bg: "bg-blue-50",
  },
];

const GooglePartnersProgram  = () => {
  return (
    <section className="">
      {/* Background container */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background image */}
        <Image
          src={bg}
          alt="Google Partners Program Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay content */}
        <div className="containers relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 py-8 md:py-12 lg:py-16">
          
          {/* LEFT CONTENT */}
          <div>
            <h3 className="font-mont font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] lg:leading-[16px] text-black mb-4">
              WHAT IS THE GOOGLE PARTNERS PROGRAM?
            </h3>

            <p className="font-mont text-[13px] lg:text-[14px] leading-[170%] text-black mb-2">
              The Google Partners program is designed for advertising agencies
              and third parties that run Google Ads campaigns for other
              businesses. Google grants the Partners badge to agencies that meet
              its requirements.
            </p>

            <p className="font-mont text-[13px] lg:text-[14px] leading-[170%] text-black mb-2">
              These include having certified Google Ads professionals,
              maintaining a healthy ad campaign performance, and meeting
              spending thresholds.
            </p>

            <p className="font-mont text-[13px] lg:text-[14px] leading-[170%] text-black">
              There are three tiers in the program — Member, Partner, and
              Premier — each with its own set of benefits. In Kochi, as in any
              region, an agency with Google Partner status has proven that it
              understands Google Ads at a deep level.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-4">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-2 md:p-5 rounded-2xl bg-white border ${item.border} shadow-sm`}
              >
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center rounded-xl">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={44}
                    height={44}
                  />
                </div>

                <div>
                  <p className="font-mont font-semibold text-black">
                    {item.title}
                  </p>
                  <p className="font-mont text-[13px] text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GooglePartnersProgram ;
