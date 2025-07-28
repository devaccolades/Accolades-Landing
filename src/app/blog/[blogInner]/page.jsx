import Navbar from "@/component/Navbar";
import BlogPost from "./BlogPost";
import HeroSection from "./HeroSection";
import Footer from "@/component/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BlogPost />
      <Footer />
    </>
  )
}
