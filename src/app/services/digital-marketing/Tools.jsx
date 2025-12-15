import React from "react";
import adobeE from "../../../../public/services/metaa.png";
import adobeC from "../../../../public/services/g-ads.jpg";
import lin from "../../../../public/services/link.png";
import adobeP from "../../../../public/creative/Adobe_Premiere_Pro_CC_icon.svg 1.webp";
import canva from "../../../../public/creative/Canva-New-Logo-1440x810 1.webp";
import pr from "../../../../public/creative/Adobe_Premiere_Pro_CC_icon.svg 2.svg";
import illus from "../../../../public/creative/c3e0457062b464bcdaa727faec5642528bcb2fb7.webp";
import Image from "next/image";

const tools = [
  { name: "Meta Ads", icon: adobeE },
  { name: "Google Ads", icon: adobeC },
  {name: "LinkedIn Ads",icon: lin,},
  //   { name: "Canva Pro", icon: canva },
  //   { name: "Premiere Pro", icon: adobeP },
  //   { name: "Adobe Illustrator", icon: illus },
];

const Tools = () => {
  return (
    // <main
    //   className=""
    //   style={{
    //     background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
    //   }}
    // >
      <section className="containers font-mont pt-6 pb-12 ">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0199A4] mb-8">
            Tools & Platforms We Use
          </h2>

          <div className="flex flex-wrap justify-center items-Start gap-8 mb-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center  w-[fit]">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="mb-2"
                  priority={false}
                  loading="lazy"
                />
                <p className="font-semibold text-[12px] md:text-[14px]">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-sm  mx-auto">
            We leverage industry-leading tools to ensure every digital marketing
            campaign is efficient, targeted, and result-oriented. Our team uses
            Google Ads to run highly optimized search and display campaigns,
            while Meta Business Suite helps us manage and monitor Facebook and
            Instagram ads seamlessly across platforms. To track and measure
            performance, we rely on Google Analytics, offering deep insights
            into user behavior and campaign ROI. These tools, combined with our
            strategic expertise, enable us to make data-driven decisions, refine
            targeting, and maximize the impact of every marketing initiative.
          </p>
        </div>
      </section>
    // </main>
  );
};

export default Tools;
