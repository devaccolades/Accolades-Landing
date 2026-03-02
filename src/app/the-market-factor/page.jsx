import React from "react";
import HeroSection from "./HeroSection";
import OverviewSection from "./Overview";
import LocalInsightSection from "./LocalInsight";
import ScalableApproachSection from "./ScalableApproach";
import RiskControlSection from "./RiskControl";
import ExampleOutcomesSection from "./ExampleOutcomes";
import CtaSection from "./CTASection";
import Footer from "@/component/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  return {
    title: " The Market Factor | Accolades Integrated ",
    description:
      "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow. ",

    openGraph: {
      title: "The Market Factor |  Accolades Integrated ",
      description:
        "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
    },
  };
}

function page() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <LocalInsightSection />
      <ScalableApproachSection />
      <RiskControlSection />
      <ExampleOutcomesSection />
      <CtaSection />
      <div className="-mt-[88px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </div>
    </div>
  );
}

export default page;
