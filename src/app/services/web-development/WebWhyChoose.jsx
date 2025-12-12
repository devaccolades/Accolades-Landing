import { MapPin, ShieldCheck, Zap, Rocket } from "lucide-react";

export default function WebWhyChoose() {
  const items = [
    {
      icon: <MapPin size={20} className="text-white" />,
      title: "Local Presence, National Reach",
      desc: "As a Web Development Company in Kochi, we know local business needs. We deliver projects for Kochi clients and scale them across India. We work with startups, agencies, and enterprises."
    },
    {
      icon: <Rocket size={20} className="text-white" />,
      title: "End-to-End Delivery",
      desc: "We are also a Web Designing Company in Kochi. That means we cover design, development, testing, and launch. One team handles the full cycle to cut timelines and remove gaps."
    },
    {
      icon: <ShieldCheck size={20} className="text-white" />,
      title: "Focus on Quality and Security",
      desc: "We follow coding standards, run security scans, and test for edge cases. We use HTTPS, secure headers, and data validation to protect users and data."
    },
    {
      icon: <Zap size={20} className="text-white" />,
      title: "Performance & SEO-First Mindset",
      desc: "We optimise for speed and search visibility. Faster pages improve user trust and rankings. We deliver semantic markup, meta tags, and accessible HTML."
    }
  ];

  return (
    <section className="bg-[#0E6F72] text-white py-8 md:py-10 lg:py-16 rounded-[40px] mt-10 font-mont">
      <div className="containers mx-auto ">

        {/* HEADING */}
        <h2 className="text-center md:text-center text-xl md:text-2xl font-bold text-white  mb-0 max-w-xl mx-auto ">
          WHY CHOOSE ACCOLADES INTEGRATED - WEB DEVELOPMENT COMPANY IN KOCHI
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mt-4 md:mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F7D80] border border-[#59BBB9] rounded-2xl p-3 md:p-6"
            >
              {/* ICON */}
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-white font-semibold text-[16px] lg:text-[18px] leading-[18px]">
                {item.title}
              </h3>

              {/* DESC */}
             <p className="text-white mt-2 text-[12px] lg:text-[14px] leading-[156%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
