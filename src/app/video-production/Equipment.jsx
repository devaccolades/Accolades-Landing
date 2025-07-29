import Tech from "@/component/Tech";
import React from "react";
import Image from "next/image";
import davinci from "../../../public/video-production/tech1.svg";
import adobe from "../../../public/video-production/tech2.svg";
import afterEffects from "../../../public/video-production/tech3.svg";
import canva from "../../../public/video-production/tech4.svg";
import Invention from "../../../public/video-production/invention.png";

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
    "Lorem ipsum dolor sit amet consectetur. Eget porttitor elementum hendrerit a diam suspendisse tellus. Consequat enim auctor dignissim mattis vitae tincidunt. Facilisis mi neque tellus viverra ac mauris adipiscing nulla. Praesent purus ornare non eros et .";
  return <Tech tools={tools} title={title} para={para} />;
}
