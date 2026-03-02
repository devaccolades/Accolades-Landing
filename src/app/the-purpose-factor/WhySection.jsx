import Image from "next/image";

const items = [
  {
    title: "Strategic Direction",
    desc: "It guides product and message choices with clarity and conviction.",
    icon: "/purpose/p1.svg",
    bg: "bg-green-100",
  },
  {
    title: "Trust & Growth",
    desc: "It builds trust and repeat business through authentic connection.",
    icon: "/purpose/p2.svg",
    bg: "bg-blue-100",
  },
  {
    title: "Brand Advocates",
    desc: "It turns customers into advocates who spread your message.",
    icon: "/purpose/p3.svg",
    bg: "bg-orange-100",
  },
];

export default function WhySection() {
  return (
    <section className="bg-[#F1F8F8] ">
      <div className="mx-auto containers rounded-3xl bg-teal-50/40 px-4 py-10 sm:px-6 md:px-12 md:py-16">

        {/* Heading */}
        <h2 className="mb-6 text-base font-bold text-black text-[18px] md:text-[20px]">
          Why purpose matters
        </h2>

        {/* Items */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                flex items-start gap-4 rounded-2xl bg-white p-4
                md:flex-col md:items-start md:p-6
                shadow-sm
              "
            >
              {/* Icon */}
             <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[16px] lg:text-[18px] font-semibold text-black md:mt-2 md:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] lg:text-[14px] text-[#484848]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
