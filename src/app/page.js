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
// import { BASE_URL, getSeo } from "./Server";
import WebProjects from "./(home)/WebProjects";
import FAQ from "./(home)/FAQ";
import ClientLogo from "./(home)/ClientLogo";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "home";

// fetch post information
// const post = await getSeo(name);
// console.log("post", post[0].ogTitle);

// return {
//   title: post[0]?.metaTitle,
//   description: post[0]?.metaDescription,
//   openGraph: {
//     title: post[0]?.ogTitle,
//     description: post[0]?.ogDescription,
//     images: [
//       BASE_URL + post[0]?.ogImage?.formats?.medium?.url, // Make sure this is a full URL to the image
//     ],
//   },
// };
// }

export async function generateMetadata() {
  return {
    title: "Leading Branding Agency in Kochi | Accolades Integrated",
    description:
      "Build a brand that stands out with Accolades Integrated, the best branding company in Kochi offering strategy, design, and digital identity solutions.",

    openGraph: {
      title: "Leading Branding Agency in Kochi | Accolades Integrated",
      description:
        "Build a brand that stands out with Accolades Integrated, the best branding company in Kochi offering strategy, design, and digital identity solutions.",
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
