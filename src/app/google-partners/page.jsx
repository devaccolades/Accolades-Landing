import React from 'react'
import HeroSection from './HeroSection'
import Description from './Description'
import GooglePartnersProgram from './GooglePrograms'
import Benefits from './Benefits'
import Advantages from './Advantages'
import WhyChoose from './WhyChooseGP'
import Footer from "@/component/Footer";
import GooglePartnerFaq from './GPFaq'


export async function generateMetadata() {
  return {
    title: "Google Partners Kochi – Benefits | Accolades Integrated",
    description: "Accolades Integrated is a certified Google Partners agency in Kochi. Learn how our Google Partner status gives your brand better Google Ads results.",

    openGraph: {
      title: "Google Partners Kochi – Benefits | Accolades Integrated",
      description: "Accolades Integrated is a certified Google Partners agency in Kochi. Learn how our Google Partner status gives your brand better Google Ads results.",
     
    },
  };
}

function page() {
  return (
    <div>
    <HeroSection />
    <Description />
    <GooglePartnersProgram />
    <Benefits />
    <Advantages />
    <WhyChoose />
    <GooglePartnerFaq />
    <Footer />
    </div>
  )
}

export default page
