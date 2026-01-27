"use client";
import Image from "next/image";
import { Database, Settings2, Rocket } from "lucide-react";

const processData = [
    {
        step: 1,
        title: "Audit",
        subtitle: "We collect data and set goals.",
        description:
            "Comprehensive analysis of your current data sources, performance metrics, and business objectives to establish a baseline.",
        icon: "/ai-by/i1.svg",

    },
    {
        step: 2,
        title: "Train",
        subtitle: "We pair AI signals with human rules.",
        description:
            "Configure AI models with your brand guidelines, business rules, and strategic priorities to ensure aligned outputs.",
        icon: "/ai-by/i2.svg",

    },
    {
        step: 3,
        title: "Act",
        subtitle: "We launch, test, and refine quickly.",
        description:
            "Deploy optimized campaigns, monitor performance in real-time, and continuously improve based on results.",
        icon: "/ai-by/i3.svg",

    },
];

export default function OurProcess() {
    return (
        <section className="containers pb-16 bg-white font-mont">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-6">
                <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-2">
                    OUR PROCESS
                </h2>
                <p className="text-[13px] md:text-[14px] lg:text-[16px] font-mont font-semibold ">
                    A systematic approach to integrating AI into your marketing
                    operations.
                </p>
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Connector line (desktop only) */}
                <div className="absolute top-26 left-0 right-0 h-[3px] bg-[#D2D2FF] z-0" />

                {processData.map((item, index) => {

                    return (
                        <div
                            key={index}
                            className="relative z-10 rounded-2xl border border-gray-200 bg-white p-6 text-left hover:border-purple-400"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 flex items-center justify-center  mb-4 ">
                                <Image src={item.icon} alt={item.title} width={44} height={44} />
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-[16px] lg:text-[18px] leading-[16px] lg:leading-[18px] font-mont  mb-1">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 text-sm leading-[156%]">
                                {item.subtitle}
                            </p>

                            <hr className="border-t border-gray-100 my-2" />

                            <p className="text-gray-700 text-[12px] leading-[156%]">
                                {item.description}
                            </p>

                            {/* Step number */}
                            <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 font-semibold text-[16px] lg:text-[18px] leading-[16px] lg:leading-[18px] font-mont text-purple-600">
                                {item.step}
                            </div>

                        </div>
                    );
                })}

                 <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[#D2D2FF] z-0" />
            </div>
        </section>
    );
}
