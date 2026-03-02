
import Image from "next/image";
import Img2 from "../../../public/about-us/Img2.webp";
import Img3 from "../../../public/about-us/Img3.webp";
import Img4 from "../../../public/about-us/Img4.webp";
import Img5 from "../../../public/about-us/Img5.webp";
import Img6 from "../../../public/about-us/Img6.webp";
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
      {/* ---------- Heading Section ---------- */}
      <div className="containers mx-auto lg:pt-16 md:pt-12 py-6">
        <h1 className="text-center font-mont font-semibold xl:text-[56px] lg:text-[46px] md:text-[36px] text-[26px] leading-[110%] md:w-[60%] lg:w-[65%] xl:w-[55%] mx-auto">
          <span className="text-[#3FB4BA]">Creative Solutions</span> Delivering
          Quality
        </h1>

        <div className="flex">
          <Image
            src={Invention}
            alt="invention-img"
            className="py-6 mx-auto h-full w-auto"
          />
        </div>
      </div>

      {/* ---------- Portfolio Section ---------- */}
      <div
        className="pb-32"
        style={{
          background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
        }}
      >
        <div className="containers">

          {/* ---------- Top Section ---------- */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {topImages.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text / Floating Image */}
            <div className="relative flex justify-center md:justify-start">
              <Image
                src={float}
                alt="gif"
                className="w-[80%] md:w-full h-auto"
              />

              <div className="absolute inset-0 flex flex-col justify-center md:pl-[8%]">
                <h3 className="text-[28px] md:text-[36px] text-[#3F3F3F] leading-[100%]">
                  Latest Projects
                </h3>

                <h3 className="text-[#3FB4BA] text-[40px] md:text-[56px] xl:text-[76px] font-semibold leading-[100%]">
                  Recent
                </h3>

                <h3 className="font-bold text-[32px] md:text-[48px] xl:text-[64px] leading-[100%]">
                  Highlights
                </h3>
              </div>
            </div>

          </div>

          {/* ---------- Bottom Section ---------- */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {bottomImages.map((image, index) => (
              <div key={index} className="relative aspect-[5/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
