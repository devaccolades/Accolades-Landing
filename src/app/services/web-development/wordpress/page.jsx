import Navbar from "@/component/Navbar";
import React from "react";
import WordpressHero from "./Word-Hero";
import OfferAndFeatures from "./OfferAndFeatures";
import WordProjects from "./WordProjects";
import Footer from "@/component/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  const title = "WordPress Web Development Services";

  const description =
    "Accolades Integrated offers custom WordPress web development services focused on speed, security, scalability, and SEO-friendly design for growing brands.";

  const url =
    "https://www.accoladesintegrated.com/services/web-development/wordpress"; // 👈 adjust if your route differs

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

function page() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-[#F1F1F1]">
        <WordpressHero />
        <OfferAndFeatures />
        <WordProjects />
      </div>
      <div className="-mt-[65px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </div>
    </div>
  );
}

export default page;
