import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "google-ads";

//   // fetch post information
//   const post = await getSeo(name);
//   // console.log("post", post[0].metaTitle);

//   return {
//     title: post[0]?.metaTitle,
//     description: post[0]?.metaDescription,
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
  const title = "Search Engine Marketing Services (SEM)";

  const description =
    "Drive instant traffic and qualified leads with result-oriented search engine marketing services, including Google Ads and PPC campaign optimization.";

  const url =
    "https://www.accoladesintegrated.com/services/digital-marketing/search-engine-marketing"; 

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

  
  };
}

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1]">
        {/* <Navbar /> */}
        <HeroSection />
        <Cards />
      </main>
      <main className="-mt-[80px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
};

export default page;
