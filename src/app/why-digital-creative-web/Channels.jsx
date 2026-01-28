import Image from "next/image";
import sound from '../../../public/why-digital-creative-web/sound.png'
import rocket from '../../../public/why-digital-creative-web/rocket.png'
import target from '../../../public/why-digital-creative-web/target.png'
import charge from '../../../public/why-digital-creative-web/charge.svg'
import forward from '../../../public/why-digital-creative-web/forward.svg'
import arrowO from '../../../public/why-digital-creative-web/arrow-green.png'
import arrowG from '../../../public/why-digital-creative-web/arrow-orange.png'

export default function Channels() {
  return (
    <section className="">
      <div className="">
        <div className="rounded-[40px] bg-[linear-gradient(180deg,_#0F9EA8_0%,_#FFFFFF_100%)] text-center py-8 lg:py-16 px-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-2 rounded-full mb-3 lg:mb-6 font-urbanist font-semibold lg:text-[16px] md:text-[14px] text-[12px] leading-[13px]">
          <Image src={charge} alt="charge" />
            Ready to Align Your Channels?
          </div>

          {/* Heading */}
          <h2 className="font-urbanist font-bold text-[16px] leading-[16px] text-white text-xl md:text-[20px] ">
            LET US ALIGN YOUR CHANNELS AND LAUNCH FASTER
          </h2>

          {/* Sub text */}
          <p className="font-urbanist font-semibold lg:text-[16px] md:text-[14px] text-[13px] leading-[120%] mt-4 text-[#FFFFFF] ">
            Stop wasting time and budget on disconnected teams. Get strategy,
            design, and development working as one.
          </p>

          {/* Button */}
          <div className="lg:mt-8 mt-4">
            <button className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-4 md:px-6 py-2 md:py-3 rounded-[10px] transition font-inter lg:text-[16px] md:text-[14px] text-[14px] ">
              Book a Call
              <Image src={forward} alt="forward" />
            </button>
          </div>

          {/* Channel flow */}
          <div className="lg:mt-12 mt-8 flex flex-col items-center gap-3">
            <div className="bg-white rounded-[20px] lg:px-10 px-2 md:py-6 py-4 flex items-center justify-around lg:gap-10 shadow-sm w-full md:w-[50%]">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Image src={target} alt="Digital" />
                </div>
                <span className="font-urbanist font-semibold text-[14px] leading-[14px] text-[#000000] ">Digital</span>
              </div>

              <Image src={arrowO} alt="arrow-orange" />

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Image src={rocket} alt="Creative" />
                </div>
                <span className="font-urbanist font-semibold text-[14px] leading-[14px] text-[#000000] ">Creative</span>
              </div>

              <Image src={arrowG} alt="arrow-green" />

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Image src={sound} alt="Web" />
                </div>
                <span className="font-urbanist font-semibold text-[14px] leading-[14px] text-[#000000] ">Web</span>
              </div>
            </div>

            <p className="font-poppins font-normal text-[12px] leading-[156%] text-[#484848]">
              Working together, not apart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
