import Footer from "@/component/Footer";
import HeroSection from "./Herosection";
import Overview from "./Overview";
import WhatWeBring from "./WhatWeBring";
import Knowledge from "./Knowledge";
import Process from "./Process";
import EcommerceFaq from "../services/web-development/ecommerce/EcommerceFaq";
import Callback from "./Callback";
import UpdatedFooter from "@/Layout/UpdatedFooter";

const faqData = [
  {
    q: "Do you work in my sector?",
    a: "Likely. We adapt playbooks fast to new markets. Our experience spans e-commerce, healthcare, education, real estate, hospitality, and professional services. We quickly customize proven strategies to fit your industry's unique needs and local Kochi market dynamics.",
  },
];

export async function generateMetadata() {
  const title = "The Knowledge Factor | Accolades Integrated";

  const description =
    "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.";

  const url =
    "https://www.accoladesintegrated.com/the-knowledge-factor"; // 👈 adjust if route differs

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function page() {
  return (
    <>
      <div className="font-mont">
        <HeroSection />
        <Overview />
        <div className="bg-[#F1F8F8]">
          <WhatWeBring />
          <Knowledge />
        </div>
        <Process />
        <EcommerceFaq
          faqData={faqData}
          title={"Frequently Asked Questions"}
          subtitle={"Quick answers about our experience and approach"}
        />
        <Callback />
        <div className="-mt-[10px]">
          {/* <Footer /> */}
          <UpdatedFooter />
        </div>
      </div>
    </>
  );
}
