import React from 'react'
import VideoSlider from '../services/creative/VideoSlider'

export default function FeaturedWork() {
  return (
    <div className='w-[90%] mx-auto lg:py-10 md:py-8 py-6'>
      <h1 className='font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] leading-[130%] text-[#3FB4BA]'>Featured Work</h1>
      <VideoSlider />
    </div>
  )
}
