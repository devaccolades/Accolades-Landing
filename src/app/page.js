import React from "react";
import HeroSection from "./(home)/HeroSection";
import Accolades from "./(home)/Accolades";
import OurServices from "./(home)/OurServices";
import Count from "./(home)/Count";
import Projects from "./(home)/Projects";
import ProjectSlider from "./(home)/ProjectSlider";
import OurClients from "./(home)/OurClients";
import ClientSlider from "./(home)/ClientSlider";

function page() {
  return (
    <>
      <HeroSection />
      <Accolades />
      <OurServices />
      <Count />
      <Projects />
      <ProjectSlider />
      <OurClients />
      <ClientSlider />
    </>
  );
}

export default page;
