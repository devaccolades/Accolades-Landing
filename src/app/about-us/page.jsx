import Footer from "@/component/Footer";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Navbar from "@/component/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <Footer />
    </>
  );
}
