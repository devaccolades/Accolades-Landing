"use client";

import { Clock, MapPin, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import img8 from "../../../public/blog/img8.png";
import img9 from "../../../public/blog/img9.png";
import img10 from "../../../public/blog/img10.png";
import img11 from "../../../public/blog/img11.png";
import img12 from "../../../public/blog/img12.png";
import img13 from "../../../public/blog/img13.png";
import img14 from "../../../public/blog/img14.png";
import img15 from "../../../public/blog/img15.png";
import img16 from "../../../public/blog/img16.png";

const BlogCardsGrid = () => {
  const blogPosts = [
    {
      id: 1,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img8,
      backgroundColor: "bg-gradient-to-br from-blue-400 to-purple-500", // Changed to match first image
      imageOverlay: "digital-marketing-icons",
    },
    {
      id: 2,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img9, // This image should correspond to the "Social Media" one in the screenshot
      backgroundColor: "bg-gradient-to-br from-orange-400 to-red-500", // Changed to match second image
      imageOverlay: "mobile-apps",
    },
    {
      id: 3,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img10, // This image should correspond to the third one in the screenshot
      backgroundColor: "bg-gradient-to-br from-pink-400 to-purple-600", // Changed to match third image
      imageOverlay: "web-design",
    },
    {
      id: 4,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img11,
      backgroundColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
      imageOverlay: "web-development",
    },
    {
      id: 5,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img12,
      backgroundColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      imageOverlay: "coding",
    },
    {
      id: 6,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img13,
      backgroundColor: "bg-gradient-to-br from-blue-400 to-purple-500",
      imageOverlay: "marketing",
    },
    {
      id: 7,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img14,
      backgroundColor: "bg-gradient-to-br from-purple-900 to-purple-700",
      imageOverlay: "digital-marketing-icons",
    },
    {
      id: 8,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img15,
      backgroundColor: "bg-gradient-to-br from-gray-600 to-gray-500",
      imageOverlay: "mobile-apps",
    },
    {
      id: 9,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img16,
      backgroundColor: "bg-gradient-to-br from-gray-400 to-gray-300",
      imageOverlay: "web-design",
    },
    {
      id: 10,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img8,
      backgroundColor: "bg-gradient-to-br from-blue-400 to-purple-500", // Changed to match first image
      imageOverlay: "digital-marketing-icons",
    },
    {
      id: 11,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img9, // This image should correspond to the "Social Media" one in the screenshot
      backgroundColor: "bg-gradient-to-br from-orange-400 to-red-500", // Changed to match second image
      imageOverlay: "mobile-apps",
    },
    {
      id: 12,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img10, // This image should correspond to the third one in the screenshot
      backgroundColor: "bg-gradient-to-br from-pink-400 to-purple-600", // Changed to match third image
      imageOverlay: "web-design",
    },
    {
      id: 13,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img11,
      backgroundColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
      imageOverlay: "web-development",
    },
    {
      id: 14,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img12,
      backgroundColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      imageOverlay: "coding",
    },
    {
      id: 15,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img13,
      backgroundColor: "bg-gradient-to-br from-blue-400 to-purple-500",
      imageOverlay: "marketing",
    },
    {
      id: 16,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img14,
      backgroundColor: "bg-gradient-to-br from-purple-900 to-purple-700",
      imageOverlay: "digital-marketing-icons",
    },
    {
      id: 17,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img15,
      backgroundColor: "bg-gradient-to-br from-gray-600 to-gray-500",
      imageOverlay: "mobile-apps",
    },
    {
      id: 18,
      date: "November 20, 2023",
      readTime: "5 min",
      title: "Digital Marketing Trends: Insights from Mumbai's Experts",
      image: img16,
      backgroundColor: "bg-gradient-to-br from-gray-400 to-gray-300",
      imageOverlay: "web-design",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // As seen in the image, 3 cards per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts for the page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

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
      // Only go back if not on the first page
      setCurrentPage(currentPage - 1);
    }
  };

  // Single card component
  const BlogCard = ({ post }) => {
    return (
      <div className="group cursor-pointer m-1 md:m-2 lg:m-3">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
          {/* Image Section */}
          <div
            className={`h-48 relative ${post.backgroundColor} overflow-hidden rounded-t-2xl`}
          >
            {/* Header with date and time */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="font-mont font-medium lg:text-[16px] md:text-[14px] text-[12px] leading-[120%] text-[#7B7B7B]">
                  {post.date}
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
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-90"
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
                  <button className="md:w-10 md:h-10 w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110 transform">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full containers mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 pb-8 space-x-2">
        <button
          onClick={previousPage}
          disabled={currentPage === 1} // Disable if on the first page
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
    </div>
  );
};

export default BlogCardsGrid;
