export const dynamic = "force-dynamic"; // makes this page render dynamically

import React from "react";
import Header from "@/Layout/Header";
import Image from "next/image";
import HeroSection from "./HeroSection";
import UnderHero from "./UnderHero";
import VideoServices from "./VideoServices";
import Footer from "@/Layout/Footer";
import WhyAccolades from "./WhyAccolades";
import OurPartners from "./OurPartners";
import FeaturedWorks from "./FeaturedWork";
import WhyBrands from "./WhyBrands";
import {
  getFeaturedParteners,
  getHeroSection,
  getModalVideo,
  getOurPartner,
  getVideoCategories,
  getWhatOurClientSays,
  getWhyBrandChoose,
} from "../Server";
import WhatOurClientsSay from "./OurClientsSay";

async function page() {
  const hero = await getHeroSection();
  const video = await getVideoCategories();
  const brandVideo = await getWhyBrandChoose();
  const partners = await getOurPartner();
  const featured = await getFeaturedParteners();
  const client = await getWhatOurClientSays();
  const modal = await getModalVideo();

  return (
    <>
      {modal && <Header data={modal} />}
      {hero && <HeroSection data={hero} />}
      <UnderHero />
      {video && <VideoServices data={video} />}
      {brandVideo && <WhyBrands data={brandVideo} />}
      {partners && <OurPartners data={partners} />}
      {featured && <FeaturedWorks data={featured} />}
      {client && <WhatOurClientsSay data={client} />}
      {modal && <Footer data={modal} />}
    </>
  );
}

export default page;
