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
import { videoServicesData } from "@/Data/VideoServicesData";
import {
  getFeaturedParteners,
  getHeroSection,
  getModalVideo,
  getOurPartner,
  getWhatOurClientSays,
  getWhyBrandChoose,
  getVideoCategories,
} from "../Server";
import WhatOurClientsSay from "./OurClientsSay";

export async function generateMetadata() {
  const title = "Video Production | Accolades Integrated";

  const description =
    "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.";

  const url = "https://www.accoladesintegrated.com/video-production"; // 👈 adjust if route differs

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

async function page() {
  const hero = await getHeroSection();
  const staticVideos = videoServicesData;
  const backendVideos = await getVideoCategories();
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
      <VideoServices data={staticVideos} categories={backendVideos} />
      {brandVideo && <WhyBrands />}
      {partners && <OurPartners data={partners} />}
      {featured && <FeaturedWorks data={featured} />}
      {client && <WhatOurClientsSay data={client} />}
      {modal && <Footer data={modal} />}
    </>
  );
}

export default page;
