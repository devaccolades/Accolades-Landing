import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import WebHero from "./WebHero";
import WebsiteFeatures from "./WebsiteFeatures";
import WebsiteProjects from "./WebsiteProjects";
// import { BASE_URL, getSeo } from "@/app/Server";
import WebSeo from "./WebSeo";
import WebFaq from "./WebFaq";

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

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-[#F1F1F1]">
        <WebHero />
        <WebsiteFeatures />
        {/* <WebSeo />
        <WebFaq /> */}
        <WebsiteProjects />
        
      </div>
      <div className="-mt-[65px]">
        <Footer />
      </div>
    </>
  );
};

export default page;
