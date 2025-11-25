import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Approach from "./Approach";
import Featured from "./Featured";
import WhyChoose from "./WhyChoose";
import Tools from "./Tools";

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1] ">
        {/* <Navbar /> */}
        <HeroSection />
        <WhatWeDo />
        <Approach />
        <Featured />
        <WhyChoose />
        <Tools />
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
