"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Simple Card
const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-[#009966] shadow-sm bg-[#EDFAF9] p-2 md:p-4 lg:p-6 ${className}`}>{children}</div>
);

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: "/new-ecommerce/ew1.svg", 
      title: "Local business sense",
      desc: "We are a leading E‑commerce Web Development Company. We know local customer habits and regional channels.",
    },
    {
      icon: "/new-ecommerce/ew2.svg", 
      title: "Platform choice",
      desc: "We pick Shopify, WooCommerce, or custom stacks to fit your model.",
    },
    {
      icon: "/new-ecommerce/ew3.svg", 
      title: "Performance focus",
      desc: "We optimise for speed, security, and mobile UX.",
    },
    {
      icon: "/new-ecommerce/ew4.svg", 
      title: "Full support",
      desc: "From design to deployment, we handle the work and offer post‑launch care.",
    },
    {
      icon: "/new-ecommerce/ew5.svg", 
      title: "Data‑led growth",
      desc: "We pair analytics with design to drive repeat sales and more revenue.",
    },
  ];

  const solutions = [
    "Branded Shopify stores with custom themes",
    "WooCommerce shops with strong content workflows",
    "Headless commerce using Next.js and Django",
    "B2B portals with tiered pricing and invoices",
    "Marketplaces and multi‑vendor integrations",
  ];

  return (
    <section className="w-full py-6 md:py-8 lg:py-16 font-mont ">
        <div className="containers">
      <div className=" text-center mb-6 lg:mb-10">
         <h2 className="text-black text-center text-xl lg:text-2xl font-bold">
          Why Choose Accolades Integrated — Kochi's Ecommerce Partner
        </h2>
        <p className="text-center mt-2 text-black font-semibold text-[14px] leading-[106%]">
          Your trusted E‑commerce Web Development Company in Kochi with proven expertise
        </p>
      </div>

      {/* TOP FEATURES ROW */}
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6 ">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="text-start h-full">
              <div className="flex flex-col items-start  gap-3">
                <Image src={item.icon} alt={item.title} width={40} height={40} />
                <h3 className="text-[16px] lg:text-[18px] leading-[18px] font-semibold mb-0">{item.title}</h3>
                <p className="text-black text-[12px] lg:text-[14px] leading-[156%]">{item.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* SOLUTIONS LIST */}
      <div className=" mt-10">
        <h3 className="text-black text-start text-xl lg:text-2xl font-bold">
          Common E‑commerce Solutions We Build
        </h3>
        <p className="text-strat my-2 text-black font-semibold text-[14px] leading-[106%] mb-4">
        From small boutiques to enterprise platforms, we deliver tailored e‑commerce solutions.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
          {solutions.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 border rounded-2xl p-4 bg-white shadow-sm"
            >
              <Image src="/new-ecommerce/tick.svg"  alt="tick" width={40} height={40} />
              <span className="text-gray-700 text-sm">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
