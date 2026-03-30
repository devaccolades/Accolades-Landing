import React from "react";
import HeroSection from "./(home)/HeroSection";
import Accolades from "./(home)/Accolades";
import OurServices from "./(home)/OurServices";
import Count from "./(home)/Count";
import Projects from "./(home)/Projects";
import ProjectSlider from "./(home)/ProjectSlider";
import OurClients from "./(home)/OurClients";
import ClientSlider from "./(home)/ClientSlider";
import Testimonials from "./(home)/Testimonials";
import ReachUs from "./(home)/ReachUs";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { getSeoByName } from "@/lib/services/djangoBackend";
import WebProjects from "./(home)/WebProjects";
import FAQ from "./(home)/FAQ";
import ClientLogo from "./(home)/ClientLogo";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const dynamic = "force-dynamic";


export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com/";

  try {
    const seo = await getSeoByName("home");

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

export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Accolades />
      <OurServices />
      <Count />
      <Projects />
      <ProjectSlider />
      <OurClients />
      <ClientSlider />

      <Testimonials />
      <WebProjects />
      <FAQ />
      <ReachUs />

      {/* <Footer /> */}
      <UpdatedFooter />
    </>
  );
}
