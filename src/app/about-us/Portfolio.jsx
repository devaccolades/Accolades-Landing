import Image from "next/image";
import Img2 from "../../../public/about-us/Img2.webp";
import Img3 from "../../../public/about-us/Img3.webp";
import Img4 from "../../../public/about-us/Img4.webp";
import Img5 from "../../../public/about-us/Img5.webp";
import Img6 from "../../../public/about-us/Img6.webp";
// import Img7 from "../../../public/about-us/Img7.webp";
import Img7 from "../../../public/about-us/family.jpg";
import Invention from "../../../public/about-us/invention.webp";
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
      <div className="containers mx-auto lg:pt-16 md:pt-12 py-6 ">
        <h1 className="relative text-center font-mont font-semibold xl:text-[56px] lg:text-[46px] md:text-[36px] text-[26px] leading-[110%] md:w-[60%] lg:w-[65%] xl:w-[55%] mx-auto">
          {/* <Image
            src={float}
            alt="gif"
            className="w-[70%] lg:w-full absolute -top-30 lg:-top-40 xl:-top-60"
          /> */}
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
          <div className="relative flex flex-col-reverse md:grid md:grid-cols-[55%_1fr]">
            <div className="grid grid-cols-2 gap-2 mb-5">
              {topImages.map((image, index) => (
                <div key={index} className="w-full">
                  <div className="relative h-[160px] md:h-[230px] lg:h-[260px] xl:h-[280px] 2xl:h-[400px] w-auto  md:w-[190px] lg:w-[220px] xl:w-[300px] 2xl:w-auto ">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="relative w-full">
              <Image
                src={float}
                alt="gif"
                className="w-[60%] md:w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start md:pl-[5%]">
                <h3 className="text-[36px] text-[#3F3F3F] font-normal leading-[100%]">
                  Latest Projects
                </h3>
                <h3 className="text-[#3FB4BA] text-[48px] md:text-[56px] xl:text-[76px] font-semibold leading-[100%]">
                  Recent
                </h3>
                <h3 className="font-bold text-[36px] md:text-[48px] xl:text-[64px] leading-[100%">
                  Highlights
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bottomImages.map((image, index) => (
              <div key={index} className="">
                <div className="relative h-[340px] md:h-[400px] lg:h-[400px] xl:h-[560px] 2xl:h-[700px] w-auto  md:w-[350px] lg:w-[400px] xl:w-[550px] 2xl:w-auto">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg h-full w-full object-cover "
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
