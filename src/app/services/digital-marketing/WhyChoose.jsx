import React from "react";

const features = [
  {
    emoji: "🎯",
    title: "Local Insight",
    desc: "We understand Kochi’s audience, culture, and buying rhythms. That local knowledge helps this Digital Marketing Agency in Kochi craft campaigns that connect.",
  },
  {
    emoji: "🧠",
    title: "Data Driven",
    desc: "Decisions are based on tracking, testing, and real results. We use analytics to lower cost per lead and improve return on ad spend.",
  },
  {
    emoji: "📊",
    title: "Clear KPIs",
    desc: "Every campaign starts with measurable targets and simple dashboards. You’ll see how this Digital Marketing Agency in Kochi is delivering value week by week.",
  },
  {
    emoji: " 🤝",
    title: "End to End",
    desc: "We plan, build, run, and optimise — from creative to conversion. That full stack approach reduces waste and scales what works.",
  },
];

const WhyChoose = () => {
  return (
    <section className="containers py-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-mont font-bold text-[#0199A4] mb-5">
        Why Choose our Digital Marketing Team
      </h2>
      <p className="font-mont font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
      Our team blends local market knowledge with measurable tactics to grow brands in Kerala and beyond. 
      As a trusted Digital Marketing Agency in Kochi, we pair strategy, execution, and clear KPIs so your
       marketing actually moves the business needle.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-mont mb-4">{feature.emoji}</div>
            <h3 className="font-semibold font-mont text-lg text-[#0199A4] mb-2 leading-[110%]">
              {feature.title}
            </h3>
            <p className="text-gray-700 font-mont text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
