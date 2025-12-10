
import Image from "next/image";

export default function TechnologyStack() {
  const techCards = [
    {
      icon: "/fullstack-new/fr.svg",
      title: "Frontend Frameworks",
      bg: "bg-[#ECFEFF]",
      bordercolor: "#0E99BC",
      description:
        "We use React.js and Next.js to build dynamic, user-friendly web interfaces. React is a JavaScript library for building interactive UIs, and Next.js adds server-side rendering and routing. This combination delivers fast, SEO-friendly pages.",
      tags: ["React.js", "Next.js"],
    },
    {
      icon: "/fullstack-new/bk.svg",
      title: "Backend Technologies",
      bg: "bg-[#fff8fc]",
      bordercolor: "#9810FA",
      description:
      "Our back end is powered by Python and the Django framework, along with Strapi, an open-source headless CMS. Python is a high-level language known for rapid development, and Django is a robust web framework that handles security and scalability. Using Strapi lets us create custom content APIs quickly, giving flexibility in how your content is managed.",
      tags: ["Python-Django", "Strapi CMS"],
    },
    {
      icon: "/fullstack-new/da.svg",
      title: "Databases",
      bg: "bg-[#f4fbff]",
      bordercolor: "#145CFC",
      description:
        "We pick the right database for your needs. Options include MongoDB, PostgreSQL, and SQLite. Each provides efficient, reliable storage for different project requirements.",
      tags: ["MongoDB", "PostgreSQL", "SQLite"],
    },
  ];

  return (
    <section className="w-full py-6 md:py-8 lg:py-16 bg-white font-mont">
      <div className="containers mx-auto px-0 ">

        {/* Heading */}
        <h2 className="text-center text-xl lg:text-2xl font-bold">
          OUR TECHNOLOGY STACK AS PYTHON DEVELOPERS IN KOCHI
        </h2>
        <p className="text-center mt-2 text-black font-semibold text-[14px] leading-[106%]">
          We leverage modern, battle-tested technologies to build robust and scalable web applications
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mt-2 md:mt-12">
          {techCards.map((item, index) => (
            <div
              key={index}
              className={`p-4 lg:p-6 border rounded-2xl shadow-sm hover:shadow-md transition ${item.bg}`}
              style={{ border: `1px solid ${item.bordercolor}` }}
            >
              {/* Icon */}
              <div className="mb-4">
                <Image src={item.icon} width={40} height={40} alt={item.title} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[16px] lg:text-[18px] leading-[18px]">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-[12px] lg:text-[14px] leading-[156%]">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[12px] md:text-[14px] leading-[156%] bg-white border rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="mt-10 p-4 lg:p-6 border rounded-[20px] bg-[#EFF6FE]"
             style={{ borderColor: "#145CFC" }}>
          <h3 className="font-semibold text-[16px] md:text-[18px] leading-[18px]">Our Approach to Full-Stack Development</h3>

          <p className="text-gray-600 mt-3 text-[12px] md:text-[14px] leading-[156%]">
            Our Python Developers in Kochi follow agile workflows to keep you involved at every step.
            Our team combines technical skill with clear communication, ensuring every project meets your goals.
          </p>

          <p className="text-gray-600 mt-3 text-[12px] md:text-[14px] leading-[156%]">
            For example, we connect sites to Google Analytics or CRM systems to extract insights and refine your strategy.
            This makes your website not just a brochure, but a powerful marketing asset.
          </p>
        </div>
      </div>
    </section>
  );
}
