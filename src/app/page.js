import Header from "@/Layout/Header";
import Image from "next/image";
import HeroSection from "./(home)/HeroSection";
import UnderHero from "./(home)/UnderHero";
import VideoServices from "./(home)/VideoServices";
import Footer from "@/Layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <UnderHero />
      <VideoServices />
      <Footer />
    </>
  );
}
