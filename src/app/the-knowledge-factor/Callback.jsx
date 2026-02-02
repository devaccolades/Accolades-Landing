import Image from "next/image";

const Callback = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
          Tap Our Experience
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          Book a review of your current plan. We&apos;ll analyze what&apos;s
          working, identify gaps, and show you how our proven playbooks can
          accelerate your growth in the Kochi market and beyond.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
          {/* Primary button */}
          <button className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
            Book a Review
            <span className="text-lg">↗</span>
          </button>

          {/* OR */}
          <span className="text-sm text-gray-500">or</span>

          {/* Email */}
          <a
            href="mailto:mail@accoladesmedia.co.in"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm text-gray-700 transition hover:border-gray-400"
          >
            <span className="text-base">✉️</span>
            mail@accoladesmedia.co.in
          </a>
        </div>
      </div>
    </section>
  );
};

export default Callback;
