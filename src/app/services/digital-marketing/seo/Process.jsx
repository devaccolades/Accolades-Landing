"use client";
import Image from "next/image";
import img18 from '../../../../../public/seo/image18.svg'
import img19 from '../../../../../public/seo/image19.svg'
import img20 from '../../../../../public/seo/image20.svg'
import img21 from '../../../../../public/seo/image21.svg'
import img22 from '../../../../../public/seo/image22.svg'
import img23 from '../../../../../public/seo/image23.svg'
import img24 from '../../../../../public/seo/image24.svg'
import img26 from '../../../../../public/seo/image26.svg'
import img27 from '../../../../../public/seo/image27.svg'

const seoSteps = [
  {
    title: "Website audit",
    icon: img18,
  },
  {
    title: "Off-page optimization",
    icon: img19,
  },
  {
    title: "Keyword Research",
    icon: img21,
  },
  {
    title: "Competitor research",
    icon: img20,
  },
  {
    title: "Google Analytics analysis",
    icon: img23,
  },
  {
    title: "Google Webmaster Tools analysis",
    icon: img26,
  },
  {
    title: "Website redesign",
    icon: img22,
  },
  {
    title: "On-page Optimization",
    icon: img24,
  },
  {
    title: "Link Building",
    icon: img27,
  },
];

export default function Process() {
  return (
    <section className="lg:py-12 md:py-10 py-8 ">
      <div className="containers text-center">
        <h2 className="font-mont font-bold xl:text-[40px] lg:text-[34px] md:text-[28px] text-[22px] leading-[130%] text-[#3FB4BA] mb-4 md:mb-8 lg:mb-12">
          Our SEO Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {seoSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-2xl"
            >
              <Image
                src={step.icon}
                alt={step.title}
                className="mb-4 lg:size-[80px] md:size-[70px] size-[60px]"
              />
              <p className="font-mont font-semibold xl:text-[28px] leading-[100%] text-[#2C99B1] ">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
