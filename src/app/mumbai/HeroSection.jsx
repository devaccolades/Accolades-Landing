import Image from "next/image";

const whatsappUrl = "https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team.";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#004f43] px-[max(5.2vw,calc((100vw-1440px)/2))] py-[30px] text-[#fffef3] bg-[url('/mumbai/bg.webp')] bg-cover bg-top bg-no-repeat max-[1100px]:pt-[23px] max-[700px]:px-[6%] max-[700px]:pb-10 [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-white [&_a:focus-visible]:outline-offset-[5px]" aria-labelledby="mumbai-heading">
      <div className="relative -mx-[5.2vw] h-[clamp(350px,31vw,500px)] min-[1600px]:mx-[calc(-1*max(5.2vw,(100vw-1440px)/2))] max-[1100px]:h-[310px] max-[700px]:-mx-[6.82%] max-[700px]:h-[clamp(220px,53vw,350px)]" aria-hidden="true">
        <Image className="pointer-events-none absolute -top-5 left-[-12%] h-auto w-full max-w-none max-[1100px]:-top-6 max-[1100px]:left-[-18%] max-[1100px]:w-[112%] max-[700px]:top-5 max-[700px]:left-[-32%] max-[700px]:w-[145%]" src="/mumbai/bridge_transparent.svg" width={1440} height={498} alt="" priority />
        {["left-[7%] top-[18%]", "left-[21.2%] top-[10%]", "left-[30.7%] top-[42%]", "left-[61.3%] top-[18%]", "left-[56.5%] top-[58%]", "left-[82.6%] top-[26%]", "left-[94.4%] top-[50%]"].map((position) => <span key={position} className={`absolute size-[13px] bg-[#fff000] [clip-path:polygon(50%_0,62%_37%,100%_50%,62%_62%,50%_100%,38%_62%,0_50%,38%_37%)] ${position}`} />)}
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-[1.4fr_1fr] gap-[8%] pb-2 max-[700px]:grid-cols-1 max-[700px]:gap-[26px]">
        <div>
          <p className="mb-3 text-base max-[1100px]:mb-2.5 max-[1100px]:text-xs max-[700px]:mb-3 max-[700px]:text-[13px]"><span className="text-[#fff000]" aria-hidden="true">✦</span> Mumbai · Malad West</p>
          <h1 className="m-0 text-[clamp(40px,4.55vw,72px)] leading-[.99] font-bold tracking-[-.035em] max-[700px]:text-[clamp(34px,7.7vw,52px)] max-[700px]:leading-[1.05]" id="mumbai-heading">Digital Marketing<br /> Company in Mumbai<br /> That Also Builds Your<br /> Software</h1>
        </div>
        <div className="pt-1 text-[clamp(14px,1.18vw,18px)] leading-[1.48] max-[1100px]:text-xs max-[700px]:max-w-[520px] max-[700px]:text-[15px]">
          <p className="mb-3">Most Mumbai businesses end up hiring one agency to get found and another team to build what customers use. Accolades Integrated does both. We are a digital marketing and software development company in Mumbai, working from our office in Malad West since January 2023</p>
          <p className="mb-3 border-l border-[#e4f000] pl-[9px] text-[.88em] max-[700px]:text-[13px]">Our parent company has been doing this since 2012 and we became a <strong>Google Partner</strong> in 2016. By 2026 we are working with over <strong>600 clients.</strong> The Mumbai team brings that experience to businesses here.</p>
          <a className="mt-[14px] inline-flex items-center justify-center gap-4 rounded-[10px] bg-[#ffed00] px-4 py-[14px] text-[15px] font-bold text-[#007b89] no-underline transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#fff56b] max-[1100px]:mt-2 max-[1100px]:px-[13px] max-[1100px]:py-[11px] max-[1100px]:text-xs max-[700px]:mt-2.5 max-[700px]:px-4 max-[700px]:py-[14px] max-[700px]:text-[15px]" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to our Mumbai team <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
