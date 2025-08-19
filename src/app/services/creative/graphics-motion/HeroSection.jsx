"use client";
import Image from "next/image";
import heroImg from "../../../../../public/graphics-motion/heroImg.png";
import AnimatedTitle from "@/component/AnimatedTitle";
import Link from "next/link";
import { motion } from "framer-motion";

// Stagger container for sequential animations
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// Fade-up for heading & paragraph
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Button animation
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// Image animation
const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  const paragraphText = `Our creatives grab attention, guide users, and build brands — frame by frame.`;

  return (
    <>
      <div className="containers pt-[100px]">
        <AnimatedTitle text={"Graphics & Motion"} />
      </div>

      <section className="lg:py-16 md:py-12 py-6">
        <div className="containers grid md:grid-cols-2 gap-8 items-center">
          <motion.span
            className="bg-white md:p-8 p-6 rounded-xl shadow-md"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Heading */}
            <motion.h2
              className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%] text-[#199eb8] md:mb-4 mb-2"
              variants={fadeUp}
            >
              Static or Moving — We Design for Impact
            </motion.h2>

            {/* Paragraph (fade-up as whole block) */}
            <motion.p
              className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify"
              variants={fadeUp}
            >
              {paragraphText}
            </motion.p>

            {/* Button */}
            <Link href="/contact-us">
              <motion.button
                className="font-mont font-semibold lg:text-[14px] text-[12px] leading-[100%] text-[#FFFFFF] bg-[#3FB4BA] px-6 py-3 rounded-[25px] mt-2"
                variants={buttonVariants}
              >
                Get a Creative Proposal
              </motion.button>
            </Link>
          </motion.span>

          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-end w-full h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={heroImg}
              alt="Accolades Graphic"
              className="xl:w-[500px] lg:w-[415px] md:w-[300px] w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
