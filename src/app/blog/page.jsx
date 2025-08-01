"use client";
import { useState } from "react";
import Navbar from "@/component/Navbar";
import HeroSection from "./HeroSection";
import Latest from "./Latest";
import Footer from "@/component/Footer";

export default function page() {
  const [selectedTag, setSelectedTag] = useState("All");
  return (
    <>
      <Navbar />
      <main className="bg-[#F1F1F1]">
        <HeroSection selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <Latest selectedTag={selectedTag} />
      </main>
      <main className="-mt-[65px]">
      <Footer />
      </main>
    </>
  );
}
