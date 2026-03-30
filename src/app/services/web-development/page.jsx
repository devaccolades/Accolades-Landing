import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import WebHero from "./WebHero";
import WebsiteFeatures from "./WebsiteFeatures";
import WebsiteProjects from "./WebsiteProjects";
// import { BASE_URL, getSeo } from "@/app/Server";
import WebSeo from "./WebSeo";
import WebFaq from "./WebFaq";
import WebDevHero from "./DevHero";
import WebDevServices from "./WebDevServices";
import Technologies from "./Technologies";
import WhatWeBuild from "./WhatWeBuild";
import WebWhyChoose from "./WebWhyChoose";
import ProcessAndCaseFit from "./ProcessAndCaseFit";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "web-development";

//   // fetch post information
//   const post = await getSeo(name);

//   return {
//     title: post[0]?.metaTitle,
//     description: post[0]?.metaDescription,
//      keywords:"Web Development Company in Kochi ",
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
  const title =
    "Web Development Company in Kochi | Accolades Integrated";

  const description =
    "Trusted best Web Development Company in Kochi. We build React, Next.js, and Python websites, WordPress sites, and e-commerce stores. Request a free audit.";

  const url =
    "https://www.accoladesintegrated.com/services/web-development"; // 👈 adjust if your route differs

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

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="bg-[#F1F1F1]">
        <WebHero />
        <WebsiteFeatures />
        <WebsiteProjects />      
      </div>
      <div className="-mt-[65px]">
        <Footer />
      </div> */}
      <WebDevHero />
      <WebDevServices />
      <Technologies />
      <WhatWeBuild />
      <WebWhyChoose />
      <ProcessAndCaseFit />
      <WebFaq />
      <WebsiteProjects />
      {/* <Footer /> */}
      <UpdatedFooter />
    </>
  );
};

export default page;
