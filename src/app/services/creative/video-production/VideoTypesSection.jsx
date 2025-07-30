import corporateImg from "../../../../../public/video-production/corporate.png";
import socialReelsImg from "../../../../../public/video-production/social.png";
import testimonialImg from "../../../../../public/video-production/testimonial.png";
import adFilmsImg from "../../../../../public/video-production/ad-films.png";
import Card from "@/component/Card";

const videoTypesData = [
  { title: "Corporate Films", image: corporateImg },
  { title: "Social Reels", image: socialReelsImg },
  { title: "Testimonial Videos", image: testimonialImg },
  { title: "Ad Films", image: adFilmsImg },
];

export default function VideoTypesSection() {
  return (
    <div>
      <Card
        sectionTitle="Types of Videos We Create"
        videoTypes={videoTypesData}
        showButton={false} 
      />
    </div>
  );
}
