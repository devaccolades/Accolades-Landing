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
       <div className="bg-[#F1F1F1]">
         <FullstackHero /> 
         <WhatWeCover />
         <FullstackProjects />
             </div>
               <div className="-mt-[65px]">
             <Footer />
             </div>
    </div>
  )
}

export default page
