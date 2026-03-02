import React from 'react'
import Image from 'next/image'
import forward from '../../../public/why-digital-creative-web/next.png'
import color from '../../../public/why-digital-creative-web/color.png'
import bulb from '../../../public/why-digital-creative-web/bulb.png'
import alert from '../../../public/why-digital-creative-web/alert.png'
import power from '../../../public/why-digital-creative-web/power.png'
import alignment from '../../../public/why-digital-creative-web/alignment.png'

export default function Roles() {
    return (
        <section className="relative w-full pb-6 md:pb-10 -mt-4 md:-mt-6 lg:-mt-8 xl:-mt-10">
            <div className="containers">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

                    {/* Digital */}
                    <div className="rounded-xl p-2 md:p-4 lg:p-5 border border-[#FF6400]/60 bg-[linear-gradient(104.85deg,_#FFF6EC_0.74%,_#FFEDD5_97.47%)]  ">
                    <div className='flex flex-row md:flex-row gap-2 justify-start items-center'>
                        <div className="mb-1 md:mb-3 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#F75000]">
                            <Image src={bulb} alt="Digital" />
                        </div>
                        <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                            Digital
                        </h3>
                    </div>
                        <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%] ">
                            Strategy, SEO, ads, and analytics that drive measurable results.
                        </p>
                    </div>

                    {/* Creative */}
                    <div className="rounded-xl p-3 md:p-4 lg:p-5 bg-[linear-gradient(104.76deg,_#EFFDF9_0.98%,_#CCFBF1_97.9%)] border border-[#00B4A1]/60 ">
                    <div className='flex flex-row md:flex-row gap-2 justify-start items-center'>
                        <div className="mb-1 md:mb-3 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#009C8E]">
                            <Image src={color} alt="Creative" />
                        </div>
                        <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                            Creative
                        </h3>
                    </div>
                        <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%]">
                            Design, copy, and brand assets that capture attention and build trust.
                        </p>
                    </div>

                    {/* Web */}
                    <div className="rounded-xl p-3 md:p-4 lg:p-5 bg-[linear-gradient(104.52deg,_#F9F4FF_0.97%,_#F3E8FF_99.27%)] border border-[#AA41FF]/60">
                    <div className='flex flex-row md:flex-row gap-2 justify-start items-center'>
                        <div className="mb-1 md:mb-3 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#9B1EFC]">
                            <Image src={forward} alt="Web" />
                        </div>
                        <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                            Web
                        </h3>
                    </div>
                        <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%]">
                            Development, UX, and infrastructure that turns visitors into customers.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col items-center text-center py-4 md:py-6 lg:py-8 w-full">

                    {/* Image with border */}
                    <div className=" mb-2">
                        <Image
                            src={alignment}
                            alt="Working in perfect alignment"
                            className="h-auto w-auto"
                        />
                    </div>

                    {/* Small text under image */}
                    <p className="font-poppins font-normal text-[12px] leading-[156%] text-[#484848] mb-2 md:mb-6">
                        Working in perfect alignment
                    </p>

                    {/* Main paragraph */}
                    <p className="font-urbanist font-semibold lg:text-[16px] md:text-[14px] text-[12px] leading-[156%] text-[#000000] md:w-[70%] lg:w-[60%] mb-2">
                        Many firms split these roles. That causes drift and slow delivery.
                        We keep them close. This yields a clear voice and fast results.
                    </p>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

                    <div className="rounded-xl p-3 md:p-4 lg:p-5 border border-[#00C950]/60 bg-[#F0FDF4]">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className=" flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#00C950]">
                                <Image src={power} alt="power" />
                            </div>
                            <h3 className="font-urbanist font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[20px] lg:leading-[20px] md:leading-[18px] leading-[16px] text-[#000000]">
                                Integrated Approach
                            </h3>
                        </div>
                        <div className='font-poppins font-normal md:text-[14px] text-[12px] leading-[156%] flex flex-col justify-start items-start mt-2'>
                            <p>✓ Everyone works from the same brief</p>
                            <p>✓ Design and development happen in parallel</p>
                            <p>✓ Single point of contact for clients</p>
                            <p>✓ Faster launches, consistent results</p>
                        </div>
                    </div>

                    <div className="rounded-xl p-3 md:p-4 lg:p-5 border border-[#FB2C36]/60 bg-[#FEF2F2]">
                        <div className='flex flex-row gap-3 items-center'>
                            <div className=" flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#FB2C36]">
                                <Image src={alert} alt="alert" />
                            </div>
                            <h3 className="font-urbanist font-semibold xl:text-[20px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[20px] lg:leading-[20px] md:leading-[18px] leading-[16px] text-[#000000]">
                                Seperated Themes
                            </h3>
                        </div>
                        <div className='font-poppins font-normal md:text-[14px] text-[12px] leading-[156%] flex flex-col justify-start items-start mt-2'>
                            <p>× Strategy team doesn't talk to designers</p>
                            <p>× Designers hand off files developers can't use</p>
                            <p>× Messages get lost in translation</p>
                            <p>× Projects drag on for months</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
