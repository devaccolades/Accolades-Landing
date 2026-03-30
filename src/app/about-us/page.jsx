import Footer from "@/component/Footer";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Navbar from "@/component/Navbar";
import VideoTestimonials from "./VideoTestimonials";
import DirectorsSection from "./Directors";
import UpdatedFooter from "@/Layout/UpdatedFooter";
import { getSeoByName } from "@/lib/services/djangoBackend";

export const dynamic = "force-dynamic";



export async function generateMetadata() {
  const baseUrl = "https://www.accoladesintegrated.com";

  try {
    const seo = await getSeoByName("about"); // ⚠️ make sure this matches Django `page`

    if (seo && Object.keys(seo).length > 0) {
      return {
        title: seo.meta_title || "About | Accolades Integrated",

        description:
          seo.meta_description ||
          "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",

        alternates: {
          canonical: `${baseUrl}/about-us`,
        },

        openGraph: {
          title: seo.og_title || seo.meta_title,
          description: seo.og_description || seo.meta_description,
          url: `${baseUrl}/about-us`, // ⚠️ keep consistent (you had `/about`)
          type: "website",
          images: seo.og_image
            ? [
                {
                  url: seo.og_image,
                  width: 1200,
                  height: 630,
                },
              ]
            : [],
        },
      };
    }
  } catch (error) {
    console.log("SEO fetch failed (about):", error.message);
  }

  // ✅ fallback (your current one)
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
      url: `${baseUrl}/about-us`, // fixed mismatch
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
