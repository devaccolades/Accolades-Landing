"use client";
import { useState } from "react";

export default function EcommerceFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        q: "What makes Accolades Integrated a reliable E commerce Web Development Company in Kochi?",
        a: "We offer full e-commerce services, from store design to checkout optimization. Our work combines Shopify, WooCommerce, and custom stacks with a focus on mobile-first and conversion-driven design."
    },
     {
        q: "Do you develop stores using Shopify and WooCommerce?",
        a: "Yes. We build feature-rich Shopify and WooCommerce stores. Each site is custom-designed, fast, secure, and ready for SEO and mobile shoppers."
    },
     {
        q: "Can you build custom e-commerce platforms using React or Django?",
        a: "Absolutely. We use React.js and Next.js for dynamic front ends and Django for secure back-end APIs. These frameworks suit complex, scalable online stores."
    },
     {
        q: "Will my e-commerce site be mobile-friendly?",
        a: "Yes. As a leading E commerce Web Development Company in Kochi, we create responsive, mobile-first sites that offer seamless shopping across all screen sizes."
    },
     {
        q: "Do you support payment gateway and shipping integration?",
        a: "We integrate major payment gateways like Razorpay, Stripe, and PayPal, and set up shipping APIs. Your checkout process will be smooth and secure."
    },
     {
        q: "How do you ensure better conversion rates in online stores?",
        a: "We use A/B testing, UX research, cart recovery flows, and performance tuning. This helps reduce abandonment and increase sales."
    },
     {
        q: "Can you optimize my existing WooCommerce or Shopify site?",
        a: "Yes. We audit, rework, and enhance existing stores to improve speed, SEO, user flow, and performance without disrupting operations."
    },
     {
        q: "Do you add structured product schema for SEO?",
        a: "Yes. We implement product schema to display your products with prices and ratings in Google search results, helping you attract more clicks."
    },
     
    
    
  ];

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="containers  font-mont mx-auto py-4">
      <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-black mb-10">
        FAQs — E commerce Web Development Company in Kochi </h2>

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
