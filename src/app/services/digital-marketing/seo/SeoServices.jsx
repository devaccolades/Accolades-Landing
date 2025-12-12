"use client";

import Image from "next/image";

const services = [
  {
    icon: "/new-seo/ss1.svg",
    title: "Website & Technical SEO",
    desc: "We fix site issues that block search engines and users. Our technical SEO includes speed tuning, mobile checks, structured data, and crawl error fixes. We improve Core Web Vitals and make sites easier to index.",
  },
  {
    icon: "/new-seo/ss2.svg",
    title: "On-Page SEO & Content Optimization",
    desc: "We map keywords to pages and write clear page copy. Our team optimizes titles, headers, meta tags, and image alt text. We improve readability, internal links, and page layout.",
  },
  {
    icon: "/new-seo/ss3.svg",
    title: "Keyword Research & Strategy",
    desc: "We find search terms that matter to your business. We blend search volume, intent, and competition to build a keyword plan that drives relevant leads.",
  },
  {
    icon: "/new-seo/ss4.svg",
    title: "Off-Page SEO & Link Building",
    desc: "We build authority through safe, high-value backlinks. We combine white-hat outreach, PR, and industry mentions. We avoid risky tactics and focus on sustainable growth.",
  },
  {
    icon: "/new-seo/ss5.svg",
    title: "Local SEO for Kochi Businesses",
    desc: "We optimize local listings, manage Google Business Profile, fix local schema, and boost map rankings. We help customers discover you faster in local searches.",
  },
  {
    icon: "/new-seo/ss6.svg",
    title: "E-commerce SEO",
    desc: "We optimize product pages, technical setup, and category structure to improve organic sales. We reduce friction, fix canonical issues, and boost product visibility.",
  },
  {
    icon: "/new-seo/ss7.svg",
    title: "SEO for New Sites & Migration Support",
    desc: "We prepare SEO-ready sites before launch. For migrations, we plan redirects, preserve rankings, and test indexing to prevent traffic loss.",
  },
];

export default function SeoServices() {
  return (
    <section className="containers py-6 md:py-10 lg:py-16 font-mont">
      {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto mb-4 md:mb-8">
        <h2 className="text-center text-xl lg:text-2xl font-bold">
          SEO SERVICES WE OFFER
        </h2>
         <p className="text-center mt-2 text-black font-semibold text-[14px] leading-[106%]">
          We provide the full suite of SEO services. Each service fits into a larger growth plan.
          Our work aims to lift visibility, improve user experience, and increase conversions.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6  mx-auto px-2 md:px-4">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-3xl p-3 md:p-4 lg:p-6 flex flex-col gap-3 shadow-sm transition hover:shadow-md hover:bg-[#F1F7FF]"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center  ">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
            </div>

            {/* TITLE */}
            <h3 className="text-black font-semibold text-[16px] lg:text-[18px] leading-[18px]">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-black mt-2 text-[12px] lg:text-[14px] leading-[156%]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
