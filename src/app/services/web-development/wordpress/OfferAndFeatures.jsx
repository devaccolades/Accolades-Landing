"use client";
import React from "react";

export default function OfferAndFeatures() {
  const offers = [
    {
      icon: "🎨",
      title: "Theme Customization",
      desc: "Modify any theme to fit your brand’s tone & layout",
    },
    {
      icon: "📋",
      title: "Landing Pages",
      desc: "High-converting sales pages for campaigns",
    },
    {
      icon: "✍️",
      title: "Blog Setup",
      desc: "Author pages, categories, SEO-friendly blog structure",
    },
  ];

  const features = [
    {
      icon: "🔍",
      title: "SEO-Ready",
      desc: "Structured markup, clean URLs, optimized tags",
    },
    {
      icon: "⚡",
      title: "Speed Optimized",
      desc: "Caching, image compression, CDN setup",
    },
    {
      icon: "👨‍💻",
      title: "Easy to Manage",
      desc: "Custom admin dashboard with drag & drop editor",
    },
  ];

  return (
    <div className=" py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* We Offer */}
        <h2 className="text-3xl md:text-4xl font-mont font-bold text-[#1eb2a6] mb-10">We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {offers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <h3 className="text-md font-bold font-mont text-[#1eb2a6] mb-2">
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-sm font-mont text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Features Highlight */}
        <h2 className="text-3xl md:text-4xl font-mont font-bold text-[#1eb2a6] mb-10">
          Features Highlight
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <h3 className="text-md font-mont font-bold text-[#1eb2a6] mb-2">
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </h3>
              <p className="text-sm font-mont text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
