// // "use client";

// // import Image from "next/image";
// // import React from "react";
// // import national from '../../../public/images/national.png'
// // import cidbi from '../../../public/images/cidbi.png'
// // import conf from '../../../public/images/confident.png'

// // const partners = [
// //   { src: national, alt: "National Builders" },
// //   { src: cidbi, alt: "GDSI" },
// //   { src: conf, alt: "Confident Group" },
// //   { src: national, alt: "National Builders" },
// //   { src: cidbi, alt: "GDSI" },
// //   { src: conf, alt: "Confident Group" },
// //   { src: conf, alt: "National Builders" },
// //   { src: national, alt: "GDSI" },
// //   { src: cidbi, alt: "Confident Group" },
// // ];

// // const OurPartners = () => {
// //   return (
// //     <section className="relative overflow-hidden py-12 bg-white">
// //       {/* Title aligned exactly like in your image */}
// //       <div className="mx-auto px-4">
// //         <h2 className="font-poppins text-[20px] leading-[156%] font-semibold mx-20 mb-8 text-left">Our Partners</h2>
// //       </div>

// //       <div className="relative w-full overflow-hidden">
// //         {/* Fade edges */}
// //         <div className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
// //         <div className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

// //         {/* Scrolling logos */}
// //         <div className="flex animate-marquee whitespace-nowrap items-center">
// //           {partners.map((partner, index) => (
// //             <div
// //               key={index}
// //               className="flex items-center justify-center px-8 py-2 sm:py-4"
// //             >
// //               <Image
// //                 src={partner.src}
// //                 alt={partner.alt}
// //                 width={250}
// //                 height={125}
// //                 className="object-contain  h-32 w-auto"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default OurPartners;



// "use client";

// import Image from "next/image";
// import React from "react";
// import national from '../../../public/images/national.png'
// import cidbi from '../../../public/images/cidbi.png'
// import conf from '../../../public/images/confident.png'

// const partners = [
//   { src: national, alt: "National Builders" },
//   { src: cidbi, alt: "GDSI" },
//   { src: conf, alt: "Confident Group" },
//   { src: national, alt: "National Builders" },
//   { src: cidbi, alt: "GDSI" },
//   { src: conf, alt: "Confident Group" },
//   { src: conf, alt: "National Builders" },
//   { src: national, alt: "GDSI" },
//   { src: cidbi, alt: "Confident Group" },
// ];

// const OurPartners = () => {
//   return (
//     <section className="relative overflow-hidden py-12 bg-white">
//       {/* Title aligned exactly like in your image */}
//       <div className="mx-auto px-4">
//         <h2 className="font-poppins text-[20px] leading-[156%] font-semibold mx-4 sm:mx-20 mb-8 text-left">Our Partners</h2>
//       </div>

//       <div className="relative w-full overflow-hidden">
//         {/* Fade edges */}
//         <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10" />
//         <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10" />

//         {/* Scrolling logos */}
//         <div className="flex animate-marquee whitespace-nowrap items-center">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
//             >
//               <div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40 lg:h-32 lg:w-48">
//                 <Image
//                   src={partner.src}
//                   alt={partner.alt}
//                   fill
//                   className="object-contain"
//                    sizes="128px"
//                   // sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex animate-marquee whitespace-nowrap items-center">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
//             >
//               <div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40 lg:h-32 lg:w-48">
//                 <Image
//                   src={partner.src}
//                   alt={partner.alt}
//                   fill
//                   className="object-contain"
//                    sizes="128px"
//                   // sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>

     
//     </section>
//   );
// };

// export default OurPartners;


"use client";

import Image from "next/image";
import React from "react";
import national from '../../../public/images/national.png'
import cidbi from '../../../public/images/cidbi.png'
import conf from '../../../public/images/confident.png'

const partners = [
  { src: national, alt: "National Builders" },
  { src: cidbi, alt: "GDSI" },
  { src: conf, alt: "Confident Group" },
  { src: national, alt: "National Builders" },
  { src: cidbi, alt: "GDSI" },
  { src: conf, alt: "Confident Group" },
  { src: conf, alt: "National Builders" },
  { src: national, alt: "GDSI" },
  { src: cidbi, alt: "Confident Group" },
];

const OurPartners = () => {
  return (
    <section className="relative overflow-hidden py-6 bg-white">
      {/* Title aligned exactly like in your image */}
      <div className="mx-auto px-4">
        <h2 className="font-poppins text-[20px] leading-[156%] font-semibold mx-4 sm:mx-20 mb-8 text-left">Our Partners</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* First row - scrolling left */}
        <div className="flex animate-marquee whitespace-nowrap items-center mb-4">
          {partners.map((partner, index) => (
            <div
              key={`left-${index}`}
              className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
            >
              <div className="relative h-20 w-32">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`left-duplicate-${index}`}
              className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
            >
              <div className="relative h-20 w-32">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second row - scrolling right */}
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {partners.map((partner, index) => (
            <div
              key={`right-${index}`}
              className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
            >
              <div className="relative h-20 w-32">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`right-duplicate-${index}`}
              className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-4"
            >
              <div className="relative h-20 w-32">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;