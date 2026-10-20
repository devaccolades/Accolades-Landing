const benefits = [
  {
    title: <>One brief,<br />one team</>,
    description: "Strategy, design, development and campaigns are planned together",
    position: "top-[80%] left-[12%] -rotate-[7deg] md:top-[58%] md:left-[12%] md:-rotate-[7deg]",
  },
  {
    title: <>Business<br />first</>,
    description: "We define the objective before choosing the solution",
    position: "top-[63%] left-[46%] -rotate-[9deg] md:top-[61%] md:left-[32.5%] md:rotate-[7deg]",
  },
  {
    title: <>Creative<br />included</>,
    description: "Branding, video, animation and design sit in the same company",
    position: "top-[45%] left-[5%] rotate-[7deg] md:top-[35%] md:left-[50.5%] md:rotate-[7deg]",
  },
  {
    title: <>Measured<br />work</>,
    description: "We track what matters and keep improving it",
    position: "top-[30%] left-[48%] -rotate-[13deg] md:top-[13%] md:left-[69.5%] md:-rotate-[13deg]",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-mumbai-heading" className="relative isolate overflow-hidden rounded-t-[28px] bg-[#edf5f1] pb-10 text-black md:pb-0">
      <div className="relative isolate h-[clamp(900px,285vw,1200px)] md:h-[540px] lg:h-[680px]">
      <svg aria-hidden="true" viewBox="0 0 756 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block">
        <path d="M-30 386 C35 265 90 299 230 296 C342 295 377 314 448 211 C521 101 556 104 644 104 C702 104 736 105 783 63" fill="none" stroke="#0b7980" strokeWidth="26" />
      </svg>

      <div className="containers relative pt-8 max-md:w-[94%] md:absolute md:pt-0 md:top-[9%] md:left-1/2 md:-translate-x-1/2">
        <h2 id="why-mumbai-heading" className="max-w-[640px] text-[28px] leading-[1.08] font-medium tracking-[-.045em] md:max-w-[48%] md:text-[clamp(25px,2.8vw,44px)]">Why Choose One Software Development and Marketing Partner in <span className="relative whitespace-nowrap">Mumbai<span aria-hidden="true" className="absolute right-[-4px] bottom-0 h-[.8em] w-[3px] bg-[#ffed00]" /></span></h2>
        <p className="mt-4 max-w-[520px] text-xs leading-[1.6] text-[#58696a] md:max-w-[42%] md:text-[clamp(10px,1vw,15px)]">A CRM works better when it connects to your sales process. An app needs a launch plan. A website needs traffic. When one team handles marketing, creative and technology, nothing gets lost between vendors.</p>
      </div>

      <svg aria-hidden="true" viewBox="0 0 202 586" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 h-full w-full md:hidden">
        <path d="M220 148 C192 218 170 232 108 242 C32 251 34 288 78 323 C128 363 185 355 165 426 C146 492 105 520 52 529 C19 535 1 548 -20 568" fill="none" stroke="#0b7980" strokeWidth="27" />
      </svg>
      <div>
        {benefits.map((benefit, index) => (
          <article key={index} className={`absolute w-[50%] rounded-[22px] bg-white px-[5%] py-[6%] shadow-[-12px_-14px_40px_-15px_rgba(47,77,65,0.22)] md:w-[16.5%] md:px-[2%] md:py-[2.2%] ${benefit.position}`}>
            <h3 className="relative mb-3 pl-3 text-lg leading-[1.05] tracking-[-.04em] md:text-[clamp(14px,1.65vw,25px)]"><span aria-hidden="true" className="absolute top-0 left-[-3px] text-sm text-[#ffdf00]">✦</span>{benefit.title}</h3>
            <p className="pl-3 text-xs leading-[1.5] text-[#58696a] md:text-[clamp(10px,1.05vw,15px)]">{benefit.description}</p>
          </article>
        ))}
      </div>

      </div>

      <div className="containers relative mt-10 flex justify-center md:mt-8 md:justify-end md:pb-10">
        <a href="https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-[#ffed00] px-4 py-3 text-xs font-semibold text-[#007b89] transition-colors hover:bg-[#fff56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007b89] lg:px-5 lg:py-4 lg:text-sm">Talk to our Mumbai team <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
