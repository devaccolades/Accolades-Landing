import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import Tools from "../Tools";
import Featured from "./Featured";
import Our from "./Our";
import UpdatedFooter from "@/Layout/UpdatedFooter";

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
