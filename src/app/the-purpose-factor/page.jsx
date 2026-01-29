import Footer from "@/component/Footer";
import Callback from "./Callback";
import HeroSection from "./Herosection";
import HowWeWork from "./HowWeWork";
import WhySection from "./WhySection";

export default function page() {
    return (
        <>
            <div className="font-mont">
                <HeroSection />
                <WhySection />
                <HowWeWork />
                <Callback />
                <div className="-mt-[80px]">
                    <Footer />
                </div>
            </div>
        </>
    )
}
