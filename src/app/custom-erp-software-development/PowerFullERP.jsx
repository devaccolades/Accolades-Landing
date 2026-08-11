import Image from "next/image";

const modules = [
  {
    title: "Sales & CRM",
    description:
      "Convert leads faster while managing customers, quotations, orders, and follow-ups seamlessly.",
    includes:
      "Lead Management · Customer Management · Quotations · Sales Pipeline · Follow-ups",
    image: "/erp/s.png",
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
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1128px] px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <span className="inline-flex rounded-full bg-black px-2.5 py-1 font-almarai text-[10px] font-bold uppercase tracking-wide text-white sm:text-[9px]">
            Everything Your Business Needs
          </span>

          <h2 className="mt-3 font-normal leading-[100%] tracking-[-0.04em] text-[#111] text-[28px] md:text-[36px] lg:text-[48px]">
            Powerful ERP Modules for Every Business Function
          </h2>

          <p className="mx-auto mt-2 max-w-[620px] font-mont text-[12px] leading-[100%] text-[#777] md:text-[14px] lg:text-[16px]">
            Everything your business needs to manage daily operations
            efficiently from one secure, cloud-based platform.
          </p>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-14 md:gap-y-12">

          {modules.map((module) => (
            <div
              key={module.title}
              className={[
                "group relative flex min-h-[250px] overflow-hidden rounded-[16px] px-4 py-5",
                "sm:min-h-[286px] sm:px-5 sm:py-6 lg:min-h-[318px] lg:px-4 lg:py-5",
                "bg-[#f7f7f7] transition-all duration-300 hover:bg-[#e9f5f8] hover:shadow-[0_12px_30px_rgba(17,166,201,0.12)] focus-within:bg-[#e9f5f8] focus-within:shadow-[0_12px_30px_rgba(17,166,201,0.12)]",
              ].join(" ")}
            >
              {/* Content */}
              <div className="relative z-10 flex w-[48%] min-w-0 flex-col lg:w-[45%]">
                <h3 className="font-almarai font-bold leading-[100%] text-[#111] text-[16px] md:text-[20px] lg:text-[24px]">
                  {module.title}
                </h3>

                <p className="mt-2 font-mont text-[12px] leading-[156%] text-black md:text-[14px] lg:text-[16px]">
                  {module.description}
                </p>

                <div className="mt-2">
                  <p className="text-[12px] md:text-[14px] lg:text-[16px] font-bold text-[#222] ">
                    Includes
                  </p>

                  <p className="mt-0.5 text-[10px] leading-[1.45] text-[#666] sm:text-[12px]">
                    {module.includes}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  className={[
                    "mt-auto w-fit rounded-full px-3 py-1.5",
                    "text-[12px] font-semibold transition-all duration-300",
                    "bg-[#e9eeee] text-[#178da8] group-hover:bg-[#11a6c9] group-hover:text-white group-focus-within:bg-[#11a6c9] group-focus-within:text-white hover:!bg-[#078eae]",
                  ].join(" ")}
                >
                  Request Demo
                </button>
              </div>

              {/* Dashboard Image */}
              <div className="relative ml-auto flex w-[52%] items-center justify-end lg:w-[55%]">
                <div className="relative h-[190px] w-full max-w-[205px] sm:h-[220px] sm:max-w-[235px] lg:h-[252px] lg:max-w-[270px]">
                  <Image
                    src={module.image}
                    alt={`${module.title} dashboard`}
                    fill
                    sizes="(max-width: 768px) 45vw, 270px"
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
