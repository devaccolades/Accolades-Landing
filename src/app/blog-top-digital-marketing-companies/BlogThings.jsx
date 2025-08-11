"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Latest from "./Latest";

function BlogThings({ data }) {
  console.log(data);
  const [selectedTag, setSelectedTag] = useState("All");
  return (
    <>
      <main className="bg-[#F1F1F1]">
        <HeroSection
          data={data}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <Latest selectedTag={selectedTag} data={data} />
      </main>
    </>
  );
}


export default BlogThings;
