"use client";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border shadow-sm bg-white p-2 md:p-4 lg:p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Boxes, Search, Plug } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      icon: "/new-ecommerce/k1.svg",
      title: "Fast, Mobile‑First Performance",
      desc: "We design for phones first. Fast pages mean happier shoppers and higher conversions. We optimise images, code, and delivery with CDNs and lazy loading.",
    },
    {
      icon: "/new-ecommerce/k2.svg", 
      title: "Secure Payments & Checkout Optimization",
      desc: "We integrate trusted payment gateways and secure checkout flows. We minimise steps and distractions to lower cart abandonment and increase order completion.",
    },
    {
      icon: "/new-ecommerce/k3.svg", 
      title: "Inventory, Catalog & Order Management",
      desc: "We build clear product structures, stock alerts, and admin panels. You can manage SKUs, variants, bundles, and pricing with ease.",
    },
    {
      icon: "/new-ecommerce/k4.svg",
      title: "SEO & Product Schema",
      desc: "We add SEO basics: meta tags, clean URLs, and structured product schema. This helps search engines list your products with price and availability.",
    },
    {
      icon: "/new-ecommerce/k5.svg",
      title: "Integrations & APIs",
      desc: "We connect CRMs, ERPs, shipping partners, and analytics. Our API work ensures data flows between systems reliably.",
    },
  ];

  return (
    <section className="w-full py-6 md:py-8 lg:py-16 bg-[#F9F9F9] font-mont rounded-[30px]">
        <div className="containers">
      <div className=" mx-auto  text-center mb-4 md:mb-8">
        <h2 className="text-black text-center text-xl lg:text-2xl font-bold">
          KEY FEATURES WE DELIVER
        </h2>
         <p className="text-center mt-2 text-black font-semibold text-[14px] leading-[106%]">
          As an E‑commerce Web Development Company, we focus on features that drive sales and reduce friction.
        </p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 ">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="rounded-3xl shadow-md hover:shadow-lg transition p-2 lg:p-4 h-full">
              <CardContent className="flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                    <Image 
                        src={f.icon}
                        alt={f.title}
                        width={48}
                        height={48}
                    />
                </div>
                 <h3 className="text-[16px] lg:text-[18px] leading-[18px] font-semibold mb-0">{f.title}</h3>
                <p className="text-black text-[12px] lg:text-[14px] leading-[156%]">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
