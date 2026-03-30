import Navbar from "@/component/Navbar";
import HeroSection from "./HeroSection";
import Process from "./Process";
import Types from "./Types";
import Footer from "@/component/Footer";
import SeoHero from "./SeoHero";
import SeoServices from "./SeoServices";
import SeoValueSection from "./SeoValue";
import WhyChooseAndProcess from "./WhyChoose";
import SeoDeliverables from "./SeoDeliverable";
import FreeAudit from "./FreeAudit";
import SeoFaq from "./SeoFaq";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "seo";

//   // fetch post information
//   const post = await getSeo(name);
//   // console.log("post", post[0].metaTitle);

//   return {
//     title: post[0]?.metaTitle,
//     description: post[0]?.metaDescription,
//     keywords:"Best SEO Company in Kochi",
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
  const title = "SEO Company in Kochi | Accolades Integrated";

  const description =
    "Accolades Integrated — trusted SEO Company in Kochi. Technical SEO, on-page, local SEO, e-commerce SEO, and link building for steady organic growth.";

  const url =
    "https://www.accoladesintegrated.com/services/digital-marketing/seo"; // 👈 adjust if route differs

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

export default function page() {
  return (
    <>
      {/* <Navbar />
      <main className="bg-[#F1F1F1]">
        <HeroSection />
        <Process />
        <Types />
      </main>
      <main className="-mt-[65px]">
        <Footer />
      </main> */}
      <SeoHero />
      <SeoServices />
      <SeoValueSection />
      <WhyChooseAndProcess />
      <SeoDeliverables />
      <FreeAudit />
      <SeoFaq />
      {/* <Footer /> */}
      <main className="mt-[20px]">
        <UpdatedFooter />
      </main>
    </>
  );
}
