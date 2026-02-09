"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

export default function DirectorsSection() {
  const directors = [
    {
      name: "Jagesh Baiju Nair",
      role: "CEO",
      description:
        "Helping businesses scale with creative digital solutions. We are Web Power House.",
      location: "Mumbai, Maharashtra, India",
      img: "/about-us/d1.png",
      linkedin: "#",
      tilt: "-rotate-2",
    },
    {
      name: "Nimmy Joseph",
      role: "Director HR & Operations",
      description:
        "Founder of Accolades Academy for Digital & Creative HR operations.",
      location: "Kochi, Kerala, India",
      img: "/about-us/d2.png",
      linkedin: "#",
      tilt: "rotate-2",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#DFF3F4] to-[#0199A4]" />

      <div className="containers relative">

        {/* ---------- Heading ---------- */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Connect{" "}
            <span className="inline-flex items-center justify-center bg-[#0A66C2] text-white p-1 rounded">
              <FaLinkedinIn />
            </span>{" "}
            with Our Directors
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            We believe strong leadership begins with openness. Connect directly
            with the founders who drive our vision and growth.
          </p>
        </div>

        {/* ---------- Cards ---------- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {directors.map((person, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 max-w-[420px] w-full transform ${person.tilt} hover:rotate-0 transition duration-500`}
            >
              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {person.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {person.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                {person.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6">
                <p className="text-xs text-gray-400">
                  {person.location}
                </p>

                <a
                  href={person.linkedin}
                  target="_blank"
                  className="flex items-center gap-2 text-[#0A66C2] text-sm font-medium"
                >
                  Contact Info →
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
