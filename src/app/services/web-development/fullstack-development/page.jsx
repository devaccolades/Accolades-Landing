import Navbar from '@/component/Navbar'
import React from 'react'
import FullstackHero from './FullstackHero'
import WhatWeCover from './WeCover'
import Footer from '@/component/Footer'
import FullstackProjects from './FullstackProjects'

function page() {
  return (
    <div>
      <Navbar />
       <div className="bg-gradient-to-br from-[#ecf3f6] to-[#f1f5f5]">
         <FullstackHero /> 
         <WhatWeCover />
         <FullstackProjects />
             </div>
             <Footer />
    </div>
  )
}

export default page
