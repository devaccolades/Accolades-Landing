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
import {
  getFeaturedParteners,
  getHeroSection,
  getOurPartner,
  getVideoCategories,
  getWhatOurClientSays,
  getWhyBrandChoose,
} from "./Server";
import WhatOurClientsSay from "./(home)/OurClientsSay";

export default async function Home() {
  const hero = await getHeroSection();
  const video = await getVideoCategories();
  const brandVideo = await getWhyBrandChoose();
  const partners = await getOurPartner();
  const featured = await getFeaturedParteners();
  const client = await getWhatOurClientSays()
  console.log("client", client);

  return (
    <>
      <Header />
      {hero && <HeroSection data={hero} />}
      <UnderHero />
      {video && <VideoServices data={video} />}
      {brandVideo && <WhyBrands data={brandVideo} />}
      {partners && <OurPartners data={partners} />}
      {featured && <FeaturedWorks data={featured} />}
      {client && <WhatOurClientsSay data={client} />}
      <Footer />
    </>
  );
}
