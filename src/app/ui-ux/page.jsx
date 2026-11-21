import "./ui-ux.css";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Build from "./components/Build";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export const metadata = {
  title: "UI/UX Design Agency in Kochi | Accolades Integrated",
  description: "UI/UX design for websites and mobile apps by Accolades Integrated, serving businesses in Kochi and across India.",
};

export default function UiUxPage() {
  return (
    <main className="uiux-page">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap" />
      <Loader />
      <Hero />
      <Works />
      <About />
      <Services />
      <Process />
      <Build />
      <Faq />
      <Footer />
    </main>
  );
}
