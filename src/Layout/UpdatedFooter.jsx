import Image from "next/image";
import React from "react";
import Link from "next/link";

import logo from "../../public/updatedfooter/accolades_logo1.8d51c9eb 1.svg";
import location from "../../public/updatedfooter/5638b39694b0c7a3524b397146df1a174e79b998.png";
import phone from "../../public/updatedfooter/2849835_phone_telephone_cell_call_communication_icon (5) 2.svg";
import email from "../../public/updatedfooter/9004661_envelope_mail_email_letter_icon (2) 2.svg";
import facebook from "../../public/updatedfooter/Frame 2147223294.svg";
import Instagram from "../../public/updatedfooter/Frame 2147223293.svg";
import linkedin from "../../public/updatedfooter/Frame 2147223292.svg";

import desktop from "../../public/updatedfooter/desktop.svg";
import tab from "../../public/updatedfooter/tab.svg";
import mobile from "../../public/updatedfooter/mobile.svg";
import Digital from "@/app/services/Digital";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Services", href: "/services" },
//   { label: "Careers", href: "/careers" },
//   { label: "Blogs", href: "/blogs" },
//   { label: "Contact Us", href: "/contact-us" },

// //web development
//   { label: "Web Development", href: "/services/web-development" },
//   { label: "Fullstack Web Development", href: "/services/web-development/fullstack-development" },
//   { label: "Wordpress Development", href: "/services/web-development/wordpress" },
//   { label: "Ecommerce Solutions", href: "/services/web-development/ecommerce" },
//   //Digital marketing
//   { label: "Digital Marketing", href: "/services/digital-marketing" },
//   { label: "Performance Marketing", href: "/services/digital-marketing/performance-marketing" },
//   { label: "SEO", href: "/services/digital-marketing/seo" },
//   { label: "SMM", href: "/services/digital-marketing/smm" },
//   { label: "Google-ads", href: "/services/digital-marketing/search-engine-marketing" },
//   { label: "Content Marketing", href: "/services/digital-marketing/content-marketing" },

//   //creative
//   { label: "Creative", href: "/services/creative" },
//   { label: "Graphics & Motion", href: "/services/creative/graphics-motion" },
//   { label: "Branding & Packaging", href: "/services/creative/branding-packaging" },
//   { label: "Video Production", href: "/services/creative/video-productions" },

//   //others

//    { label: "AI By Accolades Integrated", href: "/ai-by-accolades-integrated" },
//   { label: "The Market Factor", href: "/the-market-factor" },
//   { label: "Why Digital Creative Web", href: "/why-digital-creative-web" },
//   {
//     label: "We are not a family, We are a team",
//     href: "/we-are-not-a-family-we-are-a-team",
//   },
//   { label: "The Purpose Factor", href: "/the-purpose-factor" },
//   { label: "Case-study", href: "/case-studies" },
//   { label: "The Knowledge Factor", href: "/the-knowledge-factor" },
// ];


