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
import EcommerceFaq from "./EcommerceFaq";



export async function generateMetadata() {
  return {
    title: "Reliable E commerce Web Development Company in Kochi ",
    description: "Accolades Integrated, Trusted E commerce Web Development Company in Kochi, builds Shopify, WooCommerce, and custom React/Next.js stores for online sales.",

    openGraph: {
      title: "Reliable E commerce Web Development Company in Kochi ",
      description: "Accolades Integrated, Trusted E commerce Web Development Company in Kochi, builds Shopify, WooCommerce, and custom React/Next.js stores for online sales.",
     
    },
  };
}

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

  const faqData = [
    {
        q: "What makes Accolades Integrated a reliable E commerce Web Development Company in Kochi?",
        a: "We offer full e-commerce services, from store design to checkout optimization. Our work combines Shopify, WooCommerce, and custom stacks with a focus on mobile-first and conversion-driven design."
    },
     {
        q: "Do you develop stores using Shopify and WooCommerce?",
        a: "Yes. We build feature-rich Shopify and WooCommerce stores. Each site is custom-designed, fast, secure, and ready for SEO and mobile shoppers."
    },
     {
        q: "Can you build custom e-commerce platforms using React or Django?",
        a: "Absolutely. We use React.js and Next.js for dynamic front ends and Django for secure back-end APIs. These frameworks suit complex, scalable online stores."
    },
     {
        q: "Will my e-commerce site be mobile-friendly?",
        a: "Yes. As a leading E commerce Web Development Company in Kochi, we create responsive, mobile-first sites that offer seamless shopping across all screen sizes."
    },
     {
        q: "Do you support payment gateway and shipping integration?",
        a: "We integrate major payment gateways like Razorpay, Stripe, and PayPal, and set up shipping APIs. Your checkout process will be smooth and secure."
    },
     {
        q: "How do you ensure better conversion rates in online stores?",
        a: "We use A/B testing, UX research, cart recovery flows, and performance tuning. This helps reduce abandonment and increase sales."
    },
     {
        q: "Can you optimize my existing WooCommerce or Shopify site?",
        a: "Yes. We audit, rework, and enhance existing stores to improve speed, SEO, user flow, and performance without disrupting operations."
    },
     {
        q: "Do you add structured product schema for SEO?",
        a: "Yes. We implement product schema to display your products with prices and ratings in Google search results, helping you attract more clicks."
    },
     
    
    
  ];

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
      <EcommerceFaq faqData={faqData} title={"FAQs — E commerce Web Development Company in Kochi"}/>
      <Footer />
    </div>
  );
};

export default page;
