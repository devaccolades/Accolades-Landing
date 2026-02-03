"use client";
import React, { useEffect, useRef, useState } from "react";
import cover1 from "../../../public/case-study/pexels-vlada-karpovich-4609096 1.png";
import cover2 from "../../../public/case-study/9789bb99bbccc1144cec898dea4b35569458113c.png";
import cover3 from "../../../public/case-study/pexels-vlada-karpovich-4609096 1.png";
import cover4 from "../../../public/case-study/pexels-vlada-karpovich-4609096 1.png";
import logo1 from "../../../public/case-study/d07fe78c0f33cf25c81c43774465b9291d8b1fdc.png";
import logo2 from "../../../public/case-study/2c851e25ba22c1716cf66563d4157775812054ee.png";
import logo3 from "../../../public/case-study/d07fe78c0f33cf25c81c43774465b9291d8b1fdc.png";
import logo4 from "../../../public/case-study/d07fe78c0f33cf25c81c43774465b9291d8b1fdc.png";
import Image from "next/image";

const caseStudies = [
  {
    no: 1,
    cover: cover1,
    category: "Real Estate",
    title: "National Builders",
    description:
      "We were brought on board to enhance National Builder’s online presence to address the challenges.",
    logo: logo1,
  },
  {
    no: 2,
    cover: cover2,
    category: "Interiors",
    title: "RAK Interior",
    description:
      "RAK Interiors started its journey in 2011. They wanted to create brand awareness in the market.",
    logo: logo2,
  },
  {
    no: 3,
    cover: cover3,
    category: "Film Industry",
    title: "Movie Marketing Case Study",
    description:
      "Combining various Google Ads formats can create a cohesive and comprehensive marketing strategy.",
    logo: null,
  },
  {
    no: 4,
    cover: cover4,
    category: "Real Estate",
    title: "CIDBI Thrissur",
    description:
      "CIDBI needed a strong digital transformation partner to elevate brand presence.",
    logo: logo4,
  },
  {
    no: 5,
    cover: cover2,
    category: "Interiors",
    title: "RAK Interior",
    description:
      "RAK Interiors started its journey in 2011. They wanted to create brand awareness in the market.",
    logo: logo2,
  },
  {
    no: 6,

    cover: cover3,
    category: "Film Industry",
    title: "Movie Marketing Case Study",
    description:
      "Combining various Google Ads formats can create a cohesive and comprehensive marketing strategy.",
    logo: null,
  },
  {
    no: 7,
    cover: cover4,
    category: "Real Estate",
    title: "CIDBI Thrissur",
    description:
      "CIDBI needed a strong digital transformation partner to elevate brand presence.",
    logo: logo4,
  },
  {
    no: 8,
    cover: cover2,
    category: "Interiors",
    title: "RAK Interior",
    description:
      "RAK Interiors started its journey in 2011. They wanted to create brand awareness in the market.",
    logo: logo2,
  },
  {
    no: 9,
    cover: cover3,
    category: "Film Industry",
    title: "Movie Marketing Case Study",
    description:
      "Combining various Google Ads formats can create a cohesive and comprehensive marketing strategy.",
    logo: null,
  },
  {
    no: 10,
    cover: cover4,
    category: "Real Estate",
    title: "CIDBI Thrissur",
    description:
      "CIDBI needed a strong digital transformation partner to elevate brand presence.",
    logo: logo4,
  },
];

const CaseStudy = () => {
  const [{ initial, loadMore }, setCounts] = useState({
    initial: 4,
    loadMore: 4,
  });

  const [visible, setVisible] = useState(initial);
  const [loading, setLoading] = useState(false);

  const gridRef = useRef(null);

  useEffect(() => {
    const updateCounts = () => {
      const counts = getCounts();
      setCounts(counts);
      setVisible(counts.initial);
    };

    updateCounts();
    window.addEventListener("resize", updateCounts);
    return () => window.removeEventListener("resize", updateCounts);
  }, []);

  const getCounts = () => {
    if (typeof window === "undefined") {
      return { initial: 4, loadMore: 4 };
    }

    if (window.innerWidth >= 1280) {
      return { initial: 6, loadMore: 6 };
    }

    return { initial: 4, loadMore: 4 };
  };

  const handleLoadMore = () => {
    setLoading(true);

    // Small delay to show loading state
    setTimeout(() => {
      setVisible((v) => Math.min(v + loadMore, caseStudies.length));

      // Wait for render, then scroll
      setTimeout(() => {
        const lastVisibleCard = gridRef.current?.lastElementChild;
        if (lastVisibleCard) {
          lastVisibleCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
        setLoading(false);
      }, 100);
    }, 300);
  };

  return (
    <>
      <section className="font-mont w-[90%] lg:w-[80%] mx-auto">
        <h3 className="lg:text-[36px] md:text-[32px] text-[20px] font-normal">
          Our Case Studies
        </h3>
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8"
        >
          {caseStudies.slice(0, visible).map((item, index) => (
            <CaseStudyCard key={index} {...item} />
          ))}
        </div>
        {visible < caseStudies.length && (
          <div className="flex justify-center py-6">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="text-sm font-semibold text-[#0C7479] border-[#0C7479]
                px-6 py-3 rounded-2xl cursor-pointer
                transition-all duration-300
                hover:bg-teal-700 hover:text-white
                active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-teal-700"
            >
              {loading ? "Loading…" : "Load more"}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

const CaseStudyCard = ({
  cover,
  category,
  title,
  subtitle,
  description,
  logo,
  index,
}) => {
  return (
    <>
      <div className="group animate-fadeUp border-[0.5px] border-[#D9D9D9] p-[10px] rounded-[20px] h-full flex flex-col cursor-pointer">
        <div className="bg-white rounded-t-[10px] overflow-hidden flex flex-col flex-1">
          {/* Cover */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={cover}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
              className="object-cover object-top border-0 blur-[0.5px]"
            />

            <div
              className="absolute inset-x-0 bottom-[-10px] h-[70%]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(131, 131, 131, 0) 0%, #FFFFFF 100%)",
              }}
            />
            <span className="absolute top-4 right-0 rounded-l-full bg-[#0C7479] text-white text-xs px-3 py-1">
              {category}
            </span>
          </div>

          {/* Content (stretching) */}
          <div className="pt-2 flex flex-col flex-1">
            <p className="text-black text-[16px] leading-[156%] mb-2">01</p>

            {/* Logo row – reserve height even if logo missing */}
            <div className="flex items-center gap-2 mb-2 min-h-[64px]">
              {logo && (
                <div className="w-[64px] flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              )}

              <div>
                <h3 className="text-[16px] font-bold mb-1">{title}</h3>
                <p className="text-[13px] text-[#777777] leading-[110%]">
                  {description}
                </p>
              </div>
            </div>

            {/* Button pinned */}
            <div className="flex justify-center items-center mt-auto pt-3">
              <button className="text-[13px] font-normal text-black flex items-center gap-1 cursor-pointer transition-all duration-300 group-hover:text-teal-700 group-hover:font-bold">
                Download Case Study
                <span className="text-[23px] leading-none">↓</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out both;
        }
      `}</style>
    </>
  );
};

export default CaseStudy;
