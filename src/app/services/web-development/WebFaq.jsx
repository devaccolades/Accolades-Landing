"use client";
import { useState } from "react";

export default function WebFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
         q: "What services does a web development company in Kochi offer?",
         a: "A web development company in Kochi build websites, web apps, APIs, and e-commerce stores. Our services include design, development, hosting, and ongoing support." 
    },
    {
         q: "Do you design and develop WordPress sites?", 
         a: " Yes. We create custom WordPress themes, plugins, and CMS workflows. We also train your team to manage content." 
    },
    { 
        q: "What is your tech stack for web apps?",
        a: "We use React.js or Next.js for front ends,  Python Django for back ends, and modern databases. We pick the stack per project needs." 
    },
    { 
        q: "Can you build a scalable e-commerce site?", 
        a: "Yes. We build secure carts, inventory systems, and payment integrations. We focus on UX and checkout speed to boost sales." 
    },
    { 
        q: "How long does a typical website project take?",
        a: "Small sites take 3–6 weeks. Complex apps take 8–20+ weeks depending on scope and integrations."
     },
    { 
        q: "Do you offer Python development for web projects?", 
        a: "Yes. We use Django, FastAPI for robust back ends, APIs, and data work." 
    },
    { 
        q: "Will my site be mobile-friendly and responsive?", 
        a: "Always. We design mobile-first layouts that adapt to all screens and improve user engagement." 
    },
    { 
        q: "How do you ensure site security and data safety?", 
        a: "We use HTTPS, secure headers, input validation, and regular security scans. We follow best practices to protect data." 
    },
    {
        q:"Can you integrate third-party APIs and services?",
        a: "Yes. We integrate CRMs, payment gateways, analytics, and shipping APIs as required.",
    },
    {
        q: "What maintenance and support do you provide post-launch?",
        a: "We offer retainer plans for updates, backups, security patches, and feature work. You choose the level of support.",
    },
     {
        q: "Are your websites optimized for SEO?",
        a: "Yes. We implement on-page SEO, semantic HTML, meta tags, and fast loading to help search visibility.",
    },
     {
        q: "How do I start a project with your company?",
        a: "Email us your brief or book a consultation. We will run a quick audit and propose a roadmap.",
    },
     
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-4">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-black mb-10">
        FAQs — Web Development Company in Kochi </h2>

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
