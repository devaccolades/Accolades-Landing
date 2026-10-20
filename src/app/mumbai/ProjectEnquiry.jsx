"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function ProjectEnquiry() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const submitting = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    submitting.current = true;
    setStatus({ type: "loading", message: "" });
    try {
      const response = await fetch("/api/mumbai-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send your enquiry. Please try again.");
      form.reset();
      setStatus({ type: "success", message: "Thank you! Your project enquiry has been sent. Our team will be in touch." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to send your enquiry. Please try again." });
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section aria-labelledby="mumbai-enquiry-heading" className="bg-white py-12 text-black md:py-16 lg:py-20">
      <div className="containers grid gap-10 md:grid-cols-[.8fr_1.4fr] md:gap-[10%]">
        <div>
          <p className="mb-6 text-sm lg:text-lg"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> Start a conversation</p>
          <h2 id="mumbai-enquiry-heading" className="text-[32px] leading-[1.08] font-medium tracking-[-.04em] lg:text-[44px]">Let’s Talk About<br />Your Business</h2>
          <p className="mt-7 max-w-[380px] text-sm leading-[1.65] text-[#58696a] lg:text-base">Whether you need a campaign, a website, a mobile app, a CRM or a full ERP, tell us what you are trying to achieve and we will tell you where to start.</p>
        </div>

        <div>
          <h3 className="text-base lg:text-xl"><span aria-hidden="true" className="text-[#ffdf00]">✦</span> Discuss Your Project</h3>
          <p className="mt-3 text-xs leading-relaxed lg:text-sm">Tell us what works and what needs help.</p>
          <form onSubmit={handleSubmit} className="mt-10 md:mt-14">
            <fieldset disabled={status.type === "loading"} className="grid min-w-0 gap-x-10 gap-y-8 disabled:opacity-60 sm:grid-cols-2 lg:gap-y-10">
              <legend className="sr-only">Project enquiry details</legend>
              <label className="block text-[11px] lg:text-xs" htmlFor="mumbai-name">Name<span aria-hidden="true" className="text-[#008391]">*</span>
                <input id="mumbai-name" name="name" required maxLength={120} autoComplete="name" className="mt-2 block w-full rounded-none border-b border-[#e5e5e5] bg-transparent py-3 text-sm outline-none focus:border-[#008391]" />
              </label>
              <label className="block text-[11px] lg:text-xs" htmlFor="mumbai-email">Work Email<span aria-hidden="true" className="text-[#008391]">*</span>
                <input id="mumbai-email" name="email" type="email" required maxLength={254} autoComplete="email" className="mt-2 block w-full rounded-none border-b border-[#e5e5e5] bg-transparent py-3 text-sm outline-none focus:border-[#008391]" />
              </label>
              <label className="block text-[11px] lg:text-xs" htmlFor="mumbai-company">Company or Website<span aria-hidden="true" className="text-[#008391]">*</span>
                <input id="mumbai-company" name="company" required maxLength={250} autoComplete="organization" className="mt-2 block w-full rounded-none border-b border-[#e5e5e5] bg-transparent py-3 text-sm outline-none focus:border-[#008391]" />
              </label>
              <label className="block text-[11px] lg:text-xs" htmlFor="mumbai-service">Service Needed<span aria-hidden="true" className="text-[#008391]">*</span>
                <span className="relative mt-2 block">
                  <select id="mumbai-service" name="service" required defaultValue="Software development" className="block w-full appearance-none rounded-none border-b border-[#e5e5e5] bg-white py-3 pr-7 text-sm outline-none focus:border-[#008391]">
                    <option>Software development</option>
                    <option>Digital marketing</option>
                    <option>Website development</option>
                    <option>Mobile app development</option>
                    <option>CRM or ERP development</option>
                    <option>Branding and creative</option>
                    <option>Marketing and software</option>
                  </select>
                  <ChevronDown aria-hidden="true" size={16} className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2" />
                </span>
              </label>
              <label className="block text-[11px] sm:col-span-2 lg:text-xs" htmlFor="mumbai-description">Short Project Description
                <textarea id="mumbai-description" name="description" rows={4} maxLength={5000} className="mt-3 block w-full resize-y rounded-none border-b border-[#e5e5e5] bg-transparent py-3 text-sm outline-none focus:border-[#008391]" />
              </label>
            </fieldset>
            <div aria-live="polite" aria-atomic="true" className={`mt-4 text-sm leading-relaxed ${status.type === "error" ? "text-red-700" : "text-[#007b69]"}`}>{status.message}</div>
            <div className="mt-5 flex justify-end">
              <button type="submit" disabled={status.type === "loading"} className="inline-flex cursor-pointer items-center gap-3 rounded-[10px] bg-[#ffed00] px-4 py-3 text-xs font-semibold text-[#007b89] transition-colors hover:bg-[#fff56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007b89] disabled:cursor-wait disabled:opacity-60 lg:text-sm">{status.type === "loading" ? "Sending…" : "Send Project Enquiry"}<ArrowUpRight aria-hidden="true" size={16} /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
