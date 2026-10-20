"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import LogoLoop from "@/components/LogoLoop";
import { mumbaiClientLogos } from "./clientLogos";

export default function BrandsAndOffice() {
  return (
    <section className="bg-white py-12 text-black md:py-16 lg:py-20" aria-labelledby="mumbai-brands-heading">
      <div className="containers">
        <div className="text-center">
          <h2 id="mumbai-brands-heading" className="text-[28px] leading-[1.08] font-medium tracking-[-.04em] md:text-4xl lg:text-[44px]">Trusted by Brands<br />Across Industries</h2>
          <p className="mx-auto mt-6 max-w-[900px] text-xs leading-[1.6] text-[#58696a] md:text-sm lg:text-base">We have worked with businesses in real estate, finance, healthcare, education, hospitality, automotive and retail, including <span className="font-semibold text-black">Vivo, Volvo, Tata Motors, Manappuram Finance, Radisson Blu, Pepperfry</span> and <span className="font-semibold text-black">Yamaha.</span></p>
        </div>

        <div className="mt-5 mb-10 md:mb-14 lg:mb-16">
          <LogoLoop logos={mumbaiClientLogos} speed={60} direction="left" logoHeight={72} gap={70} pauseOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Brands we have worked with" className="hidden md:block" />
          <LogoLoop logos={mumbaiClientLogos} speed={40} direction="left" logoHeight={50} gap={32} pauseOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Brands we have worked with" className="md:hidden" />
        </div>

        <section aria-labelledby="mumbai-office-heading" className="grid gap-9 rounded-[30px] bg-[#edf5f1] px-6 py-8 md:grid-cols-2 md:gap-[12%] md:rounded-[40px] md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div>
            <p className="mb-5 text-sm lg:text-lg"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> Mumbai Office</p>
            <h2 id="mumbai-office-heading" className="mb-4 text-[30px] leading-[1.08] font-medium tracking-[-.04em] md:text-4xl lg:text-[44px]">Our Mumbai<br />Office</h2>
            <p className="max-w-[360px] text-xs leading-[1.6] text-[#58696a] md:text-sm lg:text-base">Accolades opened its first Mumbai branch on 9 January 2023, as part of a wider expansion that already covered Kochi, Kozhikode, Trivandrum and Bengaluru.</p>
          </div>

          <div className="md:self-center">
            <Image src="/accolades_logo.svg" alt="Accolades Integrated" width={284} height={52} className="mb-3 h-auto w-[200px] lg:w-[230px]" />
            <address className="text-xs leading-[1.5] not-italic md:text-sm">
              <p className="font-medium text-[#008391]">Accolades Integrated Pvt Ltd</p>
              <p>301, Corporate Corner, 3rd Floor<br />Swamy Vivekananda Road, Mandik Nagar<br />Sunder Nagar, Malad West<br />Mumbai, Maharashtra 400064</p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <a href="mailto:mumbai@accoladesmedia.co.in" className="flex items-center gap-3 break-all hover:text-[#008391] focus-visible:outline-2 focus-visible:outline-[#008391]"><Mail aria-hidden="true" size={17} className="shrink-0 text-[#008391]" />mumbai@accoladesmedia.co.in</a>
                <a href="tel:+919072619925" className="flex items-center gap-3 hover:text-[#008391] focus-visible:outline-2 focus-visible:outline-[#008391]"><Phone aria-hidden="true" size={17} className="shrink-0 text-[#008391]" />+91 90726 19925</a>
                <a href="https://www.google.com/maps/search/?api=1&query=Accolades+Integrated+Pvt+Ltd+Corporate+Corner+Malad+West+Mumbai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold text-[#008391] hover:underline focus-visible:outline-2 focus-visible:outline-[#008391]"><MapPin aria-hidden="true" size={23} className="shrink-0 text-[#00b994]" />Get Direction <ArrowUpRight aria-hidden="true" size={16} /></a>
              </div>
            </address>
          </div>
        </section>
      </div>
    </section>
  );
}
