import Image from "next/image";

const whatsappUrl = "https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team.";

// Each star blinks at its own speed so they never pulse in unison
const stars = [
  { position: "left-[7%] top-[18%]", blink: 2.4 },
  { position: "left-[21.2%] top-[10%]", blink: 3.1 },
  { position: "left-[30.7%] top-[42%]", blink: 2.7 },
  { position: "left-[61.3%] top-[18%]", blink: 3.4 },
  { position: "left-[56.5%] top-[58%]", blink: 2.2 },
  { position: "left-[82.6%] top-[26%]", blink: 2.9 },
  { position: "left-[94.4%] top-[50%]", blink: 3.2 },
];

export default function HeroSection() {
  return (
    <section className="-mt-13 relative isolate flex min-h-svh flex-col overflow-hidden bg-[#004f43] bg-[url('/mumbai/bg.webp')] bg-cover bg-top bg-no-repeat pt-[100px] pb-10 text-[#fffef3] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(to_top,rgba(0,58,46,.6),transparent_50%)] max-[700px]:pt-[84px] [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-white [&_a:focus-visible]:outline-offset-[5px]" aria-labelledby="mumbai-heading">
      {/* The grid lines are baked into bg.webp, so grid-lines.svg traces them on top and a band of light moves across that copy. It fades out above the text to keep the text easy to read */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30 mix-blend-screen [mask-image:linear-gradient(#000_45%,transparent_65%)] max-[700px]:[mask-image:linear-gradient(#000_18%,transparent_32%)]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/mumbai/grid-lines.svg')] bg-cover bg-top bg-no-repeat" />
        <div className="mumbai-line-glint absolute inset-y-0 left-0" />
      </div>

      {/* The bridge takes whatever height is left between the header and the text, so it never runs under either */}
      <div className="relative min-h-[clamp(220px,24vw,420px)] flex-1 max-[700px]:h-[clamp(170px,46vw,300px)] max-[700px]:min-h-0 max-[700px]:flex-none" aria-hidden="true">
        {/* Back to front: the grid lines (section background), the stars, then the bridge. They also appear in that order */}
        {stars.map(({ position, blink }, index) => <span key={position} className={`mumbai-star absolute size-[13px] bg-[#fff000] [clip-path:polygon(50%_0,62%_37%,100%_50%,62%_62%,50%_100%,38%_62%,0_50%,38%_37%)] ${position}`} style={{ "--star-delay": `${index * 0.15}s`, "--star-blink": `${blink}s` }} />)}
        <Image className="mumbai-bridge pointer-events-none absolute inset-0 h-full w-full object-contain object-[0%_100%] max-[700px]:object-cover max-[700px]:object-[45%_100%]" src="/mumbai/bridge_transparent.svg" width={1440} height={498} alt="" priority />
      </div>

      {/* Same width as the site header, so the text and the header share their left and right edges */}
      <div className="relative mx-auto mt-6 grid w-[82%] grid-cols-[1.35fr_1fr] items-end gap-[5%] max-[700px]:w-[90%] max-[700px]:grid-cols-1 max-[700px]:items-start max-[700px]:gap-[26px]">
        <div>
          <p className="mumbai-rise [--rise-delay:0s] mb-3 text-base max-[1100px]:mb-2.5 max-[1100px]:text-xs max-[700px]:mb-3 max-[700px]:text-[13px]"><span className="text-[#fff000]" aria-hidden="true">✦</span> Mumbai · Malad West</p>
          <h1 className="mumbai-rise [--rise-delay:0.1s] m-0 text-[clamp(28px,4.2vw,68px)] leading-[.99] font-bold tracking-[-.035em] max-[700px]:text-[clamp(26px,7.7vw,52px)] max-[700px]:leading-[1.05]" id="mumbai-heading">Digital Marketing<br /> Company in Mumbai<br /> That Also Builds Your<br /> Software</h1>
        </div>
        <div className="text-[clamp(14px,1.08vw,17px)] leading-[1.48] max-[1100px]:text-xs max-[700px]:max-w-[520px] max-[700px]:text-[15px]">
          <p className="mumbai-rise [--rise-delay:0.2s] mb-3 text-pretty">Most Mumbai businesses end up hiring one agency to get found and another team to build what customers use. Accolades Integrated does both. We are a digital marketing and software development company in Mumbai, working from our office in Malad West since January 2023</p>
          <p className="mumbai-rise [--rise-delay:0.3s] mb-3 border-l text-pretty border-[#e4f000] pl-[9px] text-[.88em] max-[700px]:text-[13px]">Our parent company has been doing this since 2012 and we became a <strong>Google Partner</strong> in 2016. By 2026 we are working with over <strong>600 clients.</strong> The Mumbai team brings that experience to businesses here.</p>
          <a className="mumbai-rise [--rise-delay:0.4s] mt-[14px] inline-flex items-center justify-center gap-4 rounded-[10px] bg-[#ffed00] px-4 py-[14px] text-[15px] font-bold text-[#007b89] no-underline transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#fff56b] max-[1100px]:mt-2 max-[1100px]:px-[13px] max-[1100px]:py-[11px] max-[1100px]:text-xs max-[700px]:mt-2.5 max-[700px]:px-4 max-[700px]:py-[14px] max-[700px]:text-[15px]" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Talk to our Mumbai team <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
