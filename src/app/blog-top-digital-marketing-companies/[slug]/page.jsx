import Navbar from "@/component/Navbar";
import BlogPost from "./BlogPost";
import HeroSection from "./HeroSection";
import Footer from "@/component/Footer";
import { getBlogs } from "@/app/Server";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export default async function page({ params }) {
  // const { slug } = params;
  const { slug } = await params;

  const blog = await getBlogs();
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
      <main className="-mt-[65px]">
        {/* <Footer /> */}
        <UpdatedFooter />
      </main>
    </>
  );
}
