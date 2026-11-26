import Image from "next/image";

const steps = [
  { number: "01", title: "Attract", description: "Reach the right buyers with campaigns built for measurable demand." },
  { number: "02", title: "Engage", description: "Give them a fast, considered website that makes the next step clear." },
  { number: "03", title: "Convert", description: "Send every enquiry straight into a CRM your sales team can act on." },
];

const introduction = "Success takes three simple steps. First, attract buyers. Next, give them a great website. Finally, make the next step easy. For example, an ad sends people to your site. They fill out a form. That data goes right into your custom CRM.";

export default function ConnectedSystem() {
  return (
    <section className="overflow-hidden bg-white py-12 text-black sm:py-16 lg:pt-20 lg:pb-14" aria-labelledby="connected-system-heading">
      <div className="containers">
        <div className="grid gap-7 pb-9 md:grid-cols-[1fr_1fr] md:gap-[11%] lg:pb-12">
          <p className="text-base lg:text-xl"><span className="text-[#ffdf00]" aria-hidden="true">✦</span> One connected system</p>
          <div>
            <h2 id="connected-system-heading" className="mb-4 text-[30px] leading-[1.08] tracking-[-.03em] lg:text-[38px]">How Marketing<br />Meets Software</h2>
            <p className="max-w-[470px] text-[13px] leading-[1.5] lg:text-[15px]">{introduction}</p>
          </div>
        </div>

        <ol className="relative z-10 grid border-y border-[#d9d9d9] md:grid-cols-[.95fr_1fr_1.05fr]">
          {steps.map((step) => (
            <li key={step.number} className="border-[#d9d9d9] py-5 not-last:border-b md:px-7 md:py-5 md:first:pl-0 md:last:pr-0 md:not-last:border-r md:not-last:border-b-0 lg:py-6">
              <p className="mb-6 text-base text-[#008391] lg:mb-7 lg:text-xl"><span className="text-[#ffdf00]" aria-hidden="true">✦</span>{step.number}</p>
              <h3 className="mb-3 text-lg leading-tight lg:text-2xl">{step.title}</h3>
              <p className="max-w-[285px] text-[13px] leading-[1.5] lg:text-[15px]">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="relative mt-11 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-0 lg:mt-16">
          <div className="relative z-10">
            <h2 className="mb-4 text-[30px] leading-[1.08] tracking-[-.03em] lg:text-[38px]">Real Solutions for<br /><span className="text-[#008391]">Real Problems</span></h2>
            <p className="max-w-[490px] text-[13px] leading-[1.5] lg:text-[15px]">{introduction}</p>

            <div className="mt-7 max-w-[570px] pl-1 lg:mt-9">
              <article className="relative min-h-[190px] drop-shadow-[0_10px_18px_rgba(0,0,0,0.16)] bg-[url('/mumbai/Union.png')] bg-[length:100%_100%] bg-no-repeat px-5 pt-5 pb-14 lg:min-h-[205px] lg:px-6 lg:pt-6 lg:pb-14">
                <h3 className="mb-2 text-base leading-tight text-[#fff000] lg:text-xl"><span aria-hidden="true">✦</span> Better online sales</h3>
                <p className="max-w-[465px] pr-3 pl-4 text-[13px] leading-[1.5] text-white/90 lg:text-base">A retail store needed a fast mobile shop. We built a clean site with secure payments. We then linked their website stock directly to their internal tools.</p>
              </article>
              {/* The upward shadow falls on the card behind and is what separates the two */}
              <article className="relative -mt-10 -ml-1 min-h-[170px] [filter:drop-shadow(0_-5px_7px_rgba(0,0,0,0.26))_drop-shadow(0_10px_18px_rgba(0,0,0,0.16))] bg-[url('/mumbai/Union.png')] bg-[length:100%_100%] bg-no-repeat px-5 pt-6 pb-7 lg:-mt-14 lg:min-h-[185px] lg:px-6 lg:pt-7 lg:pb-7">
                <h3 className="mb-2 text-base leading-tight text-[#fff000] lg:text-xl"><span aria-hidden="true">✦</span> Fixing lost leads</h3>
                <p className="max-w-[465px] pr-3 pl-4 text-[13px] leading-[1.5] text-white/90 lg:text-base">A local service lost too many online enquiries. We built a custom CRM. It grabs website leads instantly. It tells agents exactly when to call back.</p>
              </article>
            </div>
          </div>

          <div className="mumbai-reveal relative order-first min-w-0 md:order-last md:-mt-[110px] md:-mr-[13vw] md:self-start">
            <Image src="/mumbai/man.webp" width={736} height={609} alt="A worried businessman watching a sales lead disappear beside his laptop" sizes="(max-width: 767px) 88vw, 60vw" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
