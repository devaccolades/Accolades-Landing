// import Image from "next/image";
// import Link from "next/link";

// export default function EcommerceHero() {
//   return (
//     <section className="bg-[#DFDFE1] font-mont pt-4 md:pt-10 lg:pt-40 pb-10 rounded-[30px] mx-2 my-2">
//       <div className="containers  grid lg:grid-cols-2 gap-10 items-center">

//         {/* LEFT CONTENT */}
//         <div className="">
//           {/* Tag */}
//           <span className="inline-block text-sm px-4 py-1 font-bold rounded-full  border border-black shadow-sm text-black">
//             E-commerce Development in Kochi
//           </span>

//           {/* Title */}
//           <h1 className="mt-2 text-2xl md:text-3xl lg:text-5xl font-bold leading-[30px] lg:leading-[48px]  text-black">
//             E-COMMERCE WEB <br />
//             DEVELOPMENT <br />
//             COMPANY IN KOCHI
//           </h1>

//           {/* Subheading */}
//           <h2 className="mt-4 text-xl md:text-[38px] leading-[38px] font-semibold text-black">
//             BUILD STORES THAT SELL
//           </h2>

//           {/* Description */}
//           <p className="text-black text-sm md:text-base leading-relaxed">
//             Accolades Integrated is an experienced E commerce Web Development Company
//             in Kochi. We design and build online stores that load fast, sell more,
//             and scale with your business. Our work blends commerce strategy, clean design,
//             and robust code so customers enjoy shopping and you see results.
//             <br />
//             We work with platforms such as Shopify and WooCommerce and use modern stacks
//             like React, Next.js, and Django for custom solutions. Whether you need a quick
//             store or a headless commerce setup, we deliver secure, SEO-ready sites tailored
//             to your needs.
//           </p>

//           {/* Button */}
//           <Link href="/contact-us">
//           < button
//             className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-[#0C7379] text-white font-medium rounded-full shadow hover:bg-[#006FE0] transition"
//           >
//             Start Your Store Now
//             <span className="text-xl">↗</span>
//           </button>
//           </Link>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="relative w-[380px] h-[380px] md:w-[420px] md:h-[420px]">
//             <Image
//               src="/new-ecommerce/e-hero.png" // update with your actual image path
//               alt="Ecommerce Hero"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import Link from "next/link";

export default function EcommerceHero() {
  return (
    <section className="bg-[#DFDFE1] font-mont pt-18 md:pt-24 lg:pt-32 pb-12 rounded-[30px] mx-2  my-2">
      <div className="containers mx-auto grid lg:grid-cols-2 gap-12 items-center px-0">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left ">
          {/* Tag */}
          <span className="inline-block text-xs md:text-sm px-4 py-1 font-bold rounded-full border border-black shadow-sm text-black">
            E-commerce Development in Kochi
          </span>

          {/* Title */}
          <h1 className="mt-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
            E-COMMERCE WEB <br />
            DEVELOPMENT <br />
            COMPANY IN KOCHI
          </h1>

          {/* Subheading */}
          <h2 className="mt-0 text-lg md:text-2xl lg:text-3xl font-semibold text-black">
            BUILD STORES THAT SELL
          </h2>

          {/* Description */}
          <p className="mt-3 text-black text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Accolades Integrated is an experienced E commerce Web Development Company
            in Kochi. We design and build online stores that load fast, sell more,
            and scale with your business. Our work blends commerce strategy, clean design,
            and robust code so customers enjoy shopping and you see results.
            <br /><br />
            We work with platforms such as Shopify and WooCommerce and use modern stacks
            like React, Next.js, and Django for custom solutions. Whether you need a quick
            store or a headless commerce setup, we deliver secure, SEO-ready sites tailored
            to your needs.
          </p>

          {/* Button */}
          <Link href="/contact-us">
            <button className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-[#0C7379] text-white font-medium rounded-full shadow hover:bg-[#006FE0] transition text-sm md:text-base">
              Start Your Store Now
              <span className="text-xl">↗</span>
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
            <Image
              src="/new-ecommerce/e-hero.png"
              alt="Ecommerce Hero"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
