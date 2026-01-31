import Footer from "@/component/Footer";
import HeroSection from "./Herosection";
import Overview from "./Overview";
import WhatWeBring from "./WhatWeBring";
import Knowledge from "./Knowledge";
import Process from "./Process";

export default function page() {
    return (
        <>
            <div className="font-mont">
                <HeroSection />
                <Overview />
                <div className="bg-[#F1F8F8]">
                    <WhatWeBring />
                    <Knowledge />
                </div>
                <Process />
                {/* <div className="-mt-[80px]">
                    <Footer />
                </div> */}
            </div>
        </>
    )
}
