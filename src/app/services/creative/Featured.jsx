"use client";
import ProjectSlider from "@/app/(home)/ProjectSlider";
import React, { useState } from "react";
import VideoSlider from "./VideoSlider";
import shade from "../../../../public/creative/Vector (2).svg";
import Image from "next/image";

const categories = ["Branding & Graphics", "Motion & Video"];

const Featured = () => {
  const [active, setActive] = useState("Branding & Graphics");
  return (
    <section className="relative bg-white pt-10 mt-10">
      <Image
        src={shade}
        alt="shade"
        className="w-full h-full absolute left-0 top-[-200px] z-0"
      />
      <div className="relative containers bg-white rounded-[20px] md:rounded-[40px] p-4 md:p-8 shadow-sm">
        <h2 className="text-[32px] xl:text-[40px] font-bold text-[#0199A4] mb-3 z-10">
          Featured Work
        </h2>
        <div className="flex flex-wrap gap-4 ">
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
        {active === "Branding & Graphics" && <ProjectSlider />}
        {active === "Motion & Video" && <VideoSlider />}
      </div>
    </section>
  );
};

export default Featured;
