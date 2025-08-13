import FeaturedWork from "./FeaturedWork";
import HeroSection from "./HeroSection";
import Tech from "./Equipment";
import VideoTypesSection from "./VideoTypesSection";
import Process from "./Process";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function page() {
  return (
    <>
    <Navbar />
    <main className="bg-[#F1F1F1]">
      <HeroSection />
      <VideoTypesSection />
      <FeaturedWork />
      <Process />
      <Tech />
    </main>
    <main className="-mt-[65px]">
    <Footer />
    </main>
    </>
  )
}
