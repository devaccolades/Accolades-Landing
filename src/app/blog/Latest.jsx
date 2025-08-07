"use client";

import { Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

import Link from "next/link";
import blogPosts from "./blogPosts.js";
import Image from "next/image";
import { BASE_URL } from "../Server.js";

const BlogCardsGrid = ({ selectedTag, data }) => {
  // FIXED: Better filtering logic with exact case-sensitive matching
  // const [blogs, setBlogs] = useState([]);
  const filteredPosts =
    selectedTag === "All"
      ? data.flatMap((post) => post.blogs || [])
      : data
          .filter((post) => post.category === selectedTag)
          .flatMap((item) => item.blogs || []);
  // console.log("filteredPosts", filteredPosts);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // FIXED: Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get current posts for the page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // currentPosts.map((post) => {
  //   post.blogs.map((blg) => {
  //     console.log("blog data", blg);
  //   });
  // });

  // useEffect(() => {
  //   const allBlogs = data.flatMap((post) => post.blogs || []);
  //   console.log("All blogs combined:", allBlogs);
  //   setBlogs(allBlogs);
  // }, []);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Single card component
  const BlogCard = ({ post }) => {
    // console.log("post", post);
    return (
      <div className="group cursor-pointer h-full">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 h-full flex flex-col">
          {/* Image Section */}
          <div className={`h-48 relative overflow-hidden rounded-t-2xl`}>
            {/* Header with date and time */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="font-mont font-medium lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B]">
                  {post.time}
                </span>
              </div>
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="font-mont font-medium lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B]">
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={BASE_URL + post?.coverImage.formats.medium.url}
                alt={post.title}
                fill
                className="object-cover object-center opacity-90"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-6">
            <div className="flex items-start justify-between">
              <h3 className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] mr-4">
                {post.title}
              </h3>
              <div className="flex-shrink-0">
                <div className="md:w-14 md:h-14 h-10 w-10 rounded-full border-4 border-[#BFE1DE] flex items-center justify-center">
                  <Link
                    href={`/blog/${post.id}`}
                    className="md:w-10 md:h-10 w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110 transform"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="w-full h-full containers mx-auto pb-20 md:pb-30">
        {/* ADDED: Display current filter and count */}
        <div className="mb-6 text-center">
          {/* <p className="text-white font-mont text-lg">
            {selectedTag === "All" 
              ? `Showing all ${filteredPosts.length} posts` 
              : `Showing ${filteredPosts.length} posts for "${selectedTag}"`
            }
          </p> */}
        </div>

        {/* ADDED: Handle empty state */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white font-mont text-xl">
              No posts found for "{selectedTag}"
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 lg:gap-6 auto-rows-fr">
              {currentPosts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>

            {/* FIXED: Only show pagination if there are multiple pages */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 pb-8 space-x-2">
                <button
                  onClick={previousPage}
                  disabled={currentPage === 1}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
                  ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mont text-sm transition-colors duration-200
                    ${
                      currentPage === i + 1
                        ? "bg-teal-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
                  ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCardsGrid;
