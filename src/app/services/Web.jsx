// import React from "react";
// import image1 from "../../../public/services/digital.png";
// import Image from "next/image";
// import web from "../../../public/services/web.png";
// import Link from "next/link";

// function Web() {
//   return (
//     <seciton className="w-[90%] mx-auto flex justify-end overflow-visible mt-24 md:mt-42 relative z-10 mb-24">
//       <div className="flex gap-[10px] w-full ">
//         <div className="w-[10%] md:w-[10%] lg:w-[15%]">
//           <Image
//             src={web}
//             alt="web "
//             height={100}
//             width={100}
//             className="w-fit h-fit sticky top-50 mt-0"
//           />
//         </div>
//         <div className="w-full flex flex-col gap-10 md:gap-[100px] lg:gap-[130px]  p-5 rounded-[30px]">
//           <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-4 mt-[34px] md:mt-[20px] ">
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
//                 Web Development
//               </h1>
//               {/* <h1 className="text-[24px] leading-[150%] font-semibold font-mont">
//                 Lorem ipsum dolor sit amet consectetur.
//               </h1> */}
//               <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
//                 Get your website developed exactly to fit your business
//                 requirements. We build cross-browser compatible and responsive
//                 sites with the latest features for optimal performance.
//               </p>
//               <Link href={"/services/web-development"}>
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

// export default Web;





import Image from "next/image";
import React from "react";
import image1 from "../../../public/services/digital.png";
import creative from "../../../public/services/creative.png";
import web from "../../../public/services/web.png";
import Link from "next/link";

function Creative() {
  return (
    <section className="flex justify-center overflow-visible relative  z-10 mx-auto w-[90%] mb-20">
      <div className="flex gap-[10px] w-full relative">
        <div className="absoulte w-[10%] md:w-[10%] lg:w-[15%] ">
          <Image
            src={web}
            alt="web "
            height={100}
            width={100}
            className="w-fit h-fit sticky top-50 mt-0"
          />
        </div>
        <div className="w-full flex flex-col md:gap-[40px] lg:gap-[60px] bg-white/60 p-5 rounded-[30px]">
          <h2 className="font-mont text-[20px] md:text-[35px] lg:text-[55px] font-semibold leading-[110%] text-center text-[#3FB4BA] mt-[17px] md:mt-[35px]">
            Web Development Services in Kochi
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
                Full Stack Web Development
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                We build websites that perform. Our full-stack developers create secure, fast-loading, and scalable
                web solutions tailored to your business. From custom portals to interactive dashboards, we ensure
                seamless performance across devices. As part of our services digital marketing Kochi, we integrate
                your website with analytics and marketing automation tools to track real-time results.
              </p>
              <Link href={"/services/web-development/fullstack-development"}>
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
                WordPress Websites
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                We design and develop elegant, responsive WordPress websites optimized for SEO and lead
                generation. Our goal is to create pages that load quickly and deliver a smooth user experience. Many
                of our digital marketing services clients in Kochi prefer WordPress for its flexibility and ease of
                management, making it ideal for both startups and large enterprises.

              </p>
              <Link href={"/services/web-development/wordpress"}>
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
                E-commerce Websites
              </h3>
              <p className="max-w-md text-[12px] md:text-[14px] lg:text-[18px] md:leading-[150%] font-mont ">
                We create high-converting e-commerce platforms that deliver seamless shopping experiences. Our
                solutions include product catalogues, secure payments, inventory management, and mobile
                optimization. With a focus on speed, design, and UX, our services digital marketing Kochi team
                ensures your online store attracts, engages, and converts visitors into loyal customers.

              </p>
              <Link href={"/services/web-development/ecommerce"}>
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
