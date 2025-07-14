import Image from "next/image";
import React from "react";
import logo from "../../public/logos/Accolades_logo_TM-2048x376 2.svg";
function Header() {
  return (
    <header
      className="sticky bg-white w-[90%] h-[51px] flex justify-between items-center px-[5px] py-[6px] mx-auto border border-[#E9E9E9]  rounded-[15px] top-[33px] z-50"
      style={{
        boxShadow: `
      0px 17px 37px 0px #0000001A,
      0px 68px 68px 0px #00000017,
      0px 153px 92px 0px #0000000D,
      0px 272px 109px 0px #00000003,
      0px 426px 119px 0px #00000000
    `,
      }}
    >
      <Image
        src={logo}
        alt="accolades logo"
        height={100}
        width={100}
        className="object-cover h-[28px] w-[154px] md:w-[218px] md:h-[40px]"
      />
      <button className="bg-[#0C7379] text-[13px] lg:text-[14px] font-bold rounded-lg py-[6px] px-[14px] md:py-[10px] md:px-[20px] text-white">
        Contact Us
      </button>
    </header>
  );
}

export default Header;
