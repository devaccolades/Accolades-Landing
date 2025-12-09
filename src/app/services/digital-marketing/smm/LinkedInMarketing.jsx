"use client";
import Image from "next/image";
import { Briefcase } from "lucide-react";

export default function LinkedinMarketing() {
    return (
        <div className="containers w-full py-10 font-mont">
            <section className=" mx-auto px-0 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center">

                {/* LEFT ─ IMAGE */}
                {/* LEFT — IMAGE */}
<div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-[30px] overflow-hidden">
  <Image
    src="/new-smm/link.jpg"
    alt="Advanced AI Targeting"
    fill
    className="object-cover"
  />
</div>

                

                {/* RIGHT ─ CONTENT */}
                <div className="flex flex-col gap-4 md:gap-2 xl:gap-6">

                    {/* SMALL LABEL */}
                    <div className="w-fit px-3 py-1 bg-black text-white rounded-full text-xs flex items-center gap-2">

                        <Image
                            src="/new-smm/linkedin 1.svg"
                            alt="Optimized for Sales"
                            width={20}
                            height={20}
                            className="w-3 h-3 md:w-4 md:h-4 object-contain"
                        />
                        <span>B2B Platform</span>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-[20px] sm:text-[23px] xl:text-[32px] font-bold text-black leading-[26px] sm:leading-[30px] xl:leading-[38px]">
                        LINKEDIN MARKETING
                    </h2>

                    {/* DESCRIPTION */}
                     <p className="text-black font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[150%] max-w-xl">
                        LinkedIn is a B2B-focused social network that connects professionals and
                        businesses. It’s a goldmine for anyone networking in the B2B space,
                        focusing on industry trends and decision-makers.
                    </p>

                    {/* FEATURES */}
                    <div className="flex flex-col gap-4">

                        {/* ITEM 1 */}
                        {/* <div className="border rounded-2xl p-4 flex gap-3 bg-white shadow-sm"> */}
                         <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
                            <div className="w-9 h-9 lg:w-10 lg:h-12 flex-shrink-0 overflow-hidden">
                                <Image
                                    src="/new-smm/bui.svg"
                                    alt="Advanced AI Targeting"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain "
                                />
                            </div>
                            <div>
                                <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
                                    Build Authority</h4>
                                 <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                                    Post thought-leadership articles and company updates to
                                    position yourself as an industry leader.
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        {/* <div className="border rounded-2xl p-4 flex gap-3 bg-white shadow-sm"> */}
                         <div className="flex items-start gap-3 md:gap-4 bg-white p-2 lg:p-5 rounded-2xl shadow-sm">
                            <div className="w-9 h-9 lg:w-10 lg:h-12 flex-shrink-0 overflow-hidden">
                                <Image
                                    src="/new-smm/adva.svg"
                                    alt="Advanced AI Targeting"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain "
                                />
                            </div>
                            <div>
                              <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
                                Targeted B2B Ads</h4>
                               <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                                    Boost content distribution and lead generation while opening
                                    doors to partnerships and talent.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}
