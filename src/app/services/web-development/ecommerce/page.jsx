import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import Herosection from "../../digital-marketing/performance-marketing/Herosection";
import WhatWeOffer from "../../digital-marketing/performance-marketing/WhatWeOffer";
import FeaturesHighlight from "./FeaturesHighlight";
import WebsiteProjectsIntro from "./WebsiteProjectsIntro";

import next from "../../../../../public/web/next-js.png";
import py from "../../../../../public/web/python.png";
import dj from "../../../../../public/web/dj2.png";
import postg from "../../../../../public/web/postgres.png";
import EcommerceHero from "./EcommerceHero";
import EcommerceServices from "./EcommerceServices";
import FeaturesSection from "./FeaturesSection";
import WhyChooseSection from "./WhyChoose";
import FreeConsultation from "./FreeConsultation";

const heroData = {
  main_title: "Ecommerce Website",
  title: "Your Online Store. Built to Convert.",
  subtitle:
    "Whether you're starting from scratch or scaling to thousands of orders, we build ecommerce platforms that drive revenue.",
  button_text: "Get a Creative Proposal",
  image: "/web/ecom/ecom.webp",
};

const tools = [
  {
    id: 1,
    name: "Shopify",
    image: "/web/ecom/shopify.png",
  },
  {
    id: 2,
    name: "WooCommerce",
    image: "/web/ecom/woo.png",
  },
  // {
  //   id: 3,
  //   name: "Laravel",
  //   image: "/web/ecom/lar.png",
  // },
  {
    id: 4,
    name: "React",
    image: "/web/ecom/react.png",
  },
  {
    id: 5,
    name: "Next.js",
    image: next,
  },
  // {
  //   id: 6,
  //   name: "Python",
  //   image: py,
  // },
  {
    id: 7,
    name: "Django",
    image: dj,
  },
  // {
  //   id: 8,
  //   name: "PostgreSQL",
  //   image: postg,
  // },
];

const tech = {
  title: "Supported Platforms",
  desc: "At Accolades Integrated, we build powerful and scalable eCommerce websites that deliver seamless shopping experiences and drive conversions. Our development team works with a range of cutting-edge platforms and technologies including Shopify, WooCommerce, Next.js, and React to create customized, high-performance online stores. Whether you're launching a new eCommerce venture or upgrading an existing one, we ensure your website is secure, mobile-responsive, fast, and fully optimized for user experience and sales. From intuitive UI/UX to integrated payment solutions and backend management, we deliver complete eCommerce solutions tailored to your business goals.",
  services: tools,
};

const page = () => {
  return (
    // <div
    //   style={{
    //     background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
    //   }}
    // >
    //   {/* <Navbar /> */}
    //   <Herosection {...heroData} />
    //   <WhatWeOffer {...tech} />
    //   <FeaturesHighlight />
    //   {/* <WebsiteProjectsIntro /> */}
    //   <Footer />
      
    // </div>
    <div>
      <EcommerceHero />
      <EcommerceServices />
      <FeaturesSection />
      <WhyChooseSection />
      <FreeConsultation /> 
      <Footer />
    </div>
  );
};

export default page;
