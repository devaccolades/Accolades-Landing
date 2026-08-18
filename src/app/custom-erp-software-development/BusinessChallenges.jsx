import { ArrowRight } from "lucide-react";

const challenges = [
  {
    title: "Scattered Business Data",
    description:
      "Information remains spread across multiple files, applications, and departments daily.",
  },
  {
    title: "Manual Process Delays",
    description:
      "Repetitive manual tasks reduce productivity and increase costly operational errors significantly.",
  },
  {
    title: "Limited Business Visibility",
    description:
      "Decision-makers struggle without accurate, real-time insights across business operations.",
  },
  {
    title: "Poor Team Coordination",
    description:
      "Departments work independently, creating communication gaps and unnecessary project delays.",
  },
  {
    title: "Inventory Management Issues",
    description:
      "Stock inaccuracies cause shortages, overstocking, and unnecessary operational expenses regularly.",
  },
  {
    title: "Difficult Business Growth",
    description:
      "Existing software cannot efficiently support expanding business needs and workflows.",
  },
];

export default function BusinessChallenges() {
  return (
    <section className="relative isolate -mt-px overflow-hidden bg-white pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[72%] bg-[radial-gradient(ellipse_64%_62%_at_41%_0%,rgba(255,195,195,0.58),rgba(255,228,228,0.3)_48%,transparent_77%),radial-gradient(ellipse_40%_55%_at_83%_4%,rgba(213,246,250,0.55),transparent_76%)]"
      />

      <div className="containers">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <span className="inline-flex rounded-full bg-black px-2.5 py-1 font-almarai text-[8px] font-bold uppercase leading-none text-white">
              Does This Sound Familiar?
            </span>

            <h2 className="mt-4 max-w-[700px] font-mont text-[32px] font-medium leading-[1.08] tracking-[-0.045em] text-[#ef2227] sm:text-[41px] lg:text-[49px]">
              Is Your Business Being Held
              <br className="hidden sm:block" /> Back by Outdated Processes?
            </h2>

            <p className="mt-5 max-w-[700px] font-mont text-[13px] leading-[1.35] text-[#555] sm:text-[14px]">
              Many small and medium enterprises lose valuable time and revenue
              because disconnected systems, manual work, and limited visibility
              slow daily operations.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#d90000] px-6 font-almarai text-[13px] font-bold text-white shadow-[0_18px_36px_rgba(217,0,0,0.2)] transition hover:bg-[#bd0000] focus:outline-none focus:ring-2 focus:ring-[#d90000]/40 focus:ring-offset-2 sm:px-7"
          >
            Discuss Your Requirements
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {challenges.map(({ title, description }) => (
            <article
              key={title}
              className="min-h-[145px] rounded-[18px] bg-[linear-gradient(135deg,#fff8f8_0%,#fffdfd_100%)] p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 size-3.5 shrink-0 rounded-full bg-[#f52228]" />
                <div>
                  <h3 className="font-almarai text-[18px] font-bold leading-[1.18] tracking-[-0.035em] text-[#111] sm:text-[19px]">
                    {title}
                  </h3>
                  <p className="mt-2 font-mont text-[13px] leading-[1.5] text-[#383838] sm:text-[14px]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
