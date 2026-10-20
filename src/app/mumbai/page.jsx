import HeroSection from "./HeroSection";
import ConnectedSystem from "./ConnectedSystem";
import WhyChooseUs from "./WhyChooseUs";
import BrandsAndOffice from "./BrandsAndOffice";
import FaqSection from "./FaqSection";
import ProjectEnquiry from "./ProjectEnquiry";

export const metadata = {
  title: "Digital Marketing Company in Mumbai | Accolades Integrated",
  description:
    "Digital marketing and software development in Mumbai. Meet Accolades Integrated, based in Malad West since January 2023.",
};

export default function MumbaiPage() {
  return <main className="font-mont"><HeroSection /><ConnectedSystem /><WhyChooseUs /><BrandsAndOffice /><FaqSection /><ProjectEnquiry /></main>;
}
