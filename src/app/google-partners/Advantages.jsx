"use client";
import Image from "next/image";
import React from "react";

// replace with your actual image
import chartImg from "../../../public/google-partner/advantage.jpg";

const Advantages  = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F8F8F8] rounded-3xl">
      <div className="  containers ">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-mont font-bold text-[18px] md:text-[20px] text-black">
            ADVANTAGES FOR YOUR BRAND
          </h2>
          <p className="font-mont font-semibold text-[13px] md:text-[14px] leading-[170%] text-black mt-3">
            Working with a Google Partner agency in Kochi like Accolades
            Integrated gives your brand practical advantages that translate to
            better results and higher ROI.
          </p>
        </div>

         <div className="block md:hidden relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden">
            <Image
              src={chartImg}
              alt="Campaign growth chart"
              fill
              className="object-cover"
            />
          </div>

        {/* MAIN CONTENT */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <div>
              <h3 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
                OPTIMIZED CAMPAIGN PERFORMANCE
              </h3>
              <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
                Google Partners continually refine their skills by running real
                ad campaigns. We invest our own budgets in Google Ads, which
                means we blaze the trail by testing and tuning campaigns to
                achieve top results.
              </p>
            </div>

            <div>
              <h3 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
                ALWAYS UP-TO-DATE STRATEGIES
              </h3>
              <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
                Because Google Partners must complete regular training and
                exams, we stay current with the latest strategies and algorithm
                changes. Your campaigns leverage cutting-edge techniques,
                keeping you one step ahead of competitors.
              </p>
            </div>

            <div>
              <h3 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
                QUICK ISSUE RESOLUTION
              </h3>
              <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
                Partners have direct support from Google. If your campaign
                encounters an issue, we can quickly escalate it to a Google
                account manager or support engineer. This fast support minimizes
                downtime and keeps your marketing on track.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden">
            <Image
              src={chartImg}
              alt="Campaign growth chart"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
              COMPREHENSIVE EXPERTISE
            </h4>
            <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
              Our Google Ads specialists are certified across multiple Google
              products — search, display, YouTube, video, shopping, and more.
              We tailor your strategy across formats to maximize reach and
              conversions.
            </p>
          </div>

          <div>
            <h4 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
              INTEGRATED DIGITAL MARKETING
            </h4>
            <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
              Beyond just Google Ads, we combine our Partner expertise with
              other channels. Our team couples paid campaigns with content
              marketing, SEO, and social media strategies for a full,
              omni-channel approach.
            </p>
          </div>

          <div>
            <h4 className="font-mont font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[14px] md:leading-[16px] lg:leading-[18px] text-black">
              TRANSPARENCY AND INSIGHTS
            </h4>
            <p className="font-mont text-[12px] md:text-[13px] lg:text-[14px] leading-[130%] lg:leading-[156%] text-black mt-2">
              Google Partners have access to advanced insights and analytics
              tools. We use Google Analytics and other data tools to track
              campaign performance closely, providing detailed reporting and
              informed adjustments in real time.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="font-mont text-[12px] leading-[170%] font-semibold text-black text-center mt-10 max-w-4xl mx-auto">
          By leveraging these advantages, brands working with a Google Partner
          in Kochi can expect more effective advertising, better support, and
          measurable growth in their online marketing efforts.
        </p>
      </div>
    </section>
  );
};

export default Advantages;
