"use client";

import {
  Target,
  FlaskConical,
  FileText,
  DollarSign,
  Sparkles,
  MousePointerClick,
} from "lucide-react";

const howWeUseAIData = [
  {
    title: "Audience Insight",
    subtitle: "AI reads behavior and finds intent.",
    description:
      "Advanced algorithms analyze user patterns, predict behavior, and segment audiences based on real-time data signals.",
    icon: Target,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Creative Testing",
    subtitle: "We test ad and page variants fast.",
    description:
      "Run multivariate tests across channels, identify winning combinations, and optimize creative elements automatically.",
    icon: FlaskConical,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Content Help",
    subtitle: "AI suggests topics, headlines, and outlines.",
    description:
      "Generate content ideas based on trending topics, SEO data, and audience preferences with human refinement.",
    icon: FileText,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Ad Optimization",
    subtitle: "AI spots bids and budget shifts in real time.",
    description:
      "Automated bid adjustments, budget allocation across campaigns, and performance monitoring 24/7.",
    icon: DollarSign,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "UX Tuning",
    subtitle: "AI maps flows and surface drop-off points.",
    description:
      "Heatmap analysis, user journey mapping, and friction point identification to improve conversion rates.",
    icon: MousePointerClick,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function HowWeUseAI() {
  return (
    <div className="w-full rounded-[30px] bg-[#F9F9F9] font-mont">
    <section className="containers py-10 ">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-4">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-3">
          HOW WE USE AI
        </h2>
        <p className="text-[13px] md:text-[14px] lg:text-[16px] font-mont font-semibold leading-[156%]">
          Intelligent tools that amplify human expertise across every aspect of
          digital marketing.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        {howWeUseAIData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
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
                {item.subtitle}
              </p>

              <hr className="border-t border-gray-100 my-2" />

              <p className="text-gray-600 text-[12px] leading-[156%]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
}
