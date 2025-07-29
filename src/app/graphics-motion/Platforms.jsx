import Tech from "@/component/Tech";
import React from "react";
import Illustrator from "../../../public/graphics-motion/1.svg";
import Adobe from "../../../public/graphics-motion/2.svg";
import afterEffects from "../../../public/graphics-motion/3.svg";
import canva from "../../../public/graphics-motion/4.svg";
import Photoshop from "../../../public/graphics-motion/5.svg";

export default function Platforms() {
  const tools = [
    {
      name: "Illustrator",
      icon: Illustrator,
    },
    {
      name: "Adobe Creative Cloud",
      icon: Adobe,
    },
    {
      name: "After Effects",
      icon: afterEffects,
    },
    {
      name: "Canva Pro",
      icon: canva,
    },
    {
      name: "Photoshop",
      icon: Photoshop,
    },
  ];
  const title = "Tools & Platforms We Use";
  const para =
    "Lorem ipsum dolor sit amet consectetur. Eget porttitor elementum hendrerit a diam suspendisse tellus. Consequat enim auctor dignissim mattis vitae tincidunt. Facilisis mi neque tellus viverra ac mauris adipiscing nulla. Praesent purus ornare non eros et .";
  return <Tech tools={tools} title={title} para={para} />;
}
