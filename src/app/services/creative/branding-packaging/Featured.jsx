"use client";
import ProjectSlider from "@/app/(home)/ProjectSlider";
import Image from "next/image";
import React, { useState } from "react";

import alappat from "../../../../../public/home/alappat.png";
import family from "../../../../../public/home/family.png";
import niahara from "../../../../../public/home/nihara.png";
import silk from "../../../../../public/home/silk_galeria.png";

const slider1 = [
  { id: 1, src: alappat, alt: "Alappat" },
  { id: 2, src: alappat, alt: "Family" },
  { id: 3, src: alappat, alt: "Niahara" },
  { id: 4, src: alappat, alt: "Silk Galeria" },
  { id: 5, src: alappat, alt: "Silk Galeria" },
];

const slider2 = [
  { id: 1, src: family, alt: "Alappat" },
  { id: 2, src: family, alt: "Family" },
  { id: 3, src: family, alt: "Niahara" },
  { id: 4, src: family, alt: "Silk Galeria" },
  { id: 5, src: family, alt: "Silk Galeria" },
];
const slider3 = [
  { id: 1, src: niahara, alt: "Alappat" },
  { id: 2, src: niahara, alt: "Family" },
  { id: 3, src: niahara, alt: "Niahara" },
  { id: 4, src: silk, alt: "Silk Galeria" },
  { id: 5, src: silk, alt: "Silk Galeria" },
];

const Featured = () => {
  const [active, setActive] = useState("Logo");

  const buttons = ["Logo", "Package", "Rebranding"];

  return (
    <section className=" py-5">
      <h2 className="containers text-[32px] xl:text-[40px] font-bold text-[#0199A4] mb-4">
        Featured Work
      </h2>
      <div className="containers flex gap-2 flex-wrap">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`px-4 py-2 rounded-full text-base font-medium border transition-all duration-200
              ${
                active === btn
                  ? "bg-[#38B6B2] text-white border-transparent"
                  : "border-[#38B6B2] text-[#38B6B2] hover:bg-[#38B6B2]/10"
              }`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="relative ">
        {active === "Logo" && <ProjectSlider images={slider1} />}
        {active === "Package" && <ProjectSlider images={slider2} />}
        {active === "Rebranding" && <ProjectSlider images={slider3} />}
      </div>
    </section>
  );
};

export default Featured;
