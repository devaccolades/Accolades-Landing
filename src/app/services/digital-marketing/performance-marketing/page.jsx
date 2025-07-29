import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import Herosection from "./Herosection";
import WhatWeOffer from "./WhatWeOffer";
import ServicesIncluded from "./ServicesIncluded";
import OurProcess from "./OurProcess";
import CreativeApproach from "./CreativeApproach";

const heroData = {
  main_title: "Performance Marketing",
  title: "Drive Measurable Growth with Performance Marketing",
  subtitle: "Our campaigns don’t just look good — they convert. From clicks to customers we deliver real, trackable results.",
  button_text: "Get a Creative Proposal",
  image: "/services/performance.webp",
};

const services = [
  {
    id: 1,
    name: "Google Ads",
    image: "/services/gads.png",
  },
  {
    id: 2,
    name: "Meta Ads",
    image: "/services/meta.png",
  },
  {
    id: 3,
    name: "LinkedIn Ads",
    image: "/services/lin.png",
  },
  {
    id: 4,
    name: "YouTube Ads",
    image: "/services/yt.png",
  },
];

const tools = [
  {
    id: 1,
    name: "Meta Business Suite",
    image: "/services/meta_b.jpg",
  },
  {
    id: 2,
    name: "Google Ads",
    image: "/services/gads.png",
  },
  {
    id: 3,
    name: "Google Tag Manager",
    image: "/services/gtm.png",
  },
  {
    id: 4,
    name: "Google Analytics 4",
    image: "/services/analytics.png",
  },
  {
    id: 5,
    name: "Hotjar",
    image: "/services/hotjar.jpg",
  },
];

const offer ={
   title: "What We Offer",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae velit sequi, explicabo voluptate maxime temporibus architecto voluptatibus. Dicta eligendi earum porro fugiat dolor rem obcaecati deserunt aut mollitia. Sint, nesciunt!",
  services :services
}
const tech ={
   title: "Tools & Tech We Use",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae velit sequi, explicabo voluptate maxime temporibus architecto voluptatibus. Dicta eligendi earum porro fugiat dolor rem obcaecati deserunt aut mollitia. Sint, nesciunt!",
  services :tools
}

const page = () => {
  return (
    <>
      <Navbar />
      <Herosection {...heroData}/>
      <WhatWeOffer {...offer}/>
      <ServicesIncluded />
      <OurProcess/>
      <CreativeApproach />
      <WhatWeOffer {...tech}/>
      <Footer />
    </>
  );
};

export default page;
