import Image from "next/image";
export default function Tech({tools, title, para}) {
  return (
    <>
      <section className="py-12 bg-gradient-to-b from-white to-[#d3f2f4]">
        <div className="containers px-4 bg-white p-6 md:p-10 rounded-[30px] shadow">
          <h2 className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] text-[#3FB4BA] mb-6">
            {title}
          </h2>

          <div className="grid grid-cols-2  md:grid-cols-5 gap-6 mb-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-2">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-poppins font-semibold lg:text-[16px] md:text-[14px] text-[12px] text-[#0C0902]">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]">
            {para}
          </p>
        </div>
      </section>
    </>
  );
}
