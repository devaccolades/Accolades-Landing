import React from 'react'
import HeroSection from './HeroSection'
import HowWeWork from './HowWeWork'
import HowWeUseAI from './HowWeUseAI'
import BenefitsForClients from './BenefitsOfClients'
import OurProcess from './OurProcess'
import EthicsAndControl from './EthicsAndControl'
import AiCtaSection from './AiCtaSection'
import Footer from '@/component/Footer'



export async function generateMetadata() {
  return {
    title: "AI By Accolades Integrated ",
    description: "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow. ",

    openGraph: {
      title: " AI By Accolades Integrated ",
      description: "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
     
    },
  };
}

function page() {
  return (
    <div>
      <HeroSection />
      <HowWeWork />
      <HowWeUseAI />
      <BenefitsForClients /> 
      <OurProcess />
      <EthicsAndControl />
      <AiCtaSection />
     <div className="-mt-[88px]">
        <Footer />
      </div>
    </div>
  )
}

export default page
