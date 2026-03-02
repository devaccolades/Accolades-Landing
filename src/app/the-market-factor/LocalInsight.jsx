import { Users, Map, Radio } from "lucide-react";

const insightCards = [
  {
    title: "User Cues",
    description:
      "What users expect in the region. We analyze behavioral patterns, preferences, and expectations specific to your target market to ensure your offering resonates.",
    icon: Users,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Competitor Map",
    description:
      "Who leads and why. We identify market leaders, analyze their strategies, and uncover opportunities where your business can differentiate and win.",
    icon: Map,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Channel Fit",
    description:
      "Which channels bring demand here. We determine the most effective marketing channels for your specific market to maximize reach and ROI.",
    icon: Radio,
    bg: "bg-pink-100",
    color: "text-pink-600",
  },
];

export default function LocalInsightSection() {
  return (
    <section className="w-full bg-[#F1F8F8] font-mont rounded-[30px]">
      <div className="containers py-16 md:py-20">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[18px] md:text-[20px] leading-[16px] font-bold text-black mb-2">
            Local Insight
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[156%] font-semibold text-[#484848]">
            Deep understanding of your market landscape
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white rounded-[20px] p-6">
                <div
                  className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center mb-4`}
                >
                  <Icon className={card.color} size={20} />
                </div>
                <h3 className="font-semibold text-[16px] lg:text-[18px] leading-[16px] lg:leading-[18px] mb-2">
                  {card.title}
                </h3>
                <p className="text-[13px] lg:text-[14px] leading-[156%] text-[#6B6B6B]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
