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
import akki from "../../../public/testimonial/akkinova.png";
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

      "We have been working with Accolades Integrated for over five years and are extremely pleased with their services. Their team is highly dedicated and professional, consistently delivering creative solutions tailored to our requirements. Mr. Jagesh’s expert advice on digital marketing strategies has been particularly valuable, helping us achieve impactful results on various platforms. We highly recommend Accolades Integrated for their expertise and client-centric approach.",

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


  {
    id: 13,
    name: " Sujith Ben",
    role: "MGM Muthoot Hospitals Kozhencherry",
    content:
      "It's a wonderful and great experience with Accolades for last one year.The team behind each and every creatives are just awesome.Usually when it's very difficult and a zig zag game with the copy righters to give idea and wat comes at the end,here in Accolades the team used to deliver exact of wat in someone's mind.Ur dedication and patience to listen and draw the ideas are highly appreciated.Special thanks to MD- Nimmy for such a unique coordination with us.",
    avatar: user,
    bgColor: "bg-pink-100",
    quoteColor: "text-pink-300",
  },

  {
    id: 14,
    name: "Priya Kamath",
    role: "Client Experience",
    content:
      "The overall experience with Accolades was very good.. They are very patient and professional... They interract with the clients & try to understand their vision & requirements.... Even give innovative ideas on how to make the content more attractive & maintain content visibility online... So one can say its total value for money.",
    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",
  },
  {
    id: 15,
    name: "Shijin S",
    role: "Client Experience",
    content:
      "As a growing institution ,we were finding it difficult to cope with the requirements of social media platforms to improve our brand image and value.We had some worse experience with some other agencies and finally ended up with Accolades and they helped us to rewrite our expectations regarding such agencies .They helped us to slowly bulid our brand and got us in reach with our potential market .Apart from this the aditional benefits such as the patience to listen to our requirements and high grade services are also adds greater mileage to Accolades.So i highly recommend Accolades to all your social media requirements.",
    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 16,
    name: " SAJO ALBIN",
    role: "Client Experience",
    content:
      "The association with Accolades was a breath of fresh air of life to my company. They have been marketing my company successfully. Team Accolades are magicians in Digital Marketing.",
    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
]
const testimonials2 = [
  {
    id: 17,
    name: " Govind K G",
    role: "Client Experience",
    content:
      "Google ad experts with great content marketing strategies. This team can give you remarkable digital marketing ideas.",
    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",
  },
  {
    id: 18,
    name: "AKKIMOVA ENGINEERING",
    role: "Client Experience",
    content:
      "Its a great experience with Accolades Media & Communications for doing a great service.Overall a great company with Professionalism, expertise and excellent service.",
    avatar: akki,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 19,
    name: " Antony Thomas",
    role: "Client Experience",
    content:
      "Quality at its peak. Excellent after sales service & Dealing. The flagship is its work environment.Thank you accolades......",
    avatar: user,
    bgColor: "bg-pink-100",
    quoteColor: "text-pink-300",
  },
  {
    id: 20,
    name: "kavya menon",
    role: "Client Experience",
    content:
      "Working with Accolades was an absolute pleasure, extremely professional digital marketing companies in kerala..",
    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 21,
    name: " Rejeesh Kannyadath",
    role: "Client Experience",
    content:
      "I highly recommend Accolades to everyone for best quality service. They have best experience and expertise in d field.",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 22,
    name: " Con fuse Dpoet",
    role: "Client Experience",
    content:
      "Great service from good people.The team at Accolades was able to meet all my business needs and went above and beyond to make sure customisations were done",
    avatar: user,
    bgColor: "bg-pink-100",
    quoteColor: "text-pink-300",
  },
  {
    id: 23,
    name: "Shabi Salam",
    role: "Client Experience",
    content:
      "Thanks to Accoloades the traffic to our google page have increased considerably and our phone has been ringing ever since",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 24,
    name: "chippy vincent",
    role: "Client Experience",
    content:
      "Very professional Genuine and trustworthy. Use them !",
    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",
  },
  {
    id: 25,
    name: "Emmanual Joji",
    role: "Client Experience",
    content:
      "One of the best digital marketing company in kerala.",
    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 26,
    name: "Roncy Koruth",
    role: "Client Experience",
    content:
      "Accolades created a digital presence for us and attracted leads to our business",
    avatar: user,
    bgColor: "bg-blue-100",
    quoteColor: "text-blue-300",
  },
  {
    id: 27,
    name: "Jackson Jacob",
    role: "Client Experience",
    content:
      "The right choice for Google lead generation, Facebook & instagram lead generation, SEO & YouTube marketing.",
    avatar: user,
    bgColor: "bg-purple-100",
    quoteColor: "text-purple-300",
  },
  {
    id: 28,
    name: "Shamila Salim",
    role: "Client Experience",
    content:
      "Professional team with great support.. I am glad I am able to co-operate with this company..",
    avatar: user,
    bgColor: "bg-pink-100",
    quoteColor: "text-pink-300",
  },
  {
    id: 29,
    name: "Sreejith Menon",
    role: "Client Experience",
    content:
      "Great at creatives & a solid, overall digital marketing provider …. Keep it up, Accolades👍",
    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",
  },
  {
    id: 30,
    name: "Muhammed Muzammil",
    role: "Client Experience",
    content:
      "The best team for google integrated digital marketing like SEO,SMM,PR etc.",
    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",
  },
  {
    id: 31,
    name: "Magdy Ashraf",
    role: "Client Experience",
    content:
      "Very supportive and enthusiastic team. Guided our company the right way on ad campaigns.",
    avatar: user,
    bgColor: "bg-green-100",
    quoteColor: "text-green-300",
  },
  {
    id: 32,
    name: "Jimbssa Abraham",
    role: "Client Experience",
    content:
      "Highly creative and surprisingly insightful, Accolades impresses you with their flair.Jagesh and his team lives up to the name.",
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
        {/* <h3 className="font-normal text-[22px]  md:text-[32px] lg:text-[36px] text-[#3F3F3F] leading-[100%] md:leading-snug">
          What Our Customers Say
        </h3>
        <h3 className="text-[#3FB4BA] font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[100%] ">
          Client
        </h3> */}
        <h3 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] text-black leading-[100%] ">
          Testimonials
        </h3>
      </div>

      <div className="gap-0">
        <div className="py-1 ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2.5}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            // freeModeMomentum={false}
            allowTouchMove={false}
            speed={8000} // higher = slower movement
            autoplay={{
              delay: 0, // keeps motion continuous
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            style={{
              transitionTimingFunction: "linear", // removes easing curve
            }}
            // modules={[Autoplay]}
            // spaceBetween={20}
            // slidesPerView={1}
            // loop={true}

            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
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
            {testimonials2.map((t) => (
              <SwiperSlide key={t.id}>
                <div
                  className={`rounded-3xl p-6 md:p-8 min-h-[250px] ${t.bgColor} transition-shadow shadow-md hover:shadow-xl flex flex-col`}
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

                    <div className="w-full">
                      <p
                        className="text-gray-700 font-mont text-[13px] md:text-[14px] mb-4 cursor-pointer overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                        onClick={() => setSelectedTestimonial(t)}
                      >
                        {t.content}
                      </p>
                    </div>


                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-1 ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2.5}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            // freeModeMomentum={false}
            allowTouchMove={false}
            speed={8000} // ✅ same smooth speed
            autoplay={{
              delay: 0,
              reverseDirection: true, // ✅ opposite direction only
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            style={{
              transitionTimingFunction: "linear", // ✅ smooth continuous
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
                  className={`rounded-3xl p-6 md:p-8 min-h-[250px] ${t.bgColor} transition-shadow shadow-md hover:shadow-xl flex flex-col`}
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
                    <div className="w-full">
                      <p
                        className="text-gray-700 font-mont text-[13px] md:text-[14px] mb-4 cursor-pointer overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                        onClick={() => setSelectedTestimonial(t)}
                      >
                        {t.content}
                      </p>
                    </div>

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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50 p-4"

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
        className="containers py-2 md:py-8"
      />
    </section>
  );
};

export default Testimonials;
