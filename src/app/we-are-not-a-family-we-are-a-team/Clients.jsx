import React from 'react'
import bolt from "../../../public/we-are-a-team/zap (1) 1.svg";
import clock from "../../../public/we-are-a-team/clock-8 1.svg";
import check from "../../../public/we-are-a-team/circle-check-big (1) 1.svg";
import Image from 'next/image';

const benefits = [
    {
        title: "Faster Delivery and Fewer Errors",
        description:
            "Clear roles and standards mean less confusion, faster execution, and higher quality output. We catch issues early and ship with confidence.",
        icon: bolt,
    },
    {
        title: "Honest Timelines and Real Ownership",
        description:
            "We don’t overpromise. Our estimates are realistic because they’re based on clear scope and proven capability. When we commit, we deliver.",
        icon: clock,
    },
    {
        title: "Work That Meets Quality and Deadlines",
        description:
            "Our high standards aren’t just internal—they’re reflected in every deliverable. You get professional work, on time, every time.",
        icon: check,
    },
];

const Clients = () => {
    return (
        <section className="bg-[#F1F8F8] py-8 lg:py-16 rounded-[30px]">
            <div className="w-[90%] lg:w-[80%] mx-auto text-center">
                {/* Heading */}
                <h3 className="font-mont text-[16px] md:text-[18px] lg:text-[20px] font-semibold  text-black uppercase mb-5 lg:mb-10">
                    How This Helps Clients
                </h3>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {benefits.map((item, index) => (
                        <div key={index} className="max-w-sm mx-auto">
                            {/* Icon */}
                            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-[10px] bg-[#D5EEEF] border-[1px] border-[#E9E9E9]">
                                <Image src={item.icon} alt={item.title} className="w-5 h-5" />
                            </div>

                            {/* Title */}
                            <h4 className="font-mont text-[16px] lg:text-[18px] font-semibold text-black leading-[100%] mb-3 max-w-[220px] mx-auto">
                                {item.title}
                            </h4>


                            {/* Description */}
                            <p className="text-[16px] md:text-[14px] text-black text-center leading-[156%] font-normal">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients
