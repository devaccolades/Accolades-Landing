import React from "react";
import HeroSection from "./HeroSection";
import Digital from "./Digital";
import Creative from "./Creative";
import Web from "./Web";
import circleT from "../../../public/services/topC.webp";
import circleTL from "../../../public/services/circletTL.webp";
import centerR from "../../../public/services/centerR.webp";
import centerL from "../../../public/services/centerL.png";
import bottomGrade from "../../../public/services/bottomSide.webp";
import Image from "next/image";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
// import { BASE_URL, getSeo } from "@/app/Server";
import SeoFoot from "./SeoFoot";
import ServicesFaq from "./ServicesFaq";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "services";


//   const post = await getSeo(name);
  

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


function page() {
  return (
    <section className="relative flex flex-col">
      {/* <Navbar /> */}
      <Image
        src={circleT}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-0 right-0 h-96 w-auto z-0"
      />
      <Image
        src={circleTL}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-0 left-0 h-[1000px] w-auto z-0"
      />
      <Image
        src={centerL}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-10 right-0 h-full w-auto z-0"
      />
      <Image
        src={centerR}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-10 left-0 h-full w-auto z-0"
      />
      <Image
        src={bottomGrade}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute bottom-0 left-0 h-[100vh] w-full  z-0"
      />
      <HeroSection />
      <Digital />
      <Creative />
      <Web />
      <SeoFoot />
      <ServicesFaq />
      <div className="-mb-[37px]">
        <Footer />
      </div>
    </section>
  );
}

export default page;
