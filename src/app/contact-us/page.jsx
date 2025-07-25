import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import Herosection from './Herosection'
import OurPresence from './OurPresence'
import LocationDetailCard from './LocationDetailCard'
import ContactForm from './ContactForm'


const kochiData = {
        locationName: "Kochi",
        address: "No.32/3071 – B | First Floor | Anjiparambil Building Ponnurunni | NH Bypass | Vyttila | Cochin – 682 019",
        email: "mail@accoladesmedia.co.in",
        phoneNumbers: ["+91 90726 19922", "+91 87143 04849"],
        // For the map, you would typically use an embed URL from Google Maps.
        // For demonstration, I'm using the provided image as a placeholder.
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.338634640268!2d76.31439647589313!3d9.988860973224527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cf7e6baeda3%3A0x1f053eaaf85f927b!2sACCOLADES%20Integrated%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1753441166710!5m2!1sen!2sin"
    };



const page = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <Navbar />
      <Herosection />
      <OurPresence />
     <LocationDetailCard {...kochiData} />
     <ContactForm />
      <Footer />
    </div>
  )
}

export default page
