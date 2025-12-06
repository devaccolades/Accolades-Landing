import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Approach from "./Approach";
import Featured from "./Featured";
import WhyChoose from "./WhyChoose";
import Tools from "./Tools";
import CreativeFaq from "./CreativeFaq";
import { BASE_URL, getSeo } from "@/app/Server";

export async function generateMetadata() {
  const name = "creative";

  // fetch post information
  const post = await getSeo(name);
  // console.log("post", post[0].metaTitle);

  return {
    title: post[0]?.metaTitle,
    description: post[0]?.metaDescription,
    openGraph: {
      title: post[0]?.ogTitle,
      description: post[0]?.ogDescription,
      images: [
        BASE_URL + post[0]?.ogImage?.formats?.medium?.url, // Make sure this is a full URL to the image
      ],
    },
  };
}
const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1] ">
        {/* <Navbar /> */}
        <HeroSection />
        <WhatWeDo />
        <Approach />
        <Featured />
        <WhyChoose />
        <Tools />
        <CreativeFaq />
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
