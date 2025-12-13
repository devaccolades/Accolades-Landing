import Image from "next/image";

export default function WhatWeBuild() {
  const items = [
    {
      icon: "/new-web/wd1.svg",
      title: "Responsive Websites",
      desc: "Mobile-first layouts and flexible grids for all devices.",
      bg: "bg-[#E9FAF7]",
      border: "border-[#ACEFE3]"
    },
    {
      icon: "/new-web/wd2.svg",
      title: "SaaS & Portals",
      desc: "Multi-tenant apps, dashboards, and user management.",
      bg: "bg-[#EAF5FF]",
      border: "border-[#B4DAFF]"
    },
    {
      icon: "/new-web/wd3.svg",
      title: "APIs & Integrations",
      desc: "Payment gateways, CRMs, shipping providers, and analytics.",
      bg: "bg-[#E7FAFA]",
      border: "border-[#A7EDEE]"
    },
    {
      icon: "/new-web/wd4.svg",
      title: "Content Sites & Blogs",
      desc: "Fast, structured content systems built for SEO.",
      bg: "bg-[#EAF5FF]",
      border: "border-[#B4DAFF]"
    },
    {
      icon: "/new-web/wd5.svg",
      title: "Progressive Web Apps (PWAs)",
      desc: "App-like experience for mobile users.",
      bg: "bg-[#E9FAF7]",
      border: "border-[#ACEFE3]"           
    }
  ];

  return (
    <section className="containers py-6 md:py-10 lg:py-12 font-mont">
      <div className="">

        {/* HEADING */}
        <h2 className="text-start md:text-center text-xl md:text-2xl font-bold text-black mb-0 ">
          WHAT WE BUILD — REAL SOLUTIONS FOR REAL NEEDS
        </h2>

        {/* SUBTEXT */}
        <p className="text-start md:text-center mt-2 text-black font-semibold text-[14px] leading-[106%] mb-4 ">
          We design UI/UX to match brand tone and user goals. We focus on 
          frontend performance, image optimisation, and fast time to interactive.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-2">
          {items.map((item, index) => ( 
            <div
              key={index}
              className={`border ${item.border} rounded-2xl p-3 md:p-5 bg-white shadow-sm`}
            >
              {/* ICON */}
              <div
                className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center"
              >
                <Image src={item.icon} alt={item.title} width={44} height={44} />
              </div>

              {/* TITLE */}
              <h3 className="text-black font-semibold leading-snug text-[15px] md:text-base">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-black text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
