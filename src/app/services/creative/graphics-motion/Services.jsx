import Image1 from "../../../../../public/graphics-motion/1.png";
import Image2 from "../../../../../public/graphics-motion/2.png";
import Image3 from "../../../../../public/graphics-motion/3.png";
import Image4 from "../../../../../public/graphics-motion/4.png";
import Image5 from "../../../../../public/graphics-motion/5.png";
import Image6 from "../../../../../public/graphics-motion/6.png";
import Image7 from "../../../../../public/graphics-motion/7.png";
import Image8 from "../../../../../public/graphics-motion/8.png";
import Card from "@/component/Card";

const videoTypesData = {
  graphics: [
    { title: "Social Media Creatives", image: Image1 },
    { title: "Infographics", image: Image2 },
    { title: "Digital Ads", image: Image3 },
    { title: "Event Collaterals", image: Image4 },
  ],
  motionDesign: [
    { title: "Explainer Videos", image: Image5 },
    { title: "2D Animation", image: Image6 },
    { title: "Product Animations", image: Image7 },
    { title: "Logo Animations", image: Image8 },
  ]
};
export default function Services() {
  return (
    <div>
      <Card
        sectionTitle="Services We Offer"
        videoTypes={videoTypesData}
        showButton={false}
      />
    </div>
  );
}
