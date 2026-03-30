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

import { getSeoByName } from "@/lib/services/djangoBackend";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com";

  try {
    const seo = await getSeoByName("ai-by-accolades-integrated"); 
    // ⚠️ change this if your DB uses "ai-by-accolades-integrated"

    if (seo && Object.keys(seo).length > 0) {
      return {
        title: seo.meta_title || "AI By Accolades Integrated",

        description:
          seo.meta_description ||
          "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",

        alternates: {
          canonical: `${baseUrl}/ai-by-accolades-integrated`,
        },

        openGraph: {
          title: seo.og_title || seo.meta_title,
          description: seo.og_description || seo.meta_description,
          url: `${baseUrl}/ai-by-accolades-integrated`,
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
    console.log("SEO fetch failed (AI page):", error.message);
  }

  // ✅ fallback
  return {
    title: "AI By Accolades Integrated",
    description:
      "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",

    alternates: {
      canonical: `${baseUrl}/ai-by-accolades-integrated`,
    },

    openGraph: {
      title: "AI By Accolades Integrated",
      description:
        "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
      url: `${baseUrl}/ai-by-accolades-integrated`,
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
