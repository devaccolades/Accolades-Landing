import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import circleT from "../../../public/services/topC.png";
import circleTL from "../../../public/services/circletTL.png";
import centerR from "../../../public/services/centerR.png";
import centerL from "../../../public/services/centerL.png";
import bottomGrade from "../../../public/services/bottomSide.png";
import Image from "next/image";
import Discover from "./Discover";
import FormSection from "./FormSection";

function page() {
  return (
    <section className="relative">
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
        className="absolute top-[900px] md:top-[900px] lg:top-[200px] left-0 h-[1000px] w-auto z-0"
      />
      {/* <Image
        src={centerL}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-10 right-0 h-full w-auto z-0"
      /> */}
      <Image
        src={centerR}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute top-0 left-0 h-[500px] w-auto z-0"
      />
      <Image
        src={bottomGrade}
        alt="crcle on top"
        height={100}
        width={100}
        className="absolute bottom-0 left-0 h-full w-full  z-0"
      />
      <Navbar />
      <HeroSection />
      <Discover />
      <FormSection />
      <Footer />
    </section>
  );
}

export default page;
