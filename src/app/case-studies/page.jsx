import React from "react";
import CallToAction from "./CallToAction";
import HeroSection from "./HeroSection";
import CaseStudy from "./CaseStudy";
import Footer from "@/component/Footer";
import { getCaseStudiesData } from "@/lib/services/djangoBackend";
import UpdatedFooter from "@/Layout/UpdatedFooter";


import { getSeoByName } from "@/lib/services/djangoBackend";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com/case-studies"; 

  try {
    const seo = await getSeoByName("case-studies");

    if (seo && Object.keys(seo).length > 0) {
      return {
        title:
          seo.meta_title ||
          "Leading Branding Agency in Kochi | Accolades Integrated",

        description:
          seo.meta_description ||
          "Build a brand that stands out with Accolades Integrated, the best branding company in Kochi offering strategy, design, and digital identity solutions.",

        alternates: {
          canonical: baseUrl,
        },

        openGraph: {
          title: seo.og_title || seo.meta_title,
          description: seo.og_description || seo.meta_description,
          url: baseUrl,
          type: "website",
          images: seo.og_image
            ? [
                {
                  url: seo.og_image,
                  width: 1200,
                  height: 630,
                },
              ]
            : [],
        },
      };
    }
  } catch (error) {
    console.log("SEO fetch failed:", error.message);
  }

  // ✅ fallback
  return {
    title: "Leading Branding Agency in Kochi | Accolades Integrated",
    description:
      "Build a brand that stands out with Accolades Integrated, the best branding company in Kochi offering strategy, design, and digital identity solutions.",
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: "Leading Branding Agency in Kochi | Accolades Integrated",
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
