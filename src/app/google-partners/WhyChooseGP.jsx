"use client";
import Image from "next/image";
import React from "react";

// replace with your actual image path
import kochiImg from "../../../public/google-partner/whyg.png";

import {
  MapPin,
  TrendingUp,
  Headphones,
  Layers,
  Award,
  Target,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "LOCAL MARKET INSIGHT",
    desc: "We understand the Kochi/Kerala market, consumer preferences, and regional trends. This local knowledge informs our Google Ads strategy and helps target the right audience.",
  },
  {
    icon: TrendingUp,
    title: "PROVEN TRACK RECORD",
    desc: "As a Google Partner, we have demonstrated past success growing clients’ businesses. Our case studies span from ecommerce to national campaigns, showing measurable revenue growth.",
  },
  {
    icon: Headphones,
    title: "DEDICATED SUPPORT",
    desc: "Being in Kochi means you can reach our team easily for meetings or on-site consultations. Our in-house Google-certified experts are just a phone call away.",
  },
  {
    icon: Layers,
    title: "COMPREHENSIVE SERVICES",
    desc: "Beyond Google Ads, we offer full-service digital marketing—SEO, social media, content, etc. Get a single agency managing all your online marketing for consistency and efficiency.",
  },
  {
    icon: Award,
    title: "CERTIFIED EXPERTS",
    desc: "Our marketers hold the relevant Google Ads certifications. We regularly train on Google’s platforms to maintain our status and commitment to continuous learning.",
  },
  {
    icon: Target,
    title: "COMMITMENT TO RESULTS",
    desc: "Being a Google Partner drives us to maintain high standards. We keep up with data-driven strategies and advanced tools to deliver measurable improvements to your campaigns.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="font-mont font-bold text-[18px] md:text-[20px] text-black">
              WHY CHOOSE A GOOGLE PARTNER IN KOCHI?
            </h2>

            <p className="font-mont font-semibold text-[13px] md:text-[14px] leading-[170%] text-black mt-3">
              Accolades Integrated is headquartered in Kochi, with additional
              offices across Kerala and India. As a local Google Partner
              agency, we combine global Google Ads expertise with deep
              knowledge of the Kochi market and Kerala region.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[80px] sm:h-[80px] md:h-[160px] rounded-2xl overflow-hidden">
            <Image
              src={kochiImg}
              alt="Kochi Chinese fishing nets"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-2 md:p-4 lg:p-6 border border-gray-100"
              >
                <div className="flex items-start gap-2 md:gap-4">
                  <div className="w-10 h-10 rounded-[10px] bg-[#086a6a] p-2 flex items-center justify-center">
                    <Icon size={20} className="text-[#f7f9f9]" />
                  </div>

                  <div>
                    <h3 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
                      {item.title}
                    </h3>
                    <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
