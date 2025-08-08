import Tech from "@/component/Tech";
import React from "react";
import Image from "next/image";
import davinci from "../../../../../public/video-production/Tech1.svg";
import adobe from "../../../../../public/video-production/Tech2.svg";
import afterEffects from "../../../../../public/video-production/Tech3.svg";
import canva from "../../../../../public/video-production/Tech4.svg";
// import Invention from "../../../../../public/video-production/invention.png";

export default function Equipment() {
  const tools = [
    {
      name: "DaVinci Resolve",
      icon: davinci,
    },
    {
      name: "Adobe Creative Cloud",
      icon: adobe,
    },
    {
      name: "After Effects",
      icon: afterEffects,
    },
    {
      name: "Canva Pro",
      icon: canva,
    },
  ];
  const title = "Equipment & Tech";
  const para =
    "We leverage industry-leading tools like DaVinci Resolve, Adobe Creative Cloud, After Effects, and Canva Pro to create stunning visuals and impactful media content. These platforms help us maintain creative flexibility and ensure professional-grade output across all projects.";
  return <Tech tools={tools} title={title} para={para} />;
}
