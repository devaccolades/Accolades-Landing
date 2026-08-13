const reasons = [
  {
    title: "Tailored for Your Business",
    description:
      "Every module, workflow, and approval process is designed around your operations.",
  },
  {
    title: "Modular & Scalable",
    description:
      "Start with the features you need and expand as your business grows.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Simple, intuitive screens ensure faster adoption with minimal employee training required.",
  },
  {
    title: "Role-Based Security",
    description:
      "Assign secure, department-specific permissions to protect sensitive business information and data.",
  },
  {
    title: "Seamless Integrations",
    description:
      "Connect your ERP with existing software, payment gateways, APIs, and third-party applications.",
  },
  {
    title: "Continuous Support",
    description:
      "Receive ongoing maintenance, feature upgrades, and expert support as your business evolves.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-white border border-y-1 py-6 sm:py-10 lg:py-16">
      <div className="containers">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-black px-2.5 py-1 font-almarai text-[8px] font-bold uppercase leading-none text-white">
            Why Choose Us?
          </span>

          <h2 className="mx-auto mt-4 max-w-[680px] font-mont text-[30px] font-medium leading-[1.08] tracking-[-0.04em] text-[#087184] sm:text-[38px] lg:text-[48px]">
            Why Businesses Choose Our
            <br className="hidden sm:block" /> Custom ERP Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] font-mont text-[12px] leading-[1.55] text-[#666] sm:text-[14px]">
            We build ERP systems that fit your business today and evolve with
            your growth, helping you improve efficiency, collaboration, and
            decision-making.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-8 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-10">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="border-l-[3px] border-[#11b99d] py-2 pl-4 sm:pl-5"
            >
              <h3 className="font-almarai text-[17px] font-bold leading-tight tracking-[-0.03em] text-[#111] sm:text-[18px]">
                {reason.title}
              </h3>
              <p className="mt-2 font-mont text-[13px] leading-[1.45] text-[#333] sm:text-[14px]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
