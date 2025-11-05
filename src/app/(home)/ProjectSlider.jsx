"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { fromJSON } from "postcss";
import Image from "next/image";
// import topline from "../../../public/home/top-line.svg";

import alappat from "../../../public/home/01-min.png";
import family from "../../../public/home/02-min.png";
import p3 from "../../../public/home/03-min.png";
import p4 from "../../../public/home/04-min.png";
import p5 from "../../../public/home/05-min.png";
import p6 from "../../../public/home/06-min.png";
import p7 from "../../../public/home/07-min.png";
import p8 from "../../../public/home/08-min.png";
import p9 from "../../../public/home/09-min.png";
import p10 from "../../../public/home/10-min.png";
import p11 from "../../../public/home/11-min.png";
import p12 from "../../../public/home/12-min.png";

import p13 from "../../../public/home/posters/p1.jpg";
import p14 from "../../../public/home/posters/p2.jpg";
import p15 from "../../../public/home/posters/p3.jpg";
import p16 from "../../../public/home/posters/p4.jpg";
import p17 from "../../../public/home/posters/p5.jpg";
import p18 from "../../../public/home/posters/p6.jpg";
import p19 from "../../../public/home/posters/p7.jpg";
import p20 from "../../../public/home/posters/p8.jpg";
import p21 from "../../../public/home/posters/p9.jpg";
import p22 from "../../../public/home/posters/5.jpg";
import p23 from "../../../public/home/posters/2.jpg";
import p24 from "../../../public/home/posters/3.jpg";
import p25 from "../../../public/home/posters/4.jpg";
import p26 from "../../../public/home/posters/Untitled-1.jpg";


const fallbackImages = [
  // { id: 1, src: alappat, alt: "Alappat" },
  // { id: 2, src: family, alt: "Family" },
 
  // { id: 5, src: p5, alt: "Project 5" },
  // { id: 6, src: p6, alt: "Project 6" },
  // { id: 7, src: p7, alt: "Project 7" },
  // { id: 8, src: p8, alt: "Project 8" },
  // { id: 9, src: p9, alt: "Project 9" },
  // { id: 10, src: p10, alt: "Project 10" },
  // { id: 11, src: p11, alt: "Project 11" },

  { id: 12, src: p13, alt: "Poster 1" },
  { id: 13, src: p14, alt: "Poster 2" },
  { id: 14, src: p15, alt: "Poster 3" },    
  { id: 15, src: p16, alt: "Poster 4" },
  { id: 16, src: p17, alt: "Poster 5" },
  { id: 17, src: p18, alt: "Poster 6" },
  { id: 18, src: p19, alt: "Poster 7" },
  { id: 19, src: p20, alt: "Poster 8" },
  { id: 20, src: p21, alt: "Poster 9" },
  { id: 21, src: p22, alt: "Poster 10" },
  { id: 22, src: p23, alt: "Poster 11" },
  { id: 23, src: p24, alt: "Poster 12" },
  { id: 24, src: p25, alt: "Poster 13" },
  { id: 25, src: p26, alt: "Poster 14" },
];
const ProjectSlider = ({ images = fallbackImages }) => {
  const sliderKey = useMemo(() => {
    return images.map((img) => img.id).join("-");
  }, [images]);

  return (
    <>
      <section className=" py-6  md:py-10 overflow-hidden relative">
        <Swiper
          key={sliderKey}
          centeredSlides
          loop={true}
          grabCursor
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={15}
          touchRatio={1}
          touchAngle={45}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="w-full !overflow-visible pt-10 md:pt-24 "
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="!overflow-visible">
              {({ isActive }) => (
                <div
                  className={`
    relative w-full flex items-center justify-center 
    transition-all duration-700 ease-out rounded-lg 
    overflow-hidden transform-gpu bg-transparent
    ${
      isActive
        ? "blur-none scale-90 sm:scale-110 z-10 "
        : "blur-[1px] sm:blur-sm scale-95 sm:scale-90 z-0 shadow-md"
    }
  `}
                  style={{
                    transformOrigin: "center center",
                    willChange: "transform, filter",
                    height: "auto", // Let image control height
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.id}
                    width={400} // Or use container width
                    height={300} // Adjust as needed or based on image size
                    className="object-contain w-full h-full"
                    priority={index === 0}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ProjectSlider;
