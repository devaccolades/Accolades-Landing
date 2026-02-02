"use client";
import { useState } from "react";

export default function EcommerceFaq({ faqData, title ,subtitle }) {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-4">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-black ">
        {title}</h2>
      {subtitle && (
        <p className="mb-8 text-[13px] md:text-[15px] text-gray-600 max-w-3xl mb-10">
          {subtitle}
        </p>
      )}
      <div className="space-y-0 border-t border-gray-300">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-300">

            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center text-black py-3 text-[14px] md:text-[16px] font-semibold tracking-tight"
            >
              <span>{item.q}</span>
              <span className="text-3xl pr-4">{openIndex === i ? "−" : "+"}</span>
            </button>

            {/* Dropdown Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-black font-semibold font-mont text-[13px] md:text-[14px] leading-relaxed px-1">{item.a}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
