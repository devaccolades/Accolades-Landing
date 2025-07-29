import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import Herosection from '../../digital-marketing/performance-marketing/Herosection'

const heroData = {
  main_title: "Branding & Packaging",
  title: "Build a Brand That Commands Attention",
  subtitle: "From logo to label, we craft cohesive brand identities that turn first impressions into lasting connections.",
  button_text: "Get a Creative Proposal",
  image: "/creative/branding/hero.webp",
};
const page = () => {
  return (
    <>
      <Navbar />
      <Herosection {...heroData}/>
      <Footer />
    </>
  )
}

export default page
