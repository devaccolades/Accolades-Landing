// import Image from "next/image";
// import React from "react";
// import image1 from "../../../public/services/digital.png";
// import web from "../../../public/services/web.png";
// import creative from "../../../public/services/creative.png";
// import Link from "next/link";

// function Creative() {
//   return (
//     <seciton className="w-[90%] mx-auto flex justify-end overflow-visible mt-24 md:mt-42 relative z-10">
//       <div className="flex gap-[10px] w-full">
//         <div className="w-[10%] md:w-[10%] lg:w-[15%]">
//           <Image
//             src={creative}
//             alt="creative"
//             height={100}
//             width={100}
//             className="w-fit h-fit sticky top-50 mt-0"
//           />
//         </div>
//         <div className="w-full flex flex-col gap-10 md:gap-[100px] lg:gap-[130px]  p-5 rounded-[30px]">
//           <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
//             <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
//               <Image
//                 src={image1}
//                 alt="google ads image"
//                 height={100}
//                 width={100}
//                 className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
//               />
//             </div>
//             <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[30px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
//               <h1 className="text-[#3FB4BA] text-[28px] md:text-[35px] lg:text-[75px] font-semibold font-mont leading-[100%]">
//                 Creative Design
//               </h1>
//               {/* <h1 className="text-[24px] leading-[150%] font-semibold font-mont">
//                 Lorem ipsum dolor sit amet consectetur.
//               </h1> */}
//               <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
//                 We provide creative for social media and digital ads along with
//                 graphic designs like brochure, magazine ads to elevate your
//                 brand’s online presence.
//               </p>
//               <Link href={"/services/creative"}>
//                 <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
//                   see more
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </seciton>
//   );
// }

// export default Creative;



import Image from "next/image";
import React from "react";
import image1 from "../../../public/services/digital.png";
import creative from "../../../public/services/creative.png";
import Link from "next/link";

function Creative() {
  return (
    <section className="flex justify-center overflow-visible relative  z-10 mx-auto w-[90%] mb-20">
      <div className="flex gap-[10px] w-full relative">
        <div className="absoulte w-[10%] md:w-[10%] lg:w-[15%] ">
          <Image
            src={creative}
            alt="creative"
            height={100}
            width={100}
            className="w-fit h-fit sticky top-50 mt-0"
          />
        </div>
        <div className="w-full flex flex-col md:gap-[40px] lg:gap-[60px] bg-white/60 p-5 rounded-[30px]">
          <h2 className="font-mont text-[20px] md:text-[35px] lg:text-[40px] font-semibold leading-[110%] text-center text-[#3FB4BA] mt-[17px] md:mt-[35px]">
            Creative Services for Business Branding in Kochi
          </h2>

          <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Graphics Design
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Our creative team designs visuals that speak. From social media graphics to animated brand reels, we
                craft designs that attract attention and communicate purpose. Motion graphics enhance storytelling
                and make campaigns memorable. These creative assets support our digital marketing services Kochi
                packages, ensuring seamless integration between visuals and marketing goals.
              </p>
              <Link href={"/services/creative/graphics-motion"}>
                <button className="bg-[#3FB4BA] px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Branding & Packaging
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                A brand is more than its logo — it’s an experience. We design strong visual identities and packaging
                that reflect your values and connect with your audience. From logos and typography to product
                packaging and brand kits, our creative team ensures every element is aligned with your positioning.
                When paired with our services digital marketing Kochi, this creates a cohesive brand journey that
                drives loyalty.

              </p>
              <Link href={"/services/creative/branding-packaging"}>
                <button className="bg-[#3FB4BA] px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          {/* second section  */}
          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
            <div className="w-full h-full max-w-[338px] max-h-[338px] flex justify-center items-center md:w-full md:h-full lg:w-full lg:h-full bg-white">
              <Image
                src={image1}
                alt="google ads image"
                height={100}
                width={100}
                className="h-full w-full md:h-[190px] lg:h-full object-cover object-center p-3"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-4 p-[10px] md:p-[15px] lg:p-[30px] bg-white rounded-[30px] max-w-[338px] lg:max-w-[608px]">
              <h3 className="text-[#3FB4BA] text-[20px] md:text-[30px] font-semibold lg:text-[40px] font-mont leading-[100%]">
                Video Production
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                Video is the most powerful medium for engagement. We produce corporate videos, product films,
                social ads, and explainer animations. Each video is planned for maximum visibility across digital
                platforms. Our video production team works closely with our digital experts to ensure content is
                optimized for search and conversions — a vital part of our digital marketing services Kochi
                framework.
              </p>
              <Link href={"/services/creative/video-productions"}>
                <button className="bg-[#3FB4BA]  px-[20px] py-[6px] lg:px-[40px] lg:py-[12px] text-white w-fit text-[12px] md:text-[14px] lg:text-[16px] font-mont rounded-[30px] font-semibold mt-[15px]">
                  see more
                </button>
              </Link>
            </div>
          </div>
          
         
          
        </div>
      </div>
    </section>
  );
}

export default Creative;
