import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Cards from "./Cards";

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1]">
        <Navbar />
        <HeroSection />
        <Cards />
      </main>
      <main className="-mt-[80px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
