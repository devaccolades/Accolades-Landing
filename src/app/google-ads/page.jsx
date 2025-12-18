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
import wat from  "../../../public/g-ads-landing/icons//whatsapp_icon.png"

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
      <a href="tel:+919048100233" className="fixed bottom-6 right-6 z-50">
        <Image
          src={img}
          width={56}
          height={56}
          alt="call us"
          className="w-14 h-14"
        />
      </a>
       <a
          href="https://wa.me/919048100233" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-26 right-6 z-50"
        >
          <Image
            src={wat}
            width={56}
            height={56}
            alt="Chat on WhatsApp"
            className="w-14 h-14"
          />
        </a>
    </>
  );
}
