import Navbar from "@/component/Navbar";
import HeroSection from "./HeroSection";
import Latest from "./Latest";
import Footer from "@/component/Footer";

export default function page() {
  return (
    <>
    <Navbar />
    <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
    <HeroSection />
    <Latest />
    </div>
    <Footer />
    </>
  )
}
