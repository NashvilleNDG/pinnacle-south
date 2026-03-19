import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1D3A] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-14">
        <div className="grid gap-10 text-center sm:gap-14 md:grid-cols-2 md:text-left lg:grid-cols-4">
          <section aria-label="Footer about" className="flex flex-col items-center text-center">
            <img
              src="/images/logo-transparent.png"
              alt="Pinnacle South logo"
              className="h-[75px] w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-center text-[16px] leading-8 text-white/90 md:text-left">
              Pinnacle South delivers premium FF&amp;E solutions for hospitality projects through thoughtful
              planning, sourcing, procurement, and execution support.
            </p>
          </section>

          <nav
            aria-label="Footer quick links"
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-[14px] font-medium uppercase tracking-[0.18em] text-[#AC7B4A]">
              QUICK LINKS
            </div>
            <ul className="mt-6 space-y-3 text-[16px] leading-8 text-white/90">
              {[
                { href: "/about", label: "About" },
                { href: "/pinnacle-process", label: "Pinnacle Process" },
                { href: "/projects", label: "Projects" },
                { href: "/hotel-brands", label: "Hotel Brands" },
                { href: "/vendor-partners", label: "Vendor Partners" },
                { href: "/insights", label: "Blogs" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link className="hover:text-white transition-colors" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-label="Footer contact"
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-[14px] font-medium uppercase tracking-[0.18em] text-[#AC7B4A]">
              CONTACT
            </div>
            <div className="mt-6 space-y-4 text-[16px] leading-8 text-white/90">
              <div className="flex gap-3 justify-center md:justify-start">
                <MapPin className="mt-[3px] h-4 w-4 shrink-0 text-[#AC7B4A]" aria-hidden="true" />
                <div>
                  Griffin, Georgia<br />
                  Franklin, Tennessee
                </div>
              </div>

              <div className="flex gap-3 justify-center md:justify-start">
                <Phone className="mt-[3px] h-4 w-4 shrink-0 text-[#AC7B4A]" aria-hidden="true" />
                <div>
                  <a className="hover:text-white transition-colors" href="tel:+18007819010">
                    (800) 781-9010
                  </a>
                  <br />
                    <a
                      className="hover:text-white transition-colors"
                      href="tel:+16159059115"
                    >
                      (615) 905-9115
                    </a>
                </div>
              </div>

              <div className="flex gap-3 justify-center md:justify-start">
                <Mail className="mt-[3px] h-4 w-4 shrink-0 text-[#AC7B4A]" aria-hidden="true" />
                <div>
                  <a className="hover:text-white transition-colors" href="mailto:info@pinnaclesouth.net">
                    info@pinnaclesouth.net
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-label="Footer start a project"
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-[14px] font-medium uppercase tracking-[0.18em] text-[#AC7B4A]">
              START A PROJECT
            </div>
            <p className="mt-6 text-[16px] leading-8 text-white/90">
              Ready to discuss your next hospitality project? Let&apos;s connect and explore how Pinnacle South
              can support your FF&amp;E needs.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-sm bg-[#AC7B4A] px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
            >
              Request a Consultation
            </Link>
          </section>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-center text-[15px] text-white/90 sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between md:text-left">
          <div>© 2026 Pinnacle South. All rights reserved.</div>
          <div className="flex items-center justify-center gap-5 md:justify-end">
            <Link className="hover:text-white transition-colors" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
