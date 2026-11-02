"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const whatsappUrl = "https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team.";

const stats = [
  { value: "1000+", label: "Web Projects Done" },
  { value: "500+", label: "Clients" },
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "Team Members" },
];

const services = [
  {
    title: "Google Ads",
    subtitle: "Search, Display and YouTube campaigns",
    illustration: { src: "/mumbai/service/g-ads1.png", width: 280, height: 350, crop: [6, 0, 242, 336] },
    image: { src: "/mumbai/service/g-ads2.webp", alt: "Campaign performance dashboard showing leads and conversions" },
  },
  {
    title: "SEO",
    subtitle: "Content and technical work to rank for what your customers search",
    illustration: { src: "/mumbai/service/seo1.png", width: 1200, height: 788, crop: [193, 95, 784, 592] },
    image: { src: "/mumbai/service/seo2.webp", alt: "Laptop showing an SEO analytics dashboard" },
  },
  {
    title: "Social media",
    subtitle: "Management and campaigns on Facebook, Instagram, LinkedIn, YouTube and X",
    illustration: { src: "/mumbai/service/sm1.png", width: 1199, height: 799, crop: [92, 167, 906, 486] },
    image: { src: "/mumbai/service/sm2.webp", alt: "Phone surrounded by Facebook, Instagram, LinkedIn and X icons" },
  },
  {
    title: "Performance marketing",
    subtitle: "Campaigns tied to leads and sales, not just clicks",
    illustration: { src: "/mumbai/service/pm1.png", width: 601, height: 400, crop: [37, 23, 529, 355] },
    image: { src: "/mumbai/service/pm2.webp", alt: "Campaign performance charts on a laptop and phone" },
  },
  {
    title: <>App download and<br />in app advertising</>,
    illustration: { src: "/mumbai/service/app1.png", width: 1200, height: 1200, crop: [288, 183, 593, 827] },
    image: { src: "/mumbai/service/app2.webp", alt: "Phone showing an app with in-app ads" },
  },
  {
    title: <>Content marketing and<br />digital media release</>,
    illustration: { src: "/mumbai/service/content1.png", width: 473, height: 614, crop: [25, 130, 423, 354] },
    image: { src: "/mumbai/service/content2.webp", alt: "Desk with a laptop and printed content marketing material" },
  },
];

// The illustration PNGs have uneven transparent margins, so each one is cropped to its drawing ([x, y, w, h] in source pixels) and then fitted to the panel
function Illustration({ src, width, height, crop: [x, y, w, h] }) {
  return (
    <div style={{ "--ar": w / h, aspectRatio: `${w} / ${h}` }} className="relative mt-4 mb-6 ml-auto w-[min(62cqw,calc(200px*var(--ar)))] overflow-hidden md:absolute md:right-[10%] md:bottom-[8%] md:m-0 md:w-[min(64cqw,calc(58cqh*var(--ar)))]">
      <Image src={src} width={width} height={height} alt="" sizes="(max-width: 767px) 60vw, 30vw" className="absolute h-auto max-w-none" style={{ width: `${(width / w) * 100}%`, left: `${(-x / w) * 100}%`, top: `${(-y / h) * 100}%` }} />
    </div>
  );
}

function ServiceCard({ service, index, total, progress }) {
  const reduceMotion = useReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, reduceMotion ? 1 : targetScale]);

  return (
    <div className="sticky top-[calc(12vh+var(--offset))] flex justify-center" style={{ "--offset": `${index * 14}px` }}>
      <motion.article style={{ scale }} className="grid w-full origin-top overflow-hidden rounded-[24px] bg-[#f1ede6] shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.18)] md:h-[clamp(420px,42vw,540px)] md:grid-cols-2">
        <div className="relative isolate overflow-hidden px-6 pt-6 [container-type:inline-size] md:px-[6%] md:pt-[7%] md:[container-type:size]">
          <h3 className="text-[26px] leading-tight tracking-[-.03em] lg:text-[34px]">{service.title}</h3>
          {service.subtitle && <p className="mt-2 max-w-[340px] text-xs lg:text-sm">{service.subtitle}</p>}
          <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute bottom-[-30%] left-[-22%] -z-10 w-[85%] fill-[#ffed00] md:bottom-[-24%] md:w-[78%]">
            <path d="M50 0C54 36 64 46 100 50C64 54 54 64 50 100C46 64 36 54 0 50C36 46 46 36 50 0Z" />
          </svg>
          <Illustration {...service.illustration} />
        </div>
        <div className="relative order-first aspect-[16/10] bg-[#1d2128] md:order-last md:aspect-auto">
          <Image src={service.image.src} fill alt={service.image.alt} sizes="(max-width: 767px) 90vw, 40vw" className="object-cover" />
        </div>
      </motion.article>
    </div>
  );
}

export default function DigitalMarketing() {
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section aria-labelledby="mumbai-marketing-heading" className="bg-white py-12 text-black md:py-16 lg:py-20">
      <div className="containers">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-[11px] lg:text-sm"><span aria-hidden="true" className="mr-1 text-[#ffdf00]">✦</span>{stat.label}</dt>
              <dd className="text-[34px] leading-none tracking-[-.04em] md:text-[40px] lg:text-[56px]">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-[1.1fr_1fr] md:gap-[10%] lg:mt-20">
          <h2 id="mumbai-marketing-heading" className="text-[26px] leading-[1.12] tracking-[-.03em] md:text-[32px] lg:text-[42px]">Digital Marketing Company in Mumbai: <span className="text-[#008391]">Visibility That Brings Enquiries</span></h2>
          <p className="text-xs leading-[1.6] text-[#58696a] md:pt-1 lg:text-sm">Being visible is not enough. You need to reach the right people at the right moment, with a message that makes them act. Our digital marketing work is built around leads, sales and conversions you can measure.</p>
        </div>

        <div ref={stackRef} className="mt-10 flex flex-col gap-[8vh] md:mt-14">
          {services.map((service, index) => (
            <ServiceCard key={service.image.src} service={service} index={index} total={services.length} progress={scrollYProgress} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="max-w-[560px] border-l-2 border-[#ffed00] pl-4 text-xs leading-[1.6] text-[#58696a] lg:text-sm">If you have been searching for a digital marketing company in Mumbai that reports on enquiries and conversions instead of impressions, that is how we run every campaign.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#ffed00] px-4 py-3 text-xs font-semibold text-[#007b89] transition-colors hover:bg-[#fff56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007b89] lg:px-5 lg:py-4 lg:text-sm">Enquire on Whatsapp <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>
      </div>
    </section>
  );
}
