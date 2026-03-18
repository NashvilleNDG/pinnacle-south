import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Building2, ChevronDown, Menu, Users, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pinnacle-process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
];

const BRANDS_DROPDOWN = [
  {
    href: "/hotel-brands",
    icon: Building2,
    title: "Hotel Brands",
    subtitle: "Brand standards & experience across major flags",
  },
  {
    href: "/vendor-partners",
    icon: Users,
    title: "Vendor Partners",
    subtitle: "Manufacturer network supporting quality & timelines",
  },
];

export default function Header({ variant = "auto" }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownCloseTimeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [router.asPath]);

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

  const openDropdown = () => {
    if (dropdownCloseTimeoutRef.current) clearTimeout(dropdownCloseTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (dropdownCloseTimeoutRef.current) clearTimeout(dropdownCloseTimeoutRef.current);
    dropdownCloseTimeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 140);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${bgClass}`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-5 border-b ${borderClass}`}>
        <Link href="/" className="flex items-center gap-3" aria-label="Pinnacle South Home">
          <img
            src="/images/logo-transparent.png"
            alt="Pinnacle South logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link className={`text-[14px] font-medium ${textClass} hover:text-copper transition-colors`} href="/">
            Home
          </Link>
          <Link
            className={`text-[14px] font-medium ${textClass} hover:text-copper transition-colors`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`text-[14px] font-medium ${textClass} hover:text-copper transition-colors`}
            href="/pinnacle-process"
          >
            Process
          </Link>
          <Link
            className={`text-[14px] font-medium ${textClass} hover:text-copper transition-colors`}
            href="/projects"
          >
            Projects
          </Link>

          <div className="relative" onMouseEnter={openDropdown} onMouseLeave={scheduleCloseDropdown}>
            <button
              type="button"
              className={`inline-flex items-center gap-2 text-[14px] font-medium ${textClass} hover:text-copper transition-colors`}
              onClick={() => setIsDropdownOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={isDropdownOpen}
            >
              Brands &amp; Vendors <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen ? (
              <div
                className="absolute left-0 mt-3 w-[360px] rounded-md bg-white p-2 shadow-soft ring-1 ring-border/60"
                role="menu"
              >
                {BRANDS_DROPDOWN.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 rounded-md px-3 py-3 hover:bg-cream transition-colors"
                      role="menuitem"
                    >
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-[#0f2744] text-white">
                        <Icon className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[14px] font-semibold text-textDark">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-5 text-textMuted">
                          {item.subtitle}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>

          <Link
            className={`text-[14px] font-medium ${textClass} hover:text-copper transition-colors`}
            href="/insights"
          >
            Insights
          </Link>

          <Link
            href="/contact"
            className="rounded-sm bg-[#0f2744] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a3a5c]"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex items-center justify-center rounded-sm p-2 border ${borderClass} ${textClass}`}
          aria-label="Open menu"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {isMobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-navyDark/80"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col bg-cream">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link href="/" className="flex items-center gap-3" aria-label="Pinnacle South Home">
                <img
                  src="/images/logo-transparent.png"
                  alt="Pinnacle South logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-sm p-2 border border-border text-textDark"
                aria-label="Close menu"
                onClick={() => setIsMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-[18px] font-semibold text-textDark">
                    {l.label}
                  </Link>
                ))}

                <div className="pt-2">
                  <div className="text-[12px] uppercase tracking-eyebrow text-copper">Brands &amp; Vendors</div>
                  <div className="mt-3 grid gap-3">
                    {BRANDS_DROPDOWN.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 rounded-md border border-border bg-white p-4 shadow-sm"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-[#0f2744] text-white">
                            <Icon className="h-5 w-5 text-white" strokeWidth={2} aria-hidden />
                          </span>
                          <span>
                            <span className="block text-[15px] font-semibold text-textDark">
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-[13px] leading-5 text-textMuted">
                              {item.subtitle}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-5">
              <Link
                href="/contact"
                className="block w-full rounded-sm bg-[#0f2744] px-6 py-3 text-center text-[14px] font-semibold text-white hover:bg-[#1a3a5c] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

