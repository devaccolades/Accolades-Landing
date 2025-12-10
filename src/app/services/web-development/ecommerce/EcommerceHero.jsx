import Image from "next/image";

export default function EcommerceHero() {
  return (
    <section className="w-full py-20 rounded-[30px] bg-gradient-to-br from-[#F6FAFD] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <span className="inline-block text-sm px-4 py-1 rounded-full bg-white border shadow-sm text-gray-600">
            E-commerce Development in Kochi
          </span>

          {/* Title */}
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            E COMMERCE WEB <br />
            DEVELOPMENT <br />
            COMPANY IN KOCHI
          </h1>

          {/* Subheading */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            BUILD STORES THAT SELL
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
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
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#0A84FF] text-white font-medium rounded-full shadow hover:bg-[#006FE0] transition"
          >
            Start Your Store Now
            <span className="text-xl">↗</span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[380px] h-[380px] md:w-[420px] md:h-[420px]">
            <Image
              src="/ecommerce-new/hand-cart.png" // update with your actual image path
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
