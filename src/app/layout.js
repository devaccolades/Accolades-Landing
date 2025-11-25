import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/component/Navbar";
import LayoutWrapper from "@/component/LayoutWrapper";

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
        className={`${mont.variable} ${zenOldMincho.variable} ${geistSans.variable} ${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
     
      {/* <LayoutWrapper /> */}
      <Navbar />
        {children}
      </body>
    </html>
  );
}
