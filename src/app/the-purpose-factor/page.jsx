import Footer from "@/component/Footer";
import Callback from "./Callback";
import HeroSection from "./Herosection";
import HowWeWork from "./HowWeWork";
import WhySection from "./WhySection";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  return {
    title: " The Purpose Factor | Accolades Integrated ",
    description:
      "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow. ",

    openGraph: {
      title: "The Purpose Factor | Accolades Integrated ",
      description:
        "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
    },
  };
}

export default function page() {
  return (
    <>
      <div className="font-mont">
        <HeroSection />
        <WhySection />
        <HowWeWork />
        <Callback />
        <div className="-mt-[80px]">
          {/* <Footer /> */}
          <UpdatedFooter />
        </div>
      </div>
    </>
  );
}
