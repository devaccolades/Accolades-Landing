import Image from "next/image";
import Link from "next/link";

export default function AccoladesSection() {
  const features = [
    {
      icon: "/new-smm/a1.svg",
      title: "Complete Digital Suite",
      desc: "Full range of digital marketing services tailored to your needs",
    },
    {
      icon: "/new-smm/a2.svg",
      title: "Local Expertise",
      desc: "Deep understanding of Kochi market and Kerala audience",
    },
    {
      icon: "/new-smm/a3.svg",
      title: "Proven Results",
      desc: "Years of experience delivering measurable growth across industries",
    },
    {
      icon: "/new-smm/a4.svg",
      title: "Personalized Strategy",
      desc: "Custom campaigns designed for your unique business goals",
    },
    {
      icon: "/new-smm/a5.svg",
      title: "Dedicated Team",
      desc: "Expert social media specialists focused on your success",
    },
    {
      icon: "/new-smm/a6.svg",
      title: "Transparent Reporting",
      desc: "Clear analytics and regular performance updates",
    },
  ];

  return (
    <section className="containers py-16 font-mont">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug"> */}
           <h2 className="text-[20px] sm:text-[23px] xl:text-[32px] font-bold text-black leading-[26px] sm:leading-[30px] xl:leading-[38px] mb-2">
            WHY CHOOSE ACCOLADES INTEGRATED?
          </h2>
           <p className="text-black font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[150%]  mb-4">
            Accolades Integrated provides a complete suite of digital marketing services. 
            Our Kochi-based team has years of experience crafting social media campaigns across industries.
             We deliver personalized strategies that drive measurable growth.
              Whether you're a small local business or a larger enterprise, 
            our Social Media Marketing Kochi services fit your needs and budget. 
            We combine local market knowledge with proven SMM expertise to help your Kochi brand stand out.
           </p>
          
          </div>

          {/* RIGHT IMAGE */}
        <div className="flex justify-center overflow-hidden">
          <Image
            src="/new-smm/acc.svg"
            alt="Accolades Logo"
            width={380}
            height={380}
            className="object-contain"
          />
        </div>
          
        </div>

        
    

        <div className="grid sm:grid-cols-2 gap-2 md:gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-3 md:p-5 flex items-start gap-3 hover:shadow-md transition"
              >
                <Image src={item.icon} alt={item.title} width={38} height={38} />
                <div>
                  {/* <h4 className="font-semibold text-gray-800 mb-1"> */}
                  <h4 className="text-[14px] md:text-[16px] xl:text-[18px] font-semibold text-black mb-1 leading-tight">
                    {item.title}</h4>
                  {/* <p className="text-gray-600 text-sm leading-relaxed"> */}
                  <p className="text-black text-[12px] md:text-[13px] xl:text-[14px] leading-[150%]">
                    {item.desc}</p>
                </div>
              </div>
            ))}
          </div>

      {/* CTA SECTION */}
      <div className="mt-4 lg:mt-16 bg-teal-600 text-white text-center p-4 md:p-6 lg:p-10 rounded-3xl">
        <h3 className="text-[14px] md:text-[16px] leading-[20px] md:leading-[16px] font-semibold mb-2">
          READY TO GROW YOUR SOCIAL MEDIA PRESENCE?
        </h3>
        <p className="text-white/90 mb-2 md:mb-6 max-w-2xl text-[12px] lg:text-[16px] leading-[156%] mx-auto">
          Let's create a powerful social media strategy that drives real results for your business. Contact our team today to get started.
        </p>


       <Link href="/contact-us">
        <button className="bg-white text-[14px] md:text-[16px] leading-[20px] md:leading-[16px] text-teal-600 font-semibold px-4 md:px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
          GET YOUR FREE CONSULTATION
        </button>
        </Link>
      </div>
    </section>
  );
}