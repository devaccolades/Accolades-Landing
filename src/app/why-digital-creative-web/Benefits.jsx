import React from 'react'
import Image from 'next/image'
import increase from '../../../public/why-digital-creative-web/increase.png'
import sound from '../../../public/why-digital-creative-web/sound.png'
import rocket from '../../../public/why-digital-creative-web/rocket.png'
import target from '../../../public/why-digital-creative-web/target.png'

export default function Benefits() {
    return (
        <div className='containers'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='font-urbanist font-bold lg:text-[20px] leading-[16px] text-[#000000]'>CORE BENEFITS</h1>
            <p className='font-urbanist font-semibold lg:text-[16px] text-[14px] text-[#000000]'>Integration isn't just theory. Here's what it means for your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

                {/* Digital */}
                <div className="rounded-xl p-3 md:p-4 lg:p-5 border border-[#FF6400]/60 bg-[linear-gradient(104.85deg,_#FFF6EC_0.74%,_#FFEDD5_97.47%)] ">
                    <div className="md:mb-4 mb-2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#F75000]">
                        <Image src={target} alt="target" />
                    </div>
                    <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                        One Strategy
                    </h3>
                    <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%] ">
                        Everyone follows the same plan.
                    </p>
                </div>

                {/* Creative */}
                <div className="rounded-xl p-3 md:p-4 lg:p-5 bg-[linear-gradient(104.76deg,_#EFFDF9_0.98%,_#CCFBF1_97.9%)] border border-[#00B4A1]/60 ">
                    <div className="md:mb-4 mb-2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#009C8E]">
                        <Image src={rocket} alt="rocket" />
                    </div>
                    <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                        Faster Launches
                    </h3>
                    <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%]">
                        No handover delays.
                    </p>
                </div>

                {/* Web */}
                <div className="rounded-xl p-3 md:p-4 lg:p-5 bg-[linear-gradient(104.52deg,_#F9F4FF_0.97%,_#F3E8FF_99.27%)] border border-[#AA41FF]/60">
                    <div className="md:mb-4 mb-2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#9B1EFC]">
                        <Image src={sound} alt="sound" />
                    </div>
                    <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                        Consistent Brand
                    </h3>
                    <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%]">
                        Same tone, look, and flow everywhere.
                    </p>
                </div>

                                <div className="rounded-xl p-3 md:p-4 lg:p-5 bg-[#EFF6FF] border border-[#AA41FF]/60">
                    <div className="md:mb-4 mb-2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#277AFF]">
                        <Image src={increase} alt="increase" />
                    </div>
                    <h3 className="font-urbanist font-semibold xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[24px] lg:leading-[20px] md:leading-[18px] leading-[16px] mb-2 text-[#000000]">
                        Better ROI
                    </h3>
                    <p className="font-poppins font-normal text-[12px] md:text-[14px] text-[#484848] leading-[156%]">
                        Less waste, more win.
                    </p>
                </div>
            </div>

        </div>
    )
}
