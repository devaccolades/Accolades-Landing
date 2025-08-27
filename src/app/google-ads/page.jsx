import Footer from "@/component/google-ads/Footer";
import Header from "@/component/google-ads/Header1";
import HeroSection from "@/component/google-ads/Hero";
import NowAt from "@/component/google-ads/NowAt";
import OurClients from "@/component/google-ads/OurClients";
import Services from "@/component/google-ads/Services";
import TestimonialsSection from "@/component/google-ads/TestimonialsSection";
import WhyChooseUs from "@/component/google-ads/WhyChoose";


export default function Home() {
  return (
    <>
    <Header />
      <HeroSection />
      <Services />
      <OurClients />
    <WhyChooseUs/>
    <TestimonialsSection />
     <NowAt />
     <Footer />
    </>
  );
}

