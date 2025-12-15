"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function WebDevHero() {
  const projects = [
    { img: "/new-web/cd.webp", alt: "Project 1" },
    { img: "/new-web/alp.png", alt: "Project 2" },
     { img: "/new-web/recr.png", alt: "Project 2" },
    { img: "/new-web/ab.webp", alt: "Project 3" },
  ];

  return (
    <section className="w-full font-mont bg-gradient-to-b from-[#eaf5fc] to-white pb-2 md:pb-10 pt-18 md:pt-26 lg:pt-30">
      <div className="containers  text-center items-center">

        {/* HEADING */}
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold leading-[24px] md:leading-tight">
          WEB DEVELOPMENT COMPANY IN
          <br className="hidden md:block"/>
          KOCHI — BUILD FAST, SCALABLE,
          <br className="hidden md:block"/>
          AND BEAUTIFUL WEBSITES
        </h1>

        {/* SUB-TEXT */}
        <p className="items-center justify-center text-center md:text-center mt-2 text-black font-medium text-[14px] md:text-[16px] leading-[106%] max-w-3xl mx-auto">
          Aceblocks Integrated is a trusted Web Development Company in Kochi. 
          We design and build websites that meet business goals. Our team blends 
          clean code, smart user experience, and modern tech to deliver sites 
          that load fast and convert. We focus on scalable solutions that grow 
          with your business.
        </p>

        {/* CTA BUTTON */}
        <Link href="/contact-us">
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-900 transition">
          Request a Call Back →
        </button>
        </Link>
        </div>

        {/* SWIPER SECTION */}
        <div className="mt-6 md:mt-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition bg-white border">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-[200px] md:h-[250px] xl:h-[300px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
    </section>
  );
}
