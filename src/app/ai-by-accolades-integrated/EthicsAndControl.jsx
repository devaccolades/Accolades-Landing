"use client";

import Image from "next/image";

const ethicsData = [
    {
        title: "Human Approval Required",
        description:
            "Every AI-generated output is reviewed and approved by our team before going live. No automated publishing without oversight.",
        icon: "/ai-by/i6.svg",
        bg: "bg-green-50",
    },
    {
        title: "Built-in Guardrails",
        description:
            "AI operates within predefined parameters aligned with your brand guidelines, industry standards, and ethical marketing practices.",
        icon: "/ai-by/i6.svg",
        bg: "bg-green-50",
    },
    {
        title: "No Sensitive Claims",
        description:
            "We avoid AI-generated content for medical, legal, or health-related claims that require professional verification.",
        icon: "/ai-by/i5.svg",
        bg: "bg-red-50",
    },
    {
        title: "Transparent About AI Use",
        description:
            "We’re upfront about when and how AI is used in your campaigns, maintaining trust with your audience.",
        icon: "/ai-by/i5.svg",
        bg: "bg-red-50",
    },
];

export default function EthicsAndControl() {
    return (
        <section className="w-full py-16 bg-[#F9F9F9] font-mont rounded-[30px]">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-4">
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-[10px]">
                    <Image src="/ai-by/i7.svg" alt="Ethics & Control" width={44} height={44} />
                </div>

                <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-1">
                    ETHICS & CONTROL
                </h2>

                <p className="text-[13px] md:text-[14px] lg:text-[16px] font-mont font-semibold">
                    Responsible AI with human oversight at every step.
                </p>
            </div>

            {/* Card */}
            <div className="containers rounded-2xl border border-gray-200 bg-white p-[10px] md:p-6 ">
                <div className="space-y-5">
                    {ethicsData.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">

                            {/* ICON COLUMN */}
                            <div className="flex-shrink-0 w-8 h-8 mt-1">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={32}
                                    height={32}
                                    unoptimized
                                    className="w-8 h-8"
                                />
                            </div>

                            {/* TEXT COLUMN */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-[16px] leading-tight mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-[14px] leading-[156%]">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <p className="text-gray-600 text-sm leading-[156%] mt-6">
                    AI is a powerful tool, but it’s not a replacement for human judgment,
                    creativity, and accountability. We use it to enhance—not replace—our
                    expertise.
                </p>
            </div>
        </section>
    );
}
