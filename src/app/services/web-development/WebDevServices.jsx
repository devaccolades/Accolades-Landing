import Image from "next/image";
import { Code, Globe, ShoppingCart } from "lucide-react";

export default function WebDevServices() {
  const services = [
    {
      icon: <Code size={22} className="text-[#4169E1]" />,
      title: "Full-Stack Web Development",
      desc: "We build custom web apps from the database to the browser. We use React for fast front ends and Nest.js or Python for robust back ends. This approach gives you a single team that owns the full product.",
    },
    {
      icon: <Globe size={22} className="text-[#4169E1]" />,
      title: "WordPress Development",
      desc: "We build SEO-ready, fast WordPress sites that are easy to manage. Our WordPress work includes custom themes, plugin setup, and content workflows. We secure installs, tune performance, and hand over a clean CMS your team can use with confidence.",
    },
    {
      icon: <ShoppingCart size={22} className="text-[#4169E1]" />,
      title: "E-commerce Development",
      desc: "We create stores that sell. From catalog design and secure checkout to inventory and shipping integrations, we build stores that scale. We implement product schema, optimize product pages, and improve checkout UX to reduce cart drop-off.",
    },
  ];

  return (
    <section className="containers py-6 md:py-10 font-mont">
      <div className="max-w-6xl mx-auto px-2 md:px-4">

        {/* HEADING */}
        <h2 className="text-center md:text-center text-xl md:text-2xl font-bold text-black  mb-0">
          OUR WEB DEVELOPMENT SERVICES
        </h2>

        {/* SUB-TEXT */}
        <p className="text-center md:text-center mt-2 text-black font-semibold text-[14px] leading-[106%] ">
          We cover the whole web stack. Each service aligns with your growth needs and budget.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-3 md:p-5 shadow-sm hover:shadow-md 
                         transition cursor-default"
            >
              {/* ICON */}
              <div className="w-10 h-10 rounded-xl bg-[#E9F0FF] flex items-center justify-center mb-3">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-black font-semibold text-[15px] md:text-base leading-tight">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-black text-sm md:text-[14px] leading-relaxed mt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
