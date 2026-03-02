"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // enables lists, tables, checkboxes, etc.
import rehypeRaw from "rehype-raw";
import {
  Calendar,
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";
import Image from "next/image";
// import Img17 from "../../../../public/blog/img17.webp";
// import Img18 from "../../../../public/blog/img18.webp";
import Img19 from "../../../../public/blog/img19.webp";
import Img20 from "../../../../public/blog/img20.webp";
import Img21 from "../../../../public/blog/img21.webp";
import Icon1 from "../../../../public/blog/icon1.webp";
import Icon2 from "../../../../public/blog/icon2.webp";
import Icon3 from "../../../../public/blog/icon3.webp";
import Icon4 from "../../../../public/blog/icon4.webp";
import { BASE_URL } from "@/app/Server";
import Link from "next/link";

export default function BlogPost({ data, category, blog, slug }) {
//   console.log("data", data);
//   console.log("blog", blog);
//   console.log("slug", slug);

  console.log("blogsss", blog)

  const relatedPosts = blog
    .filter((item) => item.blogs[0].id !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  console.log("relatedPosts", relatedPosts);

  const socialIcons = [
    {
      src: Icon1,
      alt: "Facebook",
      href: "https://facebook.com/share-url",
    },
    // {
    //   src: Icon2,
    //   alt: "Twitter",
    //   href: "https://twitter.com/share-url",
    // },
    {
      src: Icon3,
      alt: "LinkedIn",
      href: "https://linkedin.com/share-url",
    },
    // {
    //   src: Icon4,
    //   alt: "Copy Link",
    //   href: "#",
    // },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 pb-20"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="containers py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 ">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="md:px-8 px-4 pt-8">
                <span className=" font-mont p-2 font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B] rounded-[30px] border-2 border-[#F1F1F1]">
                  {category}
                </span>
                <h1 className="my-[20px] font-mont font-semibold xl:text-[28px] lg:text-[26px] text-[24px] leading-[100%] text-[#000000]  ">
                  {data?.title}
                </h1>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2 font-mont p-2 font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B]">
                    <Calendar className="w-4 h-4" />
                    <span>{data?.time}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:px-8 px-4 pb-6">
                {/* <ReactMarkdown >{data?.description}</ReactMarkdown> */}
                <div
                  className="blog-content prose prose-lg max-w-none
  [&_h1]:mt-8 [&_h1]:mb-4
  [&_h2]:mt-6 [&_h2]:mb-3
  [&_h3]:mt-4 [&_h3]:mb-2
  [&_p]:my-4
  [&_ul]:my-4 [&_ol]:my-4
  [&_ul]:list-disc [&_ul]:ml-6
  [&_ol]:list-decimal [&_ol]:ml-6
"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {data?.description}
                  </ReactMarkdown>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Related Posts */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h3 className="font-mont font-semibold lg:text-[22px] md:text-[20px] text-[18px] leading-[150%] text-[#707070] mb-6">
                  Related posts
                </h3>
                <div className="space-y-6">
                  {relatedPosts.map((post, index) => (
                    <div key={index} className="group cursor-pointer">
                      <Link
                        href={`/blog-top-digital-marketing-companies/${post?.blogs[0]?.id}`}
                      >
                        <div className="flex gap-4">
                          <Image
                            src={
                              BASE_URL +
                              post?.blogs[0]?.coverImage?.formats?.medium?.url
                            }
                            alt={post?.blogs[0]?.id}
                            width={100}
                            height={100}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-mont font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] group-hover:text-teal-600 transition-colors line-clamp-3">
                              {post?.blogs[0].title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media Icons */}
              <div className=" p-2">
                <div className="flex justify-center gap-4">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href || "#"}
                      className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label={icon.alt}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
