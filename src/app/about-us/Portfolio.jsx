import Image from "next/image";
import Img2 from "../../../public/about-us/Img2.png";
import Img3 from "../../../public/about-us/Img3.png";
import Img4 from "../../../public/about-us/Img4.png";
import Img5 from "../../../public/about-us/Img5.png";
import Img6 from "../../../public/about-us/Img6.png";
import Img7 from "../../../public/about-us/Img7.png";
import Invention from "../../../public/about-us/invention.png";
import float from "../../../public/about-us/floating.gif";

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
      <div className="containers mx-auto lg:pt-16 md:pt-12 pyt-6 ">
        <h1 className="relative text-center font-mont font-semibold xl:text-[56px] lg:text-[46px] md:text-[36px] text-[26px] leading-[110%] md:w-[60%] lg:w-[65%] xl:w-[55%] mx-auto">
          <Image
            src={float}
            alt="gif"
            className="w-full absolute -top-30 lg:-top-40 xl:-top-60"
          />
          <span className="text-[#3FB4BA]">Creative Solutions</span> Delivering
          Quality
        </h1>
        <div className="flex ">
          <Image
            src={Invention}
            alt="invention-img"
            className=" py-6 mx-auto h-full w-auto"
          />
        </div>
      </div>
      <div
      className="pb-30"
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
        }}
      >
        <div className="containers">
          <div className="relative flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 mb-6">
            <div className="flex md:hidden lg:hidden flex-col justify-start items-start mb-6">
              <Image
                src={float}
                alt="gif"
                className="absolute w-[80%] -top-10"
              />

              <p className="font-mont font-normal text-[32px] leading-[130%] text-[#3F3F3F] mb-2">
                See Our Impact
              </p>
              <h2 className="font-mont font-semibold text-[32px] leading-[110%] tracking-[3%] text-[#3FB4BA]">
                Latest <br />
                <span className="font-mont font-bold text-[32px] leading-[130%] text-[#3F3F3F]">
                  Creations
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

            <div className="relative hidden md:flex lg:flex flex-col justify-center md:justify-start items-start lg:justify-center text-center lg:text-left lg:pl-20 order-1 lg:order-2">
              <div className="absolute -z-10 top-0 right-1/4 translate-x-1/2 opacity-30">
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-blue-200 border-r-[30px] border-r-transparent"></div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/4 -translate-y-1/2 opacity-30">
                <div className="w-16 h-16 bg-pink-200 rounded-full"></div>
              </div>
              <div className="absolute -z-10 bottom-0 right-1/3 translate-x-1/2 opacity-30">
                <div className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[50px] border-t-green-200 border-r-[30px] border-r-transparent"></div>
              </div>
              <Image
                src={float}
                alt="gif"
                className="hidden md:flex absolute md:-top-50 lg:left-10 xl:top-10"
              />

              <p className="font-mont font-normal xl:text-[44px] lg:text-[38px] md:text-[32px] leading-[130%] text-[#3F3F3F] mb-2">
                See Our Impact
              </p>
              <h2 className="font-mont font-semibold xl:text-[44px] lg:text-[38px] md:text-[32px] leading-[110%] tracking-[3%] text-[#3FB4BA]">
                Latest <br />
                <span className="font-mont font-bold xl:text-[44px] lg:text-[38px] md:text-[32px] leading-[130%] text-[#3F3F3F]">
                  Creations
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
      </div>
    </>
  );
}
