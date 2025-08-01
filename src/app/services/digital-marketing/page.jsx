import Navbar from '@/component/Navbar'
import React from 'react'
import DigitalHero from './DigitalHero'
import WhatWeDo from './WhatWeDo'
import Tools from './Tools'
import WhyChoose from './WhyChoose'
import OurClients from './OurClients'
import Footer from '@/component/Footer'

function page() {
  return (
    <div>
        <main className="bg-[#F1F1F1] ">
      <Navbar />
      <DigitalHero />
      <WhatWeDo />
      <OurClients />
      <WhyChoose />
      <Tools />
      </main>
       <main className="-mt-[65px]">
        <Footer />
      </main>
    </div>
  )
}

export default page
