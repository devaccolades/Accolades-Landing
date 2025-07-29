import Image from "next/image";
import corporateImg from "../../../public/video-production/corporate.png";
import socialReelsImg from "../../../public/video-production/social.png";
import testimonialImg from "../../../public/video-production/testimonial.png";
import adFilmsImg from "../../../public/video-production/ad-films.png";

const featuredWorks = [
  {
    name: "Client Name",
    type: "Corporate Video",
    image: corporateImg,
  },
  {
    name: "Client Name",
    type: "Corporate Video",
    image: socialReelsImg,
  },
  {
    name: "Client Name",
    type: "Corporate Video",
    image: testimonialImg,
  },
  {
    name: "Client Name",
    type: "Corporate Video",
    image: adFilmsImg,
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-10 bg-white">
      <div className="containers text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-10">
          Featured Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredWorks.map((work, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-[2rem] overflow-hidden shadow-md border-2 border-black w-[180px] h-[370px] relative">
                <Image
                  src={work.image}
                  alt={work.name}
                  className="object-cover wf"
                  fill
                />
              </div>
              <div className="mt-3 text-sm">
                <p className="font-medium">{work.name}</p>
                <p className="text-gray-500">{work.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional loading bar or indicator */}
        <div className="w-24 h-1 bg-teal-500 mt-10 mx-auto rounded-full"></div>
      </div>
    </section>
  );
}
