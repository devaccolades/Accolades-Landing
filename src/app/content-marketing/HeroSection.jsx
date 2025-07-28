import Image from "next/image";
import heroImg from "../../../public/content-marketing/heroImg.png";
import { TrendingUp, DollarSign, Users } from "lucide-react";
import icon1 from "../../../public/content-marketing/icon1.svg";
import icon2 from "../../../public/content-marketing/icon2.svg";
import icon3 from "../../../public/content-marketing/icon3.svg";

export default function HeroSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-100 to-blue-100 lg:py-16 md:py-12 py-6">
        <div className="lg:mb-16 md:mb-12 mb-6 containers">
          <div className="bg-white shadow-lg py-2 text-center rounded-[30px] ">
            <h1 className="font-mont font-bold xl:text-[86px] lg:text-[76px] md:text-[66px] text-[30px] leading-[100%] text-[#3FB4BA] md:px-20 px-4">
              Content Marketing
            </h1>
          </div>
        </div>

        <div className="containers">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-3/4 w-full">
              <div className="bg-white rounded-[30px] px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 mt-6">
                <p className="font-mont font-normal md:text-[24px] text-[20px] leading-[130%] -tracking-[2%] text-[#333333] uppercase">
                  CONTENT ISN'T THE KING, IT'S THE KINGDOM
                </p>

                <h2 className="font-mont font-bold lg:text-[32px] md:text-[30px] text-[26px] leading-[130%] text-[#3FB4BA] mb-4 md:mb-6">
                  Content Marketing
                </h2>

                <div className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#000000] space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Interdum curabitur
                    diam rhoncus sit augue sed purus vitae nulla. Mus ultrices
                    quis eget elit. Elementum rhoncus sit ac adipiscing.
                    Pharetra viverra faucibus habitant libero ornare aliquet
                    adipiscing mus a. Fermentum augue elit sed nibh mattis non.
                    Mi ridiculus lectus morbi vulputate donec tempus nunc
                    fermentum. Ultrices sed non consectetur eget ut amet nullam.
                    In adipiscing sed aliquam sed etiam tincidunt molestie
                    scelerisque auctor. Sapien enim eu ipsum etiam vitae risus.
                    Justo diam magna pulvinar egestas mauris et et at. Porttitor
                    quam molestie commodo cursus rhoncus venenatis sed amet.
                    Consequat vitae malesuada egestas integer felis sem. Nunc
                    sagittis pellentesque odio mus.
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
      <div className="bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="containers mx-auto">
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl lg:p-8 p-6 shadow-lg">
            {/* Header */}
            <h1 className="md:text-center font-mont font-semibold xl:text-[20px] md:text-[18px] text-[16px] leading-[150%] mb-4 md:mb-8 lg:mb-12">
              Content is the present and future of marketing. Specifically,
              there are three reasons and benefits for enterprises that use
              content marketing
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
                It is irrefutable you can no longer ignore content marketing.
                The vast majority of business-to-consumer (B2C) brands
                efficiently handle content marketing to connect, attract, and
                retain specific audiences. The "content" piece of content
                promotion will voluntarily undergo several distinct forms. Our
                Content promoting key strategists adopt precisely a scientific
                approach to content campaigns, utilizing hard data to
                meticulously craft the proper strategy for any client's specific
                goals. The content strategy typically constitutes the economic
                foundation behind each deliverable created to make sure solely
                high-quality content is strategically placed in front of your
                possible audience. Whether you're unfamiliar with content
                marketing or looking eagerly to refine your current strategy,
                Accolades represent the most appropriate agency that can do
                wonders in content thereby fostering your business amenity. Our
                diligent and eager team is resolute to abundantly supply you
                absolutely the best in exclusive content promotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
