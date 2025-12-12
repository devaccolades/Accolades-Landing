"use client";
import Image from "next/image";

export default function WhyChooseAndProcess() {
  const whyChoose = [
    {
      icon: "/new-seo/wp1.svg",
      title: "Local Expertise",
      desc: "Deep understanding of Kochi market and user behavior",
    },
    {
      icon: "/new-seo/wp2.svg",
      title: "12 Years Experience",
      desc: "Proven track record with hundreds of successful projects",
    },
    {
      icon: "/new-seo/wp3.svg",
      title: "Transparent Process",
      desc: "Clear updates and straightforward recommendations",
    },
    {
      icon: "/new-seo/wp4.svg",
      title: "Long-Term Results",
      desc: "Focus on sustainable growth and lasting rankings",
    },
  ];

  const process = [
    {
      icon: "/new-seo/o1.svg",
      step: "1",
      title: "Audit & Benchmark",
      desc: "We start with a full site review and competitor check to find gaps & set baseline metrics.",
    },
    {
      icon: "/new-seo/o2.svg",
      step: "2",
      title: "Strategy & Roadmap",
      desc: "We create a phased plan covering technical fixes, content, and link-building priorities.",
    },
    {
      icon: "/new-seo/o3.svg",
      step: "3",
      title: "Implementation & Testing",
      desc: "We fix technical issues, publish content, and run A/B tests to track improvements.",
    },
    {
      icon: "/new-seo/o4.svg",
      step: "4",
      title: "Reporting & Scale",
      desc: "We report KPIs clearly, scale what works, and refine weaker areas for steady gains.",
    },
  ];

  return (
    <section className="containers py-6 md:py-10 lg:py-16 font-mont">
      <div className=" mx-auto">

        {/*  HEADER: WHY CHOOSE  */}
        <h2 className="text-center md:text-start text-xl md:text-2xl font-bold text-black  mb-0 max-w-xl">
          WHY CHOOSE ACCOLADES INTEGRATED AS YOUR SEO COMPANY IN KOCHI
        </h2>

        <p className="text-center md:text-start mt-2 text-black font-semibold text-[14px] leading-[106%] max-w-xl">
          You get local insight and proven processes with our team. We know how Kochi users search and engage online.
           We blend technical skill with content craft and outreach.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          {whyChoose.map((item, index) => (
            <div
              key={index}
              className="border rounded-3xl bg-[#EDFAF9] p-4 lg:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-black font-semibold text-[16px] lg:text-[18px] leading-[18px]">{item.title}</h3>
             <p className="text-black mt-2 text-[12px] lg:text-[14px] leading-[156%]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/*  PROCESS HEADER  */}
        <div className="text-center mt-10 mb-2">
          <h2 className="text-center text-xl md:text-2xl font-bold text-black  mb-4">
            OUR SEO PROCESS - SIMPLE, MEASURED, EFFECTIVE
          </h2>
         <p className="text-center mt-2 text-black font-semibold text-[14px] leading-[106%]">
            A transparent, repeatable approach that delivers measurable results at every stage
          </p>
        </div>

        {/* PROCESS STEPS  */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4  lg:gap-10 mt-6">
          {process.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">

              <div className=" w-fit mb-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>

              <p className="text-[#0E9F8A] font-semibold"> {item.step} </p>

              <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>

             <p className="text-black mt-2 text-[12px] lg:text-[14px] leading-[156%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div> */}

        {/* PROCESS STEPS  */}
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-10 mt-6">

  {process.map((item, index) => (
    <div key={index} className="relative text-center flex flex-col items-center">

      {/* ICON */}
      <div className="w-fit mb-2">
        <Image src={item.icon} alt={item.title} width={40} height={40} />
      </div>

      {/* STEP */}
      <p className="text-[#0E9F8A] font-semibold">{item.step}</p>

      {/* TITLE */}
      <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>

      {/* DESCRIPTION */}
      <p className="text-black mt-2 text-[12px] lg:text-[14px] leading-[156%]">{item.desc}</p>

      {/* ARROW (desktop only) */}
      {index !== process.length - 1 && (
        <div className="hidden md:block absolute right-[-60px] lg:right-[-80px] top-6 w-[100px] lg:w-[120px] xl:w-[150px]">
          <Image
            src="/new-seo/arrow-right.svg"
            alt="arrow"
            width={150}
            height={20}
          />
        </div>
      )}
    </div>
  ))}

</div>

        
      </div>
    </section>
  );
}
