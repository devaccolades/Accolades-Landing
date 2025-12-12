"use client";
import { useState } from "react";

export default function SeoFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        q: " What services does an SEO Company in Kochi typically offer?",
        a: "We provide technical SEO, on-page and off-page SEO, local SEO, content, and link building. Our full service also includes keyword research, site audit, and organic traffic growth plans."
    },
    {
        q: "How long before SEO shows meaningful results?",
        a: "SEO can show initial gains in three to four months and clearer growth by six months. Timing depends on competition, site health, content quality, and ongoing optimisation."
    },
    {
        q: "Do you handle Local SEO for Kochi businesses?",
        a: "Yes — we optimise Google Business Profile, local citations, and maps listings. Local SEO services improves visibility for nearby searches and drives more store visits and calls."
    },
    {
        q: "Can you do SEO for e-commerce websites?",
        a: "Absolutely. We optimise product pages, category structure, and product schema for search. E-commerce SEO improves indexation, product discoverability, and organic sales."
    },
    {
        q: "What is included in a technical SEO audit?",
        a: "We check site speed, crawl errors, Core Web Vitals, and structured data. The audit lists fixes for indexability, mobile performance, and better search visibility."
    },
    {
        q: "Will SEO increase leads and sales for my Kochi business?",
        a: "Yes. Targeted keyword research and on-page SEO bring qualified organic traffic. Better traffic and UX raise conversion rates and lead to more sales over time."
    },
    {
        q: "Do you create SEO content, or should we supply it?",
        a: "We produce SEO content, landing pages, blogs, and long-form pieces tailored to intent. Our content aligns with on-page SEO and supports keyword targets and user needs."
    },
    {
        q: "How do you build backlinks safely for SEO?",
        a: "We use white-hat link building like guest posts, PR, and niche partnerships. Quality backlinks raise domain authority while avoiding risky tactics that harm rankings."
    },
    {
        q: "Will you report progress and results from SEO work?",
        a: "Yes. We share regular reports on rankings, organic traffic, and conversion metrics. We use tools like Google Analytics and Search Console to show clear insights."
    },
    {
        q: "How do I start SEO work with your SEO Company in Kochi?",
        a: "Begin with a free site audit and a discovery call to set goals and scope. We then deliver a roadmap covering technical SEO, content, links, and timelines."
    },
    
    
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-4">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-black mb-10">
        FAQs — SEO Company in Kochi </h2>

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
