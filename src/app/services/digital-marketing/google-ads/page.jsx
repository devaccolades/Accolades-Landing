import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import { BASE_URL, getSeo } from "../Server";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const name = "google-ads";

  // fetch post information
  const post = await getSeo(name);
  console.log("post", post[0].metaTitle);

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
      <main className="bg-[#F1F1F1]">
        <Navbar />
        <HeroSection />
        <Cards />
      </main>
      <main className="-mt-[80px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
