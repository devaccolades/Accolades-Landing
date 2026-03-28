import Footer from "@/component/Footer";
import Callback from "./Callback";
import HeroSection from "./Herosection";
import HowWeWork from "./HowWeWork";
import WhySection from "./WhySection";
import UpdatedFooter from "@/Layout/UpdatedFooter";

export async function generateMetadata() {
  const title = "The Purpose Factor | Accolades Integrated";

  const description =
    "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.";

  const url =
    "https://www.accoladesintegrated.com/the-purpose-factor"; // 👈 adjust if route differs

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
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
