import FeaturedWork from "./FeaturedWork";
import HeroSection from "./HeroSection";
import Tech from "./Equipment";
import VideoTypesSection from "./VideoTypesSection";

export default function page() {
  return (
    <>
    <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
      <HeroSection />
      <VideoTypesSection />
      <FeaturedWork />
      <Tech />
    </div>
    </>
  )
}
