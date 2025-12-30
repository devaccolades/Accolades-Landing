"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Skyline",
    thumbnail: "/about-us/thumbnail/t1.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=0zPvh90Ntgc",
  },
  {
    name: "Prism",
    thumbnail: "/about-us/thumbnail/t2.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=YVyiTkWDVzU",
  },
  {
    name: "TJP Mats",
    thumbnail: "/about-us/thumbnail/t3.png",
    youtubeUrl: "https://www.youtube.com/watch?v=6hgmP2xyLxg",
  },
    {
    name: "Classic Homes",
    thumbnail: "/about-us/thumbnail/t4.png",
    youtubeUrl: "https://www.youtube.com/watch?v=l8W-wF_mv-Y",
  },
//   {
//     name: "Asish Mathew Kurian",
//     thumbnail: "/about-us/thumbnail/t2.webp",
//     youtubeUrl: "https://www.youtube.com/watch?v=0zPvh90Ntgc",
//   },
//   {
//     name: "Agna Rose Jolly",
//     thumbnail: "/about-us/thumbnail/t2.webp",
//     youtubeUrl: "https://www.youtube.com/watch?v=0zPvh90Ntgc",
//   },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const getEmbedUrl = (url) => {
    if (url.includes("embed")) return url;
    if (url.includes("youtu.be"))
      return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]}`;
    if (url.includes("watch?v="))
      return `https://www.youtube.com/embed/${url.split("watch?v=")[1]}`;
    return url;
  };

  return (
    <section className="containers py-10 relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="font-mont font-bold xl:text-[48px] lg:text-[42px] md:text-[36px] text-[30px] leading-[100%] text-center text-[#218D8C]">
          What Our Clients Say
        </h2>
        {/* <p className="text-gray-500 mt-2">Watch, Learn, Get Inspired</p> */}
      </div>

      {/* Swiper */}
      <Swiper
      loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 26,
    },
    1536: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
        className="pb-20"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                w-full
                h-[360px]
                xl:h-[400px]
                2xl:h-[440px]
                3xl:h-[480px]
                rounded-2xl overflow-hidden shadow-xl
              "
            >
              {/* Thumbnail */}
              <Image
                src={item.thumbnail}
                alt={item.name}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Name */}
              <p className="absolute bottom-4 left-4 text-white font-semibold z-10 text-lg">
                {item.name}
              </p>

              {/* Play Button */}
              <button
                onClick={() => setActiveVideo(item.youtubeUrl)}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="w-14 h-14 lg:w-20 lg:h-20  rounded-full flex items-center justify-center text-black text-xl shadow-lg">
                  ▶
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Progress */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
    className="testimonial-prev cursor-pointer"
    aria-label="Previous slide"
  >
    <Image
      src="/about-us/black_arrow_left.svg"
      alt="Previous"
      width={30}
      height={30}
    />
  </button>

        <div className="w-[200px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
          <div className="w-[30%] h-full bg-white-500 rounded-full" />
        </div>

        <button
    className="testimonial-next cursor-pointer"
    aria-label="Next slide"
  >
    <Image
      src="/about-us/black_arrow_left.svg"
      alt="Next"
      width={30}
      height={30}
      className="rotate-180"
    />
  </button>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl 2xl:max-w-5xl aspect-video bg-black rounded-xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              src={`${getEmbedUrl(activeVideo)}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
