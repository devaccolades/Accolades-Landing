import Navbar from "@/component/Navbar";
import HeroSection from "./HeroSection";
import Process from "./Process";
import Types from "./Types";
import Footer from "@/component/Footer";
import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const name = "seo";

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

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F1F1F1]">
        <HeroSection />
        <Process />
        <Types />
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
}
