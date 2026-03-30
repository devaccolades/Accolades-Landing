import Navbar from "@/component/Navbar";
import React from "react";
import Tools from "./Tools";

import Footer from "@/component/Footer";
import DigitalFaq from "./DigitalFaq";
import HeroSection from "./HeroSection";
import DigitalMarketingServices from "./DigitalMarketingServices";
import WhyChooseSection from "./WhychooseSection";
import DigitalCTA from "./DigitalCTA";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "digital-marketing";

//   // fetch post information
//   const post = await getSeo(name);
//   // console.log("post", post[0].metaTitle);

//   return {
//     title: post[0]?.metaTitle,
//     description: post[0]?.metaDescription,
//      keywords:"Best  digtal marketing agency in Kochi",
//     openGraph: {
//       title: post[0]?.ogTitle,
//       description: post[0]?.ogDescription,
//       images: [
//         BASE_URL + post[0]?.ogImage?.formats?.medium?.url, // Make sure this is a full URL to the image
//       ],
//     },
//   };
// }

export async function generateMetadata() {
  return {
    title: "Digital Marketing Agency in Kochi | Accolades Integrated",
    description:
      "End to end digital marketing agency in Kochi for reliable Performance marketing, SEO, SEM, social media, and content services for business growth.",

    alternates: {
      canonical: "https://www.accoladesintegrated.com/services/digital-marketing", // 👈 adjust if route differs
    },

    openGraph: {
      title: "Digital Marketing Agency in Kochi | Accolades Integrated",
      description:
        "End to end digital marketing agency in Kochi for reliable Performance marketing, SEO, SEM, social media, and content services for business growth.",
      url: "https://www.accoladesintegrated.com/services/digital-marketing",
    },
  };
}

function page() {
  return (
    <div>
      <HeroSection />
      <DigitalMarketingServices />
      <WhyChooseSection />
      <DigitalCTA />
      {/* <DigitalHero />
        <WhatWeDo />
        <OurClients />
        <WhyChoose />
        <Tools /> */}

      <DigitalFaq />

      {/* <Footer /> */}
      <main className="mt-[30px] ">
        <UpdatedFooter />
      </main>
    </div>
  );
}

export default page;
