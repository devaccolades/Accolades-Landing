import Image from "next/image";

const steps = [
    {
        id: 1,
        title: "Learn from data and past work.",
        description:
            "We analyze your market, competitors, and historical performance to extract actionable insights.",
        icon: "/knowledge/p1.svg",
    },
    {
        id: 2,
        title: "Build a local plan from those lessons.",
        description:
            "We create a customized strategy tailored to Kochi market dynamics and your business goals.",
        icon: "/knowledge/p2.svg",
    },
    {
        id: 3,
        title: "Run tests, then scale the wins.",
        description:
            "Small experiments validate our approach before we commit resources to full-scale campaigns.",
        icon: "/knowledge/p3.svg",
    },
];

const Process = () => {
    return (
        <section className="w-full bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-black">
                        Our Process
                    </h2>
                    <p className="mt-3 text-sm text-gray-700 md:text-lg">
                        A systematic approach to integrating AI into your marketing operations.
                    </p>
                </div>

                {/* ================= DESKTOP ================= */}
                <div className="relative hidden md:grid md:grid-cols-3 md:gap-8">
                    {/* Horizontal connector – true center of cards */}
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-indigo-200" />

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="
                relative rounded-2xl border border-gray-200 bg-white p-6
                transition hover:border-indigo-500
              "
                        >
                            {/* Badge – anchored to card */}
                            <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                                {step.id}
                            </div>

                            {/* Icon */}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                                <Image src={step.icon} alt="" width={24} height={24} />
                            </div>

                            <h3 className="text-sm font-semibold text-black">
                                {step.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ================= MOBILE ================= */}
                {/* ================= MOBILE ================= */}
                <div className="relative md:hidden">
                    {/* Vertical connector – behind cards */}
                    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-indigo-200" />

                    <div className="flex flex-col gap-8">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="relative mx-auto w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5"
                            >
                                {/* Mask connector behind card */}
                                <div className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-white" />

                                {/* Badge */}
                                <div className="absolute right-0 top-0 z-20 translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                                    {step.id}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                                        <Image src={step.icon} alt="" width={24} height={24} />
                                    </div>

                                    <h3 className="text-sm font-semibold text-black">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;
