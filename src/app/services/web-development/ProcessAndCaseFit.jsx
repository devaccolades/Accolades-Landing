"use client";
import React from "react";
import Image from "next/image";

export default function ProcessAndCaseFit() {
  const process = [
    {
      id: 1,
      icon: "/icons/search.svg",
      title: "Discovery & Scope",
      desc: "We map goals, users, and success metrics. This forms a clear project brief and timeline.",
    },
    {
      id: 2,
      icon: "/icons/prototype.svg",
      title: "Design & Prototype",
      desc: "UX wireframes and UI mockups show the look and flow. You review early, and we refine fast.",
    },
    {
      id: 3,
      icon: "/icons/dev.svg",
      title: "Development & Testing",
      desc: "We build features in sprints. We run unit, integration, and end-to-end tests. We fix bugs quickly.",
    },
    {
      id: 4,
      icon: "/icons/launch.svg",
      title: "Launch & Monitoring",
      desc: "We deploy to production with rollback plans. We monitor logs and tune as needed.",
    },
    {
      id: 5,
      icon: "/icons/support.svg",
      title: "Support & Growth",
      desc: "We offer updates, maintenance, and scaling plans. We work as a long-term tech partner.",
    },
  ];

  const caseFit = [
    {
      icon: "/icons/mvp.svg",
      text: "Startups launching an MVP.",
    },
    {
      icon: "/icons/brands.svg",
      text: "Brands moving from templates to custom sites.",
    },
    {
      icon: "/icons/ecommerce.svg",
      text: "Retailers who need fast e-commerce.",
    },
    {
      icon: "/icons/secure.svg",
      text: "Corporates needing secure portals.",
    },
    {
      icon: "/icons/agency.svg",
      text: "Agencies that need white-label development.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-20">
      {/*  DEVELOPMENT PROCESS  */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          OUR DEVELOPMENT PROCESS
        </h2>
        <p className="text-gray-500 mt-2">
          We use a clear, repeatable flow to reduce risk and speed delivery.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {process.map((item) => (
          <div key={item.id} className="text-center flex flex-col items-center">
            <div className="bg-[#0A8F9C]/10 p-4 rounded-xl w-14 h-14 flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={26} height={26} />
            </div>

            <p className="mt-3 text-teal-700 font-semibold">{item.id}</p>

            <h3 className="mt-2 font-semibold text-gray-700">{item.title}</h3>

            <p className="text-gray-500 text-sm mt-1 leading-relaxed w-64">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/*  CASE FIT SECTION  */}
      <div className="mt-24 text-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          CASE FIT — WHO BENEFITS MOST
        </h2>

        <p className="text-gray-500 mt-2">
          We align tech choices to your business model and growth path.
        </p>
      </div>

      {/* Case Fit Boxes */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {caseFit.map((box, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center"
          >
            <div className="bg-[#0A8F9C]/10 p-3 rounded-xl">
              <Image src={box.icon} alt="" width={30} height={30} />
            </div>

            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
              {box.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
