import React from 'react'
import HeroSection from './HeroSection'
import OverviewSection from './Overview'
import LocalInsightSection from './LocalInsight'
import ScalableApproachSection from './ScalableApproach'
import RiskControlSection from './RiskControl'
import ExampleOutcomesSection from './ExampleOutcomes'
import CtaSection from './CTASection'
import Footer from '@/component/Footer'

function page() {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <LocalInsightSection />
      <ScalableApproachSection />
      <RiskControlSection />
      <ExampleOutcomesSection />
      <CtaSection />
         <div className="-mt-[88px]">
        <Footer />
      </div>
    </div>
  )
}

export default page
