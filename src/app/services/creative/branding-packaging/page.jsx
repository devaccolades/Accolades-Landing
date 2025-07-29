import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import Tools from "../Tools";
import Featured from "./Featured";

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1] ">
        <Navbar />
        <HeroSection />
        <WhatWeOffer />
        <Featured />
        <Tools />
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
