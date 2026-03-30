"use client";
import { motion, useInView } from "framer-motion"
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection({ selectedTag, setSelectedTag, data }) {
  // const tagRows = data;
  console.log("DATA:", data);
  const alltag = { category: "All" };
  // const [tags, setTags] = useState(tagRows);
  // const alltags = [alltag, ...tags];
  const tags = [...new Set(data?.map((item) => item.category))];
const alltags = ["All", ...tags];
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (scrollElement) {
      handleScroll();
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // FIXED: Correct handleTagClick function - only takes label parameter
  const handleTagClick = (label) => {
    setSelectedTag(label);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div className="lg:py-10 py-6 mt-20">
      <div className="bg-white containers rounded-[30px] py-6 ">
        <motion.h1 className="text-[#3FB4BA] font-mont font-bold xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] leading-[130%] text-center mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}>
          Blog
        </motion.h1>
        <motion.p className="font-poppins font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-black w-[86%] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}>
          Stay updated with the latest insights in marketing, business, and
          design. Explore trends, expert tips, and strategies to grow your brand
          effectively.
        </motion.p>
      </div>
      <div className="w-full containers lg:py-6 py-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 lg:p-6 md:p-4 p-2 relative flex items-center">
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md lg:-ml-12 md:-ml-10 -ml-4"
            >
              <ChevronLeft className="md:w-6 md:h-6 h-3 w-3 text-gray-700" />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap overflow-x-auto scrollbar-hide py-2 px-1 custom-scrollbar-hide"
          >
            {/* {alltags.map((tag, tagIndex) => (
              <button
                key={`${tagIndex}`}
                
                onClick={() => handleTagClick(tag.category)} */}
                {alltags.map((tag, tagIndex) => (
  <button
    key={tagIndex}
    onClick={() => handleTagClick(tag)}
    className={`
      flex-shrink-0 px-4 py-2 font-mont font-normal rounded-full text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]
      ${selectedTag === tag
        ? "bg-[#5EB6BB] text-white shadow-lg"
        : "bg-[#F2FBFB] text-gray-600 hover:bg-gray-200"
      }
    `}
  >
    {tag}
  </button>
))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md lg:-mr-12 md:-mr-10 -mr-4"
            >
              <ChevronRight className="md:w-6 md:h-6 h-3 w-3 text-gray-700" />
            </button>
          )}
          <div
            className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent hidden md:block pointer-events-none"
            style={{
              opacity: showLeftArrow ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent hidden md:block pointer-events-none"
            style={{
              opacity: showRightArrow ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
            }}
          ></div>
        </div>
      </div>
      <motion.div
        ref={ref}
        className="bg-white containers rounded-[30px] py-6 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Simple title animation */}
        <motion.h2
          className="text-[#3FB4BA] font-mont font-semibold xl:text-[28px] lg:text-[26px] md:text-[24px] text-[20px] leading-[100%] mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Latest & Trending Blogs
        </motion.h2>

        {/* Simple paragraph animation */}
        <motion.p
          className="font-poppins font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Explore our most popular and recently published blog posts, curated to
          keep you informed and inspired. From SEO hacks to branding advice, we
          cover the topics that matter most for your growth.
        </motion.p>
      </motion.div>
    </div>
  );
}
