import React from "react";
import HeroSection from "./HeroSection";
import Roles from "./Roles";
import Benefits from "./Benefits";
import Integration from "./Integration";
import Process from "./Process";
import Value from "./Value";
import Channels from "./Channels";
import Footer from "@/Layout/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  const title = "Why Digital Creative Web | Accolades Integrated";

  const description =
    "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.";

  const url =
    "https://www.accoladesintegrated.com/why-digital-creative-web"; // 👈 adjust if route differs

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function page() {
  return (
    <>
      <HeroSection />
      <Roles />
      <Benefits />
      <Integration />
      <Process />
      <Value />
      <Channels />
      {/* <Footer /> */}
      <UpdatedFooter />
    </>
  );
}
