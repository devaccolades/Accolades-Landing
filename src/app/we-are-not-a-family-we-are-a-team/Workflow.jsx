import React from 'react'
import userIcon from "../../../public/we-are-a-team/users (1) 1.svg";
import checklistIcon from "../../../public/we-are-a-team/clipboard-check 1.svg";
import calendarIcon from "../../../public/we-are-a-team/calendar (1) 1.svg";
import Image from 'next/image';

const workflowSteps = [
    {
        title: "Assign Lead and Owner for Every Project",
        description:
            "Before work begins, we identify a project lead and task owners. Everyone knows their role. No work falls through the cracks. The lead coordinates, owners execute, and accountability is crystal clear.",
        icon: userIcon,
    },
    {
        title: "Share Weekly Notes and Results",
        description:
            "Transparency is non-negotiable. Every week, we document progress, blockers, and wins. You’re never left wondering what’s happening. Our updates are concise, honest, and actionable.",
        icon: checklistIcon,
    },
    {
        title: "Hold Short Review Calls with Action Items",
        description:
            "We keep meetings focused and productive. Regular check-ins end with clear next steps and assigned owners. No endless discussions—just decisions and action.",
        icon: calendarIcon,
    },
];

const Workflow = () => {
    return (
        <section className="font-mont bg-white py-8 lg:py-16 w-[90%] lg:w-[80%] mx-auto">
            <div className="">
                {/* Heading */}
                <div className="mb-8">
                    <h3 className=" text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-black mb-1">
                        Work Flow
                    </h3>
                    <p className="font-semibold text-[14px] lg:text-[16px] text-[#484848]">
                        How we execute projects with precision
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-10">
                    {workflowSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-5">
                            {/* Icon */}
                            <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[#0C7379] flex items-center justify-center">
                                <Image src={step.icon} alt={step.title} className="w-5 h-5" />
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="font-mont text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-black mb-1">
                                    {step.title}
                                </h4>
                                <p className="text-sm text-[#484848] leading-relaxed ">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Workflow
