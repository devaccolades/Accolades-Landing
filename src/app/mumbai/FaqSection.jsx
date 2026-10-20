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
    answer: "We build websites, online stores, custom CRMs, business applications and tools that connect your day-to-day operations. The right solution depends on what your team needs to do and the problems you want to solve.",
  },
  {
    question: "Can one company handle both my marketing and my software?",
    answer: "Yes. Our marketing, creative and development teams work together, so your campaigns, website and business systems can follow the same plan. You have one team to coordinate the work from first enquiry to follow-up.",
  },
  {
    question: "Why should I hire a digital marketing company in Mumbai?",
    answer: "A local team can work closely with you to understand your customers, market and sales process. Our Malad West office gives Mumbai businesses a place to meet the team and plan campaigns around their business goals.",
  },
  {
    question: "Do I need a software development company in Mumbai for a small business?",
    answer: "It depends on your needs. A small business may benefit from a faster website, an online store or a simple lead management tool. We start with the problem and help you decide whether an existing tool or custom software makes sense.",
  },
  {
    question: "How long does it take a digital marketing company in Mumbai to show results?",
    answer: "The timeline depends on your goals, budget, starting point and channels. Paid campaigns can start generating data once they go live, while SEO and organic content take longer to build momentum. We agree on milestones and reporting before the work begins.",
  },
  {
    question: "Can a software development company in Mumbai fix my current systems?",
    answer: "We can review your existing website or software to understand what is causing problems. Depending on what we find, we may recommend fixes, integrations or a phased upgrade rather than rebuilding everything.",
  },
  {
    question: "How do you connect marketing with custom software?",
    answer: "We connect your website forms, campaigns and sales tools so enquiries can move into your CRM. Your team can then track where leads come from, follow up with customers and see which marketing activities lead to sales.",
  },
  {
    question: "What makes you different from another digital marketing company in Mumbai?",
    answer: "Accolades brings marketing, creative and software development into one team. That lets us plan how people find your business, what they experience on your website and how your team handles the next step.",
  },
  {
    question: "How do I get started?",
    answer: "Contact our Mumbai team to tell us about your business, goals and current challenges. We will discuss what you need, review the next steps and suggest a suitable scope of work.",
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
