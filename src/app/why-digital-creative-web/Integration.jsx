import React from 'react'
import Image from 'next/image'
import message from '../../../public/why-digital-creative-web/message.png'
import pointer from '../../../public/why-digital-creative-web/mouse-pointer.png'
import file from '../../../public/why-digital-creative-web/file.png'
import increase from '../../../public/why-digital-creative-web/increase.png'
import sound from '../../../public/why-digital-creative-web/sound.png'
import rocket from '../../../public/why-digital-creative-web/rocket.png'
import target from '../../../public/why-digital-creative-web/target.png'
import arrowV from '../../../public/why-digital-creative-web/arrow-violet.png'
import arrowG from '../../../public/why-digital-creative-web/arrow-green.png'
import arrowO from '../../../public/why-digital-creative-web/arrow-orange.png'


export default function Integration() {
    return (
        <section className="lg:py-16 md:py-12 py-8 containers">
            <div className="text-center">

                {/* ---------- Heading ---------- */}
                <h2 className="font-urbanist font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-[16px] text-[#000000]">
                    What this looks like in work
                </h2>

                <p className="mt-2 font-urbanist font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[120%] text-[#000000]">
                    Real examples of how integration creates better outcomes.
                </p>

                {/* ---------- Cards ---------- */}
                <div className="lg:mt-10 md:mt-8 mt-6 space-y-2 md:space-y-4">

                    {/* Card 1 */}
                    <div className="flex items-start gap-2 md:gap-4 border border-orange-200 bg-[#FFF7ED] rounded-xl p-2 md:p-5 text-left">
                        <div className="bg-orange-500 text-white p-2 rounded-lg text-sm">
                            <Image src={file} alt='file' />
                        </div>
                        <div>
                            <h3 className="font-urbanist font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] text-[#000000]">
                                Campaign Brief Flows Into Design and Code
                            </h3>
                            <p className="font-poppins font-normal text-[13px] md:text-[14px] leading-[120%] text-[#484848] mt-1">
                                Your strategy document becomes the single source of truth.
                                Designers and developers work from the same goals, keywords,
                                and messaging framework.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start gap-2 md:gap-4 border border-teal-200 bg-[#F0FDFA] rounded-xl p-2 md:p-5 text-left">
                        <div className="bg-teal-500 text-white p-2 rounded-lg text-sm">
                            <Image src={pointer} alt='pointer' />
                        </div>
                        <div>
                            <h3 className="font-urbanist font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] text-[#000000] ">
                                Ads Point to Pages Built to Convert
                            </h3>
                            <p className="font-poppins font-normal text-[14px] leading-[120%] text-[#484848] mt-1">
                                Every ad campaign is designed alongside its landing page.
                                Headlines match. Offers align. The user experience is seamless
                                from click to conversion.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start gap-2 md:gap-4 border border-purple-200 bg-[#FAF5FF] rounded-xl p-2 md:p-5 text-left">
                        <div className="bg-purple-500 text-white p-2 rounded-lg text-sm">
                            <Image src={message} alt='message' />
                        </div>
                        <div>
                            <h3 className="font-urbanist font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] text-[#000000]">
                                Creative and SEO Use the Same Keywords and Tone
                            </h3>
                            <p className="font-poppins font-normal text-[14px] leading-[120%] text-[#484848] mt-1">
                                Your content writer and your designer speak the same language.
                                Brand voice stays consistent across blogs, ads, social posts,
                                and web pages.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="lg:mt-10 md:mt-8 mt-6 bg-gray-50 border rounded-xl py-6 px-4">
                    <div className="grid grid-cols-7 items-center gap-6 md:gap-10 place-items-center text-sm font-medium text-gray-800">

                        <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#F75000]">
                            <Image src={target} alt="Strategy" width={24} height={24} />
                        </span>

                        <Image src={arrowO} alt="arrow" />

                        <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#009C8E]">
                            <Image src={rocket} alt="Design" width={24} height={24} />
                        </span>

                        <Image src={arrowG} alt="arrow" />

                        <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#9B1EFC]">
                            <Image src={sound} alt="Development" width={24} height={24} />
                        </span>

                        <Image src={arrowV} alt="arrow" />

                        <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-[10px] bg-[#277AFF]">
                            <Image src={increase} alt="Launch" width={24} height={24} />
                        </span>

                    </div>
                </div>


                <p className="mt-4 text-xs text-gray-500 text-center">
                    All teams connected. All work aligned. All the time.
                </p>


            </div>
        </section>
    )
}
