import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#top", label: "Home" },
  { href: "/#our-company", label: "Company" },
  { href: "/#our-services", label: "Services" },
  { href: "/#our-projects", label: "Projects" },
  { href: "/#careers", label: "Careers" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileOpen]);

  const textClass = "text-textDark";
  const borderClass = "border-border/80";
  const bgClass = `bg-white ${isScrolled ? "shadow-soft" : ""}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${bgClass}`}>
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-end border-b px-6 py-7 lg:justify-between lg:py-5 ${borderClass}`}
      >
        <Link
          href="/#top"
          className="absolute left-1/2 top-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 items-center lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0"
          aria-label="Pinnacle South Home"
        >
          <img
            src="/images/logo-transparent.png"
            alt="Pinnacle South logo"
            className="h-20 w-auto object-contain lg:h-16"
          />
        </Link>

        <div className="hidden flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:flex xl:gap-x-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              className={`text-[13px] font-medium xl:text-[14px] ${textClass} hover:text-copper transition-colors`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/insights"
            className={`text-[13px] font-medium xl:text-[14px] ${textClass} hover:text-copper transition-colors`}
          >
            Insights
          </Link>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 rounded-sm bg-[#0f2744] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a3a5c] xl:text-[14px]"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-sm border p-2 ${borderClass} ${textClass} lg:hidden`}
          aria-label="Open menu"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {isMobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col bg-white">
            <div className="relative flex items-center justify-end bg-[#0A1D3A] px-6 py-7">
              <Link
                href="/#top"
                className="absolute left-1/2 top-1/2 flex shrink-0 -translate-x-1/2 -translate-y-1/2 items-center"
                aria-label="Pinnacle South Home"
              >
                <img
                  src="/images/logo-transparent.png"
                  alt="Pinnacle South logo"
                  className="my-[20px] h-20 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-sm p-2 text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto px-6 py-8">
              <div className="mx-auto flex max-w-sm flex-col items-center gap-2 text-center">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full rounded-xl px-5 py-4 text-[16px] font-medium text-black transition-colors hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/insights"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full rounded-xl px-5 py-4 text-[16px] font-medium text-black transition-colors hover:bg-gray-50"
                >
                  Insights
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-2 w-full rounded-xl bg-[#0A1D3A] px-6 py-3.5 text-center text-[14px] font-semibold text-white hover:bg-[#0f2744] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
