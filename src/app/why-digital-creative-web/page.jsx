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
  return {
    title: "Why Digital Creative Web | Accolades Integrated ",
    description:
      "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow. ",

    openGraph: {
      title: "Why Digital Creative Web | Accolades Integrated ",
      description:
        "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
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
