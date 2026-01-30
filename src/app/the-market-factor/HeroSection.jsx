
"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] w-full font-mont overflow-hidden">

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/market-factor/hero.png')",
        }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 block md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/market-factor/mob-hero.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-teal-700/25 via-teal-600/10 to-teal-700/75 md:to-transparent md:from-teal-700/25 md:via-teal-600/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-[100vh] flex items-center">
        <div className="max-w-xl mt-[280px] md:mt-[180px] ">
          
          <span className="inline-block mb-2 md:mb-4 rounded-[24px] bg-[#EDFAF9] px-[16px] py-[12px] text-[14px] md:text-[16px] leading-[13px] font-extrabold text-gray-800">
            The Market Factor
          </span>

          <h1 className="text-white text-[32px] md:text-[36px] xl:text-[48px] leading-[36px] lg:leading-[48px] font-bold mb-2 md:mb-4">
            WORK THAT FITS <br /> WHERE YOU SELL.
          </h1>

          <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] mb-4 md:mb-6">
            Strategy must match market truth.
          </p>

         <a
          href="tel:+919048100233" 
          className="inline-flex items-center gap-2 rounded-[10px] text-[14px] md:text-[16px] leading-[100%] bg-[#0C7379] px-[16px] py-[10px] text-white font-semibold hover:bg-teal-900 transition">
            Schedule a Call
            <span className="text-lg"> ↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}
