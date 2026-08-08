import Image from "next/image";

const modules = [
  {
    title: "Sales & CRM",
    description:
      "Convert leads faster while managing customers, quotations, orders, and follow-ups seamlessly.",
    includes:
      "Lead Management · Customer Management · Quotations · Sales Pipeline · Follow-ups",
    image: "/erp/s.png",
    highlighted: true,
  },
  {
    title: "Finance & Accounting",
    description:
      "Track finances accurately with automated invoicing, expenses, payments, and financial reporting.",
    includes:
      "Invoices · Payments · Expenses · Tax Management · Financial Reports",
    image: "/erp/f.png",
  },
  {
    title: "Inventory Management",
    description:
      "Monitor stock levels, warehouse movements, and inventory availability with real-time accuracy.",
    includes:
      "Stock Management · Warehouses · Transfers · Barcode · Low-Stock Alerts",
    image: "/erp/i.png",
  },
  {
    title: "HR & Payroll",
    description:
      "Manage employees, attendance, payroll, leave, and performance through one centralized system.",
    includes:
      "Employees · Attendance · Leave · Payroll · Performance",
    image: "/erp/h.png",
  },
  {
    title: "Purchasing & Procurement",
    description:
      "Simplify vendor management, purchase approvals, and procurement workflows with complete transparency.",
    includes:
      "Vendors · Purchase Requests · Purchase Orders · Approvals · Procurement Tracking",
    image: "/erp/p.png",
  },
  {
    title: "Manufacturing & Operations",
    description:
      "Plan production, manage workflows, and monitor operations for maximum business efficiency.",
    includes:
      "BOM · Production Planning · Work Orders · Quality Control · Resource Tracking",
    image: "/erp/m.png",
  },
];

export default function PowerFullERP() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="inline-flex rounded-full bg-black px-2.5 py-1 text-[7px] font-semibold uppercase tracking-wide text-white sm:text-[18px]">
            Everything Your Business Needs
          </span>

          <h2 className="mt-3 text-[25px] font-medium leading-[1.15] tracking-[-0.04em] text-[#111] sm:text-[30px] lg:text-[32px]">
            Powerful ERP Modules for Every Business Function
          </h2>

          <p className="mx-auto mt-2 max-w-[620px] text-[9px] leading-relaxed text-[#777] sm:text-[14px]">
            Everything your business needs to manage daily operations
            efficiently from one secure, cloud-based platform.
          </p>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">

          {modules.map((module, index) => (
            <div
              key={module.title}
              className={[
                "group relative flex min-h-[158px] overflow-hidden rounded-[12px]",
                " py-3.5 sm:min-h-[160px]  sm:py-4",
                module.highlighted
                  ? "bg-[#e9f5f8]"
                  : "bg-[#f7f7f7]",
              ].join(" ")}
            >
              {/* Content */}
              <div className="relative z-10 flex w-[48%] min-w-0 flex-col">
                <h3 className="text-[12px] font-bold leading-tight text-[#111] sm:text-[16px]">
                  {module.title}
                </h3>

                <p className="mt-1.5 text-[8.5px] leading-[1.45] text-[#555] sm:text-[14px]">
                  {module.description}
                </p>

                <div className="mt-2">
                  <p className="text-[12px] font-semibold text-[#222]">
                    Includes
                  </p>

                  <p className="mt-0.5 text-[12px] leading-[1.5] text-[#666] sm:text-[14px]">
                    {module.includes}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  className={[
                    "mt-auto w-fit rounded-full px-3 py-1.5",
                    "text-[12px] font-semibold transition-all duration-300",
                    module.highlighted
                      ? "bg-[#11a6c9] text-white hover:bg-[#078eae]"
                      : "bg-[#e9eeee] text-[#178da8] hover:bg-[#dce4e5]",
                  ].join(" ")}
                >
                  Request Demo
                </button>
              </div>

              {/* Dashboard Image */}
              <div className="relative ml-auto flex w-[52%] items-center justify-end">
                <div className="relative h-[105px] w-full max-w-[150px] sm:h-[110px] sm:max-w-[160px]">
                  <Image
                    src={module.image}
                    alt={`${module.title} dashboard`}
                    fill
                    sizes="(max-width: 768px) 45vw, 160px"
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}