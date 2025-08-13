import Tech from "@/component/Tech";
import React from "react";
import Illustrator from "../../../../../public/graphics-motion/1.svg";
import Adobe from "../../../../../public/graphics-motion/2.svg";
import afterEffects from "../../../../../public/graphics-motion/3.svg";
import canva from "../../../../../public/graphics-motion/4.svg";
import Photoshop from "../../../../../public/graphics-motion/5.svg";

export default function Platforms() {
  const tools = [
    {
      
      name: "After Effects",
      icon: Illustrator,
    },
    {
      name: "Adobe Creative Cloud",
      icon: Adobe,
    },
    {
      name: "Illustrator",
      icon: afterEffects,
    },
    {
      name: "Photoshop",
      icon: canva,
    },
    {
      name: "Canva Pro",
      icon: Photoshop,
    },
  ];
  const title = "Tools & Platforms We Use";
  const para =
    "We work with a wide range of industry-standard tools to bring creative ideas to life. From vector illustrations and motion graphics to advanced photo editing and social content design, these platforms empower us to deliver stunning and impactful visuals across every project.";
  return <Tech tools={tools} title={title} para={para} />;
}
