


"use client";
import Image from "next/image";

export default function WhyInvestSMM() {
  const features = [
    {
      title: "Builds Your Brand",
      desc: "Social media marketing builds brand recognition and trust by connecting with audiences on popular platforms. Consistent posts humanize your brand and highlight its values.",
      icon: "/new-smm/smm1.svg",
    },
    {
      title: "Increases Traffic and Leads",
      desc: "Effective SMM drives more visitors to your website and generates qualified leads. Studies show increased exposure is the #1 benefit of social media marketing, followed by higher traffic and more leads.",
      icon: "/new-smm/smm2.svg",
    },
    {
      title: "Boosts Engagement",
      desc: "Unlike traditional ads, social media lets you engage in real time with customers. You can respond to comments, share user content, and show that you care about their needs.",
      icon: "/new-smm/smm3.svg",
    },
    {
      title: "Measurable Results",
      desc: "We track metrics like reach, clicks, engagement, likes, follower growth, and conversions to measure success. We set clear goals so you see a strong ROI from your social media spend.",
      icon: "/new-smm/smm4.svg",
    },
  ];

  return (
    <section className="containers py-10 md:py-16 font-mont">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-4 md:mb-12">
        <h2 className="text-[16px] md:text-[20px]  leading-[16px] font-bold text-black">
          WHY INVEST IN SOCIAL MEDIA MARKETING
        </h2>
        <p className="text-gray-600 text-[12px] md:text-[16px] leading-[20px] md:leading-[26px] mt-3">
          Transform your digital presence with strategic social media marketing
          that delivers real, measurable results for your business
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-center ">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-4 lg:p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 flex items-start justify-start ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                />
              </div>
            <div className="flex items-start gap-2 md:gap-4">
              {/* Icon */}
              

              {/* Text */}
              <div>
                <h3 className="font-semibold text-[14px] md:text-lg mb-1">{item.title}</h3>
                <p className="text-black text-[12px] md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
