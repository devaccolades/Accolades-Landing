"use client";
import React from "react";
import {
  GraduationCap,
  Headphones,
  Award,
  Zap,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    title: "EDUCATION & INSIGHTS",
    desc: "We get ongoing Google Ads training, certifications, and industry reports to stay up-to-date on trends. Google Partners build product knowledge and earn certifications on Skillshop, and can expand their expertise through livestreams and on-demand training.",
    icon: <GraduationCap size={20} />,
    bg: "bg-blue-100 text-blue-600",
  },
  {
    title: "ACCESS & SUPPORT",
    desc: "Our agency has access to dedicated Google support channels and product resources. If campaign issues arise, we can escalate directly to Google’s technical team and often get faster resolution than non-partners.",
    icon: <Headphones size={20} />,
    bg: "bg-green-100 text-green-600",
  },
  {
    title: "RECOGNITION & REWARDS",
    desc: "We earn the Google Partner badge and, if qualified as a Premier Partner, a Premier Partner badge to display our expertise. Partners also qualify for rewards like promotional Ad Credits for new clients.",
    icon: <Award size={20} />,
    bg: "bg-orange-100 text-orange-600",
  },
  {
    title: "EARLY ACCESS TO NEW FEATURES",
    desc: "Google Partners often get early access to beta features and new ad formats before the general public, helping campaigns stay ahead of the curve.",
    icon: <Zap size={20} />,
    bg: "bg-purple-100 text-purple-600",
  },
  {
    title: "CREDIBILITY AND TRUST",
    desc: "The Google Partner status builds trust. It shows that our agency has a proven track record of delivering results and meets Google’s standards for expertise and performance.",
    icon: <ShieldCheck size={20} />,
    bg: "bg-red-100 text-red-600",
  },
];

const  Benefits = () => {
  return (
    <section className="containers py-8 md:py-12 lg:py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-mont font-bold text-[18px] md:text-[20px] text-black">
          BENEFITS OF BEING A GOOGLE PARTNER
        </h2>
        <p className="font-mont text-[13px] md:text-[14px] leading-[170%] text-black mt-3">
          By joining the Google Partners program, Accolades Integrated gains
          exclusive benefits in three key areas: education & insights, access &
          support, and recognition & rewards. This enables us to offer our
          clients in Kochi better service and results.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border p-4 md:p-6 shadow-sm"
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-mont font-semibold text-black text-[14px] mt-2 md:mt-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-mont text-[12px] leading-[170%] text-black mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default  Benefits;
