import HeroSection from "./HeroSection";
import DigitalMarketing from "./DigitalMarketing";
import SoftwareDevelopment from "./SoftwareDevelopment";
import BeyondTheBrief from "./BeyondTheBrief";
import ConnectedSystem from "./ConnectedSystem";
import WhyChooseUs from "./WhyChooseUs";
import HowWeWork from "./HowWeWork";
import BrandsAndOffice from "./BrandsAndOffice";
import FaqSection from "./FaqSection";
import ProjectEnquiry from "./ProjectEnquiry";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import TextReveal from "./TextReveal";

export const metadata = {
  title: "Digital Marketing Company in Mumbai | Accolades Integrated",
  description:
    "Digital marketing and software development in Mumbai. Meet Accolades Integrated, based in Malad West since January 2023.",
};

export default function MumbaiPage() {
  return <main className="font-mont">
      <Header />
    
      <div className="mumbai-page"><HeroSection /><DigitalMarketing /><SoftwareDevelopment /><ConnectedSystem /><WhyChooseUs /><BeyondTheBrief /><HowWeWork /><BrandsAndOffice /><FaqSection /><ProjectEnquiry /></div>
      <Footer />
      <TextReveal />
      </main>;
}
