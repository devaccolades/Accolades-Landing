import Navbar from "@/component/Navbar";
import BlogPost from "./BlogPost";
import HeroSection from "./HeroSection";
import Footer from "@/component/Footer";
import { getBlogs } from "@/app/Server";
import UpdatedFooter from "@/Layout/UpdatedFooter";


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const baseUrl = "https://www.accoladesintegrated.com";

  const blog = await getBlogs();
  const data = blog
    .flatMap((item) => item.blogs)
    .find((item) => item.id == slug);

  if (!data) {
    return {
      title: "Blog | Accolades Integrated",
      description: "Read our latest blogs and insights.",
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
    };
  }

  return {
    title: data.metaTitle || data.title,
    description: data.metaDescription || data.description,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`, 
    },

    openGraph: {
      title: data.metaTitle || data.title,
      description: data.metaDescription || data.description,
      url: `${baseUrl}/blog/${slug}`, // ✅ important
      type: "article",
      images: data.image
        ? [
            {
              url: data.image.startsWith("http")
                ? data.image
                : `${baseUrl}${data.image}`,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
  };
}

export default async function page({ params }) {
  // const { slug } = params;
  const { slug } = await params;

  const blog = await getBlogs();
  // console.log("blog data", blog);
  const data = blog
    .flatMap((item) => item.blogs)
    .find((item) => item.id == slug);
  // const category = blog.find((item) => item.id == slug);
  // console.log("blog", data);

  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-[#F1F1F1]">
        <HeroSection data={data} />
        <BlogPost
          data={data}
          category={data.category}
          blog={blog}
          slug={slug}
        />
      </main>
      <main className="-mt-[80px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
}
