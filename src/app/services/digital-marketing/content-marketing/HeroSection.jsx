"use client";
import Image from "next/image";
import heroImg from "../../../../../public/content-marketing/heroImg.png";
import icon1 from "../../../../../public/content-marketing/icon1.svg";
import icon2 from "../../../../../public/content-marketing/icon2.svg";
import icon3 from "../../../../../public/content-marketing/icon3.svg";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className="lg:pb-16 md:pb-12 pb-6 pt-16 md:pt-20 lg:pt-26">
        <div className="lg:mb-16 md:mb-12 mb-6 containers">
          {/* <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          > */}
          <AnimatedPopTitle text={"Content      Marketing"} />
          {/* </motion.div> */}
        </div>

        <div className="containers">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <motion.div
              className="lg:w-3/4 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
            >
              <div className="bg-white rounded-[30px] px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mt-6">
                <p className="font-mont font-normal md:text-[15px] text-[10px] leading-[130%] -tracking-[2%] text-[#333333] uppercase">
                  CONTENT ISN'T THE KING, IT'S THE KINGDOM
                </p>

                <h2 className="font-mont font-bold lg:text-[32px] md:text-[30px] text-[20px] leading-[100%] md:leading-[130%] text-[#3FB4BA] mb-4 md:mb-6">
                  Creative Messaging
                </h2>

                <div className="space-y-4">
                  <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#000000]">
                    Content marketing at Accolades Integrated is about creating
                    meaningful connections with your audience. We craft
                    compelling, engaging, and value-driven content that
                    resonates with your target audience. From blogs and social
                    media posts to videos and infographics, we design strategies
                    that amplify your brand's voice. Our data-driven approach
                    ensures every piece of content boosts engagement, enhances
                    visibility, and drives conversions. Partner with us to
                    transform your digital presence and achieve measurable
                    growth through impactful storytelling.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/4 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="rounded-lg overflow-hidden aspect-square h-full md:h-[300px] lg:h-full w-full">
                  <Image
                    src={heroImg}
                    alt="hero-img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="flex items-center justify-center pt-8 md:pt-12 lg:pt-16 pb-20 lg:pb-42 "
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
        }}
      >
        <div className="containers mx-auto">
          <motion.div
            className="bg-white rounded-3xl lg:p-8 p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="md:text-center font-mont font-semibold xl:text-[20px] md:text-[18px] text-[14px] leading-[150%] mb-4 md:mb-8 lg:mb-12">
              Content is the present and future of marketing. Specifically,
              there are three reasons and benefits for enterprises that use
              content marketing :
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-6 gap-4 mb-4 md:mb-8 lg:mb-12">
              {[
                { icon: icon1, text: "Increased sales" },
                { icon: icon2, text: "Cost savings" },
                { icon: icon3, text: "Better customers" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="font-mont font-semibold xl:text-[28px] leading-[100%] text-[#2C99B1]">
                    {item.text}
                  </h3>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="space-y-4 font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#000000]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>
                This is what makes content marketing so intriguing in today's
                environment of thousands of marketing messages per person per
                day.
              </p>
              <p>
                Content marketing is now essential and can no longer be
                overlooked. For business-to-consumer (B2C) brands, it is a key
                strategy for connecting with, attracting, and retaining target
                audiences. Content marketing spans various forms, and at
                Accolades, our strategists use a scientific, data-driven
                approach to create customized campaigns. Every content piece is
                designed based on solid analytics to ensure it aligns with your
                business goals. From blog posts to social media, we ensure
                high-quality content reaches your audience effectively. Whether
                you are new to content marketing or aiming to refine your
                current strategy, Accolades is the right partner to elevate your
                content efforts. Our dedicated team crafts innovative content
                strategies that drive engagement and deliver results, fostering
                your business’s growth and success. With our expertise, you can
                rest assured that your content will be crafted and positioned to
                generate maximum impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
