import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import circleT from "../../../public/services/topC.png";
import circleTL from "../../../public/services/circletTL.png";
import centerR from "../../../public/services/centerR.png";
import centerL from "../../../public/services/centerL.png";
import Image from "next/image";

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
      <Navbar />
      <HeroSection />
      <Footer />
    </section>
  );
}

export default page;
