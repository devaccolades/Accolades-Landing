import Navbar from '@/component/Navbar'
import React from 'react'
import FullstackHero from './FullstackHero'
import WhatWeCover from './WeCover'
import Footer from '@/component/Footer'
import FullstackProjects from './FullstackProjects'

import { BASE_URL, getSeo } from "@/app/Server";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const name = "fullstack-development";

  // fetch post information
  const post = await getSeo(name);
  console.log("post", post[0].metaTitle);

  return {
    title: post[0]?.metaTitle,
    description: post[0]?.metaDescription,
     keywords:"Python Web Developers in Kochi ",
    openGraph: {
      title: post[0]?.ogTitle,
      description: post[0]?.ogDescription,
      images: [
        BASE_URL + post[0]?.ogImage?.formats?.medium?.url, // Make sure this is a full URL to the image
      ],
    },
  };
}

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
