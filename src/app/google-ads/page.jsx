import Footer from "@/component/google-ads/Footer";
import Header from "@/component/google-ads/Header1";
import HeroSection from "@/component/google-ads/Hero";
import NowAt from "@/component/google-ads/NowAt";
import OurClients from "@/component/google-ads/OurClients";
import Services from "@/component/google-ads/Services";
import TestimonialsSection from "@/component/google-ads/TestimonialsSection";
import WhyChooseUs from "@/component/google-ads/WhyChoose";
import Image from "next/image";
import img from "../../../public/telephone.png";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <OurClients />
      <WhyChooseUs />
      <TestimonialsSection />
      <NowAt />
      <Footer />
      <a href="tel:+919048689977" className="fixed bottom-6 right-6 z-50">
        <Image
          src={img}
          width={56}
          height={56}
          alt="call us"
          className="w-14 h-14"
        />
      </a>
    </>
  );
}
