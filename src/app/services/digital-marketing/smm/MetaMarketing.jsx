"use client";
import Image from "next/image";

export default function MetaMarketing() {
  return (
    <section className=" bg-[#f7f7f7] py-16 font-mont rounded-[30px]">
      <div className=" containers mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-full w-fit">
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 bg-white rounded-full" />
              <span className="w-4 h-4 bg-white rounded-full" />
            </span>
            Leading SMM Agency in Kochi
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            META (FACEBOOK & <br />
            INSTAGRAM) MARKETING
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
            With over 3 billion users, Facebook (Meta) is the world's largest social
            platform. We run targeted Facebook and Instagram campaigns in Kochi to
            tap this audience. Our team creates eye-catching posts, Stories, and
            Reels that showcase your products and message.
          </p>

          {/* ================= FEATURE CARDS ================= */}
          <div className="flex flex-col gap-4 max-w-xl">

            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden">
                <img
                  src="/new-smm/adva.svg"
                  alt="Advanced AI Targeting"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-black mb-1">
                  Advanced AI Targeting
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Meta’s advanced AI targeting ensures your content reaches the
                  right people at the right time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden">
                <img
                  src="/new-smm/arrow30.svg"
                  alt="Optimized for Sales"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-black mb-1">
                  Optimized for Sales
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We optimize campaigns to increase brand visibility and sales,
                  leveraging features like short-form Reels.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full h-full   ">

          <Image
            src="/new-smm/image 3.png"   // 👉 Your right-side creative image
            alt="Meta Marketing Ad"
            fill
            className="object-cover"
            priority
          />

        </div>

      </div>
    </section>
  );
}
