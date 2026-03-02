
"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

export default function DirectorsSection() {

  const directors = [
    {
      name: "Jagesh Baiju Nair",
      role: "CEO",
      img: "/about-us/md.png",
      linkedin: "https://www.linkedin.com/in/jagesh-baiju-nair-36b5a133/",
      tilt: "-rotate-3",
    },
    {
      name: "Nimmy Joseph",
      role: "Director HR & Operations",
      img: "/about-us/md1.png",
      linkedin: "https://www.linkedin.com/in/nimmy-joseph-b02260253/",
      tilt: "rotate-3",
    },
  ]

  return (
    <section className="relative pt-16 pb-24 overflow-hidden font-mont">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#81f0f8] md:via-[#DFF3F4] to-[#0199A4]" />

      {/* Decorative Background */}
      <Image
        src="/about-us/bg1.png"
        alt="background"
        width={350}
        height={350}
        className="absolute left-1/2 top-2/3 md:top-3/4
        -translate-x-1/2 -translate-y-1/2 
        opacity-15 blur-[1px] pointer-events-none"
      />

      <div className="containers relative z-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Connect{" "}
            <span className="inline-flex items-center justify-center bg-[#0A66C2] text-white p-1 rounded">
              <FaLinkedinIn />
            </span>{" "}
            with Our Directors
          </h2>

          <p className="text-black mt-4 text-sm leading-[156%]">
            We believe strong leadership begins with openness. Connect directly
            with the founders who drive our vision and growth.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">

          {directors.map((director, index) => (
            <div key={index} className="relative">

              <a
                href={director.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group block w-full max-w-[520px] transform ${director.tilt} transition-all duration-500 hover:rotate-0 hover:scale-[1.03]`}
              >

                {/* Glow */}
                {/* <div className="absolute -inset-3 rounded-3xl 
      bg-[#A4EAEE] blur-xl opacity-50 group-hover:opacity-70 transition" /> */}

                {/* Card */}
                <div>
                  <div className="relative rounded-[30px] border border-[#A4EAEE] bg-[#D5EEEF] p-2 overflow-hidden shadow-2xl">
                    <Image
                      src={director.img}
                      alt="director card"
                      width={520}
                      height={380}
                      className="w-full h-auto rounded-[20px] object-cover"
                      priority
                    />

                  </div>

                  <div className="flex items-center justify-between mt-4 px-2 text-white">
                    <div>
                      <h4 className="font-semibold text-[16px] md:text-[18px] leading-[18px] md:text-base text-white">
                        {director.name}
                      </h4>
                      <p className="text-[14px] leading-[120%] opacity-80 text-white">
                        {director.role}
                      </p>
                    </div>

                    <Image
                      src="/about-us/arrow-left.svg"   // 👈 change to your arrow image path
                      alt="arrow"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

              </a>

              {/* ⭐ Name + Role Section (NEW) */}


            </div>
          ))}


        </div>

      </div>
    </section>
  );
}
