import { TrendingUp } from "lucide-react";
import Image from "next/image";

export default function ScalableApproachSection() {
  return (
    <section className=" font-mont">
      <div className="containers py-16 md:py-20">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-10 items-center">

          {/* Left Content Card */}
          <div className="border border-[#C9B6FF] rounded-[20px] p-6 md:p-8 max-w-xl">
            <div className="w-10 h-10 rounded-lg bg-[#EFEAFF] flex items-center justify-center mb-4">
              <Image
              src="/market-factor/icon.svg"
              alt="icon"
              width={44}
              height={44}
              />
            </div>

            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] font-bold mb-3">
              Scalable Approach
            </h3>

        <div className=" text-[#484848]">
            <p className="text-[14px] lg:text-[16px] leading-[156%] mb-4">
              We design plans that grow with your business. We avoid short fixes.
              We build repeatable systems.
            </p>
            <hr className="text-gray-400 my-2"/>

            <p className="text-[13px] lg:text-[14px] leading-[156%]">
              Our frameworks are built for expansion. As you enter new markets
              or scale existing operations, our strategies adapt without
              requiring complete overhauls. This saves time, reduces risk, and
              ensures consistency across all your markets.
            </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] rounded-[20px] overflow-hidden bg-[#F5F5F5]">
            <Image
              src="/market-factor/appro.jpg"
              alt="Scalable Analytics Dashboard"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
