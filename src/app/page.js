import React from "react";
import HeroSection from "./(home)/HeroSection";
import Accolades from "./(home)/Accolades";
import OurServices from "./(home)/OurServices";
import Count from "./(home)/Count";
import Projects from "./(home)/Projects";
import ProjectSlider from "./(home)/ProjectSlider";
import OurClients from "./(home)/OurClients";
import ClientSlider from "./(home)/ClientSlider";
import Testimonials from "./(home)/Testimonials";
import ReachUs from "./(home)/ReachUs";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Accolades />
      <OurServices />
      <Count />
      <Projects />
      <ProjectSlider />
      <OurClients />
      <ClientSlider />
      <Testimonials />
      <ReachUs />
      <Footer />
    </>
  );
}

export default page;
