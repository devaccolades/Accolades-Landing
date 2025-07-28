import Image from "next/image";
import Img9 from '../../../../public/blog/heroImg.png'

export default function HeroSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-[#e6f4f9] py-12 ">
        <div className="containers w-full h-full bg-white p-3 rounded-2xl">
            <Image src={Img9} alt="hero-img" className="w-full h-[600px] rounded-2xl" />
        </div>
        <div>
            
        </div>
      </div>
    </>
  )
}
