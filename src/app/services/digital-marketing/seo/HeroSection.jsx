

"use client";

import { motion } from "framer-motion";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";

export default function HeroSection() {
  return (
    <div
      className="lg:pb-12 md:pb-10 pt-[100px]"
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title Section */}
      <div
        className="bg-white containers rounded-[30px] py-2"
      
      >
        <AnimatedPopTitle text={"SEO"} />
      </div>

      {/* Content Section */}
      <motion.div
        className="containers"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="w-full">
          <div className="bg-white rounded-[30px] px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mt-6 space-y-2">
            <motion.p
              className="font-mont text-[16px] lg:text-[20px] leading-[110%] font-normal text-[#333333] uppercase"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              SEO That Drives Results
            </motion.p>

            <motion.h2
              className="font-mont font-bold text-[24px] lg:text-[36px] leading-[100%] text-[#3FB4BA]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Enhance visibility and attract traffic
            </motion.h2>

            <motion.div
              className="font-mont font-normal text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]  text-[#000000] space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p>
                Search Engine Optimization (SEO) is a powerful tool to boost
                your online presence and drive organic traffic to your website.
                At Accolades Integrated, we employ proven SEO strategies to help
                your business rank higher on search engine results. Our approach
                focuses on keyword optimization, on-page SEO, link building, and
                technical improvements. By continuously analyzing performance
                and adjusting strategies, we ensure your website attracts the
                right audience. With a focus on measurable results, our SEO
                services enhance visibility, increase traffic, and foster
                long-term growth for your business. Achieve your online
                potential with our support.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
