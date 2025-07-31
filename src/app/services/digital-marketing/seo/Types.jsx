import Image from "next/image";
import Frame1 from "../../../../../public/seo/Frame1.png";
import Frame2 from "../../../../../public/seo/Frame2.png";

export default function Types() {
  return (
<<<<<<< HEAD
    <div       style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}>

    <div className="containers mx-auto lg:pt-12 md:pt-10 pt-6 pb-24">
      {/* First Row: Para Left, Image Right */}
      <div className="flex flex-col md:flex-row items-center justify-center lg:mb-16 md:mb-12 mb-8">
        <div className="md:w-1/2 bg-white p-8 rounded-[30px] shadow-lg mb-4 md:mb-0 order-2 md:order-1 ">
          <h1 className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[24px] text-[#3FB4BA]">
            On-page SEO
          </h1>
          <p className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify">
            On-page SEO is essential for a winning digital marketing strategy. It involves optimizing individual web pages to rank higher in search engine results and drive more relevant traffic. At Accolades Integrated, we focus on key on-page SEO techniques like keyword optimization, content enhancement, meta tags, and URL structure improvements. By ensuring that content is relevant, well-organized, and aligned with search intent, we help businesses improve their search engine rankings. Our on-page SEO services also include optimizing images, internal linking, and mobile responsiveness, ensuring that your website provides a seamless experience for users. Let us help you improve visibility and reach your target audience effectively.
          </p>
=======
    <section
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="containers mx-auto lg:pt-12 md:pt-10 pt-6 pb-32">
        {/* First Row: Para Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center justify-center lg:mb-16 md:mb-12 mb-8">
          <div className="md:w-1/2 bg-white p-8 rounded-[30px] shadow-lg mb-4 md:mb-0 order-2 md:order-1 ">
            <h1 className="font-mont font-bold text-[24px] lg:text-[36px] leading-[100%] text-[#3FB4BA] mb-3">
              On-page SEO
            </h1>
            <p className="font-mont font-normal text-[13px] md:text-[14px] xl:text-[18px] leading-[156%] text-[#2B2A29] ">
              On-page SEO is essential for a winning digital marketing strategy.
              It involves optimizing individual web pages to rank higher in
              search engine results and drive more relevant traffic. At
              Accolades Integrated, we focus on key on-page SEO techniques like
              keyword optimization, content enhancement, meta tags, and URL
              structure improvements. By ensuring that content is relevant,
              well-organized, and aligned with search intent, we help businesses
              improve their search engine rankings. Our on-page SEO services
              also include optimizing images, internal linking, and mobile
              responsiveness, ensuring that your website provides a seamless
              experience for users. Let us help you improve visibility and reach
              your target audience effectively.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-end mb-6">
            <Image
              src={Frame1}
              alt="frame1"
              className="lg:w-[500px] md:w-[300px] md:h-[300px] h-[200px] "
            />
          </div>
>>>>>>> 645f812 (proofreading pages)
        </div>

        {/* Second Row: Image Left, Para Right */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex justify-start mb-4 md:mb-0">
            <Image
              src={Frame2}
              alt="frame2"
              className="lg:w-[500px] md:w-[300px] md:h-[300px] h-[200px]"
            />
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-[30px] shadow-lg">
            <h1 className="font-mont font-bold text-[24px] lg:text-[36px] leading-[100%] text-[#3FB4BA] mb-3">
              Off-page SEO
            </h1>
            <p className="font-mont font-normal text-[13px] md:text-[14px] xl:text-[18px] leading-[156%] text-[#2B2A29] ">
              Off-page SEO enhances your website’s authority and reputation
              using external strategies. It includes building high-quality
              backlinks, social media marketing, and online brand mentions. At
              Accolades Integrated, we employ a comprehensive approach to
              off-page SEO, focusing on strategies that increase your site’s
              trustworthiness and relevance. By earning backlinks from reputable
              sources and engaging with influencers, we help elevate your
              website’s authority in search engine rankings. Our off-page
              strategies also include local SEO techniques, reviews, and
              directory listings, ensuring your business gains visibility and
              recognition. This holistic approach boosts your online presence,
              enhances credibility, and drives more targeted traffic. We’ll
              assist you in establishing a powerful online presence.
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
    </div>
=======
    </section>
>>>>>>> 645f812 (proofreading pages)
  );
}
