"use client";

import { User, Cpu, TrendingUp } from "lucide-react";

const howWeWorkData = [
  {
    title: "Human Expertise",
    description:
      "Shapes strategy, adds creative context, and ensures outputs align with your brand.",
    icon: User,
    border: "border-purple-300",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "AI Power",
    description:
      "Processes massive datasets, identifies patterns, and automates repetitive tasks at scale.",
    icon: Cpu,
    border: "border-cyan-300",
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Better Results",
    description:
      "The combination delivers faster insights, smarter campaigns, and measurable ROI.",
    icon: TrendingUp,
    border: "border-blue-300",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

export default function HowWeWork() {
  return (
    <section className="containers py-16 bg-white font-mont">
      <div>
        {/* Heading */}
        <div className="items-center justify-center text-center max-w-5xl mx-auto">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] font-mont font-bold mb-4">
            HOW WE WORK
          </h2>

          <p className="text-[13px] md:text-[14px] lg:text-[16px] leading-[156%] font-mont font-semibold text-center mb-8">
            We blend AI with human skill. AI speeds tasks and finds patterns.
            People shape the ideas and final work. This mix brings more wins for
            our clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {howWeWorkData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border p-4 lg:p-6 text-left ${item.border} ${item.bg}`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg mb-4 ${item.iconBg}`}
                >
                  <Icon className={item.iconColor} size={20} />
                </div>

                <h3 className="font-semibold text-[16px] lg:text-[18px] leading-[16px] lg:leading-[18px] font-mont  mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-[156%]">
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
