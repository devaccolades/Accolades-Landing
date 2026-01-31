import React from 'react'
import CallToAction from './CallToAction'
import HeroSection from './HeroSection'
import CaseStudy from './CaseStudy'
import Footer from '@/component/Footer'

const page = () => {
    return (
        <>
            <HeroSection />
            <CaseStudy />
            <CallToAction />
            <Footer />
        </>
    )
}

export default page
