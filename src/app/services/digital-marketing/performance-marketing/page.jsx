import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import Herosection from "./Herosection";
import WhatWeOffer from "./WhatWeOffer";
import ServicesIncluded from "./ServicesIncluded";
import OurProcess from "./OurProcess";
import CreativeApproach from "./CreativeApproach";


export async function generateMetadata() {
  return {
    title: "Performance Marketing Solutions",
    description: "Maximize ROI with data-driven performance marketing strategies focused on conversions, lead generation, and measurable business growth. ",

    openGraph: {
      title: "Performance Marketing Solutions",
      description: "Maximize ROI with data-driven performance marketing strategies focused on conversions, lead generation, and measurable business growth. ",
     
    },
  };
}

const heroData = {
  main_title: "Performance Marketing",
  title: "Drive Measurable Growth with Performance Marketing",
  subtitle:
    "Our campaigns don’t just look good — they convert. From clicks to customers we deliver real, trackable results.",
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

const offer = {
  title: "What We Offer",
  desc: "We specialize in crafting high-impact performance marketing strategies designed to drive ROI. From Google Ads to Meta and LinkedIn campaigns, we tailor every ad to align with your audience’s intent. Our focus is on measurable growth — turning every click into a conversion opportunity with highly optimized ad creatives and landing experiences.",
  services: services,
};
const tech = {
  title: "Tools & Platforms We Use",
  desc: "To ensure peak performance and precise tracking, we leverage a suite of industry-leading tools. From audience targeting and analytics with Meta Business Suite and Google Ads, to conversion tracking with Google Tag Manager and behavior insights via Hotjar — our tech stack enables real-time data optimization for better campaign results.",
  services: tools,
};

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1]">
        {/* <Navbar /> */}
        <Herosection {...heroData} />
        <WhatWeOffer {...offer} />
        <ServicesIncluded />
        <OurProcess />
        <CreativeApproach />
        <div
          className="pb-24"
          style={{
            background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
          }}
        >
          <WhatWeOffer {...tech} />
        </div>
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
