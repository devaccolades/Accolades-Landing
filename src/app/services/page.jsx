import React from "react";
import HeroSection from "./HeroSection";
import Digital from "./Digital";
import Creative from "./Creative";
import Web from "./Web";
import circleT from "../../../public/services/topC.png";
import circleTL from "../../../public/services/circletTL.png";
import centerR from "../../../public/services/centerR.png";
import centerL from "../../../public/services/centerL.png";
import Image from "next/image";
import Navbar from "@/component/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <section className="relative pt-12">
        <Image
          src={circleT}
          alt="crcle on top"
          height={100}
          width={100}
          className="absolute top-0 right-0 h-96 w-auto z-0"
        />
        <Image
          src={circleTL}
          alt="crcle on top"
          height={100}
          width={100}
          className="absolute top-0 left-0 h-[1000px] w-auto z-0"
        />
        <Image
          src={centerL}
          alt="crcle on top"
          height={100}
          width={100}
          className="absolute top-10 right-0 h-full w-auto z-0"
        />
        <Image
          src={centerR}
          alt="crcle on top"
          height={100}
          width={100}
          className="absolute top-10 left-0 h-full w-auto z-0"
        />
        <HeroSection />
        <Digital />
        <Creative />
        <Web />
      </section>
    </>
  );
}

export default page;
