"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import user from "../../../public/account.png";
import bottom from "../../../public/home/bottom-line.webp";

import client from "../../../public/Group 213.webp";
import rak from "../../../public/clients/2c851e25ba22c1716cf66563d4157775812054ee.webp";

const testimonials = [
  {
    id: 1,
    name: "Cochin HT",
    role: " Client Experience",
    content:
      "	Accolades is an excellent team to work with.Their approach has been more consultative than other agencies that we have worked with.We have collaborate with  them since last 3years and we are extremely happy with their service.",

    avatar: user,
    bgColor: "bg-red-100",
    quoteColor: "text-red-300",
  },
  {
    id: 2,
    name: "QIMS",
    role: " Client Experience",
    content:
      "We are one of the client of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied in the professional way of works in website Management, Online Marketing and designing. M.D of the company Mr Jagesh always shows a professional approach in all the dealings and projects.. We suggest this excellent company for website Management, online marketing and SEO on the base of our experience for the last 2 years.. All the very Best for the Team Accolades...",

    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 3,
    name: "Sherbin Ahammed",
    role: " Client Experience",
    content:
      "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 4,
    name: "English Cafe",
    role: "Client Experience",
    content:
      "Hai, the last one year they are assisting us by giving their best in Google ads, very professional and responsible firm with aiming more results to client. Their client dealing is absolutely fine!",

    avatar: client,
    bgColor: "bg-cyan-100",
    quoteColor: "text-cyan-300",
  },
  {
    id: 5,
    name: "RAK Interiors",
    role: "Client Experience",
    content:
      "Definitely great value for the money.. The very best company for professional digital marketing services.. Highly recommended",

    avatar: rak,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 6,
    name: "Sherbin Ahammed",
    role: " Client Experience ",
    content:
      "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 7,
    name: "Aju Abraham Mathew",
    role: "Client Experience",
    content:
  
    "We have been working with Accolades Integrated for over five years and are extremely pleased with their services. Their team is highly dedicated and professional, consistently delivering creative solutions tailored to our requirements. Mr. Jagesh’s expert advice on digital marketing strategies has been particularly valuable, helping us achieve impactful results on various platforms. We highly recommend Accolades Integrated for their expertise and client-centric approach."  ,

    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",  
  },

   {
    id: 8,
    name: "Akex Joseph",
    role: "Client Experience",
    content:
      "We are a client of Accolades Media. The professional approach taken in online marketing has brought us great satisfaction. This company is excellent for digital marketing, and we recommend it. Wishing you all the best",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 9,
    name: "Joseph Mampilly",
    role: "Client Experience",
    content:
    "Worked with accolades for few of my clients. I do prefer them for more of my upcoming projects. Prompt response from client service. Always there a call away",
    avatar: user,
    bgColor: "bg-pink-100",
    quoteColor: "text-pink-300",
  },
   {
    id: 10,
    name: "Nidhin Mohan",
    role: " MGM Muthoot Hospitals",
    content:
    "It's great pleasure to associate with Accolades for last one year and to understand better ideas and to get beautiful designs from them. For someone from medical fretanity I personally suggest Accolades for digital promo.Thanks to the entire team of Accolades",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 11,
    name: "Connect With GK",
    role: "Client Experience",
    content:
    "The future of marketing is certainly having a great influence on the way we participate in the cloud space. The Team at ACCOLADES are very passionate about their work & creative. My clients are getting tremendous results from their CAMPAIGN Management. Great work ...",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 12,
    name: " Jubeerich Bussiness",
    role: "Client Experience",
    content:
    "  Accolades media is one of the best professional SEO and Digital marketing providers. Thank you for providing us best services for our business.",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },

  
    ];


