"use client";
import { useState } from "react";

export default function CreativeFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
         q: "What does a creative agency in Kochi do?",
         a: "A creative agency builds brand identity through design, visuals, and storytelling. We create branding, packaging, graphics, and videos that help businesses connect with their audience." 
    },
    {
         q: "Why should I choose a creative agency in Kochi for branding?",
         a: "Local agencies understand Kerala’s culture and market trends. This ensures your branding and design work connects well with local customers while staying modern and global." 
    },
    {
         q: "Do you provide logo design services?",
         a: "Yes. AS a creative agency in Kochi, we design clean, strong, and memorable logos that reflect your brand’s values and vision." 
    },
    {
         q: "Can you design packaging for FMCG brands?",
         a: "Absolutely. We design packaging for retail, FMCG, and ecommerce, with a focus on visibility, clarity, and shelf appeal." 
    },
    {
         q: "Do you create animated graphics for social media?",
         a: "Yes. We produce motion graphics, animated posts, logo animations, and short form clips for all social media platforms." 
    },
    {
         q: "Do you offer corporate video production in Kochi?",
         a: "Yes, we are a prominent creative agency in Kochi and are experienced in creating corporate films, brand videos, social ads, and product videos with end to end production support." 
    },
    {
         q: "How long does it take to complete a branding project?",
         a: "Most branding projects take 4–8 weeks depending on scope and revisions." 
    },
    {
         q: "Do you offer monthly creative support?",
         a: "Yes. We provide monthly creative support packages for brands that need continuous design and content." 
    },
    {
         q: "Can you handle both digital and print design?",
         a: "Yes. As a creative agency in Kochi, wee design for all platform including digital, print, instore, and outdoor." 
    },
    
   
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-6 relative z-10">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-10">Frequently Asked Questions | Creative Agency in Kochi</h2>

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
