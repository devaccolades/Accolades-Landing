import React from "react";

const features = [
  {
    emoji: "🎯",
    title: "Tailored Strategies",
    desc: "Our tactics are tailored to your company and your field to guarantee success.",
  },
  {
    emoji: "🧠",
    title: "Experienced Team",
    desc: "Our highly qualified employees have years of experience and knowledge in distinct areas of digital marketing.",
  },
  {
    emoji: "📊",
    title: "Data-Driven Approach",
    desc: "Analytics and analyzing these insights help us optimize the future strategies, and the future steps to be taken for your campaigns.",
  },
  {
    emoji: " 🤝",
    title: "Client-Centric Focus",
    desc: "Your success is our priority. Here we shall partner with you all the time throughout the project effective the task at hand.",
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
