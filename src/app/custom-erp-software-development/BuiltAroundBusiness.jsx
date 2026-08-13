import {
  ArrowRight,
  ChartNoAxesCombined,
  PanelsTopLeft,
  Rocket,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const features = [
  {
    title: "Fully Customizable",
    description:
      "Configure modules, fields, forms, and workflows to fit your exact business needs.",
    icon: Wrench,
    color: "#ff4f55",
  },
  {
    title: "Role-Based Access",
    description:
      "Control user permissions with secure, department-specific access for every employee.",
    icon: Users,
    color: "#8eb4ff",
  },
  {
    title: "Scalable Architecture",
    description:
      "Start with essential modules and expand seamlessly as your business grows.",
    icon: PanelsTopLeft,
    color: "#ff9565",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks, approvals, notifications, and business processes effortlessly.",
    icon: Workflow,
    color: "#63d6bf",
  },
  {
    title: "Real-Time Insights",
    description:
      "Monitor operations through live dashboards, reports, and actionable business analytics.",
    icon: ChartNoAxesCombined,
    color: "#5277bc",
  },
  {
    title: "Easy User Adoption",
    description:
      "Simple, intuitive interface with quick implementation and minimal employee training.",
    icon: Rocket,
    color: "#e875dc",
  },
];

export default function BuiltAroundBusiness() {
  return (
    <section className="relative isolate overflow-hidden border-y border-[#e7e7e7] bg-white py-6 md:py-10 lg:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[62%] bg-[radial-gradient(ellipse_at_top,rgba(213,247,252,0.7),rgba(255,255,255,0)_72%)]"
      />

      <div className="containers">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <span className="inline-flex rounded-full bg-black px-2.5 py-1 font-almarai text-[8px] font-bold uppercase leading-none text-white">
              Your Business Is Unique. Your ERP Should Be Too.
            </span>

            <h2 className="mt-4 max-w-[670px] font-mont text-[32px] font-medium leading-[1.08] tracking-[-0.045em] text-[#080808] sm:text-[41px] lg:text-[49px]">
              Built Around Your Business,
              <br className="hidden sm:block" /> Not the Other Way Around
            </h2>

            <p className="mt-5 max-w-[720px] font-mont text-[13px] leading-[1.55] text-[#606060] sm:text-[14px]">
              Every business operates differently. That&apos;s why we design
              custom web-based ERP solutions that match your workflows, teams,
              approval processes, and growth plans instead of forcing you to
              adapt to generic software.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#08758a] px-6 font-almarai text-[13px] font-bold text-white shadow-[0_18px_36px_rgba(8,117,138,0.23)] transition hover:bg-[#06677a] focus:outline-none focus:ring-2 focus:ring-[#08758a]/40 focus:ring-offset-2 sm:px-7"
          >
            Get a Free ERP Consultation
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map(({ title, description, icon: Icon, color }) => (
            <article
              key={title}
              className="min-h-[175px] rounded-[18px] bg-[linear-gradient(135deg,#f8f8f8_0%,#fff_100%)] p-5 sm:p-6"
            >
              <Icon
                size={34}
                strokeWidth={2.2}
                style={{ color }}
                aria-hidden="true"
              />
              <h3 className="mt-3 font-almarai text-[19px] font-bold leading-tight tracking-[-0.035em] text-[#101010] sm:text-[20px]">
                {title}
              </h3>
              <p className="mt-2 font-mont text-[13px] leading-[1.5] text-[#383838] sm:text-[14px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
