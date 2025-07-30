import Footer from "@/component/Footer";
import FeaturedWork from "./FeatureWork";
import HeroSection from "./HeroSection";
import Platforms from "./Platforms";
import Services from "./Services";
import Navbar from "@/component/Navbar";

export default function page() {
  return (
    <>
    <Navbar />
    <main className="bg-[#F1F1F1]">
      <HeroSection />
      <Services />
      <FeaturedWork />
      <Platforms />
    </main>
    <main className="-mt-[65px]">
      <Footer />
    </main>
    </>
  )
}
