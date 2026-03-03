import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "Discovery",
        desc: "We ask why the brand exists and uncover the core truth.",
        icon: "/purpose/f1.svg",
        color: "bg-orange-500",
    },
    {
        id: 2,
        title: "Clarity",
        desc: "We craft simple purpose statements that resonate deeply.",
        icon: "/purpose/f2.svg",
        color: "bg-teal-600",
    },
    {
        id: 3,
        title: "Activation",
        desc: "We turn purpose into campaigns and pages that convert.",
        icon: "/purpose/f3.svg",
        color: "bg-purple-500",
    },
];

const framework = [
    {
        title: "Core Belief",
        desc: "One line that captures your essence",
    },
    {
        title: "Proof Points",
        desc: "3 short bullets that validate",
    },
    {
        title: "Brand Promise",
        desc: "One short sentence of commitment",
    },
];


export default function HowWeWork() {
    return (
        <section className="py-6 md:py-10 lg:py-16">
            <div className="containers">

                {/* Heading */}
                <h2 className="mb-6 lg:mb-16 text-center text-[16px] md:text-[18px] lg:text-[20px] font-bold text-black">
                    How we work on purpose
                </h2>

                {/* Steps */}
                <div className="flex flex-col items-center md:flex-row md:justify-between">

                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="flex flex-col items-center text-center md:flex-row md:text-center"
                        >
                            {/* Step Card */}
                            <div className="flex max-w-xs flex-col items-center text-center">

                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="flex h-16 w-16 items-center justify-center">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={50}
                                            height={50}
                                        />
                                    </div>

                                    {/* Number badge */}
                                    <span
                                        className={`absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold text-white ${step.color}`}
                                    >
                                        {step.id}
                                    </span>
                                </div>

                                {/* Text */}
                                <h3 className="text-base text-[18px] font-semibold text-black">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-[14px] font-regular text-black">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Arrows */}
                            {index !== steps.length - 1 && (
                                <>
                                    {/* Desktop arrow */}
                                    <div className="hidden md:block">
                                        <Image
                                            src="/new-seo/arrow-right.svg"
                                            alt=""
                                            width={200}
                                            height={32}
                                        />
                                    </div>

                                    {/* Mobile arrow */}
                                    <div className="my-1 md:hidden">
                                        <Image
                                            src="/purpose/down.svg"
                                            alt=""
                                            width={8}
                                            height={28}

                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}

                </div>

                {/* Quick framework */}
                <div className="mt-12 lg:mt-24">
                    <h3 className="mb-6 md:mb-10 text-left text-[18px] lg:text-[20px] text-base font-bold text-black">
                        Quick framework (for designers)
                    </h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                        {framework.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm"
                            >
                                <div className="flex items-start gap-4 md:flex-col md:gap-3">

                                    {/* Icon */}
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100">
                                        <img
                                            src="/purpose/tick.svg"
                                            alt=""
                                            className="w-10 h-10"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h4 className="text-[16px] lg:text-[18px] font-semibold text-black">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-[14px] text-gray-600">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
