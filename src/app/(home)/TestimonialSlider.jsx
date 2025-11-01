

// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import "swiper/css";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import bottom from "../../../public/home/bottom-line.webp";

// import client from "../../../public/Group 213.webp";
// import rak from "../../../public/clients/2c851e25ba22c1716cf66563d4157775812054ee.webp";
// import user from "../../../public/account.png";


// const testimonials = [
//   {
//     id: 1,
//     name: "Cochin HT",
//     title: "Director, Client Experience",
//     text:
//       "	Accolades is an excellent team to work with.Their approach has been more consultative than other agencies that we have worked with.We have collaborate with  them since last 3years and we are extremely happy with their service.",

//     logo: user,
//     bg: "bg-red-100",
    
//   },
//   {
//     id: 2,
//     name: "QIMS",
//     title: "Director, Client Experience",
//     text:
//       "We are one of the client of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied in the professional way of works in website Management, Online Marketing and designing. M.D of the company Mr Jagesh always shows a professional approach in all the dealings and projects.. We suggest this excellent company for website Management, online marketing and SEO on the base of our experience for the last 2 years.. All the very Best for the Team Accolades...",

//     logo: user,
//     bg: "bg-blue-100",
   
//   },
//   {
//     id: 3,
//     name: "Sherbin Ahammed",
//     title: "",
//     text:
//       "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

//     logo: user,
//     bg: "bg-purple-100",
    
//   },
//   {
//     id: 4,
//     name: "English Cafe",
//     title: "",
//     text:
//       "Hai, the last one year they are assisting us by giving their best in Google ads, very professional and responsible firm with aiming more results to client. Their client dealing is absolutely fine!",

//     logo: client,
//     bg: "bg-cyan-100",
    
//   },
//   {
//     id: 5,
//     name: "RAK Interiors",
//     title: "",
//     text:
//       "Definitely great value for the money.. The very best company for professional digital marketing services.. Highly recommended",

//     logo: rak,
//     bg: "bg-blue-100",
    
//   },
//   {
//     id: 6,
//     name: "Sherbin Ahammed",
//     title: "",
//     text:
//       "Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",

//     logo: user,
//     bg: "bg-purple-100",
    
//   },
//   {
//     id: 7,
//     name: "Aju Abraham Mathew",
//     title: "",
//     text:
  
//     "We have been working with Accolades Integrated for over five years and are extremely pleased with their services. Their team is highly dedicated and professional, consistently delivering creative solutions tailored to our requirements. Mr. Jagesh’s expert advice on digital marketing strategies has been particularly valuable, helping us achieve impactful results on various platforms. We highly recommend Accolades Integrated for their expertise and client-centric approach."  ,

//     logo: user,
//     bg: "bg-green-100",
     
//   },

//    {
//     id: 8,
//     name: "Akex Joseph",
//     title: "",
//     text:
//       "We are a client of Accolades Media. The professional approach taken in online marketing has brought us great satisfaction. This company is excellent for digital marketing, and we recommend it. Wishing you all the best",
//     logo: user,
//     bg: "bg-blue-100",
  
//   },
//   {
//     id: 9,
//     name: "Joseph Mampilly",
//     title: "",
//     text:
//     "Worked with accolades for few of my clients. I do prefer them for more of my upcoming projects. Prompt response from client service. Always there a call away",
//     logo: user,
//     bg: "bg-pink-100",
  
//   },
//    {
//     id: 10,
//     name: "Nidhin Mohan",
//     title: "MGM Muthoot Hospitals",
//     text:
//     "It's great pleasure to associate with Accolades for last one year and to understand better ideas and to get beautiful designs from them. For someone from medical fretanity I personally suggest Accolades for digital promo.Thanks to the entire team of Accolades",
//     logo: user,
//     bg: "bg-blue-100",
    
//   },
//   {
//     id: 11,
//     name: "Connect With GK",
//     title: "",
//     text:
//     "The future of marketing is certainly having a great influence on the way we participate in the cloud space. The Team at ACCOLADES are very passionate about their work & creative. My clients are getting tremendous results from their CAMPAIGN Management. Great work ...",
//     logo: user,
//     bg: "bg-red-100",
   
//   },
//   {
//     id: 12,
//     name: "Jubeerich Bussiness",
//     title: "",
//     text:
//     "  Accolades media is one of the best professional SEO and Digital marketing providers. Thank you for providing us best services for our business.",
//     logo: user,
//     bg: "bg-green-100",
    
//   },

  
//     ];

// export default function TestimonialSlider() {
//   const repeatedSlides = testimonials.concat(testimonials); // Doubled for smooth looping

