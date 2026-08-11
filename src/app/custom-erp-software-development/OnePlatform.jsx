import Image from "next/image";

const departments = [
  "Sales",
  "Inventory",
  "Procurement",
  "Finance",
  "HR",
  "Operations",
  "Reports",
];

export default function OnePlatform() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-6 md:py-10 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[75%] bg-[radial-gradient(ellipse_at_top,rgba(209,246,251,0.72),rgba(255,255,255,0)_70%)]"
      />

      <div className="containers">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <span className="inline-flex rounded-full bg-black px-2.5 py-1 font-almarai text-[8px] font-bold uppercase leading-none text-white">
              One ERP. Complete Business Control.
            </span>

            <h2 className="mt-4 max-w-[670px] font-mont text-[32px] font-medium leading-[1.08] tracking-[-0.045em] text-[#080808] sm:text-[41px] lg:text-[49px]">
              One Platform. Every Process.
              <br className="hidden sm:block" /> Unlimited Visibility.
            </h2>

            <p className="mt-5 max-w-[700px] font-mont text-[13px] leading-[1.25] text-[#555] sm:text-[14px]">
              Your business shouldn&apos;t rely on disconnected software and
              spreadsheets. Our custom web-based ERP solution unifies every
              critical department into one secure platform, giving you
              real-time visibility, streamlined workflows, and complete
              operational control.
            </p>
          </div>

          <div className="relative mx-auto flex h-[170px] w-full max-w-[390px] items-center justify-center sm:h-[200px] lg:mx-0 lg:ml-auto">
            <Image
              src="/erp/ERP.svg"
              alt=""
              fill
              sizes="390px"
              className="object-contain"
              aria-hidden="true"
            />
            <Image
              src="/erp/a-logo.svg"
              alt="Accolades Integrated"
              width={248}
              height={46}
              className="relative z-10 h-auto w-[210px] sm:w-[248px]"
            />
          </div>
        </div>

        <div className="mt-10 overflow-x-auto pb-2 scrollbar-hidden sm:mt-12 lg:mt-14">
          <div className="relative mx-auto flex min-w-[850px] justify-between px-2 pt-5">
            <div
              aria-hidden="true"
              className="absolute left-[3.5%] right-[3.5%] top-[25px] h-px bg-[#08aa87]"
            />

            {departments.map((department) => (
              <div
                key={department}
                className="relative z-10 flex min-w-[90px] flex-col items-center"
              >
                <span className="size-3.5 rounded-full bg-[#08aa87] ring-4 ring-white" />
                <span className="mt-3.5 rounded-[16px] bg-[#f6f6f6] px-5 py-4 font-mont text-[16px] leading-none text-[#111]">
                  {department}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
