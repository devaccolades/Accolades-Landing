const HeroSection = () => {
    return (
        <section
            className="relative w-full overflow-hidden rounded-b-[28px] md:rounded-b-[48px]"
            style={{
                background:
                    "linear-gradient(180deg, #FFFFFF 44.23%, #0F9EA8 100%)",
            }}
        >
            <div className="mx-auto flex containers flex-col items-center px-6 py-24 text-center">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 md:mt-4 text-sm font-medium text-teal-700 shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100">
                        💡
                    </span>
                    Experience-Driven Digital Marketing
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl">
                    <span className="block font-semibold">
                        THE KNOWLEDGE FACTOR
                    </span>
                    <span className="block">
                        MORE THAN SKILL PROVEN KNOW-HOW
                    </span>
                </h1>

                {/* Subtext */}
                <p className="mt-6 max-w-2xl text-base text-gray-600 md:text-lg">
                    We pair market know-how with tested skills. Data-Driven, Proven Results
                </p>

                {/* CTA */}
                <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
                    Book a Review
                    <span className="text-lg">↗</span>
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
