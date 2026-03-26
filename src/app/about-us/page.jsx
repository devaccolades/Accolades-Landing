import Footer from "@/component/Footer";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Navbar from "@/component/Navbar";
import VideoTestimonials from "./VideoTestimonials";
import DirectorsSection from "./Directors";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from "../Server";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "about-us";

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
  const baseUrl = "https://www.accoladesintegrated.com"; // 🔥 replace with your real domain

  return {
    title: "About | Accolades Integrated",
    description:
      "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",

    alternates: {
      canonical: `${baseUrl}/about-us`, 
    },

    openGraph: {
      title: "About | Accolades Integrated",
      description:
        "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
      url: `${baseUrl}/about`, // ✅ good practice
      type: "website",
    },
  };
}

export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-[#F1F1F1]">
        <HeroSection />
        <DirectorsSection />
        <VideoTestimonials />
        <Portfolio />
      </main>
      <main className="-mt-[90px] ">
        {/* <Footer /> */}
        <UpdatedFooter />;
      </main>
    </>
  );
}
