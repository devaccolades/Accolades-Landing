"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FreeConsultation() {
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
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <div className="relative 
                                w-6 h-6              
                                lg:w-8 lg:h-8">
                            <Image src="/new-ecommerce/b2.svg" alt="Store" fill />
                        </div>
                    </div>

                    {/* ICON 2 */}
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <div className="relative 
                                w-6 h-6 
                                lg:w-8 lg:h-8">
                            <Image src="/new-ecommerce/b1.svg" alt="Growth" fill />
                        </div>
                    </div>
                </div>


                {/* TITLE */}
                <h2 className="text-[16px] md:text-lg lg:text-xl font-semibold tracking-wide mb-1 md:mb-3">
                    READY TO LAUNCH OR IMPROVE YOUR ONLINE STORE?
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-white/90 mb-2 md:mb-4 lg:mb-6">
                    Work with a trusted E-commerce Web Development Company in Kochi. Contact Accolades Integrated
                    for a free store audit and a growth plan.
                </p>

                {/* BUTTON */}
                <Link href="/contact-us">
                    <button
                        className="inline-block bg-white text-[#0E7575] text-sm font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        GET YOUR FREE CONSULTATION
                    </button>
                </Link>
            </motion.div>
        </section>
    );
}