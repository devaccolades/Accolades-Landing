import Navbar from '@/component/Navbar'
import React from 'react'
import WordpressHero from './Word-Hero'
import OfferAndFeatures from './OfferAndFeatures'
import WordProjects from './WordProjects'
import Footer from '@/component/Footer'

function page() {
  return (
    <div>
      <Navbar />
       <div className="bg-gradient-to-br from-[#ecf3f6] to-[#f1f5f5]">
          <WordpressHero />  
          <OfferAndFeatures />
          <WordProjects />
             </div>
             <Footer/>
    </div>
  )
}

export default page
