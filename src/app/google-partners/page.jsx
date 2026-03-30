import React from "react";
import HeroSection from "./HeroSection";
import Description from "./Description";
import GooglePartnersProgram from "./GooglePrograms";
import Benefits from "./Benefits";
import Advantages from "./Advantages";
import WhyChoose from "./WhyChooseGP";
import Footer from "@/component/Footer";
import GooglePartnerFaq from "./GPFaq";
import UpdatedFooter from "@/Layout/UpdatedFooter";

import { getSeoByName } from "@/lib/services/djangoBackend";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com";

  try {
    const seo = await getSeoByName("google-partners"); // ✅ match DB slug

    if (seo && Object.keys(seo).length > 0) {
      return {
        title:
          seo.meta_title ||
          "Google Partners Kochi – Benefits | Accolades Integrated",

        description:
          seo.meta_description ||
          "Accolades Integrated is a certified Google Partners agency in Kochi. Learn how our Google Partner status gives your brand better Google Ads results.",

        alternates: {
          canonical: `${baseUrl}/google-partners`,
        },

        openGraph: {
          title: seo.og_title || seo.meta_title,
          description: seo.og_description || seo.meta_description,
          url: `${baseUrl}/google-partners`,
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
    console.log("SEO fetch failed (google-partners):", error.message);
  }

  // ✅ fallback
  return {
    title: "Google Partners Kochi – Benefits | Accolades Integrated",
    description:
      "Accolades Integrated is a certified Google Partners agency in Kochi. Learn how our Google Partner status gives your brand better Google Ads results.",

    alternates: {
      canonical: `${baseUrl}/google-partners`,
    },

    openGraph: {
      title: "Google Partners Kochi – Benefits | Accolades Integrated",
      description:
        "Accolades Integrated is a certified Google Partners agency in Kochi. Learn how our Google Partner status gives your brand better Google Ads results.",
      url: `${baseUrl}/google-partners`,
      type: "website",
    },
  };
} 

function page() {
  return (
    <div>
      <HeroSection />
      <Description />
      <GooglePartnersProgram />
      <Benefits />
      <Advantages />
      <WhyChoose />
      <GooglePartnerFaq />
      {/* <Footer /> */}
      <UpdatedFooter />
    </div>
  );
}

export default page;
