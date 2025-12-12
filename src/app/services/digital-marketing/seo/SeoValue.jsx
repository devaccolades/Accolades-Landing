"use client";
import Image from "next/image";

export default function SeoValueSection() {
  const items = [
    {
      icon: "/new-seo/sv1.svg",
      title: "Business-Focused Goals",
      desc: "We link SEO to business goals. We set KPIs like organic traffic, conversions, and revenue.",
    //   bg: "bg-[#D9F6E7]",
    },
    {
      icon: "/new-seo/sv2.svg",
      title: "Data-Driven Approach",
      desc: "We use analytics and clear reports to show progress. Our team uses tools and manual checks to find real opportunities.",
    //   bg: "bg-[#E8D9FF]",
    },
    {
      icon: "/new-seo/sv3.svg",
      title: "Sustainable Tactics",
      desc: "We focus on sustainable tactics that last. Our methods are white-hat and designed for long-term success.",
    //   bg: "bg-[#FFE8CD]",
    },
  ];

  return (
    <section className="w-full bg-[#F9F9F9] rounded-[30px] py-6 md:py-8 lg:py-16 font-mont">
      <div className=" containers">

        {/* HEADER */}
        <h2 className="text-center text-xl md:text-2xl font-bold text-black  mb-4 md:mb-6 lg:mb-8">
          HOW OUR SEO WORK DELIVERS VALUE
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6">

              {/* ICON */}
              <div className="p-2 md:p-4 rounded-2xl w-fit mb-2 lg:mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-black font-semibold text-[16px] lg:text-[18px] leading-[18px]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-black mt-2 text-[12px] lg:text-[14px] leading-[156%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
