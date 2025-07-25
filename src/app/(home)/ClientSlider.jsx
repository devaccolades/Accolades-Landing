"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Image from "next/image";
import bottom from "../../../public/home/bottom-line.svg";

import cl1 from "../../../public/Group 207.png";
import cl2 from "../../../public/Group 208.png";
import cl3 from "../../../public/Group 209.png";
import cl4 from "../../../public/Group 210.png";
import cl5 from "../../../public/Group 211.png";
import cl6 from "../../../public/Group 212.png";
import cl7 from "../../../public/Group 213.png";
import cl8 from "../../../public/Group206.png";

const logos = [
  { id: 1, src: cl1, alt: "Client 1" },
  { id: 2, src: cl2, alt: "Client 2" },
  { id: 3, src: cl3, alt: "Client 3" },
  { id: 4, src: cl4, alt: "Client 4" },
  { id: 5, src: cl5, alt: "Client 5" },
  { id: 6, src: cl6, alt: "Client 6" },
  { id: 7, src: cl7, alt: "Client 7" },
  { id: 8, src: cl8, alt: "Client 8" },
];

const ClientSlider = () => {
  return (
    <>
      <section className="py-10">
        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          freeMode={true}
          grabCursor={true}
          slidesPerView="auto"
          spaceBetween={20}
          speed={4000}
          allowTouchMove={false}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
          modules={[Autoplay, FreeMode]}
          className="w-full"
        >
          {logos.map((logo) => (
            <SwiperSlide
              key={logo.id}
              className="flex items-center justify-center"
            >
              <div className="w-[170px] h-[100px]  relative transition-transform duration-300 hover:scale-105">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Image
        src={bottom}
        alt="bottom-line"
        className="containers py-6 md:py-12 lg:py-20"
      />
    </>
  );
};

export default ClientSlider;
