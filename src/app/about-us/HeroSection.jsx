import Image from "next/image";
import heroImg from "../../../public/about-us/img1.webp";

export default function HeroSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-[#e6f4f9]">
        <h1 className="font-mont font-bold xl:text-[48px] lg:text-[42px] md:text-[36px] text-[30px] leading-[100%] text-center text-[#218D8C] pt-6 lg:pt-12 lg:pb-8">
          Meet Accolades
        </h1>

        <section className="lg:py-16 md:py-12 py-6">
          <div className="containers grid md:grid-cols-2 md:gap-12 gap-8 items-center">
            <span className="bg-white md:p-8 p-6 rounded-xl shadow-md">
              <h2 className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%]  text-[#199eb8] md:mb-4 mb-2 ">
                Accolades
              </h2>
              <h3 className="font-mont font-medium xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] leading-[130%] -tracking-[2%] text-[#333333] mb-2">
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

            <div className="flex justify-center md:justify-end w-full h-full">
              <Image
                src={heroImg}
                alt="Accolades Graphic"
                className="xl:w-[500px] lg:w-[415px] md:w-[300px] w-full "
              />
            </div>
          </div>
        </section>
        
        <div className="relative">
          {" "}
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

        <div className="containers mx-auto lg:py-16 md:py-12 py-6 ">
          {" "}
          <div className="flex flex-col md:flex-row items-center justify-center lg:mb-16 md:mb-12 mb-8 ">
            {" "}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h2 className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%] text-[#199eb8] text-center">
                Who we are?
              </h2>
            </div>
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
          <div className="flex flex-col md:flex-row items-center justify-center">
            {" "}

            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0 order-2 md:order-1">
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

            <div className="md:w-1/2 text-center md:text-right order-1 md:order-2 mb-3 md:mb-0">
              <h2 className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%]  text-[#199eb8] text-center ">
                What we do?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
