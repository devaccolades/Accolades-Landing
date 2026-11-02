import { ArrowUpRight } from "lucide-react";
import PhoneVideo from "./PhoneVideo";

const services = [
  { title: <>Web<br />design and development</>, description: "Corporate, CMS, e commerce and responsive websites, with payment gateway and analytics integration" },
  { title: "Branding", description: "Brand analysis, naming, taglines, logo and identity systems" },
  { title: <>Video and creative production</>, description: "Corporate films, explainer videos, 2D and 3D animation, TV commercials and brand videos" },
];

export default function BeyondTheBrief() {
  return (
    <section aria-labelledby="mumbai-beyond-heading" className="overflow-hidden bg-white bg-[radial-gradient(closest-side_at_75%_50%,#efefef,transparent)] py-12 text-black md:py-16 lg:py-10">
      <div className="containers grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-x-[6%] lg:grid-cols-[1fr_.8fr_1.15fr] lg:items-center lg:gap-x-[3%]">
        <div className="md:col-start-1 md:row-start-1">
          <p className="mb-4 text-sm lg:text-base"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> Beyond the brief</p>
          <h2 id="mumbai-beyond-heading" className="text-[28px] leading-[1.12] font-medium tracking-[-.03em] md:text-[32px] lg:text-[40px]">Beyond Marketing and Software: Web, Branding and Video</h2>
          <a href="#mumbai-enquiry-heading" className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#ffed00] px-4 py-3 text-xs font-semibold text-[#007b89] transition-colors hover:bg-[#fff56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007b89] lg:mt-8 lg:px-5 lg:py-4 lg:text-sm">Grow your Business <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>

        <dl className="md:col-start-1 md:row-start-2 lg:col-start-3 lg:row-start-1">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-[44%_1fr] gap-4 py-5 not-last:border-b not-last:border-[#d8e3df] first:pt-0 last:pb-0">
              <dt className="text-lg leading-[1.15] tracking-[-.02em] lg:text-xl">{service.title}</dt>
              <dd className="text-xs leading-[1.6] text-[#3f4d4e] lg:text-sm">{service.description}</dd>
            </div>
          ))}
        </dl>

        <PhoneVideo videoId="chZQUmBDgcI" title="Best Interior Designers in Kochi & South India | D2R Interiors" className="mx-auto w-[min(70%,280px)] drop-shadow-[0_28px_36px_rgba(0,0,0,0.2)] md:col-start-2 md:row-span-2 md:row-start-1 md:w-full md:max-w-[300px] md:self-center lg:row-span-1 lg:max-w-[270px]" />
      </div>
    </section>
  );
}