const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <section className="w-[90%] mx-auto md:w-[100%]  ">
      <div className=" text-center font-mont space-y-2 md:space-y-0 py-4">
        <h3 className="font-normal text-[22px]  md:text-[32px] lg:text-[36px] text-[#3F3F3F] leading-[100%] md:leading-snug">
          What Our Customers Say
        </h3>
        <h3 className="text-[#3FB4BA] font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] ">
          Client
        </h3>
        <h3 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#3F3F3F] leading-[100%] ">
          Testimonials
        </h3>
      </div>
      
    <div className="gap-0">
      <div className="py-1 ">
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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 2.5,
            },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className={`rounded-3xl p-2 md:p-8 min-h-[350px] ${t.bgColor} transition-shadow shadow-md hover:shadow-xl flex flex-col`}
              >
                <div className="flex flex-column-2 mt-auto justify-start mb-4 gap-4">
                  <div>
                   <Image
                    src={t.avatar}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full mb-4 object-cover"
                  />
                  </div>
                  <div>
                  <p className="font-semibold font-mont">{t.name}</p>
                  <p className="text-sm text-gray-600 font-mont">{t.role}</p>
                  </div>
                </div>
                <FaQuoteRight
                  className={`text-5xl  ${t.quoteColor} absolute top-8 right-8 opacity-30`}
                />
                <div className="flex flex-col items-center text-center flex-grow">
                  {/* <Image
                    src={t.avatar}
                    alt={t.name}
                    width={70}
                    height={70}
                    className="rounded-full mb-4 object-cover"
                  /> */}
                  <p className="text-gray-700 font-mont text-[13px] md:text-[14px] mb-4 flex-grow line-clamp-3 cursor-pointer"
                  onClick={() => setSelectedTestimonial(t)}>
                    {t.content}
                  </p>
                  {/* <div className="mt-auto">
                  <p className="font-semibold font-mont">{t.name}</p>
                  <p className="text-sm text-gray-600 font-mont">{t.role}</p>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       <div className="py-1 ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          // pagination={{ clickable: true }}
          autoplay={{
          delay:1000,
          reverseDirection: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 2.5,
            },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className={`rounded-3xl p-2 md:p-8 min-h-[350px] ${t.bgColor} transition-shadow shadow-md hover:shadow-xl flex flex-col`}
              >
                <div className="flex flex-column-2 mt-auto justify-start mb-4 gap-4">
                  <div>
                   <Image
                    src={t.avatar}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full mb-4 object-cover"
                  />
                  </div>
                  <div>
                  <p className="font-semibold font-mont">{t.name}</p>
                  <p className="text-sm text-gray-600 font-mont">{t.role}</p>
                  </div>
                </div>
                <FaQuoteRight
                  className={`text-5xl  ${t.quoteColor} absolute top-8 right-8 opacity-30`}
                />
                <div className="flex flex-col items-center text-center flex-grow">
                  {/* <Image
                    src={t.avatar}
                    alt={t.name}
                    width={70}
                    height={70}
                    className="rounded-full mb-4 object-cover"
                  /> */}
                  <p onClick={() => setSelectedTestimonial(t)}
                 className="text-gray-700 font-mont text-[13px] md:text-[14px] mb-4 flex-grow line-clamp-4 cursor-pointer">
                    {t.content}
                  </p>
                  {/* <div className="mt-auto">
                  <p className="font-semibold font-mont">{t.name}</p>
                  <p className="text-sm text-gray-600 font-mont">{t.role}</p>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {selectedTestimonial && (
  <div
    className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4"
    onClick={() => setSelectedTestimonial(null)}
  >
    <div
      className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full relative shadow-lg"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      <button
        onClick={() => setSelectedTestimonial(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        <X size={24} />
      </button>

      <div className="flex items-center gap-4 mb-4">
        <Image
          src={selectedTestimonial.avatar}
          alt={selectedTestimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold font-mont">{selectedTestimonial.name}</p>
          <p className="text-sm text-gray-600 font-mont">
            {selectedTestimonial.role}
          </p>
        </div>
      </div>

      <p className="text-gray-700 font-mont text-[14px] leading-relaxed">
        {selectedTestimonial.content}
      </p>
    </div>
  </div>
)}


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
