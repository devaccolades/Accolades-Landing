import React from "react";
import HeroSection from "./(home)/HeroSection";
import Accolades from "./(home)/Accolades";
import OurServices from "./(home)/OurServices";
import Count from "./(home)/Count";

function page() {
  return (
    <>
      <HeroSection />
      <Accolades />
      <OurServices />
      <Count />
    </>
  );
}

export default page;
