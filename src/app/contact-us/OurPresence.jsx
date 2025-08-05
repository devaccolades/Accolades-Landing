// import React from "react";

// export default function OurPresence() {
//   return (
//     <>
//       <section className="containers mx-auto py-6">
//         <div className="bg-white rounded-2xl shadow-xl px-4 py-8">

//           <h2 className="text-center font-mont text-5xl md:text-7xl font-extrabold text-[#3FB4BA] mb-6">
//             Our Presence
//           </h2>
//           <p className="text-center font-mont text-gray-600 text-md mx-auto  mb-10">
//             We operate globally and have strong local presence across India as a leading digital marketing
//             company. We’re strategically positioned to meet diverse client needs worldwide with headquarters
//             at Kochi branches at Trivandrum, Calicut, Mumbai, and Bengaluru.
//           </p>
//         </div>
//       </section>
//       <section className="containers mx-auto ">
//         <div className="py-10">

//           <div className="flex flex-wrap justify-between gap-4 text-[18px] md:text-[28px]">
//             <button className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300">
//               Kochi (HQ)
//             </button>
//             <button className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300">
//               Calicut
//             </button>
//             <button className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300">
//               Trivandrum
//             </button>
//             <button className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300">
//               Bengaluru
//             </button>
//             <button className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300">
//               Mumbai
//             </button>
//           </div>
//         </div>

//       </section>
//     </>
//   );
// }

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function OurPresence() {
  const locations = [
    "Kochi (HQ)",
    "Calicut",
    "Trivandrum",
    "Bengaluru",
    "Mumbai",
  ];

  return (
    <>
      <section className="relative containers mx-auto py-2 md:py-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-center font-mont font-bold text-[36px] md:text-[50px] lg:text-[64px] leading-[96%] text-[#3FB4BA] mb-4">
            Our Presence
          </h2>
          <p className="text-center font-mont text-gray-600 text-[13px] mdtext-[16px] lg:text-[18px] mx-auto mb-4 md:mb-10">
            We operate globally and have strong local presence across India as a
            leading digital marketing company. We’re strategically positioned to
            meet diverse client needs worldwide with headquarters at Kochi,
            branches at Trivandrum, Calicut, Mumbai, and Bengaluru.
          </p>
        </div>
      </section>

      <section className="relative containers mx-auto">
        <div className="py-6">
          {/* Desktop view */}
          <div className="hidden md:flex flex-wrap justify-between gap-4 text-[18px] md:text-[24px]">
            {locations.map((loc) => (
              <button
                key={loc}
                className="bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300"
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Mobile swiper */}
          <div className="block md:hidden">
            <Swiper spaceBetween={12} slidesPerView={1.6}>
              {locations.map((loc) => (
                <SwiperSlide key={loc}>
                  <button className="w-full bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300">
                    {loc}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
