"use client";
import ProjectSlider from "@/app/(home)/ProjectSlider";
import React, { useState } from "react";
import VideoSlider from "./VideoSlider";
import shade from "../../../../public/creative/Vector (2).svg";
import Image from "next/image";

import p1 from "../../../../public/creative/2-7-25 copy-min.jpg";
import p2 from "../../../../public/creative/22-5-25 copy-min.jpg";
import p3 from "../../../../public/creative/24-5-25 copy-min.jpg";
import p4 from "../../../../public/creative/arya bhangi 7-7-25-min.jpg";
import p5 from "../../../../public/creative/corel1 copy-min.jpg";
import p6 from "../../../../public/creative/curegarden 05 copy-min.jpg";
import p7 from "../../../../public/creative/futura 07  bali copy-min.jpg";

const categories = ["Branding & Graphics", "Motion & Video"];

const posters = [
  { id: 1, src: p1, alt: "poster" },
  { id: 2, src: p2, alt: "poster" },
  { id: 3, src: p3, alt: "poster" },
  { id: 4, src: p4, alt: "poster" },
  { id: 5, src: p5, alt: "poster" },
  { id: 6, src: p6, alt: "poster" },
  { id: 7, src: p7, alt: "poster" },
  { id: 1, src: p1, alt: "poster" },
  { id: 2, src: p2, alt: "poster" },
  { id: 3, src: p3, alt: "poster" },
  { id: 4, src: p4, alt: "poster" },
  { id: 5, src: p5, alt: "poster" },
  { id: 6, src: p6, alt: "poster" },
  { id: 7, src: p7, alt: "poster" },
];

const Featured = () => {
  const [active, setActive] = useState("Branding & Graphics");
  return (
    <section className="relative bg-white pt-6 md:pt-10">
      <Image
        src={shade}
        alt="shade"
        className="w-full h-full absolute left-0 top-[-200px] z-0"
      />
      <div className="relative containers bg-white rounded-[20px] md:rounded-[40px] p-4 md:p-8 shadow-sm">
        <h2 className="text-[32px] xl:text-[40px] font-bold text-[#0199A4] mb-3 z-10">
          Featured Work
        </h2>
        <div className="flex flex-wrap md:gap-4 gap-2 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-6 py-2 rounded-full border-2 text-sm font-medium transition-all
                ${
                  active === category
                    ? "bg-[#0199A4] text-white border-[#0199A4]"
                    : "bg-white text-[#0199A4] border-[#0199A4] hover:bg-[#0199A4] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="relative ">
        {/* Conditionally render components */}
        {active === "Branding & Graphics" && <ProjectSlider images={posters} />}
        {active === "Motion & Video" && <VideoSlider />}
      </div>
    </section>
  );
};

export default Featured;
