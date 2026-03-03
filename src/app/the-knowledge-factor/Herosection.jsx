import Image from "next/image";

const HeroSection = () => {
    return (
        <section
            className="relative w-full overflow-hidden rounded-b-[28px] md:rounded-b-[48px]"
            style={{
                background:
                    "linear-gradient(180deg, #FFFFFF 44.23%, #0F9EA8 100%)",
            }}
        >
            {/* SVG */}
            <Image
                src="knowledge/knw.svg"   // from public/hero-shape.svg
                alt="Hero shape"
                // className="absolute bottom-0 left-0 w-full"
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                width={1000}
                height={1000}
            />
            <div className="mx-auto z-10 flex containers flex-col items-center pt-20 pb-12  md:py-24 text-center">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full bg-white px-2 py-2 md:mt-4 text-[13px] md:text-[14px] lg:text-[16px] font-medium text-teal-700 shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100">
                        💡
                    </span>
                    Experience-Driven Digital Marketing
                </div>

                {/* Heading */}
                <h1 className="font-extrabold leading-tight tracking-tight text-black">
                    <span className="block font-semibold text-[18px] md:text-[24px] lg:text-[32px]">
                        THE KNOWLEDGE FACTOR
                    </span>
                    <span className="block text-[28px] md:text-[36px] lg:text-[48px]">
                        MORE THAN SKILL PROVEN KNOW-HOW
                    </span>
                </h1>

                {/* Subtext */}
                <p className="mt-6  text-base text-gray-600 text-[13px] md:text-[14px] lg:text-[18px]">
                    We pair market know-how with tested skills. Data-Driven, Proven Results
                </p>

                {/* CTA */}
                <a href="tel:+919048100233">
                    <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-700 px-8 py-3 text-[14px] md:text-[16px]  font-semibold text-white transition hover:bg-teal-800">
                        Book a Review
                        <span className="text-lg">↗</span>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
