"use client";

import Squares from "@/components/Squares";
import Image from "next/image";
import { TrendingUp, Target, BarChart3, Zap } from "lucide-react";


const features = [
  {
    title: "Growth",
    subtitle: "Measurable ROI",
    desc: "Data-driven results",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Targeted",
    subtitle: "Local Expertise",
    desc: "Kochi market insight",
    icon: Target,
    color: "text-orange-500",
  },
  {
    title: "Analytics",
    subtitle: "Full Tracking",
    desc: "Clear dashboards",
    icon: BarChart3,
    color: "text-purple-600",
  },
  {
    title: "Fast",
    subtitle: "Quick Wins",
    desc: "Rapid deployment",
    icon: Zap,
    color: "text-pink-600",
  },
];


export default function HeroSection() {
  return (
    <section className="w-full font-mont bg-white relative overflow-hidden mt-10">
      <div className="absolute inset-0 ">

        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#dbdbdb"
          hoverFillColor="#dbdbdb"
        ></Squares>
      </div>
      <div className="containers py-16 lg:py-24  z-999 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block px-[12px] py-[10px] text-[12px] md:text-[13px] leading-[13px] text-black  border border-black rounded-[24px] mb-6">
              Performance Driven
            </span>

            {/* <h1 className="font-urbanist text-[32px] md:text-[30px] lg:text-[36px] xl:text-[48px] leading-[32px] md:leading-[32px] lg:leading-[36px] xl:leading-[48px] font-bold mb-2  lg:mb-6"> */}
                <h1 className="mt-0 text-[28px] lg:text-3xl xl:text-4xl font-bold leading-tight text-left text-black">
              DIGITAL MARKETING <br className="hidden xl:block"/>
              AGENCY IN KOCHI FOR <br className="hidden xl:block"/>
              STRATEGY && GROWTH
            </h1>

            <p className="text-black text-[14px] lg:text-[16px] leading-[156%] mb-8 max-w-xl">
              Accolades Integrated is an end to end Digital Marketing Agency in
              Kochi. Our services cover performance marketing, search engine
              marketing, SEO, social media marketing, and content marketing. We
              plan campaigns, run ads, and build systems that drive leads and
              sales.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex gap-4">
              <button className="bg-teal-600 text-white text-[12px] md:text-[14px] lg:text-[16px] leading-[100%] px-[16px] py-[10px] rounded-[10px] hover:bg-teal-700 transition">
                Get Started →
              </button>

              <button className="border border-teal-600 text-teal-600 text-[12px] md:text-[14px] lg:text-[16px] leading-[100%]  px-[16px] py-[10px] rounded-[10px] hover:bg-teal-50 transition">
                View Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE WITH SIDE TEXTS */}
          <div className="relative flex items-center justify-center">

            {/* LEFT TEXT */}
            <span className="absolute max-w-[100px] left-0 top-1/2 -translate-y-1/2 text-[16px] lg:text-[16px] leading-[18px] text-black font-semibold">
              Traditional Marketing
            </span>

            {/* MAIN IMAGE */}
            <Image
              src="/new-digital/dino.svg"
              alt="Marketing Comparison"
              width={380}
              height={420}
              className="object-contain"
            />

            {/* RIGHT TEXT */}
            <span className="absolute max-w-[100px] right-0 top-1/2 -translate-y-1/2 text-[16px] lg:text-[16px] leading-[18px] font-semibold  text-[#0C7379]">
              Digital Marketing
            </span>

          </div>

        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-10">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white p-3 lg:p-5 rounded-xl border hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <h4 className="font-semibold">{item.title}</h4>
                </div>

                <p className="font-medium text-[13px] md:text-sm">{item.subtitle}</p>
                <p className="text-gray-500 text-[13px]  md:text-sm mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
