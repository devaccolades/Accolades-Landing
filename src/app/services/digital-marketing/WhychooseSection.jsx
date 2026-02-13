"use client";

import { MapPin, BarChart3, Target, Layers } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Local Insight",
      description:
        "We understand Kochi's audience, culture, and buying rhythms. That local knowledge helps this Digital Marketing Agency craft campaigns that connect.",
      icon: MapPin,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Data Driven",
      description:
        "Decisions are based on tracking, testing, and real results. We use analytics to lower cost per lead and improve return on ad spend.",
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Clear KPIs",
      description:
        "Every campaign starts with measurable targets and simple dashboards. You'll see how this Digital Marketing Agency in Kochi is delivering value week by week.",
      icon: Target,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "End to End",
      description:
        "We plan, build, run, and optimise — from creative to conversion. That full stack approach reduces waste and scales what works.",
      icon: Layers,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-[#F9F9F9] rounded-[30px] font-mont">
      <div className="containers">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-center text-xl lg:text-2xl font-bold uppercase">
            Why Choose Our Digital Marketing Team
          </h2>

        <p className="max-w-2xl mx-auto mt-3 text-[14px] leading-[156%] text-[#484848] ">
            Our team blends local market knowledge with measurable tactics to grow
            brands in Kerala and beyond. As a trusted Digital Marketing Agency in
            Kochi, we pair strategy, execution, and clear KPIs so your marketing
            actually moves the business needle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-4 xl:p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.color}`}
                >
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-base mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}