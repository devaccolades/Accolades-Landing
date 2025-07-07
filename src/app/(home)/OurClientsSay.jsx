



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import play from "../../../public/images/play-circle.svg";
// import c1 from "../../../public/images/client1.png";
// import c2 from "../../../public/images/client2.png";
// import national from '../../../public/images/national.png';
// import cidbi from '../../../public/images/cidbi.png';

// const videotestimonials = [
//   {
//     video: "/images/v-video.mp4",
//     client: "Cidbi",
//     video_thumbnail: c2,
//     name: "Arun Menon",
//     position: "Director",
//     video_type: "Corporate Video",
//   },
//   {
//     video: "/images/v-video.mp4",
//     client: "Skyline Builders",
//     video_thumbnail: c1,
    
//     name: "Josbin Itty",
//     position: "Marketing Manager",
//     video_type: "Corporate Video",
//   },
// ];

// textTestinmonial =[
//     {
   
//     client: "Cidbi",
//     video_thumbnail: c2,
//     logo: cidbi,
//     description:
//       "They understood our brand voice perfectly and translated it into a corporate video that still gets compliments a year later",
//     name: "Arun Menon",
//     position: "Director",
//     video_type: "Corporate Video",
//   },
//   {
    
//     client: "Skyline Builders",
//     video_thumbnail: c1,
//     logo: national,
//     description:
//       "They understood our brand voice perfectly and translated it into a corporate video that still gets compliments a year later",
//     name: "Josbin Itty",
//     position: "Marketing Manager",
//     video_type: "Corporate Video",
//   },

// ]

// const WhatOurClientsSay = () => {
//   const [playingIndex, setPlayingIndex] = useState(null);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16">
//       <div className="text-center mb-12">
//         <div className="flex justify-center items-center gap-4 mb-2">
//           <div className="w-8 h-px bg-teal-600" />
//           <p className="text-sm font-medium text-gray-600">Why Accolades</p>
//           <div className="w-8 h-px bg-teal-600" />
//         </div>
//         <h2 className="text-3xl md:text-4xl font-semibold">
//           What Our Clients <span className="text-teal-600">Say</span>
//         </h2>
//       </div>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1.2}
//         breakpoints={{
//           768: { slidesPerView: 1.2 },
//           1024: { slidesPerView: 1.5 },
//         }}
//       >
//         {videotestimonials.map((item, index) => (
//           <SwiperSlide key={`video-${index}`}>
//             <div className="relative h-[500px] rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
//               {playingIndex === index ? (
//                 <video
//                   src={item.video}
//                   controls
//                   autoPlay
//                   className="w-full h-full object-cover rounded-2xl"
//                   onEnded={() => setPlayingIndex(null)}
//                 />
//               ) : (
//                 <>
//                   <Image src={item.video_thumbnail} alt={item.name} fill className="object-cover rounded-2xl" />
//                   <Image
//                     src={play}
//                     alt="Play"
//                     width={60}
//                     height={60}
//                     className="absolute inset-0 m-auto cursor-pointer hover:scale-105 transition"
//                     onClick={() => setPlayingIndex(index)}
//                   />
//                 </>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}

//         {textTestimonials.map((item, index) => (
//           <SwiperSlide key={`text-${index}`}>
//             <div className="flex flex-col bg-[#f0f4f8] rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-[500px] justify-center items-center p-8 gap-6 text-center">
//               <Image src={item.logo} alt="logo" width={80} height={80} className="object-contain" />
//               <p className="text-gray-700 text-lg max-w-md">{item.description}</p>
//               <div className="flex flex-col items-center gap-1">
//                 <p className="text-base font-semibold">{item.name}</p>
//                 <p className="text-sm text-gray-500">{item.position} - {item.video_type}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default WhatOurClientsSay;



"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import play from "../../../public/images/play-circle.svg";
import c1 from "../../../public/images/client1.png";
import c2 from "../../../public/images/client2.png";
import national from '../../../public/images/national.png';
import cidbi from '../../../public/images/cidbi.png';

const videotestimonials = [
  { video: "/images/v-video.mp4", client: "Cidbi", video_thumbnail: c2, name: "Arun Menon", position: "Director", video_type: "Corporate Video" },
  { video: "/images/v-video.mp4", client: "Skyline Builders", video_thumbnail: c1, name: "Josbin Itty", position: "Marketing Manager", video_type: "Corporate Video" },
];

const textTestimonials = [
  { client: "Cidbi", logo: cidbi, description: "They understood our brand voice perfectly and translated it into a corporate video that still gets compliments a year later", name: "Arun Menon", position: "Director", video_type: "Corporate Video" },
  { client: "Skyline Builders", logo: national, description: "They understood our brand voice perfectly and translated it into a corporate video that still gets compliments a year later", name: "Josbin Itty", position: "Marketing Manager", video_type: "Corporate Video" },
];

const WhatOurClientsSay = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const combinedTestimonials = [];
  for (let i = 0; i < videotestimonials.length; i++) {
    combinedTestimonials.push({ type: "video", data: videotestimonials[i] });
    if (textTestimonials[i]) combinedTestimonials.push({ type: "text", data: textTestimonials[i] });
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
         <div className="flex items-center mt-[100px]">
                   <Image
                     src={"/images/sidebar.png"}
                     alt="sidebar"
                     height={1000}
                     width={1000}
                     className="w-[63px] h-full"
                   />
                   <p className="text-[14px] font-medium px-4"> Why Accolades </p>
                   <Image
                     src={"/images/sidebar.png"}
                     alt="sidebar"
                     height={1000}
                     width={1000}
                     className="rotate-180 w-[63px] h-full"
                   />
                 </div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          What Our Clients <span className="text-teal-600">Say</span>
        </h2>
      </div>

      <Swiper spaceBetween={20} slidesPerView={1.2} breakpoints={{ 768: { slidesPerView: 1.2 }, 1024: { slidesPerView: 2.2 } }}>
        {combinedTestimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                {playingIndex === index ? (
                  <video src={item.data.video} controls autoPlay className="w-full h-full object-cover rounded-2xl" onEnded={() => setPlayingIndex(null)} />
                ) : (
                  <>
                    <Image src={item.data.video_thumbnail} alt={item.data.name} fill className="object-cover rounded-2xl" />
                    <Image src={play} alt="Play" width={60} height={60} className="absolute inset-0 m-auto cursor-pointer hover:scale-105 transition" onClick={() => setPlayingIndex(index)} />
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded">
                      {item.data.name}<br />
                      <span className="text-[10px] text-gray-300">{item.data.position}</span>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col bg-[#f0f4f8] rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-[500px] justify-center items-center p-8 gap-6 text-center">
                <Image src={item.data.logo} alt="logo" width={80} height={80} className="object-contain" />
                <p className="text-gray-700 text-lg max-w-md">{item.data.description}</p>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-base font-semibold">{item.data.name}</p>
                  <p className="text-sm text-gray-500">{item.data.position} - {item.data.video_type}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatOurClientsSay;
