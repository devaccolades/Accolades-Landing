import Footer from "@/component/Footer";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Navbar from "@/component/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
    <main className="bg-[#F1F1F1]">
      <HeroSection />
      <Portfolio />
    </main>
    <main className="-mt-[65px]">
      <Footer />
    </main>
    </>
  );
}
