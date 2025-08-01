import React from "react";
import adobeE from "../../../../public/services/meta.png";
import adobeC from "../../../../public/services/gads.png";
import adobeP from "../../../../public/creative/Adobe_Premiere_Pro_CC_icon.svg 1.png";
import canva from "../../../../public/creative/Canva-New-Logo-1440x810 1.png";
import pr from "../../../../public/creative/Adobe_Premiere_Pro_CC_icon.svg 2.svg";
import illus from "../../../../public/creative/c3e0457062b464bcdaa727faec5642528bcb2fb7.png";
import Image from "next/image";

const tools = [
  { name: "Meta Ads", icon: adobeE },
  { name: "Google Ads", icon: adobeC },
//   { name: "Canva Pro", icon: canva },
//   { name: "Premiere Pro", icon: adobeP },
//   { name: "Adobe Illustrator", icon: illus },
];

const Tools = () => {
  return (
    <main
      className=""
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <section className="containers font-mont pt-6 pb-32 ">
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
                />
                <p className="font-semibold text-[12px] md:text-[14px]">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-sm max-w-3xl mx-auto">
            Our team leverages industry-leading tools to bring creativity and
            precision to every project. From motion graphics with After Effects
            to design and layout with Illustrator and Canva Pro, we ensure every
            visual asset meets the highest standards. These platforms empower us
            to craft compelling content, streamline collaboration, and deliver
            impactful results across digital and print media.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Tools;
