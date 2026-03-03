import Image from "next/image";

const items = [
  {
    title: "Quicker wins from proven playbooks.",
    description:
      "We leverage battle-tested strategies that have delivered results across industries, reducing trial and error.",
    icon: "/knowledge/k1.svg",
    border: "border-orange-400",
    bg: "bg-orange-50",
  },
  {
    title: "Smarter content choices for search and socials.",
    description:
      "Our experience shows what content performs best on each platform, maximizing your reach and engagement.",
    icon: "/knowledge/k2.svg",
    border: "border-purple-400",
    bg: "bg-purple-50",
  },
  {
    title: "Clear measurement that shows value.",
    description:
      "Track ROI with transparent metrics that demonstrate exactly how our strategies impact your bottom line.",
    icon: "/knowledge/k3.svg",
    border: "border-teal-400",
    bg: "bg-teal-50",
  },
];

const Knowledge = () => {
  return (
    <section className="w-full py-6 md:py-10 lg:py-16 ">
      <div className="containers">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-1">
            How Knowledge Helps
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-lg">
            Turning experience into measurable business outcomes
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div
            className="
              relative
              aspect-[16/9]
              md:aspect-auto
              md:h-full
            "
          >
            <Image
              src="/knowledge/kimg.png"
              alt="Growth and performance illustration"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-2 md:gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex gap-2 rounded-2xl border p-2 md:p-4 lg:p-6 ${item.border} ${item.bg}`}
              >
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Image
                    src={item.icon}
                    alt=""
                    width={44}
                    height={44}
                  />
                </div>

                {/* Text */}  
                <div>
                  <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-black ">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] lg:text-[14px] text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
