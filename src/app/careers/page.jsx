import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import circleT from "../../../public/services/topC.webp";
import circleTL from "../../../public/services/circletTL.webp";
import centerR from "../../../public/services/centerR.webp";
// import centerL from "../../../public/services/centerL.webp";
import bottomGrade from "../../../public/services/bottomSide.webp";
import Image from "next/image";
import Discover from "./Discover";
import FormSection from "./FormSection";
import { BASE_URL, getSeo } from "../Server";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const dynamic = "force-dynamic";


import { getSeoByName } from "@/lib/services/djangoBackend";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com/careers";

  try {
    const seo = await getSeoByName("careers");

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



function page() {
  return (
    <section className="relative">
      <Image
        src={circleT}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-0 right-0 h-96 w-auto z-0"
      />
      <Image
        src={circleTL}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-[900px] md:top-[900px] lg:top-[200px] left-0 h-[1000px] w-auto z-0"
      />
      {/* <Image
        src={centerL}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-10 right-0 h-full w-auto z-0"
      /> */}
      <Image
        src={centerR}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-0 left-0 h-[500px] w-auto z-0"
      />
      <Image
        src={bottomGrade}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute bottom-0 left-0 h-full w-full  z-0"
      />
      {/* <Navbar /> */}
      <HeroSection />
      {/* <Discover /> */}
      <FormSection />
      {/* <Footer /> */}
      <UpdatedFooter />
    </section>
  );
}

export default page;
