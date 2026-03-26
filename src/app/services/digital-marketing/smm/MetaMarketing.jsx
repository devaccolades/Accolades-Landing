
"use client";
import Image from "next/image";

export default function MetaMarketing() {
  return (
    <section className="bg-[#f7f7f7] py-10 md:py-16 font-mont rounded-[20px] md:rounded-[30px]">
      <div className="containers mx-auto px-0 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center">

        {/*  LEFT CONTENT */}
        <div className="flex flex-col gap-4 md:gap-2 xl:gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-black text-white text-[10px] sm:text-xs px-3 md:px-4 py-2 rounded-full w-fit">
            <span className="flex items-center gap-1">

              <Image
                src="/new-smm/insta.svg"
                alt="Optimized for Sales"
                width={20}
                height={20}
                className="w-3 h-3 md:w-4 md:h-4 object-contain"
              />
              <Image
                src="/new-smm/fb.svg"
                alt="Optimized for Sales"
                width={20}
                height={20}
                className="w-3 h-3 md:w-4 md:h-4 object-contain"
              />
            </span>
            Leading SMM Agency in Kochi
          </div>

          {/* Heading */}
          <h2 className="text-[20px] sm:text-[23px] xl:text-[32px] font-bold text-black leading-[26px] sm:leading-[30px] xl:leading-[38px]">
            META (FACEBOOK & <br />
            INSTAGRAM) MARKETING
          </h2>

          {/* Description */}
          <p className="text-black font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[150%] max-w-xl">
            With over 3 billion users, Facebook (Meta) is the world's largest social
            platform. We run targeted Facebook and Instagram campaigns in Kochi to
            tap this audience. Our team creates eye-catching posts, Stories, and
            Reels that showcase your products and message.
          </p>

          {/*  FEATURE CARDS  */}
          <div className="flex flex-col gap-3 lg:gap-4 max-w-xl">

            {/* Card 1 */}
            <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
              <div className="w-9 h-9 lg:w-10 lg:h-12 flex-shrink-0 overflow-hidden">
                <Image
                  src="/new-smm/adva.svg"
                  alt="Advanced AI Targeting"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain "
                />
              </div>
              <div>
                <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
                  Advanced AI Targeting
                </h4>
                <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                  Meta’s advanced AI targeting ensures your content reaches the
                  right people at the right time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
              <div className="w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0 overflow-hidden">
                <Image
                  src="/new-smm/arrow30.svg"
                  alt="Optimized for Sales"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
                  Optimized for Sales
                </h4>
                <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                  We optimize campaigns to increase brand visibility and sales,
                  leveraging features like short-form Reels.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/*  RIGHT IMAGE */}

        <div className="relative w-full h-[360px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[520px]
                rounded-[20px] md:rounded-[30px] overflow-hidden">

          <Image
            src="/new-smm/meta-ad.png"
            alt="Meta Marketing Ad"
            fill
            className="object-cover "
            priority
          />

        </div>


      </div>
    </section>
  );
}