const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact-us" },
       { label: "Site Map", href: "/sitemap" },
    ],
  },
    {
    title: "Digital ",
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
    title: "Web ",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Fullstack Web Development", href: "/services/web-development/fullstack-development" },
      { label: "Wordpress Development", href: "/services/web-development/wordpress" },
      { label: "Ecommerce Solutions", href: "/services/web-development/ecommerce" },
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

const articleLinks = [
  { label: "AI By Accolades Integrated", href: "/ai-by-accolades-integrated" },
  { label: "The Market Factor", href: "/the-market-factor" },
  { label: "Why Digital Creative Web", href: "/why-digital-creative-web" },
  {
    label: "We are not a family, We are a team",
    href: "/we-are-not-a-family-we-are-a-team",
  },
  { label: "The Purpose Factor", href: "/the-purpose-factor" },
  { label: "Case-study", href: "/case-studies" },
  { label: "The Knowledge Factor", href: "/the-knowledge-factor" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://ca.linkedin.com/company/accoladesintegrated/",
    icon: linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/accolades_integrated/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/accoladesmc/",
    icon: facebook,
  },
];

const UpdatedFooter = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <Image
          src={desktop}
          alt="cover"
          className="h-[80px] mb-[-1px] w-auto object-contain object-top hidden lg:block"
        />

        <Image
          src={tab}
          alt="cover"
          className="h-[60px] mb-[-1px] w-auto object-contain object-top hidden md:block lg:hidden"
        />

        <Image
          src={mobile}
          alt="cover"
          className="h-[40px] mb-[-1px] w-full object-contain object-top block md:hidden"
        />
      </div>
      <footer className="relative bg-[#F9F4EC]">
        <section className=" w-full pt-6  2xl:pt-12">
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <div className="flex items-center gap-4">
              <div className="hidden md:block flex-1 h-px bg-[#D9D9D9]" />

              <div className="flex flex-wrap justify-center gap-1 md:gap-3">
                {["Kochi", "Calicut", "Trivandrum", "Bengaluru", "Mumbai"].map(
                  (city) => (
                    <span
                      key={city}
                      className="px-2 md:px-3 py-1 md:py-2 rounded-full border border-[#D9D9D9] bg-white text-black font-bold text-[13px] md:text-[14px] lg:text-[16px] "
                    >
                      {city}
                    </span>
                  ),
                )}
              </div>

              <div className="flex-1 h-px bg-[#D9D9D9]" />
            </div>
          </div>
        </section>
        <section className=" w-[90%] lg:w-[80%] mx-auto pt-7 ">
          <div className=" grid grid-cols-1 md:grid-cols-2  gap-5 lg:gap-10 xl:gap-20 items-center">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-6 xl:gap-10">
              <div className="w-full h-full pb-2">
                <h3 className="text-[#0C7479] font-bold text-[16px] pb-2">
                  Corporate Office
                </h3>
                <p>
                  Accolades Integrated Pvt Ltd - Rahmath Building, 46/2056 - A,
                  AKG Vayanasala Road, Chakkaraparambu, Near Holiday Inn, Kochi,
                  Ernakulam, Kerala 682028
                </p>
              </div>
              <div className="space-y-2 max-w-[260px]">
                <div className="flex gap-2 items-start">
                  <Image
                    src={location}
                    alt="icon"
                    className="w-[20px] h-[20px] shrink-0"
                  />
                  <a
                    href="https://maps.app.goo.gl/6x4a5FQ7huctRkZB6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[12px] uppercase break-words"
                  >
                    Google map link
                  </a>
                </div>
                <div className="flex gap-2 items-start">
                  <Image
                    src={email}
                    alt="icon"
                    className="w-[20px] h-[20px] shrink-0"
                  />
                  <a
                    href="mailto:mail@accoladesintegrated.com"
                    className="font-bold text-[12px] uppercase break-words hover:underline"
                  >
                    mail@accoladesintegrated.com
                  </a>
                </div>
                <div className="flex gap-2 items-start">
                  <Image
                    src={phone}
                    alt="icon"
                    className="w-[20px] h-[20px] shrink-0"
                  />
                  <a
                    href="tel:+919048100233"
                    className="font-bold text-[12px] uppercase break-words hover:underline"
                  >
                    +91 90481 00233
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center lg:gap-5 xl:gap-10">
              <div className="w-full h-full pb-2">
                <h3 className="text-[#0C7479] font-bold text-[16px] pb-2 leading-[100%]">
                  Mumbai Office and Development Center
                </h3>
                <p>
                  Accolades Integrated Pvt Ltd - 301 | 3rd floor | Corporate
                  Corner | Sundar Nagar | Malad West | Mumbai – 400064
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2  ">
                  <Image
                    src={location}
                    alt="icon"
                    className="w-[20px] h-full"
                  />
                  <a
                    href="https://maps.app.goo.gl/QaLAC7r6mCpRHxyXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[12px] uppercase break-words"
                  >
                    Google map link
                  </a>
                </div>
                <div className="flex gap-2  ">
                  <Image src={email} alt="icon" className="w-[20px] h-full" />
                  <a
                    href="mailto:mail@accoladesintegrated.com"
                    className="font-bold text-[12px] uppercase break-words hover:underline"
                  >
                    mail@accoladesintegrated.com
                  </a>
                </div>
                <div className="flex gap-2  ">
                  <Image src={phone} alt="icon" className="w-[20px] h-full" />
                  <a
                    href="tel:+919048100233"
                    className="font-bold text-[12px] uppercase break-words hover:underline"
                  >
                    +91 90726 19925
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[90%] lg:w-[80%] mx-auto block flex-1 h-px bg-[#D9D9D9] my-5" />
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 xl:gap-6 ">

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
  {quickLinks.map((section) => (
    <div key={section.title}>
      <h3 className="mb-4 text-[16px] font-bold text-[#1a7070]">
        {section.title}
      </h3>

      <div className="flex flex-col gap-3">
        {section.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[14px] text-[#2d2d2d] font-medium hover:text-[#1a7070] transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  ))}
</div>

          {/* <div className="min-w-[320px]">
            <h3 className="mb-6 text-[18px] font-bold text-[#1a7070] ">
              Quick Links
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 w-fit gap-x-6 md:gap-x-10">
              {quickLinks.map((link) => ( 
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[16px] text-[#2d2d2d] font-medium  transition-colors duration-200 hover:text-[#1a7070]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div> */}

          {/* <div className="flex flex-wrap gap-2 xl:gap-3 2xl:gap-4">
            {articleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
              inline-flex items-center
              gap-2 2xl:gap-3
              rounded-full
              border border-[#E1E1E1]
              px-3 py-1
              xl:px-4 xl:py-1.5
              2xl:px-5 2xl:py-2
              h-fit
              text-[14px] xl:text-[16px] 2xl:text-[18px]
              text-[#052D23]
              font-bold
              bg-white
              whitespace-nowrap
              "
              >
                {link.label}
                <span className="text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-tight">
                  »
                </span>
              </Link>
            ))}
          </div> */}
        </div>
        <div className="w-[90%] lg:w-[80%] mx-auto block flex-1 h-px bg-[#D9D9D9] my-5" />
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:gap-10 pb-2 items-center">
          <div className="space-y-1 md:space-y-4">
            <h5 className="text-[10px] lg:text-[12px] block md:justify-center text-center md:text-left">
              copyright © 2026{" "}
              <span className="text-[#0C7379]  font-semibold">
                Accolades Integrated Pvt Ltd
              </span>{" "}
              All rights reserved
            </h5>
          </div>
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center "
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="w-[28px] h-[28px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default UpdatedFooter;
