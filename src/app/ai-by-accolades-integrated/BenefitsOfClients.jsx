"use client";

import { Zap, Target, TrendingUp, BarChart3 } from "lucide-react";

const benefitsData = [
  {
    text: "Faster campaign learning cycles",
    icon: Zap,
    border: "border-orange-300",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    text: "Smarter targeting and less ad waste",
    icon: Target,
    border: "border-purple-300",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    text: "Higher chance of conversion per visitor",
    icon: TrendingUp,
    border: "border-green-300",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    text: "Clearer reporting and faster decisions",
    icon: BarChart3,
    border: "border-blue-300",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export default function BenefitsForClients() {
  return (
    <section className="containers py-14 bg-white font-mont">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-2">
          BENEFITS FOR CLIENTS
        </h2>
        <p className="text-[13px] md:text-[14px] lg:text-[16px] font-mont font-semibold ">
          Measurable improvements that impact your bottom line.
        </p>
      </div>

      {/* Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {benefitsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`flex items-center gap-3 rounded-full px-5 py-3 border ${item.border} ${item.bg}`}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-[10px] bg-white">
                <Icon className={item.iconColor} size={16} />
              </div>

              <p className="text-[13px] md:text-[14px] font-mont font-semibold">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
