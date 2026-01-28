"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden font-mont mt-18 md:mt-25 lg:mt-28 rounded-[20px] mx-2  my-2">

      {/* BACKGROUND IMAGE (BOTH HANDS IN ONE IMAGE) */}
      <Image
        src="/ai-by/bg1.webp"
        alt="AI Hands Background"
        fill
        priority
        className="object-cover object-center h-full w-full"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/60 to-black/80 z-10" />

      {/* CENTER FLOATING IMAGE */}
      <div className="absolute inset-0 z-20 flex items-center justify-center drop-shadow-[0_0_140px_rgba(0,255,255,0.35)]">
        <motion.div
          className="relative w-[120px] h-[120px] md:w-[220px] md:h-[220px] drop-shadow-[0_0_122px_rgba(0,255,255,0.35)]"
          animate={{
            x: [0, 1, -1, 1, -1, 0],
            y: [0, -1, 1, -1, 1, 0],
          }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/ai-by/ai.svg"
            alt="AI Core"
            fill
            className="object-contain opacity-90 drop-shadow-[0_0_10px_rgba(0,255,255,0.35)]"
          />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="relative z-30 mx-auto flex h-[566px] md:min-h-screen  items-start px-2 md:px-6 pt-8 ">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT CONTENT */}
          {/* <div className="flex flex-col justify-center text-white"> */}
          <div className="flex flex-col justify-start text-white self-start">
            <span className="mb-1 inline-flex w-fit items-center border border-white gap-2 rounded-[24px] bg-white/10 px-[12px] lg:py-[10px] py-[8px] font-extrabold text-[13px] leading-[13px] backdrop-blur">
              <Image src="/ai-by/spark-w.svg" width={16} height={16} alt="spark" />
              AI by Accolades Integrated
            </span>

            <p className="mt-3 max-w-lg text-white font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px]">
              Smart tools. Real people. Better results.
            </p>

            <h1 className="text-[32px] md:text-[34px] lg::text-[36px] xl:text-[48px] font-bold leading-[32px] md:leading-[36px] lg:leading-[48px]">
              AI HELPS US TURN <br />
              <span className="text-teal-400">DATA INTO CLEAR</span> <br />
              ACTION.
            </h1>

            <button className="mt-3 w-fit rounded-[10px] bg-[#0C7379] px-[16px] py-[10px] text-sm md:text-[16px] leading-[16px] font-semibold text-white transition hover:bg-teal-400">
              Get Free Audit  ↗
            </button>
          </div>


        </div>
        {/* RIGHT FEATURES – pinned to top-right */}
        {/* <div className="absolute bottom-4 right-1 z-30 px-6">
          <div className="space-y-3">
            {["Machine Learning", "Data Analysis", "Automation", "Optimization"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] md:text-[14px] lg:text-[16px] font-semibold text-white backdrop-blur"
                >
                  <Image src="/ai-by/spark-t.svg" width={16} height={16} alt="spark" />
                  {item}
                </div>
              )
            )}
          </div>
        </div> */}
        {/* RIGHT FEATURES – pinned bottom-right */}
<div className="absolute bottom-1 md:bottom-6 right-0 md:right-6 z-30">
  <div className="flex flex-col items-center space-y-2">
    {["Machine Learning", "Data Analysis", "Automation", "Optimization"].map(
      (item) => (
        <div
          key={item}
          className="
            flex items-center justify-center gap-3
           
            rounded-full
            bg-white/10
            // px-6 py-3 p-1
            text-[14px] md:text-[15px] lg:text-[16px]
            font-semibold text-white
            backdrop-blur
          "
        >
          <Image
            src="/ai-by/spark-t.svg"
            width={18}
            height={18}
            alt="spark"
          />
          {item}
        </div>
      )
    )}
  </div>
</div>


      </div>
    </section>
  );
}
