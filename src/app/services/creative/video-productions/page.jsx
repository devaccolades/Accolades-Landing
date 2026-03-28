import FeaturedWork from "./FeaturedWork";
import HeroSection from "./HeroSection";
import Tech from "./Equipment";
import VideoTypesSection from "./VideoTypesSection";
import Process from "./Process";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";



export async function generateMetadata() {
  return {
    title: "Creative Video Production Services",
     description:
        "Bring your brand story to life with professional video production services including brand films, ads, promos, and social media video content.",
    alternates: {
      canonical: "https://www.accoladesintegrated.com/services/creative/video-productions", 
    },

    openGraph: {
      title: "Creative Video Production Services",
       description:
        "Bring your brand story to life with professional video production services including brand films, ads, promos, and social media video content.",
      url: "https://www.accoladesintegrated.com/services/creative/video-productions",
    },
  };
}

export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-[#F1F1F1]">
        <HeroSection />
        <VideoTypesSection />
        <FeaturedWork />
        <Process />
        <Tech />
      </main>
      <main className="-mt-[85px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
}
