"use client";
import { useState } from "react";

export default function DigitalFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        q: "What services does your Digital Marketing Agency in Kochi offer?",
        a: "We provide performance marketing (PPC, display, video), SEM, SEO, social media, and content marketing as a Digital Marketing Agency in Kochi. Each service is tied to clear business goals to drive leads and sales."
    },
    {
        q: "How long before I see results from digital marketing services in Kochi?",
        a: "Timelines depend on channel and budget. Expect measurable paid wins quickly and steady organic growth in about 3–6 months with consistent SEO and content work."
    },
    {
        q: "How do you measure success as a Digital Marketing Agency in Kochi?",
        a: "We track leads, cost per lead, conversion rate, revenue, and ROAS. Dashboards and monthly reports show performance and recommended actions."
    },
    {
        q: "Do you offer packages for small businesses and startups?",
        a: "Yes, as a digital marketing agency in Kochi, we design starter packages with defined deliverables and budget caps. Packages scale as your business and goals grow."
    },
    {
        q: "Can you run local campaigns focused on Kochi customers?",
        a: "Absolutely , we target local search, maps, and social audiences as a digital marketing agency in Kochi. Our local first campaigns help capture customers across Kochi and nearby areas."
    },
    {
        q: "Do I need a website to start digital marketing services in Kochi?",
        a: "A basic landing page improves performance but isn’t mandatory. We can build or optimise a landing page as part of the service package."
    },
    {
        q: "How do you handle ad budgets and spend?",
        a: "We plan budgets around goals and channel performance and optimise continuously to lower cost per lead. Our aim is efficient ad spend and measurable ROAS."
    },
    {
        q: "Will you provide content for my campaigns?",
        a: "Yes, we create blogs, social posts, videos, and ad copy aligned with SEO and campaign goals. Content is tailored to drive traffic, engagement, and conversions."
    },
    {
        q: "Do you work with e commerce brands in Kochi?",
        a: "Yes , as a digital marketing agency in Kochi, we handle paid search, social ads, SEO, catalog setup, and product feeds for online stores. We also apply CRO best practices to improve checkout conversions."
    },
    {
        q: "Can you support multichannel campaigns across India?",
        a: "Yes,we run integrated campaigns across search, social, display, and video. As a Digital Marketing Agency in Kochi we scale local campaigns to national reach when required."
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
