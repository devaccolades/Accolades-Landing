import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Approach from "./Approach";
import Featured from "./Featured";

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1] pb-40">
        <Navbar />
        <HeroSection />
        <WhatWeDo />
        <Approach />
        <Featured />
      </main>
      <main className="-mt-[80px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
