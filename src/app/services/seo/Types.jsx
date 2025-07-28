import Image from "next/image";
import Frame1 from "../../../../public/seo/Frame1.png";
import Frame2 from "../../../../public/seo/Frame2.png";

export default function Types() {
  return (
    <div className="containers mx-auto lg:py-12 md:py-10 py-6">
      {/* First Row: Para Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center justify-center lg:mb-16 md:mb-12 mb-8">
        <div className="md:w-1/2 bg-white p-8 rounded-[30px] shadow-lg mb-4 md:mb-0 order-2 md:order-1 ">
          <h1 className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[24px] text-[#3FB4BA]">
            On-page SEO
          </h1>
          <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
            Lorem ipsum dolor sit amet consectetur. Dolor massa mauris praesent
            volutpat egestas sapien elementum nibh sed. Vitae dui leo turpis dui
            in laoreet. Aliquet nunc scelerisque enim orci. Lobortis non
            fringilla venenatis vulputate tincidunt ultrices volutpat aliquet.
            Scelerisque eu risus viverra interdum mattis dis dui tempus. Viverra
            nunc sed amet vel cursus viverra. Erat nibh justo duis maecenas
            purus tristique placerat. Enim pellentesque dolor integer non justo.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-end mb-6">
          <Image src={Frame1} alt="frame1" className="lg:w-[500px] md:w-[300px] md:h-[300px] h-[200px] " />
        </div>
      </div>

      {/* Second Row: Image Left, Para Right */}
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-start mb-4 md:mb-0">
          <Image src={Frame2} alt="frame2" className="lg:w-[500px] md:w-[300px] md:h-[300px] h-[200px]" />
        </div>
        <div className="md:w-1/2 bg-white p-8 rounded-[30px] shadow-lg">
          <h1 className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[24px] text-[#3FB4BA]">
            Off-page SEO
          </h1>
          <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
            Lorem ipsum dolor sit amet consectetur. Dolor massa mauris praesent
            volutpat egestas sapien elementum nibh sed. Vitae dui leo turpis dui
            in laoreet. Aliquet nunc scelerisque enim orci. Lobortis non
            fringilla venenatis vulputate tincidunt ultrices volutpat aliquet.
            Scelerisque eu risus viverra interdum mattis dis dui tempus. Viverra
            nunc sed amet vel cursus viverra. Erat nibh justo duis maecenas
            purus tristique placerat. Enim pellentesque dolor integer non justo.
          </p>
        </div>
      </div>
    </div>
  );
}
