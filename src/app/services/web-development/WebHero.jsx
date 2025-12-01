



"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Hero from "../../../../public/web/banner.png";
import AnimatedWebTitle from "@/component/AnimatedWebTitle";

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WebHero() {
  return (
    <div className="containers pt-[100px]">
      <div>
        <AnimatedWebTitle text={"Web Development"} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8 mt-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            variants={imageVariants}
          >
            <Image
              src={Hero}
              alt="Web Development Illustration"
              className="object-contain w-64 md:w-96 lg:w-[500px] h-auto"
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-2 md:p-4 order-2 md:order-1"
            variants={textVariants}
          >
            <p className="uppercase text-xs sm:text-sm text-gray-500 font-mont font-semibold mb-1 lg:mb-2">
            
            </p>
            <h1 className="text-[20px] lg:text-[24px] leading-[130%] font-bold font-mont text-[#1eb2a6] mb-2">
               Web Development Company in Kochi — Build Fast, Scalable, and Beautiful Websites
            </h1>

            {/* Paragraphs */}
            {[
              "Accolades Integrated is a trusted Web Development Company in Kochi. We design and build websites that meet business goals. Our team blends clean code, smart user experience, and modern tech to deliver sites that load fast and convert. We focus on scalable solutions that grow with your business.",
              "We offer full-stack websites, WordPress sites, and e-commerce platforms. Our engineers use React.js, Next.js, and Python to deliver secure and high-performance systems. For design and UX, we pair form with function so users stay and act.",
              // "As a trusted web development company in Kochi, we provide scalable solutions that align with your needs. Our commitment to your success drives us to craft websites that stand out and perform exceptionally.",
              // "Choose Accolades for professional web design services that amplify your digital presence and help you achieve measurable results. Let’s transform your vision into a powerful, lead-generating website that stands above the competition.",
              // "Optimize your online growth with us—your trusted partner in web development in Kerala.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className={`text-gray-700 font-mont text-[12px] lg:text-[13px] xl:text-[16px] leading-[156%] ${
                  i !== 0 ? "mt-2" : ""
                }`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
