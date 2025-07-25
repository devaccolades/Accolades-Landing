import Image from "next/image";
import Img2 from '../../../public/about-us/Img2.png';
import Img3 from '../../../public/about-us/Img3.png';
import Img4 from '../../../public/about-us/Img4.png';
import Img5 from '../../../public/about-us/Img5.png';
import Img6 from '../../../public/about-us/Img6.png';
import Img7 from '../../../public/about-us/Img7.png';

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
    <div className="containers mx-auto py-16 px-4">
      {/* Top Section: Grid for text and image groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* Column 1: Grid for 4 images (Mapped) */}
        <div className="grid grid-cols-2 gap-4">
          {topImages.map((image, index) => (
            <div key={index} className="col-span-1">
              <div className="relative" style={{ height: '290px', width: '290px' }}> {/* Fixed dimensions */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 290px, 290px" // Adjusted sizes for fixed width/height
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Text Content */}
        <div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Decorative shapes - relative parent needed for absolute positioning */}
          <div className="absolute -z-10 top-0 right-1/4 translate-x-1/2 opacity-30">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[50px] border-b-blue-200 border-r-[30px] border-r-transparent"></div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/4 -translate-y-1/2 opacity-30">
            <div className="w-16 h-16 bg-pink-200 rounded-full"></div>
          </div>
          <div className="absolute -z-10 bottom-0 right-1/3 translate-x-1/2 opacity-30">
            <div className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[50px] border-t-green-200 border-r-[30px] border-r-transparent"></div>
          </div>

          <p className="font-mont font-normal text-[36px] leading-[130%] text-[#3F3F3F] mb-2">Explore Portfolio</p>
          <h2 className="font-mont font-semibold text-[76px] leading-[110%] tracking-[3%] text-[#3FB4BA] ">
            Our <br /> <span className="font-mont font-bold text-[86px] leading-[130%] text-[#3F3F3F] ">Latest</span>
          </h2>
        </div>
      </div>

      {/* Bottom Section: 2 columns, each with an image (Mapped) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bottomImages.map((image, index) => (
          <div key={index} className="col-span-1">
            <div className="relative" style={{ height: '600px', width: '600px' }}> {/* Fixed dimensions */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 600px, 600px" // Adjusted sizes for fixed width/height
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}