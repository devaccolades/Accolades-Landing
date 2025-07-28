import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import WebHero from "./WebHero";
import WebsiteFeatures from "./WebsiteFeatures";
import WebsiteProjects from "./WebsiteProjects";

const page = () => {
  return (
    <>
     <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
      <Navbar />
      
      <WebHero />
      <WebsiteFeatures />
      <WebsiteProjects />
      <Footer />
      </div>
    </>
  );
};

export default page;
