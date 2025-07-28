import Image from "next/image"
// import 

export default function Types() {
  return (
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
  )
}
