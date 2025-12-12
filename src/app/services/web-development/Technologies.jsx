import { CodeXml } from "lucide-react";

export default function Technologies() {
  const tech = [
    {
      icon: <CodeXml size={22} className="text-[#2EC5CE]" />,
      title: "React.js for Front-End Speed and Interactivity",
      desc: "React lets us build modular, reusable UIs. We use React to craft responsive, single-page apps and dynamic interfaces. Its component model improves maintainability and frontend performance.",
      bg: "bg-[#E8FBFF]",
      border: "border-[#A0E8F5]"
    },
    {
      icon: <CodeXml size={22} className="text-[#F38BA0]" />,
      title: "Nest.js for Structured Back-Ends",
      desc: "For TypeScript back ends, we use Nest.js. It provides clear architecture, dependency injection, and scalable modules. Nest.js helps us deliver reliable APIs and services that handle growth.",
      bg: "bg-[#FFF0F3]",
      border: "border-[#F7C6D0]"
    },
    {
      icon: <CodeXml size={22} className="text-[#6C8CFF]" />,
      title: "Python (Django, Flask, FastAPI) for Robust Back-Ends",
      desc: "Python frameworks let us deliver secure, data-driven systems quickly. Django speeds up complex feature builds. FastAPI serves high-performance APIs for async workloads.",
      bg: "bg-[#EEF4FF]",
      border: "border-[#B9CCFF]"
    },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#F6FAFF] font-mont rounded-[30px]">
      <div className="containers mx-auto ">

        {/* HEADING */}
        <h2 className="text-center md:text-start text-xl md:text-2xl font-bold text-black  mb-0 max-w-xl">
          TECHNOLOGIES WE USE - MODERN STACKS FOR REAL RESULTS
        </h2>

        {/* SUBTEXT */}
        <p className="text-center md:text-start mt-2 text-black font-semibold text-[14px] leading-[106%] max-w-xl">
          We choose tools that speed delivery and keep code healthy.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {tech.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} ${item.border} border rounded-2xl p-3 lg:p-6 shadow-sm`}
            >
              {/* ICON */}
              <div
                className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center mb-4"
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-black font-semibold leading-snug text-[15px] md:text-base">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-black text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
