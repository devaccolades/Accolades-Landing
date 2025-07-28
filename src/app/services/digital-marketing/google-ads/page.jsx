import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
<<<<<<< HEAD

=======
// import Types from "./types";
>>>>>>> 333f767c4bc5ec13eaf4d30d77de51ff17a6d29c
import Cards from "./Cards";

const page = () => {
  return (
    <>
      <main className="bg-[#F1F1F1]">
        <Navbar />
        <HeroSection />
        <Cards />
      </main>
      <main className="-mt-[80px]">
        <Footer />
      </main>
    </>
  );
};

export default page;
