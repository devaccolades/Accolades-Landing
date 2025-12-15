import Navbar from "@/component/Navbar";
import React from "react";
import DigitalHero from "./DigitalHero";
import WhatWeDo from "./WhatWeDo";
import Tools from "./Tools";
import WhyChoose from "./WhyChoose";
import OurClients from "./OurClients";
import Footer from "@/component/Footer";
import DigitalFaq from "./DigitalFaq";
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

function page() {
  return (
    <div>
      <main className="bg-[#F1F1F1] ">
        {/* <Navbar /> */}
        <DigitalHero />
        <WhatWeDo />
        <OurClients />
        <WhyChoose />
        <Tools />
        <DigitalFaq />
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </div>
  );
}

export default page;
