import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div
      className="relative bg-white w-[90%] h-[51px] flex justify-between items-center p-[5px] mx-auto rounded-lg mt-[33px]"
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
        src={"/logos/Accolades_logo.png"}
        alt="accolades logo"
        height={100}
        width={100}
        className="object-cover w-[218px] h-[40px]"
      />
      <button className="bg-[#0C7379] text-[14px] font-bold rounded-lg py-[10px] px-[20px] text-white">
        Contact Us
      </button>
    </div>
  );
}

export default Header;
