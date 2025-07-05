import Header from "@/Layout/Header";
import Image from "next/image";
import HeroSection from "./(home)/HeroSection";
import UnderHero from "./(home)/UnderHero";
import VideoServices from "./(home)/VideoServices";
import Footer from "@/Layout/Footer";
import WhyAccolades from "./(home)/WhyAccolades";
import WhyBrands from "./(home)/WhyBrands";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <UnderHero />
      <VideoServices />
      <WhyBrands/>
      <Footer />
    </>
  );
}
