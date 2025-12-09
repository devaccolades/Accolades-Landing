"use client";
import { useState } from "react";

export default function SmmFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        q:"What is social media marketing and how can it help my business?",
        a:"Social media marketing means using platforms like Facebook, Instagram, LinkedIn, and YouTube to promote your products. It helps drive website traffic and sales, and connect with customers directly. For Kochi businesses, it means reaching local and global audiences on platforms they already use."
    },
    {
        q:"Why focus on Meta (Facebook & Instagram)?",
        a:"Meta’s platforms have billions of users. Facebook and Instagram allow precise targeting by location, interests, and demographics. Visual content on these channels boosts brand awareness and attracts leads."
    },
    {
        q:"What benefits does LinkedIn marketing offer?",
        a:"LinkedIn connects you with professionals and decision-makers. It’s ideal for B2B marketing, recruiting, and establishing industry credibility. Our LinkedIn strategies generate leads, thought-leadership exposure, and potential partnerships."
    },
    {
        q:"How does YouTube marketing help my brand?",
        a:" YouTube (part of social media marketing) lets you share videos where the platform’s large audience can find them via search. High-quality videos keep viewers engaged longer, improving brand recall. Research shows users want both entertaining and educational videos from brands. We optimize and promote your videos to grow your audience and drive conversions."
    },
    {
        q:"How do you measure social media marketing success?",
        a:"We set clear goals (brand awareness, sales, leads) and use data to track progress. Key metrics include reach, engagement (likes, comments, shares), click-throughs, follower growth, and conversion rates. This data-driven approach lets us refine campaigns for maximum ROI."
    },
    {
        q:"Why hire Accolades Integrated for SMM in Kochi?",
        a:"We combine local market expertise with proven SMM tactics. We create creative content and targeted ads to help your Kochi business stand out. With Accolades, you get a dedicated partner focused on growing your brand through Social Media Marketing in Kochi."
    },
    
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-4">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-black mb-10">Frequently Asked Questions </h2>

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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
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
