import Image from "next/image";
import lines from '../../../public/why-digital-creative-web/lines.svg'
import spanner from '../../../public/why-digital-creative-web/spanner.svg'
import bulb2 from '../../../public/why-digital-creative-web/bulb2.svg'
import circle from '../../../public/why-digital-creative-web/circle.svg'
import line from '../../../public/why-digital-creative-web/line.svg'

const steps = [
    {
        step: "1",
        title: "Plan the Goal",
        desc: "Define objectives, audience, and success metrics with all teams present.",
        color: "bg-orange-500",
        icon: circle,
    },
    {
        step: "2",
        title: "Craft the Idea",
        desc: "Create messaging, visuals, and content strategy aligned to the plan.",
        color: "bg-emerald-500",
        icon: bulb2,
    },
    {
        step: "3",
        title: "Build the Experience",
        desc: "Develop pages, campaigns, and assets that deliver on the creative vision.",
        color: "bg-purple-500",
        icon: spanner,
    },
    {
        step: "4",
        title: "Measure and Grow",
        desc: "Track results, gather insights, and refine for continuous improvement.",
        color: "bg-blue-500",
        icon: lines,
    },
];

export default function Process() {
    return (
        <section className="lg:py-20 md:py-16 py-8 bg-[#F9F9F9] rounded-[30px]">
            <div className="containers">

                {/* Heading */}
                <div className="text-center lg:mb-14 md:mb-10 mb-6 ">
                    <p className="font-urbanist font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] text-[#000000] ">
                        Our Process
                    </p>
                    <h2 className="mt-2 font-urbanist font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[156%] text-[#000000] ">
                        Four clear steps that keep everyone aligned from start to finish.
                    </h2>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">

                    {steps.map((item, index) => (
                        <div key={index} className="relative text-center">

                            {/* Arrow (desktop only) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-6 right-[-50%] w-[120px]">
                                    <Image
                                        src={line} 
                                        alt="arrow"
                                        className="object-contain"
                                    />
                                </div>
                            )}


                            {/* Step circle */}
                            <div className="flex justify-center mb-2 md:mb-4">
                                <div className="relative">
                                    <span
                                        className={`absolute -top-2 -right-2 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full ${item.color}`}
                                    >
                                        {item.step}
                                    </span>

                                    <div className="w-10 h-10 border flex items-center justify-center bg-[#FFFFFF] rounded-[10px]">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="font-urbanist font-semibold text-[16px] md:text-[18px] leading-[18px] text-[#000000] ">
                                {item.title}
                            </h3>
                            <p className="md:mt-2 mt-1 font-poppins font-normal text-[13px] md:text-[14px] leading-[120%] text-[#000000] ">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
