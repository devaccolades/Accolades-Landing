import Image from "next/image";
import Img2 from "../../../public/about-us/Img2.png";
import Img3 from "../../../public/about-us/Img3.png";
import Img4 from "../../../public/about-us/Img4.png";
import Img5 from "../../../public/about-us/Img5.png";
import Img6 from "../../../public/about-us/Img6.png";
import Img7 from "../../../public/about-us/Img7.png";
import Invention from "../../../public/about-us/invention.png";

export default function Portfolio() {
  const topImages = [
    { src: Img2, alt: "The Bride's Side" },
    { src: Img3, alt: "Family Plastics" },
    { src: Img4, alt: "Sea Food" },
    { src: Img5, alt: "Apartment Ad" },
  ];

  const bottomImages = [
    { src: Img6, alt: "Saree Model Ad" },
    { src: Img7, alt: "Family Plastics Drums" },
  ];

  return (
    <>
      <div className="containers mx-auto lg:py-16 md:py-12 py-6">
        <h1 className="text-center font-mont font-semibold xl:text-[56px] lg:text-[46px] md:text-[36px] text-[26px] leading-[110%] md:w-[60%] lg:w-[65%] xl:w-[55%] mx-auto">
          <span className="text-[#3FB4BA]">Innovative Inventions </span>With Quality
        </h1>
        <Image src={Invention} alt="invention-img" className="ml-4 md:ml-16 lg:ml-22 py-6 mx-auto w-full" />

        <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 mb-6">
          <div className="flex md:hidden lg:hidden flex-col justify-center items-center text-center mb-6">
            <p className="font-mont font-normal text-[32px] leading-[130%] text-[#3F3F3F] mb-2">
              Explore Portfolio
            </p>
            <h2 className="font-mont font-semibold text-[32px] leading-[110%] tracking-[3%] text-[#3FB4BA]">
              Our <br />
              <span className="font-mont font-bold text-[32px] leading-[130%] text-[#3F3F3F]">
                Latest
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 order-2 lg:order-1">
            {topImages.map((image, index) => (
              <div key={index} className="col-span-1">
                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] lg:h-[240px] xl:h-[290px] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 290px"
                    className="rounded-lg object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex lg:flex relative flex-col justify-center items-center md:justify-start md:items-start lg:items-center lg:justify-center text-center lg:text-left lg:pl-20 order-1 lg:order-2">
            <div className="absolute -z-10 top-0 right-1/4 translate-x-1/2 opacity-30">
              <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-blue-200 border-r-[30px] border-r-transparent"></div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/4 -translate-y-1/2 opacity-30">
              <div className="w-16 h-16 bg-pink-200 rounded-full"></div>
            </div>
            <div className="absolute -z-10 bottom-0 right-1/3 translate-x-1/2 opacity-30">
              <div className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[50px] border-t-green-200 border-r-[30px] border-r-transparent"></div>
            </div>

            <p className="font-mont font-normal xl:text-[44px] lg:text-[38px] md:text-[32px] leading-[130%] text-[#3F3F3F] mb-2">
              Explore Portfolio
            </p>
            <h2 className="font-mont font-semibold xl:text-[44px] lg:text-[38px] md:text-[32px] leading-[110%] tracking-[3%] text-[#3FB4BA]">
              Our <br />
              <span className="font-mont font-bold xl:text-[44px] lg:text-[38px] md:text-[32px] leading-[130%] text-[#3F3F3F]">
                Latest
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {bottomImages.map((image, index) => (
            <div key={index} className="col-span-1">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}