"use client";
import React from "react";
import Image from "next/image";

export default function ProcessAndCaseFit() {
  const process = [
    {
      id: 1,
      icon: "/new-web/op1.svg",
      title: "Discovery & Scope",
      desc: "We map goals, users, and success metrics. This forms a clear project brief and timeline.",
    },
    {
      id: 2,
      icon: "/new-web/op2.svg",
      title: "Design & Prototype",
      desc: "UX wireframes and UI mockups show the look and flow. You review early, and we refine fast.",
    },
    {
      id: 3,
      icon: "/new-web/op3.svg",
      title: "Development & Testing",
      desc: "We build features in sprints. We run unit, integration, and end-to-end tests. We fix bugs quickly.",
    },
    {
      id: 4,
      icon: "/new-web/op4.svg",
      title: "Launch & Monitoring",
      desc: "We deploy to production with rollback plans. We monitor logs and tune as needed.",
    },
    {
      id: 5,
      icon: "/new-web/op5.svg",
      title: "Support & Growth",
      desc: "We offer updates, maintenance, and scaling plans. We work as a long-term tech partner.",
    },
  ];

  const caseFit = [
    {
      icon: "/new-web/cf1.svg",
      text: "Startups launching an MVP.",
    },
    {
      icon: "/new-web/cf2.svg",
      text: "Brands moving from templates to custom sites.",
    },
    {
      icon: "/new-web/cf3.svg",
      text: "Retailers who need fast e-commerce.",
    },
    {
      icon: "/new-web/cf4.svg",
      text: "Corporates needing secure portals.",
    },
    {
      icon: "/new-web/cf5.svg",
      text: "Agencies that need white-label development.",
    },
  ];

  return (
    <section className="w-full px-2 md:px-6 lg:px-16 py-16 font-mont">
      {/*  DEVELOPMENT PROCESS  */}
      <div className="text-center">
         <h2 className="text-center text-xl md:text-2xl font-bold text-black mb-0 ">
          OUR DEVELOPMENT PROCESS
        </h2>
        <p className="text-black mt-2">
          We use a clear, repeatable flow to reduce risk and speed delivery.
        </p>
      </div>

      {/* Timeline */}
      <div className=" mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 relative">
  {process.map((item, index) => (
    <div
      key={item.id}
      className="relative text-center flex flex-col items-center"
    >
      {/* Process Card */}
      <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center">
        <Image src={item.icon} alt={item.title} width={44} height={44} />
      </div>

      <p className="mt-3 text-teal-700  font-semibold">{item.id}</p>

      <h3 className="mt-2 font-semibold text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] text-black">{item.title}</h3>

      <p className="text-black text-[12px] lg:text-[14px] leading-[120%] lg:leading-[140%] mt-1 mx-3 md:mx-0">
        {item.desc}
      </p>

      {/* Arrow — md+ only, not last item */}
      {index !== process.length - 1 && (
        <div className="hidden md:block absolute w-[70px] lg:w-[100px] xl:w-[150px] top-7 -right-10 lg:-right-18">
          <Image
            src="/new-seo/arrow-right.svg"
            alt="arrow"
            width={150}
            height={12}
          />
        </div>
      )}
    </div>
  ))}
</div>


      {/*  CASE FIT SECTION  */}
      <div className="mt-10 lg:mt-20 text-center md:text-start px-4 md:px-8 lg:px-24 xl:px-28 ">
        <h2 className="text-xl md:text-2xl font-bold">
          CASE FIT — WHO BENEFITS MOST
        </h2>

        <p className="text-black text-[14px] leading-[100%] mt-2">
          We align tech choices to your business model and growth path.
        </p>
      </div>

      {/* Case Fit Boxes */}
      <div className="mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 px-2 md:px-8 lg:px-24 xl:px-28">
        {caseFit.map((box, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-2 lg:p-4 shadow-sm flex flex-col items-center text-center"
          >
            <div className=" w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 flex items-center justify-center">
              <Image src={box.icon} alt="" width={44} height={44} />
            </div>

            <p className="mt-4 text-black text-[12px] lg:text-[14px] leading-[120%] lg:leading-[140%]">
              {box.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
