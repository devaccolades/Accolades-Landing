"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SeoHero() {
  return (
    <section className=" bg-gradient-to-br from-[rgb(232,244,244)] to-gray-300 font-mont pt-6 md:pt-10 lg:pt-32 pb-12 rounded-[30px] mx-2 my-2">
      <div className="containers grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4 md:space-y-6">
          {/* Badge */}
          <div className="inline-block  border border-black text-black px-4 py-1 rounded-full text-sm shadow-sm">
            12 Years of SEO Excellence
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[36px] xl:leading-[48px]">
            SEO COMPANY IN KOCHI - ORGANIC SEARCH THAT SCALES YOUR BUSINESS
          </h1>

          {/* Description */}
          <p className="text-black text-[14px] lg:text-[16px] leading-[156%] max-w-xl">
            Accolades Integrated is a 12 year experienced SEO Company in Kochi.
            We help brands rank higher, attract quality traffic, and convert
            visitors into customers. Our SEO work blends technical fixes,
            content strategy, and safe link building. We focus on steady growth
            and clear results for businesses across Kochi, Kerala, and India.
          </p>

          {/* CTA */}
         <Link href="/contact-us">
          <button
            className="inline-flex items-center gap-2 bg-[#0E9F8A] hover:bg-[#0C8A75] text-white px-5 py-2.5 rounded-[10px] text-sm font-medium transition shadow-md w-fit"
          >
            Get Free SEO Audit  <ArrowUpRight size={18} /> 
          </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[90%] md:w-[450px] lg:w-[500px] h-auto">
            <Image
              src="/new-seo/seo-hero.svg" // your actual image path
              alt="SEO Illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
