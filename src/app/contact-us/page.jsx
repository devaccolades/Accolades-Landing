import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
import Herosection from './Herosection'
import OurPresence from './OurPresence'
import LocationDetailCard from './LocationDetailCard'
import ContactForm from './ContactForm'

import circleT from "../../../public/services/topC.png";
import circleTL from "../../../public/services/circletTL.png";
import centerR from "../../../public/services/centerR.png";
import centerL from "../../../public/services/centerL.png";
import bottomGrade from "../../../public/services/bottomSide.png";
import Image from "next/image";


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
     <section className="relative">
          <Image
            src={circleT}
            alt="crcle on top"
            height={100}
            width={100}
            className="absolute top-0 right-0 h-96 w-auto z-0"
          />
          <Image
            src={circleTL}
            alt="crcle on top"
            height={100}
            width={100}
            className="absolute top-[900px] md:top-[900px] lg:top-[200px] left-0 h-[1000px] w-auto z-0"
          />
          {/* <Image
            src={centerL}
            alt="crcle on top"
            height={100}
            width={100}
            className="absolute top-10 right-0 h-full w-auto z-0"
          />*/}
          <Image
            src={centerR}
            alt="crcle on top"
            height={100}
            width={100}
            className="absolute top-0 left-0 h-[500px] w-auto z-0"
          />
          <Image
            src={bottomGrade}
            alt="crcle on top"
            height={100}
            width={100}
            className="absolute bottom-0 left-0 h-full w-full  z-0"
          />
      <Navbar />
       {/* <div className="bg-gradient-to-br from-[#ecf3f6] to-[#f1f5f5]"> */}
      <Herosection />
      <OurPresence />
     <LocationDetailCard {...kochiData} />
     <ContactForm />
     {/* </div> */}
      <Footer />
    </section>
  )
}

export default page
