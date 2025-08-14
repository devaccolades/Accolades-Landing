"use client";
import ProjectSlider from "@/app/(home)/ProjectSlider";
import Image from "next/image";
import React, { useState } from "react";

// import alappat from "../../../../../public/home/alappat.png";
// import family from "../../../../../public/home/family.png";
// import niahara from "../../../../../public/home/nihara.png";
// import silk from "../../../../../public/home/silk_galeria.png";

import pack1 from "../../../../../public/creative/branding/1.1 (1)-min.webp";
import pack2 from "../../../../../public/creative/branding/Mockup_002-min.webp";
import pack3 from "../../../../../public/creative/branding/Poster02-min.webp";
import pack4 from "../../../../../public/creative/branding/Black papper 150_11zon.webp";
import pack5 from "../../../../../public/creative/branding/GARAM MASALA 100g-min_11zon.webp";
import pack6 from "../../../../../public/creative/branding/SAMABAR POWDER 100g_11zon.webp";

import brand1 from "../../../../../public/creative/branding/01 (1)-min.webp";
import brand2 from "../../../../../public/creative/branding/01-min.webp";
import brand3 from "../../../../../public/creative/branding/Square_Book_Mockup_1 copy-min.webp";

import logo1 from "../../../../../public/creative/branding/0222-min.webp";
import logo2 from "../../../../../public/creative/branding/Asset 1.webp";

const logo = [
  { id: 1, src: logo1, alt: "logo" },
  { id: 2, src: logo2, alt: "logo" },
];

const branding = [
  { id: 1, src: brand1, alt: "brand" },
  { id: 2, src: brand2, alt: "brand" },
  { id: 3, src: brand3, alt: "brand" },
  { id: 1, src: brand1, alt: "brand" },
  { id: 2, src: brand2, alt: "brand" },
  { id: 3, src: brand3, alt: "brand" },
];
const packing = [
  { id: 1, src: pack1, alt: "one" },
  { id: 5, src: pack5, alt: "two" },
  { id: 3, src: pack3, alt: "three" },
  { id: 4, src: pack4, alt: "one" },
  { id: 2, src: pack2, alt: "two" },
  { id: 6, src: pack6, alt: "three" },
];

const Featured = () => {
  const [active, setActive] = useState("Package");

  const buttons = [
    // "Logo",
    "Package",
    "Rebranding",
  ];

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
        {/* {active === "Logo" && <ProjectSlider images={logo} />} */}
        {active === "Package" && <ProjectSlider images={packing} />}
        {active === "Rebranding" && <ProjectSlider images={branding} />}
      </div>
    </section>
  );
};

export default Featured;
