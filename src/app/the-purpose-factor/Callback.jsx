export default function Callback() {
  return (
    <section className="pt-16 pb-36 bg-[#F9F9F9]">
      <div className="mx-auto containers ">

        {/* Headline */}
        <h2 className="max-w-4xl font-bold uppercase leading-tight text-black text-[20px] md:text-[24px] lg:text-[32px]">
          A clear purpose lifted trust scores and doubled repeat sales for past clients.
        </h2>

        {/* Subtext */}
        <p className="mt-4 max-w-2xl text-[13px] md:text-[14px] lg:text-[16px] text-black sm:text-base">
          Real results from brands who chose to lead with purpose.
        </p>

        {/* CTA Box */}
        <div className="mt-14 rounded-2xl border border-blue-400/60 bg-blue-50 px-6 py-10 sm:px-10 sm:py-12 text-center">

          <h3 className="text-sm font-semibold text-black sm:text-base">
            Ready to define your purpose?
          </h3>

          <p className="mx-auto mt-2 max-w-md text-xs text-gray-600 sm:text-sm">
            Start with a short workshop that reveals what makes your brand truly matter.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 cursor-pointer">
            Get a Call Back <span aria-hidden>↗</span>
          </button>

        </div>
      </div>
    </section>
  );
}
