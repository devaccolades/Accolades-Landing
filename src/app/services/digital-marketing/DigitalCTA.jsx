"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DigitalCTA() {
    return (
        <section className="containers font-mont py-4 md:py-8 px-2 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" w-full bg-[#0E7575] rounded-3xl text-center text-white py-4 md:py-8 lg:py-12 p-2 md:px-4 lg:px-6 shadow-xl"
            >
                {/* ICONS */}
                <div className="flex justify-center gap-2 mb-3">
                    {/* ICON 1 */}
                    

                    {/* ICON 2 */}
                    <div className="">
                        <div className="relative 
                                w-8 h-8 
                                lg:w-8 lg:h-8">
                            <Image src="/new-seo/free-audit.svg" alt="Growth" fill />
                        </div>
                    </div>
                </div>


                {/* TITLE */}
                <h2 className="text-[16px] md:text-lg lg:text-xl font-semibold tracking-wide mb-1 md:mb-3">
                    Ready to Scale Your Business?
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-white/90 mb-2 md:mb-4 lg:mb-6">
                    Partner with a Digital Marketing Agency in Kochi that delivers measurable growth.
                     We focus on ROI, clear KPIs, and long term value. Let's turn your marketing into a reliable growth channel.
                </p>

                {/* BUTTON */}
                <a
                href="https://wa.me/919048100233"
                target="_blank"
                rel="noopener noreferrer"
              >
                    <button
                        className="inline-block bg-white text-[#0E7575] text-sm font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Request a Consultation
                    </button>
                </a>
            </motion.div>
        </section>
    );
}