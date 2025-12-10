import Image from "next/image";
import Link from "next/link";

export default function PythonHero() {
  return (
    <section className=" bg-[#DFDFE1] font-mont pt-4 md:pt-10 lg:pt-40 rounded-[30px] mx-2 my-2">
      <div className="containers mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <span className="text-sm px-4 py-2 bg-black text-white w-fit rounded-full mb-2">
            Python Developers in Kochi
          </span>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[30px] lg:leading-[48px]">
            PYTHON DEVELOPERS IN KOCHI – FULL-STACK WEB DEVELOPMENT SERVICES
          </h1>
        
        <Link href="/contact-us">
          <button
            className="mt-4 lg:mt-6 bg-black text-sm text-white px-6 py-3 w-fit rounded-xl hover:bg-gray-800 transition"
          >
            Request a Call Back →
          </button>
           </Link>
        </div>
       

        {/* RIGHT SIDE CONTENT */}
        <div className="text-gray-700 text-[12px] md:text-[14px] leading-[20px] mb-4">
          <p>
            Accolades Integrated offers end-to-end full-stack web development. Our
            Python developers in Kochi build secure, high-performance websites
            using modern frameworks. For the front end, we use React.js and
            Next.js to create dynamic, fast-loading interfaces. On the back end,
            we code in Python and use frameworks like Django to store and
            organize data. Every project we handle is built to scale, load
            quickly, and keep your data safe.
          </p>

          <p className="mt-4">
            We ensure responsive design so your site works on desktops, tablets,
            and phones. After launch, we provide ongoing maintenance and support
            to keep your application secure and up to date. As Python Developers
            in Kochi, we focus on clear communication and collaboration to meet
            your goals.
          </p>
        </div>
      </div>

      {/* ICONS + MAIN IMAGE SECTION */}
      <div className="container mx-auto  mt-0  relative">
        

        {/* Main center large image */}
        <div className="flex justify-center items-center px-0 md:px-6 mt-0">
          <div className="relative h-[130px] md:h-[200px] lg:h-[260px] xl:h-[380px] w-[286px] md:w-[860px] lg:w-[940px] xl:w-[990px]   overflow-hidden">
            <Image
              src="/fullstack-new/py-hero.png" // replace with your image
              alt="Main Tech Graphic"
              fill
            //   className="object-contain drop-shadow-xl"
            className="object-cover object-top drop-shadow-xl"

            />
          </div>
        </div>
      </div>
    </section>
  );
}
