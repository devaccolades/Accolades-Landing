
import BlogPost from "./BlogPost";
import HeroSection from "./HeroSection";

import UpdatedFooter from "@/Layout/UpdatedFooter";
import { getBlogBySlug, getBlogs } from "@/lib/services/djangoBackend";

export async function generateMetadata({ params }) {
  const { slug } = await params;  
  const baseUrl = "https://www.accoladesintegrated.com";

  try {
    const res = await getBlogBySlug(slug);
    const data = res?.data;

    if (!data) throw new Error("No data");

    return {
      title: data.meta_title || data.title,
      description: data.meta_description || "",
      alternates: {
        canonical: `${baseUrl}/blog/${slug}`,
      },
      openGraph: {
        title: data.meta_title || data.title,
        description: data.meta_description || "",
        url: `${baseUrl}/blog/${slug}`,
        type: "article",
        images: data.image
          ? [
              {
                url: data.image,
                width: 1200,
                height: 630,
              },
            ]
          : [],
      },
    };
  } catch {
    return {
      title: "Blog | Accolades Integrated",
      description: "Read our latest blogs",
    };
  }
}

export default async function page({ params }) {
  const { slug } = await params;  

  const blogs = await getBlogs();
  const res = await getBlogBySlug(slug);
  const data = res?.data;
  const related = res?.related_blogs || [];

  return (
    <>
      <main className="bg-[#F1F1F1]">
        <HeroSection data={data} />
        <BlogPost
          data={data}
          category={data?.category_name}
          related={related} 
          slug={slug}
        />
      </main>

      <main className="-mt-[80px]">
        <UpdatedFooter />
      </main>
    </>
  );
}