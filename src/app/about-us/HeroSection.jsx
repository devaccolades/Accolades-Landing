import Image from "next/image";
import heroImg from "../../../public/about-us/img1.webp";

export default function HeroSection() {
  return (
    <div className="w-full containers">
      <h1 className="text-center font-bold xl:text-[86px] leading-[130%] text-[#3FB4BA]">
        Meet Accolades
      </h1>
      <div className="flex flex-row w-full gap-20">
        <div className="w-[50%] bg-white py-6">
          <h1 className="font-semibold xl:text-[76px] leading-[110%] text-[#3FB4BA] ">
            Accolades
          </h1>
          <h3 className="font-medium xl:text-[36px] leading-[130%] -tracking-[2%] text-[#333333] ">
            The ideal platform for all your queries
          </h3>
          <p className="font-normal xl:text-[18px] leading-[150%] text-[#2B2A29]">
            The ultimatum of our successful company is to adequately provide our
            prospective clients with the required service that they promptly
            demand from us. To procure the desired result we earnestly strive
            with all our collaborative effort. It’s our genuine commitment and
            ultimate responsibility to amend the success rate for all our
            specific clients.
          </p>
        </div>
        <div className="w-[50%] h-full"> 
          <Image src={heroImg} alt="hero-img" className="h-[350px] w-[350px]" />
        </div>
      </div>
      <div>
        <h1>Who we are?</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur. Dolor massa mauris praesent
          volutpat egestas sapien elementum nibh sed. Vitae dui leo turpis dui
          in laoreet. Aliquet nunc scelerisque enim orci. Lobortis non fringilla
          venenatis vulputate tincidunt ultrices volutpat aliquet. Scelerisque
          eu risus viverra interdum mattis dis dui tempus. Viverra nunc sed amet
          vel cursus viverra. Erat nibh justo duis maecenas purus tristique
          placerat. Enim pellentesque dolor integer non justo.
        </div>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur. Dolor massa mauris praesent
          volutpat egestas sapien elementum nibh sed. Vitae dui leo turpis dui
          in laoreet. Aliquet nunc scelerisque enim orci. Lobortis non fringilla
          venenatis vulputate tincidunt ultrices volutpat aliquet. Scelerisque
          eu risus viverra interdum mattis dis dui tempus. Viverra nunc sed amet
          vel cursus viverra. Erat nibh justo duis maecenas purus tristique
          placerat. Enim pellentesque dolor integer non justo.
        </div>
        <h1>What we do?</h1>
      </div>
    </div>
  );
}
