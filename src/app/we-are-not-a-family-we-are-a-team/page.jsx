import React from 'react'
import HeroSection from './HeroSection'
import Overview from './Overview'
import Clients from './Clients'
import Workflow from './Workflow'
import Culture from './Culture'
import CallToAction from './CallToAction'
import Footer from '@/component/Footer'

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
