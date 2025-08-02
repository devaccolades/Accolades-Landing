import Navbar from "@/component/Navbar";
import React from "react";
import WordpressHero from "./Word-Hero";
import OfferAndFeatures from "./OfferAndFeatures";
import WordProjects from "./WordProjects";
import Footer from "@/component/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F1F1F1]">
        <WordpressHero />
        <OfferAndFeatures />
        <WordProjects />
      </div>
      <div className="-mt-[65px]">
        <Footer />
      </div>
    </div>
  );
}

export default page;
