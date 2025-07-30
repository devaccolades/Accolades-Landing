import Navbar from "@/component/Navbar";
import HeroSection from "./HeroSection";
import Latest from "./Latest";
import Footer from "@/component/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F1F1F1]">
        <HeroSection />
        <Latest />
      </main>
      <main className="-mt-[65px]">
      <Footer />
      </main>
    </>
  );
}
