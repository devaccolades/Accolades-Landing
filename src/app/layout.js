import { Geist, Geist_Mono, Montserrat, Urbanist } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/component/Navbar";
import LayoutWrapper from "@/component/LayoutWrapper";
import Image from "next/image";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // Add other weights/styles as needed
  ],
  variable: "--font-poppins",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const zenOldMincho = localFont({
  src: [
    {
      path: "../../public/fonts/ZenOldMincho-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // Add other weights/styles as needed
  ],
  variable: "--font-zen-old-mincho",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-mont",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Accolades Integrated",
  description: "Accolades Integrated | Digital Creative Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body
        className={`${mont.variable} ${zenOldMincho.variable} ${geistSans.variable} ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${urbanist.variable} antialiased`}
      >
        <LayoutWrapper />
        {/* <Navbar className="pb-14"/> */}
        {children}

        <a
          href="tel:+919048100233"
          className="fixed bottom-20 lg:bottom-24 right-6 z-50"
        >
          <Image
            src="/home/telephone.png"
            width={56}
            height={56}
            alt="Call Now"
            className="w-10 h-10 lg:w-14 lg:h-14"
          />
        </a>

        <a
          href="https://wa.me/919048100233"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <Image
            src="/home/whatsapp.svg"
            width={56}
            height={56}
            alt="Chat on WhatsApp"
            className="w-10 h-10 lg:w-14 lg:h-14"
          />
        </a>
      </body>
    </html>
  );
}
