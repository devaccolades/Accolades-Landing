import HeroSection from "./HeroSection";
import PowerFullERP from "./PowerFullERP";
import WhyChoose from "./WhyChoose";
import ErpIntegrations from "./ErpIntegrations";
import BuiltAroundBusiness from "./BuiltAroundBusiness";
import OnePlatform from "./OnePlatform";
import BusinessChallenges from "./BusinessChallenges";
import ErpConsultation from "./ErpConsultation";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export const metadata = {
  title: "Custom ERP Software Development | Accolades Integrated",
  description:
    "Custom web-based ERP solutions for growing small and medium businesses.",
};

export default function CustomErpSoftwareDevelopmentPage() {
  return (
    <main className="erp-page overflow-x-hidden bg-white font-mont">
      <HeroSection />
      <BusinessChallenges />
      <OnePlatform />
      <PowerFullERP />
      <BuiltAroundBusiness />
      <WhyChoose />
      <ErpIntegrations />
      <ErpConsultation />
      <div className="relative z-10 -mt-10 md:-mt-[60px] lg:-mt-20">
        <UpdatedFooter />
      </div>
      {/* <a href="#contact" className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-md bg-[#e7a729] px-2 py-5 text-[10px] font-semibold tracking-wide text-[#27200f] shadow-md xl:block [writing-mode:vertical-rl]">
        Enquire Now
      </a> */}
    </main>
  );
}
