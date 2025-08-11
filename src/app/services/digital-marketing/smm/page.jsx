import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Details from "./Details";



const page = () => {
  return (
    <>
      <main
        className="bg-[#F1F1F1] pb-40"
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
        }}
      >
        <Navbar />
        <HeroSection />
        <Details />
      </main>
      <main className="-mt-[80px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
