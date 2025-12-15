import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Details from "./Details";
// import { BASE_URL, getSeo } from "@/app/Server";
import SocialMediaHero from "./SmmHero";

import WhyInvestSMM from "./WhyInvestSMM";
import MetaMarketing from "./MetaMarketing";
import LinkedinMarketing from "./LinkedInMarketing";
import YoutubeMarketing from "./YoutubeMarketing";
import AccoladesSection from "./AccoladesSection";
import SmmFaq from "./SmmFaq";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "smm";

  
//   const post = await getSeo(name);

//   return {
//     title: post[0]?.metaTitle,
//     description: post[0]?.metaDescription,
//     keywords:"Social Media Marketing Company in Kochi",
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
    title: "Social Media Marketing Kochi – Facebook, LinkedIn & YouTube",
    description: "Accolades Integrated manage your Social Media Marketing in Kochi – Facebook &  Instagram, LinkedIn campaigns to grow your brand awareness and drive leads.",

    openGraph: {
      title: "Social Media Marketing Kochi – Facebook, LinkedIn & YouTube",
      description: "Accolades Integrated manage your Social Media Marketing in Kochi – Facebook &  Instagram, LinkedIn campaigns to grow your brand awareness and drive leads.",
     
    },
  };
}

const page = () => {
  return (
    <>
      {/* <main
        className="bg-[#F1F1F1] pb-40"
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
        }}
      >
    
        <HeroSection />
        
        <Details />
      </main>
      <main className="-mt-[80px]">
        <Footer />
      </main> */}
      <SocialMediaHero />
      <WhyInvestSMM />
      <MetaMarketing />
      <LinkedinMarketing />
      <YoutubeMarketing />
      <AccoladesSection />
     <SmmFaq />
     <Footer />
    </>
  );
};

export default page;
