import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import Tools from "../Tools";
import Featured from "./Featured";
import Our from "./Our";
import UpdatedFooter from "@/Layout/UpdatedFooter";


export async function generateMetadata() {
  return {
    title: "Creative Agency in Kochi | Branding, Design & Video",
    description:
      "Accolades Integrated — leading creative agency in Kochi for branding, graphic design, motion graphics, and video production. Build a brand that stands out.",

    alternates: {
      canonical: "https://www.accoladesintegrated.com/services/creative/branding-packaging", 
    },

    openGraph: {
      title: "Creative Agency in Kochi | Branding, Design & Video",
      description:
        "Accolades Integrated — leading creative agency in Kochi for branding, graphic design, motion graphics, and video production. Build a brand that stands out.",
      url: "https://www.accoladesintegrated.com/services/creative/branding-packaging",
    },
  };
}

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1] ">
        {/* <Navbar /> */}
        <HeroSection />
        <WhatWeOffer />
        <Featured />
        <Our />
        <Tools />
      </main>
      <main className="-mt-[55px] md:-mt-[85px] 2xl:-mt-[80px] ">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
};

export default page;
