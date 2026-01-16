"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* BACKGROUND IMAGE (BOTH HANDS IN ONE IMAGE) */}
      <Image
        src="/ai-by/bg1.webp"
        alt="AI Hands Background"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />

      {/* CENTER FLOATING IMAGE */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
          <Image
            src="/ai-by/bg2.webp"
            // src="/ai-by/ai.png"
            alt="AI Core"
            fill
            className="object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.35)]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-white">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
              ⚡ AI by Accolades Integrated
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              AI HELPS US TURN <br />
              <span className="text-teal-400">DATA INTO CLEAR</span> <br />
              ACTION.
            </h1>

            <p className="mt-6 max-w-lg text-white/70">
              Smart tools. Real people. Better results.
            </p>

            <button className="mt-8 w-fit rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-teal-400">
              Get Free Audit →
            </button>
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex items-end justify-end">
            <div className="space-y-3">
              {["Machine Learning", "Data Analysis", "Automation", "Optimization"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
                  >
                    <span className="h-2 w-2 rounded-full bg-teal-400" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
