import Navbar from "@/component/Navbar";
import HeroSection from "./HeroSection";
import Process from "./Process";
import Types from "./Types";
import Footer from "@/component/Footer";

export default function page() {
  return (
    <>
    <Navbar />
    <main className="bg-[#F1F1F1]">
      <HeroSection />
      <Process />
      <Types />
    </main>
    <main className="-mt-[65px]">
    <Footer />
    </main>
    </>
  )
}
