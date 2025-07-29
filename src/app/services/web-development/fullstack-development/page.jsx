import Navbar from '@/component/Navbar'
import React from 'react'
import FullstackHero from './FullstackHero'

function page() {
  return (
    <div>
      <Navbar />
       <div className="bg-gradient-to-br from-[#ecf3f6] to-[#f1f5f5]">
         <FullstackHero /> 
             </div>
    </div>
  )
}

export default page
