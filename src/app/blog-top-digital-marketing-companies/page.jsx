import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BlogThings from "./BlogThings";
import { BASE_URL, getBlogs, getSeo } from "../Server";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const name = "blog";

  const post = await getSeo(name);

  const baseUrl = "https://www.accoladesintegrated.com";

  return {
    title: post[0]?.metaTitle,
    description: post[0]?.metaDescription,

    alternates: {
      canonical: `${baseUrl}/blog`, // ✅ canonical added
    },

    openGraph: {
      title: post[0]?.ogTitle,
      description: post[0]?.ogDescription,
      url: `${baseUrl}/blog`, // ✅ important
      images: [
        BASE_URL + post[0]?.ogImage?.formats?.medium?.url,
      ],
    },
  };
}

export default async function page() {
  const data = await getBlogs();

//   console.log("blog data", data[1].blogs);
  return (
    <>
      {/* <Navbar /> */}
      <BlogThings data={data} />
      <main className="-mt-[50px] md:-mt-[80px]">
        <UpdatedFooter />
      </main>
    </>
  );
}
