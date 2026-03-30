

"use client";
import { motion } from "framer-motion";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { BASE_URL } from "@/app/Server";
import Link from "next/link";

export default function BlogPost({ data, category, related = [], slug }) {
  let relatedPosts = related.filter(
  (post) => post.category === data?.category
);

// fallback if not enough
if (relatedPosts.length < 3) {
  const extra = related.filter(
    (post) =>
      post.category !== data?.category &&
      !relatedPosts.find((p) => p.id === post.id)
  );

  relatedPosts = [...relatedPosts, ...extra].slice(0, 3);
}

  return (
    <div
      className="min-h-screen pb-20"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="containers py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4">
          
          {/* ================= MAIN CONTENT ================= */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              
              {/* HEADER */}
              <div className="md:px-8 px-4 pt-8">
                <span className="font-mont p-2 text-sm text-[#7B7B7B] rounded-[30px] border">
                  {category || "Uncategorized"}
                </span>

                <h1 className="my-5 font-semibold text-xl md:text-2xl lg:text-3xl">
                  {data?.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>{data?.blog_date}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="md:px-8 px-4 pb-6">
                <div className="blog-content prose max-w-none">
                  {/* <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {data?.descriptions || ""}
                  </ReactMarkdown> */}
                  <div
  className="blog-content prose max-w-none"
  dangerouslySetInnerHTML={{ __html: data?.descriptions || "" }}
/>
                </div>
              </div>
            </article>
          </motion.div>

          {/* ================= SIDEBAR ================= */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">

              {/* RELATED POSTS */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-semibold text-lg mb-6 text-[#707070]">
                  Related Posts
                </h3>

                <div className="space-y-6">
                  {relatedPosts.map((post) => {
                    const imageUrl = post?.image
  ? post.image.startsWith("http")
    ? post.image
    : BASE_URL + post.image
  : null;

                    return (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                      >
                        <div className="flex gap-4 group cursor-pointer">
                          
                          {/* IMAGE */}
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={post.title}
                              width={100}
                              height={100}
                              className="h-24 w-24 object-cover rounded"
                            />
                          ) : (
                            <div className="h-24 w-24 bg-gray-200 rounded" />
                          )}

                          {/* TITLE */}
                          <div className="flex-1">
                            <h4 className="text-sm line-clamp-3 group-hover:text-teal-600">
                              {post.title}
                            </h4>
                          </div>

                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}