import Image from "next/image";

const items = [
  {
    text: "Years of campaigns across sectors.",
    icon: "/knowledge/w1.svg",
  },
  {
    text: "Tools that show real results.",
    icon: "/knowledge/w2.svg",
  },
  {
    text: "Brand Advocates",
    icon: "/knowledge/w3.svg",
  },
];

const WhatWeBring = () => {
  return (
    <section className="w-full py-6 md:py-10 lg:py-16">
      <div className="mx-auto containers px-6 text-center">
        {/* Heading */}
        <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-mont font-bold mb-3">
          What We Bring
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-700 md:mt-4 md:text-lg">
          A foundation built on real-world experience and proven tools
        </p>

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-4 md:mt-14 md:grid md:grid-cols-3 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm
                md:flex-col md:justify-center md:gap-0 md:px-6 md:py-10
              "
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9F4F1] md:mb-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>

              {/* Text */}
              <p className="text-left text-sm font-medium text-black md:text-center md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBring;
