import FeaturedWork from "./FeatureWork";
import HeroSection from "./HeroSection";
import Platforms from "./Platforms";
import Services from "./Services";

export default function page() {
  return (
    <>
    <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
      <HeroSection />
      <Services />
      <FeaturedWork />
      <Platforms />
    </div>
    </>
  )
}
