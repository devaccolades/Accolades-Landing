"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What does a digital marketing company in Mumbai do?",
    answer: "It plans and runs the online work that brings customers to your business: Google Ads, SEO, social media, content and performance campaigns. At Accolades, each campaign is tied to enquiries, sales or conversions.",
  },
  {
    question: "What does a software development company in Mumbai build?",
    answer: "Custom web and mobile applications, CRM and ERP systems, SaaS products and other business software. We build around your existing workflow instead of forcing you into a generic tool.",
  },
  {
    question: "Can one company handle both my marketing and my software?",
    answer: "Yes. That is how we work. Marketing, creative and technology teams share one plan, so your CRM, website, app and campaigns fit together.",
  },
  {
    question: "Why should I hire a digital marketing company in Mumbai?",
    answer: "A local team knows your market. We can meet face-to-face in our Malad office. We tailor campaigns specifically for local buyers to get better results.",
  },
  {
    question: "Do I need a software development company in Mumbai for a small business?",
    answer: "Yes. We build simple tools that fit your exact size and budget. You do not need to pay for huge, complex systems. We build only what you actually need.",
  },
  {
    question: "How long does it take a digital marketing company in Mumbai to show results?",
    answer: "Good marketing takes a little time. You usually see clear traffic shifts in three to six months. We focus on local search to bring you faster leads.",
  },
  {
    question: "Can a software development company in Mumbai fix my current systems?",
    answer: "Yes. We start with a full system audit. If a simple fix works, we do it. If you need a total rebuild, we will tell you why and show the benefits.",
  },
  {
    question: "How do you connect marketing with custom software?",
    answer: "We often build a CRM and tie it straight to your ad campaigns. This means every new website lead goes right to your sales team instantly.",
  },
  {
    question: "What makes you different from another digital marketing company in Mumbai?",
    answer: "We do not just run ads. We also build the technology that catches those leads. You get marketing and custom software development under one roof.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section aria-labelledby="mumbai-faq-heading" className="bg-[#f2f0e9] py-12 text-black md:py-16 lg:py-20">
      <div className="containers grid gap-8 md:grid-cols-[.8fr_1.4fr] md:gap-[10%]">
        <div>
          <p className="mb-5 text-sm lg:mb-7 lg:text-lg"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> FAQ</p>
          <h2 id="mumbai-faq-heading" className="text-[32px] leading-[1.08] font-medium tracking-[-.04em] lg:text-[44px]">Frequently<br />Asked<br />Questions</h2>
        </div>

        <div className="border-t border-[#e3e3df]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-[#e3e3df]">
                <h3>
                  <button type="button" id={`mumbai-faq-trigger-${index}`} aria-expanded={isOpen} aria-controls={`mumbai-faq-answer-${index}`} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full cursor-pointer items-start justify-between gap-5 py-5 text-left text-xs leading-[1.5] transition-colors hover:text-[#007b89] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007b89] lg:py-6 lg:text-sm">
                    <span>{faq.question}</span>
                    {isOpen ? <Minus aria-hidden="true" size={18} className="mt-px shrink-0" /> : <Plus aria-hidden="true" size={18} className="mt-px shrink-0" />}
                  </button>
                </h3>
                <div id={`mumbai-faq-answer-${index}`} role="region" aria-labelledby={`mumbai-faq-trigger-${index}`} hidden={!isOpen} className="pr-7 pb-6 text-xs leading-[1.65] text-[#58696a] lg:text-sm">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
