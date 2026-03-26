import React from "react";
import HeroSection from "./HeroSection";
import HowWeWork from "./HowWeWork";
import HowWeUseAI from "./HowWeUseAI";
import BenefitsForClients from "./BenefitsOfClients";
import OurProcess from "./OurProcess";
import EthicsAndControl from "./EthicsAndControl";
import AiCtaSection from "./AiCtaSection";
import Footer from "@/component/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com"; // 🔥 replace with real domain

  return {
    title: "AI By Accolades Integrated",
    description:
      "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",

    alternates: {
      canonical: `${baseUrl}/ai-by-accolades-integrated`, // ✅ adjust path if different
    },

    openGraph: {
      title: "AI By Accolades Integrated",
      description:
        "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
      url: `${baseUrl}/ai`, // ✅ good practice
      type: "website",
    },
  };
}
function page() {
  return (
    <div>
      <HeroSection />
      <HowWeWork />
      <HowWeUseAI />
      <BenefitsForClients />
      <OurProcess />
      <EthicsAndControl />
      <AiCtaSection />
      <div className="-mt-[88px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </div>
    </div>
  );
}

export default page;
