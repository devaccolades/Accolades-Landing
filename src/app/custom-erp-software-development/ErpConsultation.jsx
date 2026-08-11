"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

const inputStyles =
  "mt-1.5 h-10 w-full rounded-md border border-white/25 bg-transparent px-3 font-mont text-[12px] text-white outline-none transition placeholder:text-white/65 focus:border-[#19b9d6] focus:ring-2 focus:ring-[#19b9d6]/20";

export default function ErpConsultation() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#0a333b] text-white py-6 md:py-10 lg:py-16">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[linear-gradient(110deg,#0b3037_0%,#0a3c47_43%,#75c4d4_70%,#effcff_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[45%] bg-[radial-gradient(ellipse_at_center_bottom,rgba(215,242,246,0.78),transparent_67%)]" />

      <div className="containers grid w-full items-center gap-10  lg:grid-cols-[1fr_365px] lg:gap-20">
        <div>
          <span className="inline-flex rounded-full border border-white/70 bg-black px-2.5 py-1 font-almarai text-[8px] font-bold uppercase leading-none text-white">
            Ready to Simplify Your Business?
          </span>

          <h2 className="mt-5 max-w-[680px] font-mont text-[34px] font-normal leading-[1.12] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[50px]">
            Your Business Has Outgrown
            <br className="hidden sm:block" /> Spreadsheets. Let&apos;s Build What&apos;s Next.
          </h2>

          <p className="mt-5 max-w-[680px] font-mont text-[13px] leading-[1.55] text-white/75 sm:text-[14px]">
            Every growing business reaches a point where manual processes slow progress. Speak with our ERP experts to discover how a custom solution can streamline operations, improve productivity, and support long-term growth.
          </p>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:gap-14">
            <a href="mailto:mail@accoladesintegrated.com" className="flex items-center gap-2 font-almarai text-[12px] font-bold text-white transition hover:text-[#8fe6f1]">
              <Mail size={20} strokeWidth={2} aria-hidden="true" />
              <span>Email us<span className="block">mail@accoladesintegrated.com</span></span>
            </a>
            <a href="tel:+919048689977" className="flex items-center gap-2 font-almarai text-[12px] font-bold text-white transition hover:text-[#8fe6f1]">
              <Phone size={20} strokeWidth={2} aria-hidden="true" />
              <span>Call us<span className="block">+91 90486 89977</span></span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[20px] bg-[linear-gradient(180deg,#08728a_0%,#03252c_100%)] p-5 shadow-[0_22px_48px_rgba(2,33,39,0.25)] sm:p-6">
          <h3 className="font-mont text-[22px] font-medium leading-tight text-white">Book Your Free ERP Consultation</h3>
          <p className="mt-2 font-mont text-[11px] leading-[1.5] text-white/80">
            No generic package. No one-size-fits-all solution.<br /> Let&apos;s start by understanding your business.
          </p>

          <div className="mt-4 space-y-3">
            <label className="block font-almarai text-[12px] font-bold text-white">
              Name*
              <input className={inputStyles} name="name" placeholder="Enter your name" required />
            </label>

            <label className="block font-almarai text-[12px] font-bold text-white">
              Phone number*
              <span className="mt-1.5 flex h-10 overflow-hidden rounded-md border border-white/25 bg-transparent transition focus-within:border-[#19b9d6] focus-within:ring-2 focus-within:ring-[#19b9d6]/20">
                <span className="grid place-items-center border-r border-white/20 px-3 font-mont text-[11px] font-normal">+91</span>
                <input className="min-w-0 flex-1 bg-transparent px-3 font-mont text-[12px] font-normal text-white outline-none placeholder:text-white/65" inputMode="tel" name="phone" placeholder="Enter your phone number" required />
              </span>
            </label>

            <label className="block font-almarai text-[12px] font-bold text-white">
              Message
              <textarea className="mt-1.5 min-h-[64px] w-full resize-none rounded-[10px] border border-white/25 bg-[#052a31]/60 p-3 font-mont text-[12px] font-normal text-white outline-none transition placeholder:text-white/60 focus:border-[#19b9d6] focus:ring-2 focus:ring-[#19b9d6]/20" name="message" placeholder="Leave a message if you need anything specific..." />
            </label>
          </div>

          <button type="submit" className="mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#0eb5db] font-almarai text-[13px] font-bold text-white transition hover:bg-[#20c4e7] focus:outline-none focus:ring-2 focus:ring-white/70">
            <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
            Book a Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
