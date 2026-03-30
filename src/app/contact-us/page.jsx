import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import Herosection from "./Herosection";
import OurPresence from "./OurPresence";
import LocationDetailCard from "./LocationDetailCard";
import ContactForm from "./ContactForm";

import circleT from "../../../public/services/topC.webp";
import circleTL from "../../../public/services/circletTL.webp";
import centerR from "../../../public/services/centerR.webp";
// import centerL from "../../../public/services/centerL.webp";
import bottomGrade from "../../../public/services/bottomSide.webp";
import Image from "next/image";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from '../Server'
export const dynamic = "force-dynamic";
import { getSeoByName } from "@/lib/services/djangoBackend";

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com";

  try {
    const seo = await getSeoByName("contact-us"); // ✅ match Django `page`

    if (seo && Object.keys(seo).length > 0) {
      return {
        title: seo.meta_title || "Contact Accolades Integrated",

        description:
          seo.meta_description ||
          "Get in touch with Accolades Integrated to discuss your digital marketing, branding, web development, or creative project requirements today.",

        alternates: {
          canonical: `${baseUrl}/contact-us`,
        },

        openGraph: {
          title: seo.og_title || seo.meta_title,
          description: seo.og_description || seo.meta_description,
          url: `${baseUrl}/contact-us`,
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
    console.log("SEO fetch failed (contact):", error.message);
  }

  // ✅ fallback (your current static one)
  return {
    title: "Contact Accolades Integrated",
    description:
      "Get in touch with Accolades Integrated to discuss your digital marketing, branding, web development, or creative project requirements today.",

    alternates: {
      canonical: `${baseUrl}/contact-us`,
    },

    openGraph: {
      title: "Contact Accolades Integrated",
      description:
        "Get in touch with Accolades Integrated to discuss your digital marketing, branding, web development, or creative project requirements today.",
      url: `${baseUrl}/contact-us`,
      type: "website",
    },
  };
}

const page = () => {
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
          />*/}
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
      {/* <div className="bg-gradient-to-br from-[#ecf3f6] to-[#f1f5f5]"> */}
      <Herosection />
      <OurPresence />
      <LocationDetailCard />
      <ContactForm />
      {/* </div> */}
      {/* <Footer /> */}
      <div className="relative">
        <UpdatedFooter />
      </div>
    </section>
  );
};

export default page;
