"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import user from "../../../public/testimonial-dp.webp";
import bottom from "../../../public/home/bottom-line.webp";

import client from "../../../public/Group 213.webp";
import rak from "../../../public/clients/2c851e25ba22c1716cf66563d4157775812054ee.webp";

const testimonials = [
  {
    id: 1,
    name: "Cochin HT",
    role: "Director, Client Experience",
    content:
      "	Accolades is an excellent team to work with.Their approach has been more consultative than other agencies that we have worked with.We have collaborate with  them since last 3years and we are extremely happy with their service.",

    avatar: user,
    bgColor: "bg-red-100",
    quoteColor: "text-red-300",
  },
  {
    id: 2,
    name: "QIMS",
    role: "Director, Client Experience",
    content:
      "We are one of the client of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied in the professional way of works in website Management, Online Marketing and designing. M.D of the company Mr Jagesh always shows a professional approach in all the dealings and projects.. We suggest this excellent company for website Management, online marketing and SEO on the base of our experience for the last 2 years.. All the very Best for the Team Accolades...",

    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 3,
    name: "Sherbin Ahammed",
    role: "Director, Client Experience",
    content:
      "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 4,
    name: "English Cafe",
    role: "",
    content:
      "Hai, the last one year they are assisting us by giving their best in Google ads, very professional and responsible firm with aiming more results to client. Their client dealing is absolutely fine!",

    avatar: client,
    bgColor: "bg-cyan-100",
    quoteColor: "text-cyan-300",
  },
  {
    id: 5,
    name: "RAK Interiors",
    role: "",
    content:
      "Definitely great value for the money.. The very best company for professional digital marketing services.. Highly recommended",

    avatar: rak,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 6,
    name: "Sherbin Ahammed",
    role: "Director, Client Experience",
    content:
      "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="text-center font-mont space-y-2 md:space-y-0">
        <h3 className="font-normal text-[24px]  md:text-[32px] lg:text-[36px] text-[#3F3F3F] leading-[100%] md:leading-snug">
          What Our Customers Say
        </h3>
        <h3 className="text-[#3FB4BA] font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] ">
          Client
        </h3>
        <h3 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#3F3F3F] leading-[100%] ">
          Testimonials
        </h3>
      </div>

      <div className="py-14 ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3.5,
            },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className={`rounded-3xl p-2 md:p-8 min-h-[500px] ${t.bgColor} transition-shadow shadow-md hover:shadow-xl flex flex-col`}
              >
                <FaQuoteLeft
                  className={`text-5xl  ${t.quoteColor} absolute top-8 left-8 opacity-30`}
                />
                <div className="flex flex-col items-center text-center flex-grow">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={70}
                    height={70}
                    className="rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-700 font-mont text-[13px] md:text-[14px] mb-4 flex-grow">
                    {t.content}
                  </p>
                  <div className="mt-auto">
                  <p className="font-semibold font-mont">{t.name}</p>
                  <p className="text-sm text-gray-600 font-mont">{t.role}</p>
                  </div>
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
