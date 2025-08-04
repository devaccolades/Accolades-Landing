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
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae velit sequi, explicabo voluptate maxime temporibus architecto voluptatibus. Dicta eligendi earum porro fugiat dolor rem obcaecati deserunt aut mollitia. Sint, nesciunt!",
  services: tools,
};

const page = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <Navbar />
      <Herosection {...heroData} />
      <WhatWeOffer {...tech} />
      <FeaturesHighlight />
      {/* <WebsiteProjectsIntro /> */}
      <Footer />
    </div>
  );
};

export default page;
