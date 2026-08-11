import HeroSection from "./HeroSection";
import PowerFullERP from "./PowerFullERP";
import WhyChoose from "./WhyChoose";
import ErpIntegrations from "./ErpIntegrations";
import BuiltAroundBusiness from "./BuiltAroundBusiness";
import OnePlatform from "./OnePlatform";
import BusinessChallenges from "./BusinessChallenges";
import ErpConsultation from "./ErpConsultation";

export const metadata = {
  title: "Custom ERP Software Development | Accolades Integrated",
  description:
    "Custom web-based ERP solutions for growing small and medium businesses.",
};

export default function CustomErpSoftwareDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <BusinessChallenges />
      <OnePlatform />
      <PowerFullERP />
      <BuiltAroundBusiness />
      <WhyChoose />
      <ErpIntegrations />
      <ErpConsultation />
    </div>
  );
}
