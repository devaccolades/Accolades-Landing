// "use client";

// import Image from "next/image";
// import React from "react";
// import img from "../../../../public/web/respo.png";

// const features = [
//   {
//     title: "RESPONSIVE WEBSITES",
//     content:
//       "A good responsive and device optimized website design has all the virtue to accumulate and retain your customers. People assume that a functional and responsive website design predicts the credibility of any business. We make running a responsive website at ease.",
//   },
//   {
//     title: "OPTIMIZED FOR SEO",
//     content:
//       "We have helped our clients attain the best level of ranking with SEO optimized website design and content convert a lot of guests into customers. The data-driven approach and rock-solid expertise of operating within the identical domain have equipped us with enough wisdom and tactics to guide your business on the road of success.",
//   },
//   {
//     title: "HOSTING AND DOMAIN",
//     content:
//       "Just having a gorgeous website style isn’t enough to succeed. If your website is continually down, if dozens of pages are bobbing up with 404 errors, or if your website loads slowly thanks to unoptimized pictures, you may lose customers. If you wish your digital front to be profitable, you would like a reliable web hosting service to confirm potential shoppers see what you have got to extend.",
//   },
// ];



// export default function WebsiteFeatures() {
//   return (
//       <div className="  py-4 px-2 md:px-10 lg:px-20 "> 
//         <div className="bg-white py-1 rounded-2xl  max-w-7xl  ">
//     <div
//       className="bg-cover bg-no-repeat bg-center  rounded-2xl mx-2 lg:mx-4 my-2 lg:my-4 py-12  px-4 md:px-10"
//       style={{ backgroundImage: "url(/web/respo.png)" }}
//     >
//       {/* <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-7xl mx-auto p-6 md:p-10"> */}
//         {/* Responsive Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Image on the left */}
//           <div className="flex justify-center order-1">
           
//           </div>

//           {/* Feature Cards on the right (aligned to end) */}
//           <div className="flex flex-col gap-6 items-end order-2">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-[#e9f5fb] p-5 rounded-lg shadow max-w-md"
//               >
//                 <h3 className="text-[16px] font-mont font-bold text-[#1eb2a6] mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-[12px] font-mont text-gray-700">{feature.content}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       </div>
//      </div>
//   );
// }


"use client";

import Image from "next/image";
import React from "react";
import img from "../../../../public/web/respo.png";

const features = [
  {
    title: "RESPONSIVE WEBSITES",
    content:
    "A responsive, device-optimized website builds trust and keeps customers engaged. It ensures smooth functionality, enhancing credibility and user experience. At Accolades Integrated, we simplify creating responsive websites that adapt seamlessly across devices. Let us help you deliver a flawless online experience and retain loyal customers with ease."
      // "A good responsive and device optimized website design has all the virtue to accumulate and retain your customers. People assume that a functional and responsive website design predicts the credibility of any business. We make running a responsive website at ease.",
  },
  {
    title: "OPTIMIZED FOR SEO",
    content:
    "Our SEO-optimized website design and content help businesses achieve top rankings and convert visitors into customers. With a data-driven approach and years of expertise, we craft websites that drive traffic and deliver measurable results. Let Accolades Integrated guide your business to success with powerful SEO strategies that boost visibility and growth."
      // "We have helped our clients attain the best level of ranking with SEO optimized website design and content convert a lot of guests into customers. The data-driven approach and rock-solid expertise of operating within the identical domain have equipped us with enough wisdom and tactics to guide your business on the road of success.",
  },
  {
    title: "HOSTING AND DOMAIN",
    content:
    "A stunning website design is only effective if backed by reliable hosting and a strong domain. Slow loading times, 404 errors, or frequent downtime can drive customers away. At Accolades Integrated, we provide secure, high-performance hosting services that ensure your website is always up and running smoothly. With optimized solutions, we help your digital presence stay accessible, professional, and profitable. Let us support your online success."
      // "Just having a gorgeous website style isn’t enough to succeed. If your website is continually down, if dozens of pages are bobbing up with 404 errors, or if your website loads slowly thanks to unoptimized pictures, you may lose customers. If you wish your digital front to be profitable, you would like a reliable web hosting service to confirm potential shoppers see what you have got to extend.",
  },
];

export default function WebsiteFeatures() {
  return (
    <div className="py-4 px-2 md:px-10 lg:px-20">
      {/* --- Desktop/Tablet Layout (md and up) --- */}
      <div className="hidden md:block bg-white py-1 rounded-2xl max-w-7xl mx-auto">
        <div
          className="bg-cover bg-no-repeat bg-center rounded-2xl mx-2 lg:mx-4 my-2 lg:my-4 py-12 px-4 md:px-10"
          style={{ backgroundImage: "url(/web/respo.png)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image Placeholder (optional) */}
            <div className="flex justify-center order-1">{/* You can add content here if needed */}</div>

            {/* Right - Feature Cards */}
            <div className="flex flex-col gap-6 items-end order-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#e9f5fb] p-5 rounded-lg shadow max-w-md"
                >
                  <h3 className="text-[16px] font-mont font-bold text-[#1eb2a6] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] font-mont text-gray-700">
                    {feature.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Layout (sm only) --- */}
      <div className="block md:hidden  rounded-2xl max-w-7xl mx-auto">
        {/* Top - Image */}
        <div className="w-full h-50 relative  overflow-hidden">
          <Image
            src={img}
            alt="Responsive Website"
            fill
            className="object-fit"
          />
        </div>

        {/* Bottom - Feature Cards */}
        <div className="px-2 py-6 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#e9f5fb] p-2 rounded-lg shadow"
            >
              <h3 className="text-[16px] font-mont font-bold text-[#1eb2a6] mb-2">
                {feature.title}
              </h3>
              <p className="text-[12px] font-mont text-gray-700">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
