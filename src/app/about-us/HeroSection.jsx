import Image from "next/image";
import heroImg from "../../../public/about-us/img1.webp"; // Assuming this is the correct path for the Accolades graphic

export default function HeroSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
        <h1 className="font-mont font-bold xl:text-[86px] lg:text-[71px] md:text-[56px] text-[41px] leading-[100%] text-center text-[#218D8C] pt-6 lg:pt-12 lg:pb-8">
          Meet Accolades
        </h1>

        {/* Existing Hero Section content */}
        <section className="lg:py-16 md:py-12 py-8">
          <div className="containers grid md:grid-cols-2 md:gap-12 gap-8 items-center">
            <span className="bg-white md:p-8 p-6 rounded-xl shadow-md">
              <h2 className="font-mont font-semibold xl:text-[76px] lg:text-[61pxpx] md:text-[48px] text-[33px] leading-[110%]  text-[#199eb8] mb-4">
                Accolades
              </h2>
              <h3 className="font-mont font-medium xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] leading-[130%] -tracking-[2%] text-[#333333] mb-2">
                The ideal platform for all your queries
              </h3>
              <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
                The ultimatum of our successful company is to adequately provide
                our prospective clients with the required service that they
                promptly demand from us. To procure the desired result we
                earnestly strive with all our collaborative effort. It’s our
                genuine commitment and ultimate responsibility to amend the
                success rate for all our specific clients.
              </p>
            </span>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end w-full h-full">
              <Image
                src={heroImg}
                alt="Accolades Graphic"
                className="xl:w-[500px] lg:w-[415px] md:w-[330px] w-[250px] " // You might want to adjust width/height/fill for responsiveness based on image content
              />
            </div>
          </div>
        </section>

        {/* Decorative shapes for the background (if they belong to this section) */}
        {/* These absolute positioned elements need a 'relative' parent somewhere up the tree. 
          If they are truly background elements for the whole page, then the body or main layout div should be 'relative'.
          If they are meant to be relative to this HeroSection, then the fragment <> needs a wrapping div with relative.
          For now, they are outside the section, so they'd be relative to the nearest positioned ancestor or the document body.
          You might want to wrap the whole <> content in a relative div if these shapes are part of this component's visual background.
      */}
        <div className="relative">
          {" "}
          {/* Added this relative div to contain the absolute shapes */}
          <div className="absolute -z-10 top-[20%] left-[10%] opacity-30">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-blue-200 border-r-[30px] border-r-transparent"></div>
          </div>
          <div className="absolute -z-10 top-[60%] right-[5%] opacity-30">
            <div className="w-16 h-16 bg-pink-200 rounded-full"></div>
          </div>
          <div className="absolute -z-10 bottom-[10%] left-[20%] opacity-30">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[50px] border-t-green-200 border-r-[30px] border-r-transparent"></div>
          </div>
        </div>

        {/* "Who we are?" / "What we do?" sections */}
        <div className="containers mx-auto lg:py-16 md:py-12 py-8 ">
          {" "}
          {/* This div was already here, providing padding */}
          {/* First Section: Who we are? */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:mb-16 md:mb-12 mb-8 ">
            {" "}
            {/* Changed flex-row to flex-col md:flex-row for responsiveness */}
            {/* Title Div (Left Side) */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h2 className="font-mont font-semibold xl:text-[76px] lg:text-[61pxpx] md:text-[48px] text-[33px] leading-[110%] text-[#199eb8] text-center">
                Who we are?
              </h2>
            </div>
            {/* Description Div (Right Side) */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
                Lorem ipsum dolor sit amet consectetur. Dolor massa mauris
                praesent volutpat egestas sapien elementum nibh sed. Vitae dui
                leo turpis dui in laoreet. Aliquet nunc scelerisque enim orci.
                Lobortis non fringilla venenatis vulputate tincidunt ultrices
                volutpat aliquet. Scelerisque eu risus viverra interdum mattis
                dis dui tempus. Viverra nunc sed amet vel cursus viverra. Erat
                nibh justo duis maecenas purus tristique placerat. Enim
                pellentesque dolor integer non justo.
              </p>
            </div>
          </div>
          {/* Second Section (Swapped): What we do? */}
          <div className="flex md:flex-row items-center justify-center">
            {" "}
            {/* Changed flex-row to flex-col md:flex-row-reverse for responsiveness */}
            {/* Description Div (Left Side in reversed layout) */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0">
              <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
                Lorem ipsum dolor sit amet consectetur. Dolor massa mauris
                praesent volutpat egestas sapien elementum nibh sed. Vitae dui
                leo turpis dui in laoreet. Aliquet nunc scelerisque enim orci.
                Lobortis non fringilla venenatis vulputate tincidunt ultrices
                volutpat aliquet. Scelerisque eu risus viverra interdum mattis
                dis dui tempus. Viverra nunc sed amet vel cursus viverra. Erat
                nibh justo duis maecenas purus tristique placerat. Enim
                pellentesque dolor integer non justo.
              </p>
            </div>
            {/* Title Div (Right Side in reversed layout) */}
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="font-mont font-semibold xl:text-[76px] lg:text-[61pxpx] md:text-[48px] text-[33px] leading-[110%] leading-[110%]  text-[#199eb8] text-center">
                What we do?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
