import React from 'react'
import HeroSection from './HeroSection'
import Roles from './Roles'
import Benefits from './Benefits'
import Integration from './Integration'
import Process from './Process'
import Value from './Value'
import Channels from './Channels'
import Footer from '@/Layout/Footer'

export default function page() {
  return (
    <>
    <HeroSection />
    <Roles />
    <Benefits />
    <Integration />
    <Process />
    <Value />
    <Channels />
    <Footer />
    </>
  )
}
