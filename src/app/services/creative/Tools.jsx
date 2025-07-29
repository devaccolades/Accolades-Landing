import React from "react";
import adobeE from "../../../../public/creative/Adobe_After_Effects_CC_icon.svg 1.png";
import adobeC from "../../../../public/creative/Adobe_Creative_Cloud_rainbow_icon.svg 1.png";
import adobeP from "../../../../public/creative/Adobe_Premiere_Pro_CC_icon.svg 1.png";
import canva from "../../../../public/creative/Canva-New-Logo-1440x810 1.png";
import Image from "next/image";

const tools = [
  { name: "After Effects", icon: adobeE },
  { name: "Adobe Creative Cloud", icon: adobeC },
  { name: "Canva Pro", icon: adobeP },
  { name: "Premiere Pro", icon: canva },
];

const Tools = () => {
  return (
    <main
      className=""
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <section className="containers font-mont pb-32 ">
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
            Lorem ipsum dolor sit amet consectetur. Eget porttitor elementum
            hendrerit a diam suspendisse tellus. Consequat enim auctor dignissim
            mattis vitae tincidunt. Facilisis mi neque tellus viverra ac mauris
            adipiscing nulla. Praesent purus ornare non eros et.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Tools;
