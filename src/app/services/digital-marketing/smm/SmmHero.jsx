"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SocialMediaHero() {
  return (
    <section className="containers bg-white pt-10 lg:pt-40 pb-8 md:pb-12 font-mont">
      <div className=" mx-auto px-0 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:gap-10 items-center">

        {/*  LEFT CONTENT  */}
        <div className="flex flex-col gap-3 lg:gap-5 max-w-xl">

          {/* Badge */}
          <span className="w-fit text-xs font-semibold bg-black text-white px-3 py-1 rounded-full">
            Leading SMM Agency in Kochi
          </span>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[30px] lg:leading-[48px]">
            <span className="text-[#008080]">SOCIAL MEDIA</span> <br />
            MARKETING <br />
            <span className="text-black">SERVICES IN KOCHI</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Social Media Marketing (SMM) uses platforms like Facebook, Instagram (Meta), LinkedIn, and YouTube to promote your products and engage your audience. Accolades Integrated helps Kochi businesses grow by driving traffic and converting visitors into customers.
          </p>

          {/* Button */}
          <Link href="/contact-us">
          <button className="w-fit flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-[10px] text-[16px] leading-[100%] font-semibold transition">
            Start Growing Your Brand
            <ArrowUpRight size={16} />
          </button>
          </Link>

          
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full h-[300px] lg:h-[420px] rounded-[40px] ">

          {/* ================= MAIN HERO IMAGE ================= */}
          <Image
            src="/new-smm/smm-hero.jpg"
            alt="Social Media Marketing"
            fill
            priority
            className="object-cover rounded-[40px]"
          />

          {/* ================= FLOATING GROWTH BADGE ================= */}
          <div className="absolute -bottom-4 md:-bottom-6 -left-6 flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-lg">

            {/* Arrow Image */}
            <div className="relative w-[26px] h-[26px]">
              <Image
                src="/new-smm/arrow30.svg"
                alt="Growth Icon"
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-bold text-black font-mont">300%</p>
              <p className="text-[11px] text-black font-mont">Avg. Growth Rate</p>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
