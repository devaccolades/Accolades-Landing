import HeroSection from "./HeroSection";
import Process from "./Process";
import Types from "./Types";

export default function page() {
  return (
    <>
    <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
      <HeroSection />
      <Process />
      <Types />
    </div>
    </>
  )
}
