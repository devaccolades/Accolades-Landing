import React from 'react'
import heromobile from "../../../public/we-are-a-team/team fammilymobile.png"
import hero from "../../../public/we-are-a-team/team fammily 1.jpg"
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="font-mont w-full h-screen ">
            <div className="grid h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-[45%_55%] xl:grid-cols-[35%_65%]">
                <div className="mt-[110px] md:mt-0 mb-5 md:mb-0 md:h-screen px-[5%] md:px-0 md:pl-[5%] lg:pl-[10%] flex flex-col justify-center-safe">
                    <span className="w-fit inline-block mb-2 px-[14px] py-[10px] xl:px-4 xl:py-3 text-[16px] font-extrabold text-[#0C7379] border border-[#0C7379] rounded-full">
                        Our Philosophy
                    </span>
                    <h1 className="text-[32px] md:text-[36px] xl:text-[48px] font-bold  text-black leading-[100%]">
                        WE ARE NOT A FAMILY <br />
                        <span className="text-[#0C7379]">WE ARE A TEAM</span>
                    </h1>

                    <p className="mt-2 text-black ">
                        We work like pros. We deliver like a team.
                    </p>

                    <a href="tel:+919048100233">
                        <button className="w-fit mt-4 inline-flex items-center gap-2 bg-[#0C7379] hover:bg-teal-800 text-white font-medium py-2.5 px-4 rounded-[10px] cursor-pointer transition">
                            Schedule a Call
                            <span className="text-[14px] lg:text-[16px] leading-[100%]">↗</span>
                        </button>
                    </a>

                </div>
                <div className='relative bg-white md:h-screen'>
                    <Image src={hero} alt='team' className='w-auto h-full object-cover object-center hidden md:block' />
                    <Image src={heromobile} alt='team' className='w-full h-full object-cover object-center block md:hidden' />
                    <div
                        className="hidden md:block absolute inset-y-0 left-0 bg-gradient-to-r from-white via-white/80 to-transparent"
                        style={{ width: '30%' }}
                    />

                </div>
            </div>
        </section >
    )
}
export default HeroSection


{/* <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full">
                        We value skill, role clarity, and real ownership
                        </div> */}