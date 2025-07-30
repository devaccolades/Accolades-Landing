import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Minimal404 from "@/component/Minimal404";

export default function NotFound() {
    return (
        < >
            <Navbar />
            <Minimal404 />
            <main className="-mt-[65px]">

                <Footer />
            </main>
        </>
    );
}