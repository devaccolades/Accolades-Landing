import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import Tools from "../Tools";
import Featured from "./Featured";
import Our from "./Our";

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
      <main className="-mt-[35px] 2xl:-mt-[40px] ">
        <Footer />
      </main>
    </>
  );
};

export default page;
