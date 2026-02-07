"use client";

import Image from "next/image";

export default function RiskControlSection() {
    const phases = [
        {
            title: "Test Phase",
            description:
                "Launching experiments in limited markets to validate assumptions before full rollout.",
        },
        {
            title: "Measure Phase",
            description:
                "Track key metrics alongside actionable insights to understand what drives success.",
        },
        {
            title: "Scale Phase",
            description:
                "Deploy proven strategies with confidence, knowing the data supports the investment.",
        },
    ];

    return (
        <section className="w-full bg-[#F9F9F9] py-10 md:py-16 font-mont rounded-[30px]">
            <div className="containers ">

                {/* Header */}
                <div className="flex items-start justify-start gap-4 mb-10">
                    {/* Icon */}
                    <div className="w-12 h-12 relative">
                        {/* Replace with your icon */}
                        <Image
                            src="/market-factor/risk.svg"
                            alt="Risk Control"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title + Subtitle */}
                    <div>
                        <h2 className="text-[18px] md:text-[20px] leading-[16px] font-bold text-black mb-2">
                            Risk Control
                        </h2>
                        <p className="text-[#484848] mt-1 max-w-md text-[14px] lg:text-[16px] leading-[156%]">
                            We run small tests. We measure impact. We scale what works.
                        </p>
                    </div>
                </div>

                {/* Phases */}
                <div className="grid md:grid-cols-3 gap-2 md:gap-8">
                    {phases.map((phase, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex gap-4">


                                {/* Vertical Line */}
                                <div className="hidden md:block w-[4px] bg-[#0C7379] rounded-full" />


                                {/* Content */}
                                <div>
                                    <h3 className="font-semibold text-[16px] lg:text-[18px] leading-[16px] lg:leading-[18px] text-gray-900">
                                        {phase.title}
                                    </h3>
                                    <p className="text-[#484848] text-[13px] lg:text-[14px] mt-2 leading-[156%]">
                                        {phase.description}
                                    </p>
                                </div>

                                {index === phases.length - 1 && (
                                    <div className="hidden md:block w-[4px] bg-[#0C7379] rounded-full" />
                                )}



                            </div>
                            {index !== phases.length - 1 && (
                                <hr className="md:hidden w-full h-[3px] bg-[#0C7379] my-3" />
                            )}
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
}
