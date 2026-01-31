import React from 'react'
import Image from 'next/image'
import lg from "../../../public/case-study/Frame 2147223522 (1).svg"
import button from "../../../public/case-study/whatsapp.svg"

const HeroSection = () => {
    return (
        <section className="w-full h-[420px] md:h-[410px] lg:h-[500px] bg-no-repeat bg-top bg-cover flex items-center"
            style={{
                backgroundImage: `url(${lg.src})`,
            }}
        >
            <div className="w-[90%] lg:w-[80%] mx-auto pt-[50px] text-center">
                <h1 className=" text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] font-semibold  mb-4">
                    Case Studies That Delivered <br className="hidden md:block" />
                    Measurable Growth
                </h1>

                {/* Sub text */}
                <p className="text-[14px] md:text-[16px] leading-[156%] max-w-2xl text-[#484848] mx-auto mb-8">
                    Real-world campaigns across Real Estate, Films, Interiors, and Premium
                    Brands — powered by data, creativity, and performance marketing.
                </p>


                {/* <a
                    href="https://wa.me/919048100233"
                    target="_blank"
                    rel="noopener noreferrer"

                > */}
                <a className='w-auto h-fit flex justify-center items-center' href="https://wa.me/919048100233"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src={button}
                        alt="WhatsApp"
                        width={100}
                        height={100}
                        className='w-52 h-fit'
                    />
                </a>

                {/* </a> */}
            </div>
        </section >
    )
}

export default HeroSection
