import React from 'react'
import cover1 from "../../../public/case-study/pexels-vlada-karpovich-4609096 1.png"
import cover2 from "../../../public/case-study/9789bb99bbccc1144cec898dea4b35569458113c.png"
import cover3 from "../../../public/case-study/pexels-vlada-karpovich-4609096 1.png"
import cover4 from "../../../public/case-study/pexels-vlada-karpovich-4609096 1.png"
import logo1 from "../../../public/case-study/d07fe78c0f33cf25c81c43774465b9291d8b1fdc.png"
import logo2 from "../../../public/case-study/2c851e25ba22c1716cf66563d4157775812054ee.png"
import logo3 from "../../../public/case-study/d07fe78c0f33cf25c81c43774465b9291d8b1fdc.png"
import logo4 from "../../../public/case-study/d07fe78c0f33cf25c81c43774465b9291d8b1fdc.png"
import Image from 'next/image'
const caseStudies = [
    {
        cover: cover1,
        category: "Real Estate",
        title: "National Builders",
        description:
            "We were brought on board to enhance National Builder’s online presence to address the challenges.",
        logo: logo1,
    },
    {
        cover: cover2,
        category: "Interiors",
        title: "RAK Interior",
        description:
            "RAK Interiors started its journey in 2011. They wanted to create brand awareness in the market.",
        logo: logo2,
    },
    {
        cover: cover3,
        category: "Film Industry",
        title: "Movie Marketing Case Study",
        description:
            "Combining various Google Ads formats can create a cohesive and comprehensive marketing strategy.",
        logo: null,
    },
    {
        cover: cover4,
        category: "Real Estate",
        title: "CIDBI Thrissur",
        description:
            "CIDBI needed a strong digital transformation partner to elevate brand presence.",
        logo: logo4,
    },
];

const CaseStudy = () => {
    return (
        <section className='font-mont w-[90%] lg:w-[80%] mx-auto'>
            <h3 className='lg:text-[36px] md:text-[32px] text-[20px] font-normal'>Our Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
                {caseStudies.map((item, index) => (
                    <CaseStudyCard key={index} {...item} />
                ))}
            </div>
        </section>
    )
}

const CaseStudyCard = ({
    cover,
    category,
    title,
    subtitle,
    description,
    logo,
}) => {
    return (
        <div className='border-[0.5px] border-[#D9D9D9] p-[10px] rounded-[20px]'>
            <div className="bg-white rounded-t-[10px]  overflow-hidden  ">
                {/* Cover */}
                <div className="relative h-[180px] lg:h-[250px]">
                    <Image
                        src={cover}
                        alt={title}
                        fill
                        className=" object-cover object-top border-0 blur-[0.5px]"
                    />

                    <div
                        className="absolute inset-x-0 bottom-0 h-[70%]" style={{
                            background:
                                "linear-gradient(180deg, rgba(131, 131, 131, 0) 0%, #FFFFFF 100%)",
                        }}

                    />
                    <span className="absolute top-4 right-0 rounded-l-full bg-teal-700 text-white text-xs px-3 py-1 ">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                    <p className="text-black text-[16px] leading-[156%] mb-2">01</p>
                    <div className='flex items-center justify-between mb-2 gap-2'>
                        {logo && (
                            <div className=" h-[65px] w-auto">
                                <Image src={logo} alt="logo" width={100} height={100} />
                            </div>
                        )}
                        <div>
                            <h3 className="text-[16px] font-bold mb-1">{title}</h3>
                            <p className="text-[13px] text-[#777777] ">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center '>
                        <button className="text-[13px] font-normal hover:font-bold  text-black hover:text-teal-700 flex items-center gap-1 cursor-pointer">
                            Download Case Study
                            <span className='text-[23px] leading-none'>↓</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CaseStudy
