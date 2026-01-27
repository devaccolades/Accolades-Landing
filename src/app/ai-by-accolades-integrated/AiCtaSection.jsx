"use client";

import Image from "next/image";

export default function AiCtaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1CA6A6] to-white px-4 py-12 md:py-20 font-mont mt-[-30px] pb-30">

      {/* Top pill */}
      <div className="flex justify-center mb-6">
        <span className="flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1 text-xs text-white backdrop-blur">
          <span className="text-sm">⚡</span>
          See AI in Action
        </span>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center mb-30">
        <h2 className="text-white text-[18px] md:text-[22px] lg:text-[24px] font-semibold mb-2">
          READY TO TRANSFORM YOUR MARKETING WITH AI?
        </h2>

        <p className="text-white/90 text-[13px] md:text-[14px] max-w-2xl mx-auto mb-6">
          Get a personalized demo or free audit to see how AI can improve your
          campaigns, targeting, and ROI.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center gap-3 mb-10">
          <button className="rounded-lg bg-[#0F6D6D] px-6 py-2 text-[14px] lg:text-[16px] leading-[100%] font-bold text-white hover:bg-[#0b5a5a] transition">
            Request Free Audit
          </button>

          <button className="rounded-lg border border-white/60 px-6 py-2 text-[14px] lg:text-[16px] leading-[100%] font-bold text-white hover:bg-white/10 transition">
            Book a Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto ">
          <Stat value="12+" label="Years Experience" />
          <Stat value="24/7" label="AI Monitoring" />
          <Stat value="100%" label="Human Approved" />
        </div>
      </div>
    </section>
  );
}

/* --- Stat component --- */
function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-[#0F6D6D] text-[22px] md:text-[26px] font-bold">
        {value}
      </div>
      <div className="text-black text-xs md:text-sm">
        {label}
      </div>
    </div>
  );
}
