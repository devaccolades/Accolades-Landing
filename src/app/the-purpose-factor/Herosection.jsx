import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="containers  w-full py-24 px-4">
            <div className="mx-auto max-w-4xl flex flex-col items-center text-center space-y-2 md:pt-12">

                {/* Badge */}
                <span className="rounded-full bg-[#EDFAF9] px-6 py-1 text-[13px] md:text-[14px] lg:text-[16px] font-extrabold text-[#484848]">
                    The Purpose Factor
                </span>

                {/* Heading */}
                <h1 className="text-4xl font-bold leading-[32px] md:leading-[36px] lg:leading-[48px] tracking-tight text-gray-900 sm:text-[32px] md:text-[36px] lg:md:text-[48px]">
                    BRANDS WITH <br />
                    <span className="block">PURPOSE LAST LONGER.</span>
                </h1>

                {/* Subheading */}
                <p className="max-w-2xl font-semibold text-base text-gray-600 text-[14px] md:text-[16px] lg:text-[18px]">
                    Purpose guides every message and move.
                </p>

                {/* CTA */}
                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 cursor-pointer">
                    Start Your Journey
                    <span aria-hidden>→</span>
                </button>
                {/* Illustration */}
                <div className="w-full mt-4 max-w-5xl">
                    <Image
                        src="purpose/hero.png"
                        alt="Purpose-driven brand illustration"
                        width={1200}
                        height={400}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* Stats */}
                <div className="mt-4 grid w-full max-w-4xl gap-12 grid-cols-3">
                    <div>
                        <p className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0C7379]">2x</p>
                        <p className="mt-2 text-[13px] md:text-[14px] text-black">
                            Higher Trust Scores
                        </p>
                    </div>

                    <div>
                        <p className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0C7379]">85%</p>
                        <p className="mt-2 text-[13px] md:text-[14px] text-black">
                            Customer Retention
                        </p>
                    </div>

                    <div>
                        <p className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0C7379]">3x</p>
                        <p className="mt-2 text-[13px] md:text-[14px] text-black font-normal">
                            Brand Advocacy
                        </p>
                    </div>
                </div>

                {/* Supporting Text */}
                <p className="mt-14 max-w-3xl text-[14px] md:text-[16px] lg:text-[18px] text-black sm:text-base">
                    Purpose is not a line on the site. It is the reason people choose you.
                    We help you find, state, and use that purpose.
                </p>

            </div>
        </section>
    );
}
