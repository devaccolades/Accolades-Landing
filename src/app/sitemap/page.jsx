import React from 'react'
import UpdatedFooter from "@/Layout/UpdatedFooter";
import Sitemap from './SitemapHero';

export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com/sitemap"; 

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
    <div>
        <Sitemap />
      <UpdatedFooter />
    </div>
  )
}

export default page
