import Image from "next/image";
import React from "react";
import phone from "../../../public/case-study/Vector.svg";
import button from "../../../public/case-study/call.svg";
import mail from "../../../public/case-study/mail (2) 1.svg";
const CallToAction = () => {
  return (
    <section className="font-mont w-[90%] lg:w-[80%] mx-auto py-10 flex justify-center">
      <div className="text-center px-4">
        {/* Subtitle */}
        <p className="text-[16px] leading-[156%] text-gray-500 mb-3">
          We design performance-led digital strategies tailored to your industry
          and growth stage.
        </p>

        {/* Heading */}
        <h2 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[100%] font-semibold mb-8">
          Want Similar Results <br className="hidden sm:block" /> for Your
          Brand?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <a
            className="relative w-auto h-fit flex justify-center items-center"
            href="https://wa.me/919048100233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={button}
              alt="WhatsApp"
              width={100}
              height={100}
              className="w-44 lg:w-52 h-fit"
            />
            <p className="absolute left-10 lg:left-12 text-[13px] lg:text-[16px] font-bold leading-[100%] tracking-wider text-white">
              +91 90481 00233
            </p>
          </a>

          <span className="text-gray-400 text-sm">or</span>
          <a
            href="mailto:mail@accoladesmedia.co.in"
            className="flex items-center gap-2 border border-gray-300 px-2 md:px-6 py-2 md:py-3 rounded-lg text-[12px] md:text-[14px] font-medium hover:bg-gray-50 transition"
          >
            <Image src={mail} alt="Email" width={18} height={18} />
            mail@accoladesmedia.co.in
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
