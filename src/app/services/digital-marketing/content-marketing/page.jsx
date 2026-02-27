import Navbar from "../../../../component/Navbar";
import HeroSection from "./HeroSection";
import Footer from "../../../../component/Footer";
import UpdatedFooter from "@/Layout/UpdatedFooter";
// import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

// export async function generateMetadata() {
//   const name = "content-marketing";

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
      </main>
      <main className="mt-[-50px] md:mt-[-65px] lg:mt-[-85px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
}
