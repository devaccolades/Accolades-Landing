import React from "react";
import side from "../../../../../public/google/Frame 1171275830.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="containers pt-10 font-mont">
      <h1
        className="bg-white text-center text-[#3FB4BA] text-[36px] md:text-[50px] lg:text-[86px] font-mont py-5 my-5 rounded-[30px] font-extrabold
        leading-[100%]"
      >
        SMM
      </h1>

      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2">
          <h3 className="text-[16px] lg:text-[26px] leading-[156%] font-normal">
            WHY YOU CHOOSE OUR SOCIAL MEDIA MARKETING SERVICE?
          </h3>
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[40px] font-extrabold leading-[120%]">
            Social Media Marketing
          </h3>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Social Media Marketing, or SMM has become an inevitable phenomenon
            in the present scenario, as our world is at fast pace with advancing
            technology. At Accolades the digital marketing agency in Kerala, we
            adopt and execute exceptional Social Media Marketing Services, to
            identify target audience for our distinguished clientele by
            creating, attractive Social Media posts of their esteemed
            establishment. We depict excellent piece of designs, which captivate
            the broad attention of multitude.
          </p>
        </div>
        <div>
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
