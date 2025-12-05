"use client";
import { useState } from "react";

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
         q: "What makes Accolades Integrated a top digital marketing company in Kochi?",
         a: "Accolades Integrated stands out for its strategic approach, creative design, and measurable results. As a trusted digital marketing company in Kochi, we blend innovation with proven methods to deliver real growth for every client." 
    },
    {
         q: "What services are included in your digital marketing services in Kochi?", 
         a: "Our digital marketing services in Kochi include SEO, SEM, social media marketing, content marketing, and performance-driven campaigns that help brands increase visibility, engagement, and conversions across all digital platforms." 
    },
    { 
        q: "How can digital marketing help my business in Kochi?",
        a: "Our digital marketing services in Kochi include SEO, SEM, social media marketing, content marketing, and performance-driven campaigns that help brands increase visibility, engagement, and conversions across all digital platforms." 
    },
    { 
        q: "How can digital marketing help my business in Kochi?", 
        a: "Digital marketing builds brand awareness and attracts the right audience online. Working with a leading digital marketing company in Kochi ensures targeted strategies that drive leads, sales, and consistent growth." 
    },
    { 
        q: "Do you provide SEO as part of your digital marketing services in Kochi?",
        a: "Yes. We provide complete SEO services to boost search rankings and organic traffic. Our digital marketing services in Kochi focus on on-page, off-page, and technical SEO for long-term success."
     },
    { 
        q: "What industries do you serve as a digital marketing company in Kochi?", 
        a: "We serve multiple sectors, including real estate, healthcare, retail, and education. As a full-service digital marketing company in Kochi, we tailor strategies to each industry’s unique goals and audience." 
    },
    { 
        q: "How long does it take to see results from digital marketing services in Kochi?", 
        a: "Results depend on the service mix and goals. Most clients start seeing measurable improvements in 3 to 6 months with our consistent digital marketing services in Kochi." 
    },
    { 
        q: "Do you handle social media management for Kochi-based businesses?", 
        a: "Yes. Our digital marketing company in Kochi manages end-to-end social media — content creation, posting, and paid ads — to grow your brand’s online community and engagement." 
    },
    {
        q:"What makes your digital marketing services in Kochi different from others?",
        a: "We combine data analytics with creative storytelling. Our digital marketing services in Kochi focus on ROI and measurable performance while maintaining a clear brand voice and visual consistency.",
    },
    {
        q: "Do you offer website design along with digital marketing services in Kochi?",
        a: "Absolutely. We design responsive and optimized websites that enhance campaign performance. Our digital marketing company in Kochi ensures every website aligns with SEO and marketing objectives.",
    },
    {
        q: "Can small businesses afford your digital marketing services in Kochi?",
        a: "Yes. We offer flexible packages suitable for startups and SMEs. Every client receives a customized plan from our digital marketing company in Kochi, designed to fit their budget and business goals.",
    },
    {
        q: "Do you provide reports for ongoing digital marketing campaigns in Kochi?",
        a: "Yes. We share detailed performance reports with insights on reach, traffic, and conversions. Our digital marketing services in Kochi include regular updates to track progress and optimize campaigns.",
    },
    {
        q: "How can I get started with Accolades Integrated?",
        a: "Getting started is easy. Contact our digital marketing company in Kochi for a free consultation. We’ll review your brand, set clear goals, and build a customized digital growth strategy.",
    },
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-6 relative z-10">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-10">Digital Marketing Services in Kochi - Frequently Asked Questions (FAQs)</h2>

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
