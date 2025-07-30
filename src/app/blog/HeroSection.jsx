"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const tagRows = [
    [
      { label: "All", active: true },
      { label: "Business", active: false },
      { label: "web designing companies", active: false },
      { label: "Google adwords", active: false },
      { label: "Google adwords", active: false },
      { label: "Google adwords", active: false },
      { label: "Social media agencies", active: false },
      { label: "Business", active: false },
      { label: "web designing companies", active: false },
      { label: "Python developers in kerala", active: false },
      { label: "web designing companies", networkid: "c-124", active: false },
      { label: "Digital Marketing", networkid: "c-125", active: false },
      { label: "Business", networkid: "c-126", active: false },
    ],
  ];

  const [tags, setTags] = useState(tagRows);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true); // Assume content overflows initially

  // --- Scroll Logic ---
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // -1 for a small buffer
    }
  };

  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (scrollElement) {
      // Initial check on mount
      handleScroll();
      scrollElement.addEventListener("scroll", handleScroll);
      // Clean up event listener
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
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
  // --- End Scroll Logic ---

  const handleTagClick = (rowIndex, tagIndex) => {
    const updatedTags = tags.map((row, rIndex) =>
      row.map((tag, tIndex) => ({
        ...tag,
        active: rIndex === rowIndex && tIndex === tagIndex,
      }))
    );
    setTags(updatedTags);
  };

  return (
    <div className="lg:py-10 py-6 mt-20">
      <div className="bg-white containers rounded-[30px] py-6 ">
        <h1 className="text-[#3FB4BA] font-mont font-bold xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] leading-[130%] text-center mb-2">
          Blog
        </h1>
        <p className="font-poppins font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-black w-[86%] mx-auto">
          Stay updated with the latest insights in marketing, business, and
          design. Explore trends, expert tips, and strategies to grow your brand
          effectively.
        </p>
      </div>
      <div className="w-full containers lg:py-6 py-4">
        {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-100 lg:p-6 md:p-4 p-2 relative flex items-center">
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
            {tags[0].map((tag, tagIndex) => (
              <button
                key={`${tagIndex}`}
                onClick={() => handleTagClick(0, tagIndex)}
                className={`
                  flex-shrink-0 px-4 py-2 font-mont font-normal rounded-full text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] transition-all duration-200 hover:shadow-md mx-1
                  ${
                    tag.active
                      ? "bg-[#5EB6BB] text-white shadow-lg"
                      : "bg-[#F2FBFB] text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {tag.label}
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
        </div> */}
      </div>
      <div className="bg-white containers rounded-[30px] py-6 px-6">
        <h1 className="text-[#3FB4BA] font-mont font-semibold xl:text-[28px] lg:text-[26px] md:text-[24px] text-[20px] leading-[100%] mb-3">
          Latest & Trending Blogs
        </h1>
        <p className="font-poppins font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-black">
           Explore our most popular and recently published blog posts, curated to keep you informed and inspired. 
    From SEO hacks to branding advice, we cover the topics that matter most for your growth.
        </p>
      </div>
    </div>
  );
}
