import React from "react";
import Image from "next/image";
import stack from "../../../public/home/1133de05fd2a190083088cb835978a45d95b9e4e.png";
import bottom from "../../../public/home/bottom-line.svg";

const Accolades = () => {
  return (
    <>
      {/* <section className="containers flex flex-col md:grid md:grid-cols-2 justify-center items-center  gap-10"> */}
      <section className="containers flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-10">
        <div className="w-auto h-full flex justify-center items-center">
          <Image
            src={stack}
            alt="top-line"
            className="w-full object-center object-cover"
          />
        </div>
        <div className="w-full">
          <p className="text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[28px] font-mont font-normal">
            Accolades, the creative hub for digital marketing in Kerala, keenly
            takes care of your diverse internet marketing solutions for your
            business. Our services include Graphics Designing, Content
            Marketing, Google Ads, Meta Ads, Social Media Marketing, Web
            Development and SEO Services. We also undertake other conventional
            advertisements and offline event marketing too. As one of the top
            digital marketing company in Kochi, we help you grow your business
            by driving traffic to your website. Regardless of the business’s
            size we can convert visitors into your potential customers. We
            operate globally while being centralized in Kochi, Kerala and
            regional offices at Mumbai, Bengaluru, Trivandrum and Calicut.
          </p>
        </div>
      </section>
      <Image
        src={bottom}
        alt="bottom-line"
        className="containers py-10 md:py-20 xl:py-28"
      />
    </>
  );
};

export default Accolades;
