import Image from "next/image";
import heroImg from "../../../../../public/content-marketing/heroImg.png";
import { TrendingUp, DollarSign, Users } from "lucide-react";
import icon1 from "../../../../../public/content-marketing/icon1.svg";
import icon2 from "../../../../../public/content-marketing/icon2.svg";
import icon3 from "../../../../../public/content-marketing/icon3.svg";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";

export default function HeroSection() {
  return (
    <>
      <div className="lg:pb-16 md:pb-12 pb-6 pt-16 md:pt-20 lg:pt-26">
        <div className="lg:mb-16 md:mb-12 mb-6 containers">
          {/* <div className="bg-white shadow-lg py-2 text-center rounded-[30px] ">
            <h1 className="font-mont font-bold xl:text-[86px] lg:text-[76px] md:text-[66px] text-[30px] leading-[100%] text-[#3FB4BA] md:px-20 px-4">
              Content Marketing
            </h1>
          </div> */}
          <AnimatedPopTitle text={"Content      Marketing"} />
        </div>

        <div className="containers">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-3/4 w-full">
              <div className="bg-white rounded-[30px] px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mt-6">
                <p className="font-mont font-normal md:text-[15px] text-[10px] leading-[130%] -tracking-[2%] text-[#333333] uppercase">
                  CONTENT ISN'T THE KING, IT'S THE KINGDOM
                </p>

                <h2 className="font-mont font-bold lg:text-[32px] md:text-[30px] text-[26px] leading-[100%] md:leading-[130%] text-[#3FB4BA] mb-4 md:mb-6">
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
            </div>

            <div className="lg:w-1/4 w-full">
              <div className="relative">
                <div className="rounded-lg overflow-hidden aspect-square h-full md:h-[300px] lg:h-full w-full">
                  <Image
                    src={heroImg}
                    alt="hero-img"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center pt-8 md:pt-12 lg:pt-16 pb-20 lg:pb-30 "
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
        }}
      >
        <div className="containers mx-auto">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl lg:p-8 p-6 shadow-lg">
            {/* Header */}
            <h1 className="md:text-center font-mont font-semibold xl:text-[20px] md:text-[18px] text-[14px] leading-[150%] mb-4 md:mb-8 lg:mb-12">
              Content is the present and future of marketing. Specifically,
              there are three reasons and benefits for enterprises that use
              content marketing :
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-6 gap-4 mb-4 md:mb-8 lg:mb-12">
              {/* Increased Sales */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <Image
                    src={icon1}
                    alt="Increased Sales"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-mont font-semibold xl:text-[28px] leading-[100%] text-[#2C99B1]">
                  Increased sales
                </h3>
              </div>

              {/* Cost Savings */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <Image src={icon2} alt="Cost Savings" className="w-8 h-8" />
                </div>
                <h3 className="font-mont font-semibold xl:text-[28px] leading-[100%] text-[#2C99B1]">
                  Cost savings
                </h3>
              </div>

              {/* Better Customers */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <Image
                    src={icon3}
                    alt="Better Customers"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="font-mont font-semibold xl:text-[28px] leading-[100%] text-[#2C99B1]">
                  Better customers
                </h3>
              </div>
            </div>

            {/* Description Text */}
            <div className="space-y-4 font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#000000] ">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
