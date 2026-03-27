"use client";
import Link from "next/link";

const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
      { label: "Blogs", href: "/blog-top-digital-marketing-companies" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Web Development",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Fullstack Web Development", href: "/services/web-development/fullstack-development" },
      { label: "Wordpress Development", href: "/services/web-development/wordpress" },
      { label: "Ecommerce Solutions", href: "/services/web-development/ecommerce" },
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Performance Marketing", href: "/services/digital-marketing/performance-marketing" },
      { label: "SEO", href: "/services/digital-marketing/seo" },
      { label: "SMM", href: "/services/digital-marketing/smm" },
      { label: "Google Ads", href: "/services/digital-marketing/search-engine-marketing" },
      { label: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
    ],
  },
  {
    title: "Creative",
    links: [
      { label: "Creative", href: "/services/creative" },
      { label: "Graphics & Motion", href: "/services/creative/graphics-motion" },
      { label: "Branding & Packaging", href: "/services/creative/branding-packaging" },
      { label: "Video Production", href: "/services/creative/video-productions" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "AI By Accolades Integrated", href: "/ai-by-accolades-integrated" },
      { label: "The Market Factor", href: "/the-market-factor" },
      { label: "Why Digital Creative Web", href: "/why-digital-creative-web" },
      { label: "We are not a family, We are a team", href: "/we-are-not-a-family-we-are-a-team" },
      { label: "The Purpose Factor", href: "/the-purpose-factor" },
      { label: "Case-study", href: "/case-studies" },
      { label: "The Knowledge Factor", href: "/the-knowledge-factor" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-white py-16 mt-20">
      <div className="w-[90%] lg:w-[75%] mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-12 text-black">
          Sitemap
        </h1>

        {/* Cards */}
        <div className="space-y-10">
          {quickLinks.map((section) => (
            <div
              key={section.title}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              {/* Section Header */}
              <h2 className="text-xl font-semibold mb-4 text-[#0C7479]">
                {section.title}
              </h2>

              {/* Links List */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 text-[15px] text-gray-700 hover:text-[#0C7479] transition"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-[#0C7479]" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}