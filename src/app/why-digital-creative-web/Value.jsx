import Image from "next/image";
import time from '../../../public/why-digital-creative-web/time.svg'
import dollar from '../../../public/why-digital-creative-web/dollar.svg'
import sound from '../../../public/why-digital-creative-web/sound2.svg'
import growth from '../../../public/why-digital-creative-web/growth.svg'

const items = [
    {
        title: "Save Time",
        desc: "No waiting for handoffs between departments. Work happens in parallel, not in sequence.",
        value: "3x",
        label: "Faster delivery",
        icon: time,
    },
    {
        title: "Save Cost",
        desc: "One integrated team costs less than hiring separate agencies for strategy, design, and development.",
        value: "40%",
        label: "Average savings",
        icon: dollar,
    },
    {
        title: "Clear Brand Voice",
        desc: "Consistent messaging across every touchpoint. Your brand speaks with one voice, not many.",
        value: "100%",
        label: "Brand alignment",
        icon: sound,
    },
    {
        title: "Better Results",
        desc: "Campaigns optimized from strategy through execution deliver higher conversion and ROI.",
        value: "2.5%",
        label: "ROI improvement",
        icon: growth,
    },
];

export default function Value() {
    return (
        <section className="lg:py-20 md:py-12 py-8 bg-white">
            <div className="containers">

                {/* Heading */}
                <div className="text-center mb-6 md:mb-10 lg:mb-14">
                    <h2 className="text-sm tracking-widest uppercase font-urbanist font-bold text-[16px] md:text-[20px] lg:text-[24px] leading-[20px] text-[#000000] mb-2 lg:mb-4">
                        What This Looks Like Client Value in Work
                    </h2>
                    <p className="font-urbanist font-semibold lg:text-[16px] md:text-[14px] text-[13px] leading-[120%] text-[#000000]">
                        Integration translates directly to business advantages you can measure.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-xl p-3 md:p-6 space-y-1 lg:space-y-3"
                        >
                            {/* Row 1: Icon + Value + Label */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="md:w-10 md:h-10 h-8 w-8 rounded-lg flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-urbanist font-extrabold lg:text-[24px] leading-[18px] text-[#36A9B0] ">
                                        {item.value}
                                    </p>
                                    <p className="font-poppins font-normal text-[12px] leading-[156%] text-[#484848] ">
                                        {item.label}
                                    </p>
                                </div>
                            </div>

                            {/* Row 2: Title */}
                            <h3 className="font-urbanist lg:text-[18px] md:text-[16px] text-[12px] text-sm font-semibold text-[#000000]">
                                {item.title}
                            </h3>

                            {/* Row 3: Description */}
                            <p className="font-poppins font-normal md:text-[14px] text-[12px] text-[#484848] ">
                                {item.desc}
                            </p>
                        </div>

                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="lg:mt-14 md:mt-8 mt-6 flex justify-center  ">
                    <div className="font-urbanist font-bold text-[16px] md:text-[20px] leading-[20px]  bg-[#3DB3BA] px-6 md:px-8 py-4 lg:py-6 text-center text-[#FFFFFF] rounded-[20px]">
                        YOU SAVE TIME. YOU SAVE COST. YOU GET A CLEAR BRAND VOICE. YOU GET BETTER RESULTS.
                    </div>
                </div>

            </div>
        </section>
    );
}
