import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import WebHero from "./WebHero";
import WebsiteFeatures from "./WebsiteFeatures";
import WebsiteProjects from "./WebsiteProjects";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F1F1F1]">
        <WebHero />
        <WebsiteFeatures />
        <WebsiteProjects />
      </div>
      <div className="-mt-[65px]">
        <Footer />
      </div>
    </>
  );
};

export default page;
