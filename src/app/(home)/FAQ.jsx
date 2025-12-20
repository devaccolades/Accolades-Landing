"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
         q: "What makes Accolades Integrated the leading branding agency in Kochi?",
         a: "Accolades Integrated stands out for its strategy-driven design, creative execution, and measurable results. As a full-service branding agency in Kochi, we blend research, creativity, and digital expertise to build brands that connect with people and perform in the market." 
    },
    {
         q: "How can a branding company in Kochi help my business grow?", 
         a: "A strong brand builds trust, recognition, and loyalty. The best branding company in Kochi will position your business clearly, create consistent visuals, and craft stories that make customers remember you — helping you attract more leads and improve sales." 
    },
    { 
        q: "What services does your branding agency in Kochi offer?",
        a: "Our services include brand strategy, logo design, brand guidelines, packaging, motion graphics, and rebranding. As one of the top branding companies in Kochi, we provide end-to-end solutions that strengthen your brand presence both online and offline." 
    },
    { 
        q: "How long does the branding process take?", 
        a: "Most branding projects take between 4 to 8 weeks depending on scope, feedback, and revisions. As an experienced branding agency in Kochi, we follow a clear workflow to ensure timely delivery without compromising quality." 
    },
    { 
        q: "Do you provide logo design services in Kochi?",
        a: "Yes. We design impactful logos that reflect your brand’s values and goals. Our creative team ensures every logo is simple, memorable, and versatile — just what you’d expect from the best branding company in Kochi."
     },
    { 
        q: "Can you help with packaging and product branding in Kerala?", 
        a: "Absolutely. We design packaging that attracts customers and communicates your brand’s story. Our team handles everything from concept to print — making us one of the most trusted branding companies in Kochi and Kerala." 
    },
    { 
        q: "Do you offer rebranding or brand refresh services?", 
        a: "Yes, we specialize in rebranding. Whether your identity feels outdated or your market has evolved, our branding agency in Kochi will refresh your visual identity, tone, and positioning — without losing brand equity." 
    },
    { 
        q: "How do you ensure consistency across brand materials?", 
        a: "We create detailed brand guidelines covering logo usage, colors, fonts, and tone of voice. This ensures your brand looks consistent across every channel — a key hallmark of the best branding company in Kochi." 
    },
    {
        q:"Can small businesses in Kochi afford professional branding?",
        a: "Yes. We provide flexible packages designed for startups and small businesses. As a client-friendly branding agency in Kochi, we offer scalable solutions to fit your goals and budget.",
    },
    {
        q: "How can I get started with Accolades Integrated?",
        a: "It’s easy! Visit our website or call us directly. We’ll audit your current brand and suggest an action plan. Partner with the best branding company in Kochi and watch your brand grow with confidence.",
    }
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto pt-2 pb-6">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-10">Frequently Asked Questions – Branding Agency in Kochi</h2>

      <div className="space-y-0 border-t border-gray-300">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-300">
            
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center text-gray-600 py-3 text-[14px] md:text-[16px] font-light tracking-tight"
            >
              <span>{item.q}</span>
              <span className="text-3xl pr-4">{openIndex === i ? "−" : "+"}</span>
            </button>

            {/* Dropdown Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 font-mont text-[13px] md:text-[14px] leading-relaxed px-1">{item.a}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