//   return (
//     <section className="font-mont py-10 bg-white">
//       <div className="text-center pb-10 font-mont space-y-2 md:space-y-0">
//         <h3 className="font-normal text-[24px] md:text-[32px] lg:text-[36px] text-[#3F3F3F] leading-[100%] md:leading-snug">
//           What Our Customers Say
//         </h3>
//         <h3 className="text-[#3FB4BA] font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[100%]">
//           Client
//         </h3>
//         <h3 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] text-[#3F3F3F] leading-[100%]">
//           Testimonials
//         </h3>
//       </div>

//       {/* First Continuous Slider (Left to Right) */}
//       <Swiper
//         modules={[Autoplay, FreeMode]}
//         slidesPerView="auto"
//         spaceBetween={20}
//         loop={true}
//         // loopedSlides={testimonials.length}
//         freeMode={true}
//         speed={6000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//         }}
//         allowTouchMove={true}
//         grabCursor={true}
//         breakpoints={{
//           768: { slidesPerView: 2.2 },
//           1024: { slidesPerView: 3.2 },
//         }}
//         onSwiper={(swiper) => {
//           swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
//         }}
//         onTouchEnd={(swiper) => swiper.autoplay.start()}
//         className="pb-1 "
//       >
//         {repeatedSlides.map((item, i) => (
//           <SwiperSlide key={i}>
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               className={`${item.bg} p-2 rounded-3xl shadow-md h-full flex flex-col justify-between`}
//             >
//               <div className="flex items-center mb-1">
//                 <Image
//                   src={item.logo}
//                   alt={item.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full mr-3 object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-[12px] xl:text-sm text-gray-800">{item.name}</h4>
//                   <p className="text-[12px] xl:text-sm text-gray-500">{item.title}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 rounded-2xl pt-4 px-4 pb-0 min-h-[270px] bg-white text-[10px] md:text-[12px] xl:text-sm leading-relaxed">
//                 {item.text}
//               </p>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Second Continuous Slider (Right to Left) */}
//       <Swiper
//         modules={[Autoplay, FreeMode]}
//         slidesPerView="auto"
//         spaceBetween={20}
//         loop={true}
//         // loopedSlides={testimonials.length}
//         freeMode={true}
//         speed={6000}
//         autoplay={{
//           delay: 0,
//           reverseDirection: true,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//         }}
//         allowTouchMove={true}
//         grabCursor={true}
//         breakpoints={{
//           768: { slidesPerView: 2.2 },
//           1024: { slidesPerView: 3.2 },
//         }}
//         onSwiper={(swiper) => {
//           swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
//         }}
//         onTouchEnd={(swiper) => swiper.autoplay.start()}
//         className="pb-10 mt-10"
//       >
//         {repeatedSlides.map((item, i) => (
//           <SwiperSlide key={i}>
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               className={`${item.bg} p-2 rounded-3xl shadow-md h-full flex flex-col justify-between`}
//             >
//               <div className="flex items-center mb-4">
//                 <Image
//                   src={item.logo}
//                   alt={item.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full mr-3 object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-[12px] xl:text-sm text-gray-800">{item.name}</h4>
//                   <p className="text-[12px] xl:text-sm text-gray-500">{item.title}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 rounded-2xl px-4 pt-4 pb-0 min-h-[270px] bg-white text-[10px] md:text-[12px] xl:text-sm leading-relaxed">
//                 {item.text}
//               </p>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Image
//         src={bottom}
//         alt="bottom-line"
//         className="containers py-6 md:py-12 lg:py-20"
//       />
//     </section>
//   );
// }


