import React from 'react'
import HeroSection from './HeroSection'
import Overview from './Overview'
import Clients from './Clients'
import Workflow from './Workflow'
import Culture from './Culture'
import CallToAction from './CallToAction'
import Footer from '@/component/Footer'

export async function generateMetadata() {
  return {
    title: "We are not a family, we are a team | Accolades Integrated ",
    description: "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow. ",

    openGraph: {
      title: "We are not a family, we are a team | Accolades Integrated ",
      description: "Learn about Accolades Integrated, a full-service digital agency delivering creative, marketing, and technology solutions that help brands grow.",
     
    },
  };
}
const page = () => {
    return (
        <>
            <HeroSection />
            <Overview />
            <Clients />
            <Workflow />
            <Culture />
            <CallToAction />
            <Footer />
        </>
    )
}

export default page
