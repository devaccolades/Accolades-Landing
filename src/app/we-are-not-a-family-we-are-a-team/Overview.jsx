import React from 'react'
import target from "../../../public/we-are-a-team/target (1) 1.svg"
import message from "../../../public/we-are-a-team/message-square-more 1.svg"
import award from "../../../public/we-are-a-team/award (1) 1.svg"
import chart from "../../../public/we-are-a-team/chart-line 1.svg"
import Image from 'next/image'

const principles = [
    {
        title: "Clear Roles",
        description:
            "Everyone owns tasks. No ambiguity about who’s responsible for what. Clear ownership drives accountability and results.",
        icon: target,
        bg: "#DBEAFE",
    },
    {
        title: "Open Feedback",
        description:
            "We give and take direct notes. Constructive criticism is a gift. We share it promptly and professionally.",
        icon: message,
        bg: "#E0E7FF",
    },
    {
        title: "Standards",
        description:
            "We set and keep high work standards. Quality isn’t negotiable. We deliver what we promise, when we promise it.",
        icon: award,
        bg: "#FCE7F3",
    },
    {
        title: "Growth Focus",
        description:
            "We push for better results every month. Continuous improvement isn’t a buzzword—it’s our operating system.",
        icon: chart,
        bg: "#D0FAE5",
    },
];

const Overview = () => {
    return (
        <section className='w-[90%] lg:w-[80%] mx-auto mt-32 mb-16'>
            <div className="mb-14">
                <h3 className="font-mont text-[18px] lg:text-[20px] leading-[16px] font-bold  uppercase mb-3">
                    Overview
                </h3>
                <p className="text-[#484848] text-[14px] md:text-[16px] lg:text-[18px] leading-[156%]  font-normal mb-3">
                    We reject fuzzy roles and weak feedback. We choose clear jobs, direct talk,
                    and tangible goals.
                </p>
                <p className="text-[#484848] text-[13px] md:text-[14px] lg:text-[16px] leading-[156%]">
                    In a world of corporate jargon and vague expectations, we take a different
                    approach. Every team member knows exactly what they’re responsible for.
                    Feedback flows freely—both praise and criticism—because we believe growth
                    comes from honesty, not comfort. Our commitment is to excellence, not excuses.
                </p>
            </div>
            <div className="mb-14">
                <h3 className="font-mont text-[18px] lg:text-[20px] leading-[16px] font-bold  uppercase mb-3">
                    Team Principles
                </h3>
                <p className="text-[#484848] text-[14px] md:text-[16px] lg:text-[18px] leading-[156%]  font-normal mb-3">
                    The foundation of how we operate.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 lg:gap-4">
                    {principles.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-[20px] p-3 xl:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                        >
                            <div
                                className={`w-8 h-8 lg:w-10 lg:h-10 rounded-[10px] flex items-center justify-center mb-4`} style={{ backgroundColor: item.bg }}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-5 h-5"
                                />
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Overview
