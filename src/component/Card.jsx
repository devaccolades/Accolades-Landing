import Image from "next/image";
import Icon from '../../public/video-production/icon.svg'

export default function Card({sectionTitle, videoTypes, showButton = false, buttons = []}) {
  return (
    <section className="py-10 bg-white">
      <div className="containers">
        <div className="flex items-start justify-between mb-8">
          <h2 className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] leading-[130%] text-[#3FB4BA]">
            {sectionTitle}
          </h2>
          {showButton && (
            <div className="flex flex-col gap-3">
              {buttons.map((button, index) => (
                <button 
                  key={index}
                  className="bg-[#3FB4BA] text-white px-4 py-2 rounded-lg font-mont font-medium text-sm hover:bg-[#2C99B1] transition"
                >
                  {button}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Graphics Section */}
        {videoTypes.graphics && (
          <>
            <div className="mb-6">
              <button className="bg-[#3FB4BA] text-white px-4 py-2 rounded-lg font-mont font-medium text-sm">
                Graphics
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {videoTypes.graphics.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 cursor-pointer"
                >
                  <div className="rounded-xl overflow-hidden mb-3">
                    <Image
                      src={video.image}
                      alt={video.title}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <p className="font-mont font-semibold lg:text-[20px] md:text-[16px] text-[12px] leading-[100%] text-[#2C99B1] w-[50%]">{video.title}</p>
                    <div className="bg-teal-500 text-white p-1.5 rounded-full">
                      <Image src={Icon} alt="icon" width={12} height={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Motion Design Section */}
        {videoTypes.motionDesign && (
          <>
            <div className="mb-6">
              <button className="bg-[#3FB4BA] text-white px-4 py-2 rounded-lg font-mont font-medium text-sm">
                Motion Design
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {videoTypes.motionDesign.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 cursor-pointer"
                >
                  <div className="rounded-xl overflow-hidden mb-3">
                    <Image
                      src={video.image}
                      alt={video.title}
                      className="w-full h-36 object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <p className="font-mont font-semibold lg:text-[20px] md:text-[16px] text-[12px] leading-[100%] text-[#2C99B1] w-[50%]">{video.title}</p>
                    <div className="bg-teal-500 text-white p-1.5 rounded-full">
                      <Image src={Icon} alt="icon" width={12} height={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Original single array format (for backward compatibility) */}
        {Array.isArray(videoTypes) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {videoTypes.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden mb-3">
                  <Image
                    src={video.image}
                    alt={video.title}
                    className="w-full h-36 object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <p className="font-mont font-semibold lg:text-[20px] md:text-[16px] text-[12px] leading-[100%] text-[#2C99B1] w-[50%]">{video.title}</p>
                  <div className="bg-teal-500 text-white p-1.5 rounded-full">
                    <Image src={Icon} alt="icon" width={12} height={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}