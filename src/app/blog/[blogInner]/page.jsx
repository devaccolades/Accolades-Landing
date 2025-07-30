import Navbar from "@/component/Navbar";
import BlogPost from "./BlogPost";
import HeroSection from "./HeroSection";
import Footer from "@/component/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F1F1F1]">
      <HeroSection />
      <BlogPost />
      </main>
      <main className="-mt-[65px]">
      <Footer />
      </main>
    </>
  )
}