"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Cochin HT",
    role: "Director, Client Experience",
    content: "Accolades is an excellent team to work with. Their approach has been more consultative than other agencies that we have worked with. We have collaborated with them since last 3 years and we are extremely happy with their service.",
    rating: 5,
    gradient: "from-teal-400 via-cyan-500 to-blue-500"
  },
  {
    id: 2,
    name: "QIMS",
    role: "Director, Client Experience",
    content: "We are one of the clients of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied with the professional way of work in website Management, Online Marketing and designing.",
    rating: 5,
    gradient: "from-cyan-400 via-teal-500 to-emerald-500"
  },
  {
    id: 3,
    name: "Sherbin Ahammed",
    role: "Director, Client Experience",
    content: "Accolades is an excellent team to work with comprising of very talented and dedicated staff. They were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time.",
    rating: 5,
    gradient: "from-teal-500 via-cyan-400 to-sky-500"
  },
  {
    id: 4,
    name: "English Cafe",
    role: "Client",
    content: "The last one year they are assisting us by giving their best in Google ads, very professional and responsible firm with aiming more results to client. Their client dealing is absolutely fine!",
    rating: 5,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500"
  },
  {
    id: 5,
    name: "RAK Interiors",
    role: "Client",
    content: "Definitely great value for the money. The very best company for professional digital marketing services. Highly recommended.",
    rating: 5,
    gradient: "from-sky-400 via-cyan-500 to-teal-500"
  },
  {
    id: 6,
    name: "Aju Abraham Mathew",
    role: "Client",
    content: "We have been working with Accolades Integrated for over five years and are extremely pleased with their services. Their team is highly dedicated and professional, consistently delivering creative solutions tailored to our requirements.",
    rating: 5,
    gradient: "from-cyan-500 via-teal-400 to-emerald-500"
  },
  {
    id: 7,
    name: "Alex Joseph",
    role: "Client",
    content: "We are a client of Accolades Media. The professional approach taken in online marketing has brought us great satisfaction. This company is excellent for digital marketing, and we recommend it.",
    rating: 5,
    gradient: "from-teal-400 via-cyan-500 to-blue-400"
  },
  {
    id: 8,
    name: "Joseph Mampilly",
    role: "Client",
    content: "Worked with accolades for few of my clients. I do prefer them for more of my upcoming projects. Prompt response from client service. Always there a call away.",
    rating: 5,
    gradient: "from-emerald-500 via-teal-500 to-cyan-400"
  },
  {
    id: 9,
    name: "Nidhin Mohan",
    role: "Graphic Designer, MGM Muthoot Hospitals",
    content: "It's great pleasure to associate with Accolades for last one year and to understand better ideas and to get beautiful designs from them. For someone from medical fraternity I personally suggest Accolades for digital promo.",
    rating: 5,
    gradient: "from-cyan-400 via-teal-500 to-sky-400"
  },
  {
    id: 10,
    name: "Connect With GK",
    role: "Client",
    content: "The Team at ACCOLADES are very passionate about their work & creative. My clients are getting tremendous results from their CAMPAIGN Management. Great work!",
    rating: 5,
    gradient: "from-sky-500 via-cyan-500 to-teal-500"
  },
  {
    id: 11,
    name: "Jubeerich Business",
    role: "Client",
    content: "Accolades media is one of the best professional SEO and Digital marketing providers. Thank you for providing us best services for our business.",
    rating: 5,
    gradient: "from-teal-500 via-emerald-400 to-cyan-500"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  const goNext = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 left-1/2 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with elegant effect */}
        <div className="text-center mb-20">
          <div className="inline-block relative mb-6">
            <h3 className="text-xl md:text-2xl font-light text-gray-600 tracking-wider mb-4">
              WHAT OUR CLIENTS SAY
            </h3>
            <h2 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-600 to-teal-700 animate-gradient">
                TESTIMONIALS
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
        </div>

        {/* Main testimonial display */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative min-h-[500px] perspective-1000">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (activeIndex + 1) % testimonials.length;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 z-20 translate-x-0'
                      : isPrev
                      ? 'opacity-30 scale-75 z-10 -translate-x-1/2 blur-sm'
                      : isNext
                      ? 'opacity-30 scale-75 z-10 translate-x-1/2 blur-sm'
                      : 'opacity-0 scale-50 -z-10'
                  }`}
                  style={{
                    transform: `
                      ${isActive ? 'translateX(0) scale(1)' : ''}
                      ${isPrev ? 'translateX(-50%) scale(0.75)' : ''}
                      ${isNext ? 'translateX(50%) scale(0.75)' : ''}
                    `
                  }}
                >
                  <div className={`relative bg-gradient-to-br ${testimonial.gradient} p-1 rounded-3xl shadow-2xl`}>
                    <div className="bg-white rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                      {/* Quote marks */}
                      <div className="absolute -top-6 -left-6 w-20 h-20 text-8xl opacity-10">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-br ${testimonial.gradient}`}>"</span>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-teal-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 text-lg md:text-2xl leading-relaxed text-center mb-8 font-light">
                        {testimonial.content}
                      </p>

                      {/* Author */}
                      <div className="flex flex-col items-center">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-4 shadow-xl ring-4 ring-white`}>
                          <span className="text-white text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <h4 className="text-gray-900 text-xl font-bold mb-1">{testimonial.name}</h4>
                        <p className={`text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient} font-medium`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:shadow-teal-500/50"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hover:shadow-cyan-500/50"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-3 flex-wrap max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-110'
                  : 'scale-100 opacity-50 hover:opacity-100'
              }`}
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg ring-2 ${
                index === activeIndex ? 'ring-teal-500' : 'ring-gray-300'
              }`}>
                <span className="text-white text-lg font-bold">{testimonial.name.charAt(0)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;