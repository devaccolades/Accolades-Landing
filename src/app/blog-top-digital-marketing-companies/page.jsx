import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BlogThings from "./BlogThings";
// import { BASE_URL, getBlogs, getSeo } from "../Server";
import { getBlogs, getSeoByName } from "@/lib/services/djangoBackend";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const name = "blog";

  const post = await getSeoByName(name);

  const baseUrl = "https://www.accoladesintegrated.com";

  return {
    title: post?.meta_title,
    description: post?.meta_description,

    alternates: {
      canonical: `${baseUrl}/blog`,
    },

    openGraph: {
      title: post?.meta_title,
      description: post?.meta_description,
      url: `${baseUrl}/blog`,
      images: [post?.ogImage],
    },
  };
}

export default async function page() {
  const blogs = await getBlogs();

  // ✅ Transform API data to match your UI
  const groupedData = Object.values(
    blogs.reduce((acc, blog) => {
      const category = blog.category || "Uncategorized";

      if (!acc[category]) {
        acc[category] = {
          category,
          blogs: [],
        };
      }

      acc[category].blogs.push({
        id: blog.id,
        title: blog.title,
        category: blog.category,
        coverImage: {
          url: blog.image, // ⚠️ important
        },
        time: blog.blog_date,
        readTime: "5 min read", // optional (since not in backend)
        slug: blog.slug,
      });

      return acc;
    }, {})
  );
  return (
    <>
      {/* <Navbar /> */}
      <BlogThings data={groupedData} />
      <main className="-mt-[50px] md:-mt-[80px]">
        <UpdatedFooter />
      </main>
    </>
  );
}
