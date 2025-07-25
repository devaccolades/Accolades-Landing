"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import user from "../../../public/testimonial-dp.png";
import bottom from "../../../public/home/bottom-line.svg";

const testimonials = [
  {
    id: 1,
    name: "Mr. Nidhin Ramesh",
    role: "Director, Client Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur. Egestas turpis gravida urna habitasse cursus duis nec condimentum. Nec integer facilisis platea amet sem. Facilisis aliquam luctus leo erat nunc. Aenean proin sed senectus ut.",
    avatar: user,
    bgColor: "bg-red-100",
    quoteColor: "text-red-300",
  },
  {
    id: 2,
    name: "Mr. Nidhin Ramesh",
    role: "Director, Client Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur. Egestas turpis gravida urna habitasse cursus duis nec condimentum. Nec integer facilisis platea amet sem. Facilisis aliquam luctus leo erat nunc. Aenean proin sed senectus ut.",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 3,
    name: "Mr. Nidhin Ramesh",
    role: "Director, Client Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur. Egestas turpis gravida urna habitasse cursus duis nec condimentum. Nec integer facilisis platea amet sem. Facilisis aliquam luctus leo erat nunc. Aenean proin sed senectus ut.",
    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 4,
    name: "Mr. Nidhin Ramesh",
    role: "Director, Client Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur. Egestas turpis gravida urna habitasse cursus duis nec condimentum. Nec integer facilisis platea amet sem. Facilisis aliquam luctus leo erat nunc. Aenean proin sed senectus ut.",
    avatar: user,
    bgColor: "bg-orange-100",
    quoteColor: "text-orange-300",
  },
  {
    id: 5,
    name: "Mr. Nidhin Ramesh",
    role: "Director, Client Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur. Egestas turpis gravida urna habitasse cursus duis nec condimentum. Nec integer facilisis platea amet sem. Facilisis aliquam luctus leo erat nunc. Aenean proin sed senectus ut.",
    avatar: user,
    bgColor: "bg-orange-100",
    quoteColor: "text-orange-300",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="text-center font-mont space-y-2 md:space-y-0">
        <h3 className="font-normal text-[24px]  md:text-[32px] lg:text-[36px] text-[#3F3F3F] leading-[100%] md:leading-snug">
          What Our Customers Say
        </h3>
        <h3 className="text-[#3FB4BA] font-semibold text-[40px] md:text-[64px] lg:text-[76px] leading-[100%] md:leading-snug">
          Client
        </h3>
        <h3 className="font-bold text-[48px]  md:text-[72px] lg:text-[86px] text-[#3F3F3F] leading-[100%] md:leading-snug">
          Testimonials
        </h3>
      </div>

      <div className="py-10 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className={`rounded-3xl p-6 sm:p-8 h-full ${t.bgColor} transition-shadow shadow-md hover:shadow-xl`}
              >
                <FaQuoteLeft
                  className={`text-5xl  ${t.quoteColor} absolute top-8 left-8 opacity-30`}
                />
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 mb-4">{t.content}</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Image
        src={bottom}
        alt="bottom-line"
        className="containers py-6 md:py-12 lg:py-20"
      />
    </section>
  );
};

export default Testimonials;
