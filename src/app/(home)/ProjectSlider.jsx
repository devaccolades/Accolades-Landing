"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from "next/image";
import topline from "../../../public/home/top-line.svg";

import alappat from "../../../public/home/alappat.png";
import family from "../../../public/home/family.png";
import niahara from "../../../public/home/nihara.png";
import silk from "../../../public/home/silk_galeria.png";
import fut from "../../../public/creative/futura04-min.jpg";
import cure from "../../../public/creative/branding/curegarden 05 copy-min (1).jpg";

const fallbackImages = [
  { id: 4, src: niahara, alt: "Niahara" },
  { id: 1, src: alappat, alt: "Alappat" },
  { id: 2, src: family, alt: "Family" },
  { id: 3, src: niahara, alt: "Niahara" },
  // { id: 4, src: fut, alt: "futura" },
  // { id: 5, src: cure, alt: "cure garden" },
  { id: 6, src: silk, alt: "silk" },
  { id: 5, src: family, alt: "Family" },
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
            delay: 500,
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
      {/* <Image
        src={topline}
        alt="line"
        className="containers h-auto py-6 md:py-12 lg:py-20"
      /> */}
    </>
  );
};

export default ProjectSlider;
