import Image from "next/image";

export default function SeoDeliverables() {
  const deliverables = [
    "Technical audit and error fixes",
    "Keyword research and content map",
    "On-page optimization for priority pages",
    "High-quality link building and outreach",
    "Local SEO setup and review management",
    "Monthly reports with insights and actions",
  ];

  return (
    <section className="bg-[#F9F9F9] rounded-[30px]  py-6 md:py-10 lg:py-16 font-mont ">
        <div className="containers">
      {/* Heading */}
       <h2 className="text-start text-xl lg:text-2xl font-bold mb-4">
        COMMON SEO DELIVERABLES
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {deliverables.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white rounded-2xl p-3 md:p-4 shadow-sm"
          >
            {/* Icon */}
            <div className=" flex items-center justify-center">
              <Image
                src="/new-ecommerce/tick.svg" // update path to your icon
                alt="Check Icon"
                width={30}
                height={30}
              />
            </div>

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base leading-[150%]">
              {item}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
