"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Image from "next/image";
// import bottom from "../../../../public/home/bottom-line.svg";

import cl1 from "../../../../public/Group 207.png";
import cl2 from "../../../../public/Group 208.png";
import cl3 from "../../../../public/Group 209.png";
import cl4 from "../../../../public/Group 210.png";
import cl5 from "../../../../public/Group 211.png";
import cl6 from "../../../../public/Group 212.png";
import cl7 from "../../../../public/Group 213.png";
import cl8 from "../../../../public/Group206.png";
import cl9 from "../../../../public/rak1.png";
import cl10 from "../../../../public/bus.png";
import cl11 from "../../../../public/fas.png";
import cl12 from "../../../../public/cdb.png";
import cl13 from "../../../../public/conf.png";
import cl14 from "../../../../public/nhc.png";
import cl15 from "../../../../public/sun.png";
import cl16 from "../../../../public/arya.png";
import cl17 from "../../../../public/arj.png";
import cl18 from "../../../../public/mioc1.png";
import cl19 from "../../../../public/cine1.png";
import cl20 from "../../../../public/clas.png";


const logos = [
  { id: 1, src: cl1, alt: "Client 1" },
  { id: 2, src: cl2, alt: "Client 2" },
  { id: 3, src: cl3, alt: "Client 3" },
  { id: 4, src: cl4, alt: "Client 4" },
  { id: 5, src: cl5, alt: "Client 5" },
  { id: 6, src: cl6, alt: "Client 6" },
  { id: 7, src: cl7, alt: "Client 7" },
  { id: 8, src: cl8, alt: "Client 8" },
  { id: 9, src: cl9, alt: "Client 9" },
  { id: 10, src: cl10, alt: "Client 10" },
  { id: 11, src: cl11, alt: "Client 11" },
  { id: 12, src: cl12, alt: "Client 12" },
  { id: 13, src: cl13, alt: "Client 13" },
  { id: 14, src: cl14, alt: "Client 14" },
  { id: 15, src: cl15, alt: "Client 15" },
  { id: 16, src: cl16, alt: "Client 16" },
  { id: 17, src: cl17, alt: "Client 17" },
  { id: 18, src: cl18, alt: "Client 18" },
  { id: 19, src: cl19, alt: "Client 19" },
  { id: 20, src: cl20, alt: "Client 20" },
];

const OurClients = () => {
  return (
    <>
      <section className="py-10  ">
        <h2 className="text-center text-3xl sm:text-4xl font-mont font-bold text-[#0199A4] mb-5">
        Our Clients
      </h2>

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
      {/* <Image
        src={bottom}
        alt="bottom-line"
        className="containers py-6 md:py-12 lg:py-20"
      /> */}
    </>
  );
};

export default OurClients;
