"use client";

import Image from "next/image";
import Link from "next/link";


export default function CtaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1CA6A6] to-white px-4 py-12 md:py-20 font-mont  pb-30">
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center mb-30">
        <h2 className="text-white text-[32px] md:text-[48px] lg:text-[64px] leading-[32px] md:leading-[48px] lg:leading-[64px]  mb-2">
          Ready to Understand Your Market?
        </h2>

        <p className="text-white/90 text-[14px] lg:text-[16px] leading-[18px] max-w-2xl mx-auto mb-6">
          Let us map your market in a short call.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center gap-3 mb-10">
          

           <a
           href="tel:+919048100233" 
          >
            <button className="group flex flex-row items-center gap-1 rounded-lg border border-[#0C7379] px-2 md:px-6 py-2 text-[13px] lg:text-[16px] leading-[100%] font-bold text-[#0C7379] hover:text-white hover:bg-[#0F6D6D] transition">
              Schedule a Call
              <span className="text-lg"> ↗</span>
            </button>
          </a>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto ">
          <Stat value="15+" label="Markets Analyzed" />
          <Stat value="40%" label="Avg. CAC Reduction" />
          <Stat value="2.5x" label="Conversion Improvement" />
        </div>
      </div>
    </section>
  );
}

/* --- Stat component --- */
function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-[#0F6D6D] text-[36px] md:text-[40px] lg:text-[48px] leading-[36px] md:leading-[40px] lg:leading-[48px] font-semibold">
        {value}
      </div>
      <div className="text-black text-[13px] md:text-[14px] leading-[120%]">
        {label}
      </div>
    </div>
  );
}
