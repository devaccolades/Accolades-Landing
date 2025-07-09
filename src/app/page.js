import Header from "@/Layout/Header";
import Image from "next/image";
import HeroSection from "./(home)/HeroSection";
import UnderHero from "./(home)/UnderHero";
import VideoServices from "./(home)/VideoServices";
import Footer from "@/Layout/Footer";
import WhyAccolades from "./(home)/WhyAccolades";
import OurPartners from "./(home)/OurPartners";
import FeaturedWorks from "./(home)/FeaturedWork";
import WhyBrands from "./(home)/WhyBrands";
import WhatOurClientsSay from "./(home)/OurClientsSay";
// import { getHeroSection, getVideoCategories } from "./Server";

export default async function Home() {
//   const hero = await getHeroSection();
//   const video = await getVideoCategories();
//   console.log("video", video);




  return (
    <>
      <Header />
      {hero && <HeroSection data={hero} />}
      <UnderHero />
      {video && <VideoServices data={video} />}
      <WhyBrands />
      <OurPartners />
      <FeaturedWorks /> 
      <WhatOurClientsSay />
      <Footer />
    </>
  );
}
