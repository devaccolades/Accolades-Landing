import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import WebHero from "./WebHero";
import WebsiteFeatures from "./WebsiteFeatures";
import WebsiteProjects from "./WebsiteProjects";

const page = () => {
  return (
    <>
    
      
      <Navbar  />
       <div className="bg-gradient-to-br from-[#ecf3f6] to-[#f1f5f5]">
      <WebHero />
      <WebsiteFeatures />
      <WebsiteProjects />
       </div>
      <Footer />
     
    </>
  );
};

export default page;
