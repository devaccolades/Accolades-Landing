import React from 'react'
import HeroSection from './HeroSection'
import HowWeWork from './HowWeWork'
import HowWeUseAI from './HowWeUseAI'
import BenefitsForClients from './BenefitsOfClients'
import OurProcess from './OurProcess'
import EthicsAndControl from './EthicsAndControl'

function page() {
  return (
    <div>
      <HeroSection />
      <HowWeWork />
      <HowWeUseAI />
      <BenefitsForClients /> 
      <OurProcess />
      <EthicsAndControl />
    </div>
  )
}

export default page
