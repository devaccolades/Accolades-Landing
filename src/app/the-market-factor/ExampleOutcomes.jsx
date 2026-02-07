"use client";

import Image from "next/image";

export default function ExampleOutcomesSection() {
  const outcomes = [
    {
      title: "Better Ad Relevance",
      description:
        "Campaigns that speak directly to local audiences, improving engagement rates by understanding regional language nuances, cultural references, and market-specific pain points.",
      bg: "bg-[#EFFFF4]",
      icon: "/market-factor/tick-green.svg",
    },
    {
      title: "Higher Conversion in Local Markets",
      description:
        "Optimized user journeys that account for regional buying behaviors, payment preferences, and decision-making patterns, resulting in measurable lift in conversion rates.",
      bg: "bg-[#EEF6FF]",
      icon: "/market-factor/tick-blue.svg",
    },
    {
      title: "Lower Customer Acquisition Cost",
      description:
        "Efficient channel allocation and messaging strategy that reduces wasted spend and focuses budget on high-performing tactics specific to each market.",
      bg: "bg-[#F8F0FF]",
      icon: "/market-factor/tick-purple.svg",
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 font-mont">
      <div className="containers">

        {/* Heading */}
         <h2 className="text-[18px] md:text-[20px] leading-[16px] font-bold text-black mb-4">
          Example Outcomes
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-[18px] p-3 md:p-6 flex gap-4`}
            >
              {/* Icon */}
              <div className="w-7 h-7 relative shrink-0 mt-1">
                <Image
                  src={item.icon}
                  alt="check"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[16px] lg:text-[18px] leading-[16px] lg:leading-[18px] font-semibold text-black">
                  {item.title}
                </h3>

                <p className="text-[#484848] text-[13px] lg:text-[14px]  leading-[120%] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
