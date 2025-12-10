import Image from "next/image";

const FEATURES = [
  {
    icon: "/new-fullstack/w1.svg",
    title: "Scalable",
    bg: "bg-[#F1FFF7]",
    text: "We build sites that grow with you. Frameworks like Django are known to scale efficiently. Some of the highest-traffic sites rely on Django’s ability to flexibly handle growth. Our architecture is designed so you can add users and features without reworking the core code."
  },
  {
    icon: "/new-fullstack/w2.svg",
    title: "Secure",
    bg: "bg-[#F3F7FF]",
    text: "Security is a priority. We enforce HTTPS and use token-based authentication to protect data. Django includes many built-in protections against common web attacks. We follow best practices to keep your site and data safe."
  },
  {
    icon: "/new-fullstack/w3.svg",
    title: "Fast",
    bg: "bg-[#FFF6EB]",
    text: "Fast is user-friendly. We optimize every layer for speed. Next.js supports server-side rendering and caching to speed up page loads. On the backend we write efficient Python code and use caching where needed."
  }
];

const STATS = [
  { value: "100%", label: "Mobile Responsive" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Guarantee" }
];

export default function WhyChoose() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-16 bg-[#F9F9F9] font-mont">
    <div className="containers mx-auto px-0">
      {/* Heading */}
      <div className="text-center mb-4 md:mb-12">
        <h2 className="text-center text-xl lg:text-2xl font-bold">
          WHY CHOOSE OUR TEAM
        </h2>
        <p className="text-center mt-2 text-black font-semibold text-[14px] leading-[106%]">
          Our Python developers in Kochi deliver solutions built on three core principles
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-2 md:gap-6  mx-auto ">
        {FEATURES.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} p-4 lg:p-6 rounded-2xl shadow-sm border border-gray-200`}
          >
            <div className="mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-[16px] lg:text-[18px] leading-[18px] font-semibold mb-3">{item.title}</h3>
            <p className="text-black text-[12px] lg:text-[14px] leading-[156%]">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-2 md:mt-12  mx-auto  text-center">
        {STATS.map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl md:text-3xl lg:text-5xl leading-[48px] text-[#0C7379] font-bold">{item.value}</h3>
            <p className="text-black text-[12px] lg:text-[14px] leading-[156%]  mt-0 md:mt-2">{item.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
