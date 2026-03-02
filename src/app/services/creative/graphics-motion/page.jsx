import Footer from "@/component/Footer";
import FeaturedWork from "./FeatureWork";
import HeroSection from "./HeroSection";
import Platforms from "./Platforms";
import Services from "./Services";
import Navbar from "@/component/Navbar";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "graphic-designing";

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

export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-[#F1F1F1]">
        <HeroSection />
        <Services />
        <FeaturedWork />
        <Platforms />
      </main>
      <main className="-mt-[65px] lg:-mt-[90px] 2xl:-mt-[110px] ">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
}
