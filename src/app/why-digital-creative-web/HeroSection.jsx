import Image from 'next/image'
import React from 'react'
import Herobg from '../../../public/why-digital-creative-web/hero-bg.png'
import HeroSm from '../../../public/why-digital-creative-web/hero-bg-sm.png'

export default function HeroSection() {
    return (
        <section className="relative w-full h-[555px] lg:h-[775px]">

            {/* Background Image */}
            <Image
                src={Herobg}
                alt="Hero background"
                fill
                priority
                className="object-cover hidden md:flex"
            />

            <Image
                src={HeroSm}
                alt="Hero background mobile"
                fill
                priority
                className="object-cover md:hidden"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-end justify-start">
                <div className="containers py-8 md:py-12 lg:py-16">

                    {/* Tag */}
                    <span className="inline-block mb-2 md:mb-4 rounded-full px-4 py-[6px] md:py-2 font-urbanist font-extrabold lg:text-[16px] md:text-[14px] text-[12px] leading-[13px] text-[#484848] bg-gradient-to-r from-[#FDEDD6] via-[#CDFBF0] to-[#F1E8FE]
">
                        Why Digital • Creative • Web
                    </span>


                    {/* Subheading */}
                    <p className="font-urbanist font-semibold xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] xl:leading-[18px] lg:leading-[16px] md:leading-[14px] leading-[12px] text-[#FFFFFF] mb-2 md:mb-3">
                        Three pillars. One clear path to growth.
                    </p>

                    {/* Main Heading */}
                    <h1 className="font-urbanist font-bold  text-white uppercase
                         text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[32px] md:leading-[36px] lg:leading-[42px] xl:leading-[48px] md:w-[75%] lg:w-[80%] xl:w-[50%]">
                        When strategy, design, and web work as one,
                        brands win.
                    </h1>
                </div>
            </div>

        </section>
    )
}
