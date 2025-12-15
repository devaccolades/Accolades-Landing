import Navbar from "@/component/Navbar";
import React from "react";
import WordpressHero from "./Word-Hero";
import OfferAndFeatures from "./OfferAndFeatures";
import WordProjects from "./WordProjects";
import Footer from "@/component/Footer";


export async function generateMetadata() {
  return {
    title: "WordPress Web Development Services",
    description: "Accolades Integrated offers custom WordPress web development services focused on speed, security, scalability, and SEO-friendly design for growing brands. ",

    openGraph: {
      title: "WordPress Web Development Services",
      description: "Accolades Integrated offers custom WordPress web development services focused on speed, security, scalability, and SEO-friendly design for growing brands. ",
     
    },
  };
}

function page() {
  return (
    <div>
      {/* <Navbar /> */}
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
