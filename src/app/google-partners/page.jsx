import React from 'react'
import HeroSection from './HeroSection'
import Description from './Description'
import GooglePartnersProgram from './GooglePrograms'
import Benefits from './Benefits'
import Advantages from './Advantages'
import WhyChoose from './WhyChooseGP'
import Footer from "@/component/Footer";
import GooglePartnerFaq from './GPFaq'

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
