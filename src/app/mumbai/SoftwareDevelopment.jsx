import Image from "next/image";

const solutions = [
  { title: "Web applications", description: "Browser-based tools that bring your processes into one place" },
  { title: "Mobile applications", description: "Apps for customers, employees and partners" },
  { title: "CRM", description: "Lead management, customer records, sales pipelines, follow ups and reporting" },
  { title: "ERP", description: "Operations, finance, inventory, sales, HR, procurement and reporting in one system" },
  { title: "SaaS", description: "Cloud-based products that serve many users" },
  { title: "Custom software", description: "For cases where generic systems don’t fit" },
];

export default function SoftwareDevelopment() {
  return (
    <section aria-labelledby="mumbai-software-heading" className="overflow-hidden bg-[#edf5f1] py-12 text-black md:py-16 lg:py-20">
      <div className="containers grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-[8%]">
        <div>
          <div className="grid gap-4 md:grid-cols-[1.2fr_1fr] md:gap-[8%] lg:grid-cols-1">
            <h2 id="mumbai-software-heading" className="text-[26px] leading-[1.12] tracking-[-.03em] md:text-[30px] lg:text-[40px]">Software Development Company in Mumbai: <span className="text-[#008391]">Systems Built Around Your Workflow</span></h2>
            <p className="text-xs leading-[1.6] text-[#58696a] md:pt-1 lg:pt-0 lg:text-sm">We follow a simple process: understand, design, develop, integrate, deploy, improve.</p>
          </div>

          <figure className="relative isolate mt-8 md:mt-10 lg:-ml-[14%] lg:w-[114%]">
            <Image src="/mumbai/software/code-bg.png" width={755} height={713} alt="" aria-hidden="true" sizes="(max-width: 1023px) 70vw, 40vw" className="absolute top-[-37%] left-[-14%] -z-10 h-auto w-[80%] max-w-none" />
            <Image src="/mumbai/software/devices.png" width={710} height={427} alt="CRM dashboard built by Accolades, shown on a laptop and a phone" sizes="(max-width: 1023px) 90vw, 50vw" className="h-auto w-full" />
          </figure>
        </div>

        <div className="lg:pt-1">
          <p className="text-xs leading-[1.6] text-[#58696a] lg:max-w-[440px] lg:text-sm">Since 2025, Accolades has also built business software. Many companies in Mumbai outgrow spreadsheets and off the shelf tools and we build software around how your team actually works.</p>
          <dl className="mt-6 lg:mt-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="grid grid-cols-[44%_1fr] gap-4 border-b border-[#d6e1dc] py-4 md:grid-cols-[45%_1fr] lg:grid-cols-[42%_1fr] lg:py-5">
                <dt className="text-lg leading-[1.1] tracking-[-.02em] lg:max-w-[190px] lg:text-2xl">{solution.title}</dt>
                <dd className="text-xs leading-[1.6] text-[#3f4d4e] lg:text-sm">{solution.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
