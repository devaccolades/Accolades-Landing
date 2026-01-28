import React from 'react'
const stats = [
    {
        value: "98%",
        label: "On-Time Delivery",
    },
    {
        value: "24h",
        label: "Avg. Response Time",
    },
    {
        value: "50+",
        label: "Projects Delivered",
    },
    {
        value: "4.9/5",
        label: "Client Satisfaction",
    },
];


const Culture = () => {
    return (
        <section className="font-mont bg-white py-8 lg:py-16 w-[90%] lg:w-[80%] mx-auto">
            <div className="text-center">
                {/* Badge */}
                <div className="inline-block mb-4">
                    <span className="px-4 py-3 text-sm rounded-full border border-[#0C7379] text-[#0C7379] font-extrabold">
                        Culture Note
                    </span>
                </div>

                {/* Heading */}
                <h2 className="font-mont text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-black mb-3">
                    Our Approach to People
                </h2>

                <p className="text-[#484848] text-[14px] md:text-[16px] lg:text-[18px]  mx-auto leading-relaxed mb-3">
                    We respect people. We do not confuse care with slack. We hold each
                    other to high craft.
                </p>

                <p className="text-[#484848] text-[14px] md:text-[16px]  mx-auto leading-[156%] mb-5">
                    Respect means expecting the best from each other, not lowering the
                    bar. We care deeply about our team's growth and well-being—that's
                    precisely why we maintain high standards. Excellence and empathy
                    aren't opposites; they're partners in building something meaningful.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-[#0C7379] text-[36px] md:text-[40px] lg:text-[48px] font-semibold mb-1">
                                {item.value}
                            </h3>
                            <p className="text-sm text-[#484848]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Culture
