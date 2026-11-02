import { ArrowUpRight } from "lucide-react";

const whatsappUrl = "https://wa.me/919048100233?text=Hi%2C%20I%27d%20like%20to%20talk%20to%20your%20Mumbai%20team.";

// desktop/mobile hold each step's position (in %) inside the ring artwork, so the text stays in its band at every width
const steps = [
  { number: "01", title: "Understand", description: "We check your goals and existing systems.", desktop: { left: 14.4, top: 76, edge: 40 }, mobile: { left: 10, top: 13.5 } },
  { number: "02", title: "Plan", description: "We set clear steps, budgets and success metrics.", desktop: { left: 40.6, top: 64.5, edge: 60 }, mobile: { left: 16.7, top: 36.9 } },
  { number: "03", title: "Build", description: "Our team designs and builds your new digital tools.", desktop: { left: 57.3, top: 50.3, edge: 80 }, mobile: { left: 25, top: 57.7 } },
  { number: "04", title: "Measure", description: "We track results and adjust using real data.", desktop: { left: 74.7, top: 38, edge: 100 }, mobile: { left: 35, top: 78.8 } },
];

const ringStroke = { fill: "#fff", stroke: "#e4e4e4", strokeWidth: 1.5, vectorEffect: "non-scaling-stroke" };

// Mobile rings all touch at (40, 6) and grow down along the same steep diagonal
const mobileRings = [267, 200, 145, 92].map((r) => ({ r, cx: 40 + r * 0.38, cy: 6 + r * 0.925 }));

function StepText({ step, mobile }) {
  return (
    <>
      <h3 className={`leading-tight tracking-[-.02em] ${mobile ? "text-[clamp(16px,4.9cqw,26px)]" : "text-[clamp(14px,2.1cqw,26px)]"}`}>
        <span aria-hidden="true" className={`mr-1.5 ${step.number === "04" ? "text-[#008391]" : "text-[#ffdf00]"}`}>✦</span>{step.title}
      </h3>
      <p className={`mt-[.6em] leading-[1.5] ${mobile ? "text-[clamp(12px,3.4cqw,17px)]" : "text-[clamp(11px,1.35cqw,16px)]"}`}>{step.description}</p>
    </>
  );
}

export default function HowWeWork() {
  return (
    <section aria-labelledby="mumbai-process-heading" className="overflow-hidden bg-white bg-[radial-gradient(ellipse_at_75%_0%,#f1f1f1,transparent_45%)] pt-12 text-black md:pt-16 lg:pt-20">
      <div className="containers relative z-10 flex flex-col items-start gap-6 md:flex-row md:justify-between">
        <div>
          <p className="mb-4 text-sm lg:text-lg"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> How we work</p>
          <h2 id="mumbai-process-heading" className="text-[32px] leading-[1.08] font-medium tracking-[-.04em] lg:text-[44px]">How We Work<br />Together</h2>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#16767c] px-4 py-3 text-xs font-semibold text-[#ffed00] transition-colors hover:bg-[#0f6166] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16767c] md:mt-12 lg:px-5 lg:py-4 lg:text-sm">Book a Call With Our Team <ArrowUpRight aria-hidden="true" size={16} /></a>
      </div>

      {/* Desktop: semicircles sharing the bottom-left corner */}
      <div className="relative -mt-[2vw] hidden aspect-[2/1] w-[min(89vw,1300px)] [container-type:inline-size] md:block">
        <svg aria-hidden="true" viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full">
          <circle cx="500" cy="500" r="500" fill="#ffed00" />
          {[400, 300, 200].map((r) => <circle key={r} cx={r} cy="500" r={r} {...ringStroke} />)}
        </svg>
        <ol>
          {steps.map((step) => (
            <li key={step.number}>
              <div className="absolute max-w-[16.5%]" style={{ left: `${step.desktop.left}%`, top: `${step.desktop.top}%` }}><StepText step={step} /></div>
              <span aria-hidden="true" className="absolute bottom-[1.5%] text-[clamp(10px,1.1cqw,14px)] text-[#7b8586]" style={{ right: `${100 - step.desktop.edge + 1.5}%` }}>{step.number}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: circles sharing a top-left point, stepping down the page */}
      <div className="relative mt-8 aspect-[300/520] w-full [container-type:inline-size] md:hidden">
        <svg aria-hidden="true" viewBox="0 0 300 520" className="absolute inset-0 h-full w-full overflow-visible">
          {mobileRings.map(({ r, cx, cy }, index) => <circle key={r} cx={cx} cy={cy} r={r} {...(index === 0 ? { fill: "#ffed00" } : ringStroke)} />)}
        </svg>
        <ol>
          {steps.map((step) => (
            <li key={step.number}>
              <span aria-hidden="true" className="absolute left-[4%] mt-[.4em] text-[clamp(10px,2.8cqw,14px)] text-[#7b8586]" style={{ top: `${step.mobile.top}%` }}>{step.number}</span>
              <div className="absolute max-w-[38%]" style={{ left: `${step.mobile.left}%`, top: `${step.mobile.top}%` }}><StepText step={step} mobile /></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
