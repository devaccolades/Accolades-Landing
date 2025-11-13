"use client"
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

function LayoutWrapper({children}) {
    const pathName =usePathname();
    const hiddenNavbarRoutes = ["/google-ads", "/video-production"];
    const hideNavbar = hiddenNavbarRoutes.includes(pathName);
  return (
    <div>
        {!hideNavbar && <Navbar />}
       {children}
    </div>
  )
}

export default LayoutWrapper;
