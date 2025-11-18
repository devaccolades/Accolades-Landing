import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BlogThings from "./BlogThings";
import { BASE_URL, getBlogs, getSeo } from "../Server";

export const dynamic = "force-dynamic";

export  async function generateMetadata() {
  const name = "blog";

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



export default async function page() {
  const data = await getBlogs();
  return (
    <>
      <Navbar />
      <BlogThings data={data}/>
      <main className="-mt-[65px]">
        <Footer />
      </main>
    </>
  );
}
