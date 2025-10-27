"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";

import bottom from "../../../public/home/bottom-line.webp";

import client from "../../../public/Group 213.webp";
import rak from "../../../public/clients/2c851e25ba22c1716cf66563d4157775812054ee.webp";
import user from "../../../public/account.png";

// const testimonials = [
//   {
//     id: 1,
//     name: "ASWINI SHARMA",
//     title: "Director",
//     text: "Accolades is an excellent team to work with comprising of very talented and dedicated staff. They were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time.",
//     bg: "bg-purple-100",
//     logo: user,
//   },
//   {
//     id: 2,
//     name: "ASWINI SHARMA",
//     title: "Director",
//     text: "Accolades is an excellent team to work with comprising of very talented and dedicated staff. They were patient enough to listen to my requirements and guide me with the best possible social network.",
//     bg: "bg-pink-100",
//     logo: user,
//   },
//   {
//     id: 3,
//     name: "ASWINI SHARMA",
//     title: "Director",
//     text: "Accolades is an excellent team to work with comprising of very talented and dedicated staff. They want the best social media marketing team to scale up their business.",
//     bg: "bg-blue-100",
//     logo: user,
//   },
//   {
//     id: 4,
//     name: "ASWINI SHARMA",
//     title: "Director",
//     text: "Accolades is an excellent team to work with comprising of very talented and dedicated staff. They were patient enough to listen to my requirements and guide me with the best possible social media strategy.",
//     bg: "bg-sky-100",
//     logo: user,
//   },
// ];


const testimonials = [
  {
    id: 1,
    name: "Cochin HT",
    title: "Director, Client Experience",
    text:
      "	Accolades is an excellent team to work with.Their approach has been more consultative than other agencies that we have worked with.We have collaborate with  them since last 3years and we are extremely happy with their service.",

    logo: user,
    bg: "bg-red-100",
    
  },
  {
    id: 2,
    name: "QIMS",
    title: "Director, Client Experience",
    text:
      "We are one of the client of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied in the professional way of works in website Management, Online Marketing and designing. M.D of the company Mr Jagesh always shows a professional approach in all the dealings and projects.. We suggest this excellent company for website Management, online marketing and SEO on the base of our experience for the last 2 years.. All the very Best for the Team Accolades...",

    logo: user,
    bg: "bg-blue-100",
   
  },
  {
    id: 3,
    name: "Sherbin Ahammed",
    title: "",
    text:
      "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

    logo: user,
    bg: "bg-purple-100",
    
  },
  {
    id: 4,
    name: "English Cafe",
    title: "",
    text:
      "Hai, the last one year they are assisting us by giving their best in Google ads, very professional and responsible firm with aiming more results to client. Their client dealing is absolutely fine!",

    logo: client,
    bg: "bg-cyan-100",
    
  },
  {
    id: 5,
    name: "RAK Interiors",
    title: "",
    text:
      "Definitely great value for the money.. The very best company for professional digital marketing services.. Highly recommended",

    logo: rak,
    bg: "bg-blue-100",
    
  },
  {
    id: 6,
    name: "Sherbin Ahammed",
    title: "",
    text:
      "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

    logo: user,
    bg: "bg-purple-100",
    
  },
  {
    id: 7,
    name: "Aju Abraham Mathew",
    title: "",
    text:
  
    "We have been working with Accolades Integrated for over five years and are extremely pleased with their services. Their team is highly dedicated and professional, consistently delivering creative solutions tailored to our requirements. Mr. Jagesh’s expert advice on digital marketing strategies has been particularly valuable, helping us achieve impactful results on various platforms. We highly recommend Accolades Integrated for their expertise and client-centric approach."  ,

    logo: user,
    bg: "bg-green-100",
     
  },

   {
    id: 8,
    name: "Akex Joseph",
    title: "",
    text:
      "We are a client of Accolades Media. The professional approach taken in online marketing has brought us great satisfaction. This company is excellent for digital marketing, and we recommend it. Wishing you all the best",
    logo: user,
    bg: "bg-blue-100",
  
  },
  {
    id: 9,
    name: "Joseph Mampilly",
    title: "",
    text:
    "Worked with accolades for few of my clients. I do prefer them for more of my upcoming projects. Prompt response from client service. Always there a call away",
    logo: user,
    bg: "bg-pink-100",
  
  },
   {
    id: 10,
    name: "Nidhin Mohan",
    title: "Graphic Designer, MGM Muthoot Hospitals",
    text:
    "It's great pleasure to associate with Accolades for last one year and to understand better ideas and to get beautiful designs from them. For someone from medical fretanity I personally suggest Accolades for digital promo.Thanks to the entire team of Accolades",
    logo: user,
    bg: "bg-blue-100",
    
  },
  {
    id: 11,
    name: "Connect With GK",
    title: "",
    text:
    "The future of marketing is certainly having a great influence on the way we participate in the cloud space. The Team at ACCOLADES are very passionate about their work & creative. My clients are getting tremendous results from their CAMPAIGN Management. Great work ...",
    logo: user,
    bg: "bg-red-100",
   
  },
  {
    id: 12,
    name: "Jubeerich Bussiness",
    title: "",
    text:
    "  Accolades media is one of the best professional SEO and Digital marketing providers. Thank you for providing us best services for our business.",
    logo: user,
    bg: "bg-green-100",
    
  },

  
    ];

export default function TestimonialSlider() {
  return (
    <section className="font-mont py-10  bg-white-50">
      <div className="text-center pb-10 font-mont space-y-2 md:space-y-0">
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

      {/* First Continuous Slider (Left to Right) */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        loopAdditionalSlides={testimonials.length}
        freeMode={{ enabled: true, momentum: false }}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        grabCursor={true}
        // className="pb-1"
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className="pb-1 "
      >
        {testimonials.concat(testimonials).map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`${item.bg} p-2   rounded-3xl shadow-md h-full flex flex-col justify-between`}
            >
              <div className="flex items-center mb-1">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-700 rounded-2xl pt-4 px-4 pb-0 min-h-[270px] bg-white text-[10px] md:text-[12px] lg:text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Continuous Slider (Right to Left) */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        loopAdditionalSlides={testimonials.length}
        freeMode={{ enabled: true, momentum: false }}
        speed={6000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        grabCursor={true}
        // className="pb-10 mt-10"
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className="pb-10 mt-10 "
    
      >
        <div className="min-h-[480px]">
        {testimonials.concat(testimonials).map((item, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`${item.bg} p-2 rounded-3xl shadow-md h-full flex flex-col justify-between`}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-700 rounded-2xl px-4 pt-4 pb-0 min-h-[270px] bg-white text-[10px] md:text-[12px] lg:text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>

       <Image
              src={bottom}
              alt="bottom-line"
              className="containers py-6 md:py-12 lg:py-20"
            />
            
    </section>
  );
}
