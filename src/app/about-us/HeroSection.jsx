"use client";
import Image from "next/image";
import heroImg from "../../../public/about-us/Img1.webp";
import float from "../../../public/about-us/floating.gif";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // New paragraph animation
  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paragraphText1 =
    "We provide innovative digital marketing solutions to answer all your business needs. From strategy to execution, our expert team ensures seamless support, helping you connect, grow, and excel in the digital space. We are your trusted partner for maximizing engagement, enhancing visibility, and driving success across online platforms.";

  const paragraphText2 =
    "We are a dedicated team of digital marketing experts based in Kochi passionate about driving your brand's growth. With innovative strategies and tailored solutions, we help businesses thrive in the digital landscape. Our focus on creativity, data-driven insights, and cutting-edge technology ensures impactful results. Partner with us to elevate your online presence, enhance engagement, and achieve measurable success. We have physical presence at Calicut, Trivandrum, Bengaluru, Mumbai and we serve globally.";

  const paragraphText3 =
    "We deliver complete digital marketing solutions tailored to your goals. From SEO and social media management to content creation and analytics, we enhance your brand’s online visibility. Other services include Google and Meta Ads, web design, and graphic design. With compelling graphic designs, we create impactful brand visuals, enhancing your online presence. By combining creativity with data-driven methods, we deliver measurable results that drive engagement, boost conversions, and fuel growth.";

  return (
    <>
      <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mont font-bold xl:text-[48px] lg:text-[42px] md:text-[36px] text-[30px] leading-[100%] text-center text-[#218D8C] pt-20 md:pt-24 lg:pt-30 lg:pb-8"
        >
          Empowered Excellence
        </motion.h1>

        {/* Section 1 */}
        <section className="lg:py-16 md:py-12 py-6">
          <div className="containers grid md:grid-cols-2 md:gap-6 gap-4 items-center">
            <motion.span
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white md:p-8 p-6 rounded-xl shadow-md"
            >
              <motion.h2
                variants={fadeUp}
                className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%] text-[#199eb8] md:mb-4 mb-2"
              >
                Accolades
              </motion.h2>
              <motion.h3
                variants={fadeUp}
                className="font-mont font-medium xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] leading-[130%] -tracking-[2%] text-[#333333] mb-2"
              >
                The ideal platform for all your queries
              </motion.h3>
              <motion.p
                variants={paragraphVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify"
              >
                {paragraphText1}
              </motion.p>
            </motion.span>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-end items-center w-full h-full"
            >
              <Image
                src={heroImg}
                alt="Accolades Graphic"
                className="xl:w-[500px] lg:w-[415px] md:w-[300px] w-full h-[200px] md:h-[300px] lg:h-[400px] object-center"
              />
            </motion.div>
          </div>
        </section>

        {/* Section 2 */}
        <div className="containers mx-auto lg:py-16 md:py-12 py-6">
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center lg:mb-16 md:mb-12 mb-8"
          >
            <div className="relative md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <Image
                src={float}
                alt="gif"
                className="w-full absolute -top-16 md:-top-36 lg:-top-40 xl:-top-60"
              />
              <h2 className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%] text-[#199eb8] text-center">
                Who we are?
              </h2>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <motion.p
                variants={paragraphVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify"
              >
                {paragraphText2}
              </motion.p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0 order-2 md:order-1">
              <motion.p
                variants={paragraphVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify"
              >
                {paragraphText3}
              </motion.p>
            </div>
            <div className="relative md:w-1/2 text-center md:text-right order-1 md:order-2 mb-3 md:mb-0">
              <Image
                src={float}
                alt="gif"
                className="w-full absolute -top-16 md:-top-36 lg:-top-40 xl:-top-60"
              />
              <h2 className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%] text-[#199eb8] text-center">
                What we do?
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
