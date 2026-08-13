"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

import { ArrowRight, Check, MessageCircle } from "lucide-react";

const inputClasses =
  "h-10 w-full rounded-md border border-white/20 bg-white/[0.04] px-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#16bad1] focus:ring-2 focus:ring-[#16bad1]/20";

export default function HeroSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (name === "phone") setPhoneError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      setPhoneError("Enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message);

      await Swal.fire({
        title: "Success!",
        text: "Your consultation request has been submitted.",
        icon: "success",
        confirmButtonColor: "#17AABF",
      });
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("ERP consultation submit error:", error);
      Swal.fire({
        title: "Submission failed",
        text: "Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-white pt-24 text-[#073f48] sm:pt-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-3/4 -z-20 opacity-55 [background-image:radial-gradient(#b9d5d8_1px,transparent_1px)] [background-size:14px_14px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[62%] bg-[radial-gradient(ellipse_65%_58%_at_42%_100%,rgba(255,193,193,0.62),rgba(255,225,225,0.34)_46%,transparent_76%),radial-gradient(ellipse_42%_50%_at_82%_100%,rgba(207,244,249,0.62),transparent_74%)]"
      />

      <div className="containers">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          <div className="pt-4 lg:pt-12">
            <div className="mb-5 inline-flex items-center rounded-full bg-[#e6f7f8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#07525d]">
              Custom ERP software development
            </div>

            <h1 className="max-w-[760px] text-[37px] font-normal leading-[1.08] tracking-[-0.045em] text-[#087984] sm:text-[44px] lg:text-[48px]">
              Custom Web-Based ERP
              <br className="hidden sm:block" /> Solutions for Growing Small
              <br className="hidden sm:block" /> &amp; Medium Businesses
            </h1>

            <p className="mt-5 max-w-[760px] text-[13px] leading-[1.55] text-[#53656a] sm:text-[14px]">
              Streamline your operations with a tailored ERP system that brings
              sales, inventory, finance, HR, and business processes into one
              secure, cloud-based platform. Built for small and medium
              enterprises, our solutions adapt to your workflow and scale as
              your business grows.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[18px] bg-[#064553] p-5 text-white shadow-[0_20px_55px_rgba(2,55,65,0.22)]"
          >
            <h2 className="text-[20px] font-medium leading-tight">
              Book Your Free ERP Consultation
            </h2>
            <p className="mt-2 text-xs leading-5 text-white/65">
              No generic packages. No one-size-fits-all solution.
              <br /> Let&apos;s start by understanding your business.
            </p>

            <div className="mt-4 space-y-3">
              <label className="block text-xs font-medium">
                Name<span className="text-[#4bd4e3]">*</span>
                <input
                  className={`${inputClasses} mt-1.5`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label className="block text-xs font-medium">
                Phone number<span className="text-[#4bd4e3]">*</span>
                <div className="mt-1.5 flex overflow-hidden rounded-md border border-white/20 bg-white/[0.04] focus-within:border-[#16bad1] focus-within:ring-2 focus-within:ring-[#16bad1]/20">
                  <span className="grid h-10 place-items-center border-r border-white/15 px-3 text-xs text-white/70">
                    +91
                  </span>
                  <input
                    className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/45"
                    inputMode="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                {phoneError && <p className="mt-1 text-[11px] text-red-300">{phoneError}</p>}
              </label>

              <label className="block text-xs font-medium">
                Tell us what you need
                <textarea
                  className="mt-1.5 min-h-20 w-full resize-none rounded-md border border-white/20 bg-white/[0.04] p-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#16bad1] focus:ring-2 focus:ring-[#16bad1]/20"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message if you need anything specific..."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#08b6d0] text-sm font-semibold text-white transition hover:bg-[#13c5dc] focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <MessageCircle size={16} strokeWidth={2} />
              {loading ? "Sending..." : "Book a Free Consultation"}
              <ArrowRight size={15} />
            </button>
          </form>
        </div>

        <div className="relative mt-12 pb-6 lg:mt-14 lg:pb-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] -top-20 h-44 bg-[radial-gradient(ellipse_at_center,rgba(160,238,247,0.72)_0%,rgba(205,247,251,0.48)_38%,transparent_74%)] blur-[2px]"
          />

          <div className="relative z-10 mb-3 flex items-center gap-2 text-xs font-semibold text-[#123f46]">
            <span className="grid size-5 place-items-center rounded-full bg-[#0aa9a8] text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            Simple ERP Dashboard — Fully Customizable
          </div>

          <div className="relative z-10 mx-auto flex w-full items-center justify-center overflow-hidden rounded-xl border border-[#d9e7e8] ">
            <div className="text-center">
              
              <Image
                src="/erp/hero.webp"
                alt="Custom ERP Software Development"
                width={600}
                height={400}
                className="mx-auto w-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
