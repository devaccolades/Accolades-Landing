import Image from "next/image";
import Img9 from '../../../../public/blog/heroImg.png'

export default function HeroSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-white to-[#e6f4f9] pt-12 mt-20 ">
        <div className="containers w-full h-full bg-white p-3 rounded-2xl">
            <Image src={Img9} alt="hero-img" className="w-full h-[300px] md:h-[600px] rounded-2xl object-cover" />
        </div>
      </div>
    </>
  )
}
