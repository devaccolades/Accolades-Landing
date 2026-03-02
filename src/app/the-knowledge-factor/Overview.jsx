import Image from "next/image";

const features = [
  {
    title: "Data-Guided",
    description: "Every decision backed by analytics and insights",
    icon: "/knowledge/o1.svg",
  },
  {
    title: "Experience-Steered",
    description: "Proven strategies from years of campaigns",
    icon: "/knowledge/o2.svg",
  },
  {
    title: "Growth-Focused",
    description: "Reduce risk, accelerate results",
    icon: "/knowledge/o3.svg",
  },
];

const Overview = () => {
  return (
    <section className="w-full bg-white py-6 md:py-10 lg:py-16">
      <div className="containers text-center">
        {/* Heading */}
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-1">
          Overview
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
          We do deep study before we act. Data guides us. Experience steers us.
          The mix cuts risk and speeds growth.
        </p>

        {/* Items */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:gap-10 lg:gap-16 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </div>

              <h3 className="text-lg font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
