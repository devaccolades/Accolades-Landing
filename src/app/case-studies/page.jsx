import React from "react";
import CallToAction from "./CallToAction";
import HeroSection from "./HeroSection";
import CaseStudy from "./CaseStudy";
import Footer from "@/component/Footer";
import { getCaseStudiesData } from "@/lib/services/djangoBackend";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com/case-studies"; 

  return {
    title: "Leading Branding Agency in Kochi | Accolades Integrated",
    description:
      "Build a brand that stands out with Accolades Integrated, the best branding company in Kochi offering strategy, design, and digital identity solutions.",

    alternates: {
      canonical: baseUrl, 
    },

    openGraph: {
      title: "Case Study | Accolades Integrated",
      description:
        "Build a brand that stands out with Accolades Integrated, the best branding company in Kochi offering strategy, design, and digital identity solutions.",
      url: baseUrl, 
      type: "website",
    },


  };
}


export default async function Page() {
  const data = await getCaseStudiesData();

  return (
    <>
      <HeroSection />
      <CaseStudy data={data} />
      <CallToAction />
      {/* <Footer /> */}
      <UpdatedFooter />
    </>
  );
}
