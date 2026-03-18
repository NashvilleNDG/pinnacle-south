import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export default function CTASection({
  label = "START A PROJECT",
  title = "Ready to plan your next hospitality FF&E scope?",
  description = "Request a consultation to discuss timelines, sourcing, procurement, and execution support.",
  primaryCtaLabel = "Request a Consultation",
  primaryCtaHref = "/contact",
}) {
  return (
    <section className="bg-navyDark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionLabel label={label} />
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-serif text-[40px] leading-[1.15] lg:text-[48px]">{title}</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/75">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center rounded-sm bg-copper px-8 py-3 text-[14px] font-semibold text-white hover:opacity-95 transition-opacity"
            >
              {primaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

