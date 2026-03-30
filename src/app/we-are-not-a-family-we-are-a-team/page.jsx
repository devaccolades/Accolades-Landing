import React from "react";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Clients from "./Clients";
import Workflow from "./Workflow";
import Culture from "./Culture";
import CallToAction from "./CallToAction";
import Footer from "@/component/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  const title =
    "We are not a family, we are a team | Accolades Integrated";

  const description =
    "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.";

  const url =
    "https://www.accoladesintegrated.com/we-are-not-a-family-we-are-a-team"; // 👈 adjust if route differs

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
const page = () => {
  return (
    <>
      <HeroSection />
      <Overview />
      <Clients />
      <Workflow />
      <Culture />
      <CallToAction />
      {/* <Footer /> */}
      <UpdatedFooter />
    </>
  );
};

export default page;
