import Image from "next/image";
import ProcessImg from "../../../../../public/video-production/process.svg";

export default function Process() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[24px] text-[20px] text-[#3FB4BA] ">
        Process Timeline
      </h2>
      <div className="flex justify-center items-center h-full w-full">
        <Image src={ProcessImg} alt="process-img" className="" />
      </div>
    </div>
  );
}
