
import Image from "next/image";

export default function EcommerceServices() {
  const techCards = [
    {
      icon: "/new-ecommerce/e1.svg",
      title: "Shopify Development",
      bg: "bg-[#F0FDF4]",
      bordercolor: "#00C254",
      description:
      "We build custom Shopify themes and apps. We configure products, collections, and discount logic. We integrate payment gateways, shipping, and analytics. Shopify works well for fast launches and reliable hosting.",
      
    },
    {
      icon: "/new-ecommerce/e2.svg",
      title: "WooCommerce Development",
      bg: "bg-[#FAF5FF]",
      bordercolor: "#9810FA",
      description:
      "We craft WooCommerce stores on WordPress for flexible content and commerce. We set up products, variations, and secure checkout flow. We add plugins only when they add real value and speed.",
      
    },
    {
      icon: "/new-ecommerce/e3.svg",
      title: "Headless & Custom Stores (React / Next.js / Django)",
      bg: "bg-[#EFF6FF]",
      bordercolor: "#145CFC",
      description:
         "For high-performance or unique needs, we build headless or custom stores. React and Next.js power the front end for speed and interactivity. Django or FastAPI handle the back end for secure data and complex logic. This stack suits large catalogs, B2B portals, and bespoke workflows.",      
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
              
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
