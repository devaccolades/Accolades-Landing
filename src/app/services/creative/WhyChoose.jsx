import React from "react";

const features = [
  {
    emoji: "🎯",
    title: "Strategic + Aesthetic Thinking",
    desc: "Every pixel rooted in research and ROI.",
  },
  {
    emoji: "🧠",
    title: "Multi-Industry Experience",
    desc: "E-commerce, FMCG, tech, healthcare—you name it.",
  },
  {
    emoji: "🚀",
    title: "Fast Turnaround",
    desc: "Agile sprints, overnight revisions when needed.",
  },
  {
    emoji: "📈",
    title: "Creative that Drives ROI",
    desc: "Average 38% increase in engagement for clients.",
  },
];

const WhyChoose = () => {
  return (
    <section className="containers py-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-mont font-bold text-[#0199A4] mb-5">
        Why Choose Our Creative Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <div className="font-mont text-3xl mb-4">{feature.emoji}</div>
            <h3 className="font-mont font-semibold text-lg text-[#0199A4] mb-2 leading-[110%]">
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
