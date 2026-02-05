import React from "react";
import CallToAction from "./CallToAction";
import HeroSection from "./HeroSection";
import CaseStudy from "./CaseStudy";
import Footer from "@/component/Footer";
import { getCaseStudiesData } from "@/lib/services/djangoBackend";

export default async function Page() {
  const data = await getCaseStudiesData();

  return (
    <>
      <HeroSection />
      <CaseStudy data={data} />
      <CallToAction />
      <Footer />
    </>
  );
}
