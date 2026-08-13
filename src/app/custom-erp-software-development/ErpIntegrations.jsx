import Image from "next/image";
import {
  CreditCard,
  Fingerprint,
  Mail,
  MessageCircle,
  ScanBarcode,
  WalletCards,
} from "lucide-react";

const integrations = [
  {
    title: "Payment Gateways",
    description:
      "Accept secure online payments and automatically reconcile transactions within your ERP.",
    icon: CreditCard,
  },
  {
    title: "WhatsApp",
    description:
      "Manage customer communication, order updates, and notifications from one platform.",
    icon: MessageCircle,
  },
  {
    title: "Email & SMS",
    description:
      "Automate alerts, reminders, invoices, approvals, and customer communications instantly.",
    icon: Mail,
  },
  {
    title: "Accounting Software",
    description:
      "Synchronize financial records with your preferred accounting and taxation solutions.",
    icon: WalletCards,
  },
  {
    title: "Biometric Systems",
    description:
      "Automatically capture attendance and employee work hours with biometric integration.",
    icon: Fingerprint,
  },
  {
    title: "Barcode & QR Systems",
    description:
      "Speed up inventory tracking, billing, warehousing, and product identification processes.",
    icon: ScanBarcode,
  },
];

export default function ErpIntegrations() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full containers ">
        <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <span className="inline-flex rounded-full bg-black px-2.5 py-1 font-almarai text-[8px] font-bold uppercase leading-none text-white">
              Connect Your Business Ecosystem
            </span>

            <h2 className="mt-4 max-w-[680px] text-[31px] font-normal leading-[1.08] tracking-[-0.04em] text-[#080808] sm:text-[39px] lg:text-[46px]">
              Connect Your ERP with the
              
              Tools You Already Use
            </h2>

            <p className="mt-5 max-w-[610px] font-mont text-[13px] leading-[1.55] text-[#555] sm:text-[14px]">
              Integrate your custom ERP seamlessly with your existing business
              applications to eliminate duplicate work, improve data accuracy,
              and keep every process connected.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/erp/leads.png"
              alt="ERP lead management dashboard showing total, assigned, and unassigned leads"
              width={504}
              height={217}
              sizes="(max-width: 1024px) 90vw, 470px"
              className="h-auto w-full max-w-[504px]"
            />
          </div>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-x-14 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-10">
          {integrations.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#087286] text-white sm:size-10">
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
              </span>

              <div className="pt-0.5">
                <h3 className="font-almarai text-[16px] font-bold leading-tight tracking-[-0.025em] text-[#111] sm:text-[17px]">
                  {title}
                </h3>
                <p className="mt-2 font-mont text-[13px] leading-[1.45] text-[#555] sm:text-[14px]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
