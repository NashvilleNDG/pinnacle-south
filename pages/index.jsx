import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle,
  ClipboardList,
  Handshake,
  MapPin,
  Network,
  Package,
  Palette,
  Search,
  Shield,
  Truck,
} from "lucide-react";
import Layout from "@/components/Layout";
import GalleryCarousel from "@/components/GalleryCarousel";
import projects from "@/data/projects.json";
import posts from "@/data/posts.json";

export async function getStaticProps() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  // Build carousel items from every project entry (hero image + name + slug)
  const projectHeroGallery = projects
    .map((p) => {
      if (!p?.image || !p?.slug || !p?.name) return null;
      return { src: p.image, alt: p.name, slug: p.slug };
    })
    .filter(Boolean);

  return {
    props: { featuredProjects, latestPosts, projectHeroGallery },
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage({ featuredProjects, latestPosts, projectHeroGallery }) {
  const processSteps = useMemo(
    () => [
      {
        key: "plan",
        number: "01",
        title: "Plan",
        icon: ClipboardList,
        short:
          "Comprehensive project discovery, scope definition, and timeline planning aligned with ownership goals and brand standards.",
        detail:
          "Comprehensive project discovery, scope definition, and timeline planning aligned with ownership goals and brand standards.",
      },
      {
        key: "source",
        number: "02",
        title: "Source",
        icon: Search,
        short:
          "Design-aligned vendor sourcing and specification review to ensure every product meets both aesthetic vision and performance requirements.",
        detail:
          "Design-aligned vendor sourcing and specification review to ensure every product meets both aesthetic vision and performance requirements.",
      },
      {
        key: "procure",
        number: "03",
        title: "Procure",
        icon: Package,
        short:
          "End-to-end procurement management with transparent budget tracking, purchase order management, and quality assurance protocols.",
        detail:
          "End-to-end procurement management with transparent budget tracking, purchase order management, and quality assurance protocols.",
      },
      {
        key: "coordinate",
        number: "04",
        title: "Coordinate",
        icon: Truck,
        short:
          "Precise logistics coordination including warehousing, phased delivery scheduling, and real-time milestone tracking.",
        detail:
          "Precise logistics coordination including warehousing, phased delivery scheduling, and real-time milestone tracking.",
      },
      {
        key: "deliver",
        number: "05",
        title: "Deliver",
        icon: CheckCircle,
        short:
          "On-site installation support, final inspections, and punch list management ensuring every detail meets specification.",
        detail:
          "On-site installation support, final inspections, and punch list management ensuring every detail meets specification.",
      },
    ],
    []
  );

  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const activeProcess = processSteps[activeProcessIndex];
  const ActiveIcon = activeProcess.icon;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pinnacle South",
    url: "https://www.pinnaclesouth.net",
    logo: "https://www.pinnaclesouth.net/images/logo.png",
    description:
      "Pinnacle South works on behalf of ownership groups to plan and execute FF&E programs. We coordinate closely with hotel brands and vendor partners to meet brand standards, protect budgets, and keep projects on schedule.",
    address: [
      { "@type": "PostalAddress", addressLocality: "Griffin", addressRegion: "Georgia", addressCountry: "US" },
      { "@type": "PostalAddress", addressLocality: "Franklin", addressRegion: "Tennessee", addressCountry: "US" },
    ],
    telephone: ["(800) 781-9010", "(615) 905-9115"],
  };

  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>Pinnacle South | Hospitality FF&amp;E Solutions</title>
        <meta
          name="description"
          content="Pinnacle South works on behalf of ownership groups to plan and execute FF&E programs, coordinating with hotel brands and vendor partners to protect budgets and keep projects on schedule."
        />
        <meta property="og:title" content="Pinnacle South | Hospitality FF&E Solutions" />
        <meta
          property="og:description"
          content="Pinnacle South works on behalf of ownership groups to plan and execute FF&E programs, coordinating with hotel brands and vendor partners to protect budgets and keep projects on schedule."
        />
        <meta property="og:image" content="/images/home-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            <img
              src="/images/home-hero.png"
              alt="Pinnacle South hospitality FF&E hero lobby"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,39,68,0.80)] to-[rgba(15,39,68,0.35)]" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-16">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="show"
              className="max-w-3xl text-center md:text-left"
            >
              <motion.div variants={itemFade}>
                <span className="text-[15px] uppercase tracking-eyebrow text-[#AC7B4A]">
                  Hospitality FF&amp;E Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={itemFade}
                className="mt-6 font-serif text-white text-[36px] leading-[1.08] sm:text-[48px] md:text-[56px] lg:text-[64px]"
              >
                <span className="block font-bold">Elevating Hospitality</span>
                <span className="block italic font-bold">Through Expert FF&amp;E</span>
              </motion.h1>

              <motion.p
                variants={itemFade}
                className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.7] text-white/90 sm:mt-6 sm:text-[18px] md:mx-0"
              >
                Pinnacle South works on behalf of ownership groups to lead FF&amp;E strategy
                and execution. Our team coordinates with hotel brands and vendor partners to
                satisfy standards, control costs, and keep every milestone on schedule.
              </motion.p>

              <motion.div variants={itemFade} className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
                >
                  View Our Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-white/10 px-8 py-3 text-[14px] font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 right-4 hidden flex-col items-center gap-2 text-white/60 sm:right-8 sm:flex">
            <div className="text-[11px] tracking-[0.35em] [writing-mode:vertical-rl]">SCROLL</div>
            <ArrowDown className="h-4 w-4" />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-[rgba(10,29,58,0.9)] py-4 sm:py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-10">
                {[
                  { value: "25+", label: "YEARS OF EXPERIENCE" },
                  { value: "200+", label: "PROJECTS COMPLETED" },
                  { value: "15+", label: "STATES SERVED" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[22px] font-bold leading-none text-white sm:text-[28px]">{s.value}</div>
                    <div className="mt-1 text-[9px] uppercase tracking-wider text-white/60 sm:mt-2 sm:text-[11px] sm:tracking-eyebrow">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — TRUSTED BRANDS BAR (auto-slide carousel) */}
        <section className="bg-white border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex shrink-0 items-center justify-center gap-6 md:justify-start">
                <div className="text-center text-[11px] uppercase tracking-[0.28em] text-processMuted leading-4 md:text-left">
                  <div>TRUSTED BY LEADING</div>
                  <div>HOSPITALITY BRANDS</div>
                </div>
                <div className="hidden h-8 w-px bg-border md:block" aria-hidden="true" />
              </div>
              <div className="w-full overflow-hidden md:min-w-0">
                <div className="flex w-max animate-marquee gap-10 pr-10 md:gap-12 md:pr-12">
                  {(() => {
                    const brands = [
                      "Courtyard by Marriott",
                      "Homewood Suites",
                      "Hampton Inn & Suites",
                      "Marriott",
                      "Hilton",
                    ];
                    return [...brands, ...brands].map((b, i) => (
                      <span
                        key={`${b}-${i}`}
                        className="shrink-0 text-[15px] font-medium text-textDark"
                      >
                        {b}
                      </span>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — ABOUT PREVIEW */}
        <section className="bg-cream pt-16 pb-14 sm:pt-24 md:pt-28 md:pb-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src="/images/home-page2.png"
                    alt="Pinnacle South team meeting"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 bg-[#0A1D3A] px-7 py-5">
                  <div className="text-[32px] font-bold leading-none text-white">25+</div>
                  <div className="mt-2 text-[11px] uppercase tracking-eyebrow text-white/75">
                    Years of Experience
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <div>
                <span className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">
                  About Pinnacle South
                </span>
              </div>
              <h2 className="mt-6 font-serif text-[28px] leading-[1.2] text-textDark sm:text-[36px] md:text-[40px]">
                A Trusted Partner in Hospitality FF&amp;E
              </h2>
              <p className="mt-6 text-[16px] leading-[1.8] text-textMuted">
                Pinnacle South works on behalf of ownership groups to plan and execute FF&amp;E
                programs. We coordinate closely with hotel brands and vendor partners to meet
                brand standards, protect budgets, and keep projects on schedule.
              </p>
              <p className="mt-5 text-[16px] leading-[1.8] text-textMuted">
                While we work directly for owners, we collaborate closely with hotel brands and
                vendor partners to align design intent, meet brand requirements, and ensure
                smooth project delivery.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-copper hover:underline"
                >
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — PROCESS PREVIEW (CARDS GRID) */}
        <section className="bg-cream pt-12 pb-16 sm:pt-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="inline-flex items-center gap-3 justify-center">
                <span className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">
                  Our Process
                </span>
              </div>
              <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-textDark sm:mt-6 sm:text-[36px] md:text-[42px]">
                The Pinnacle Process
              </h2>
              <p className="mt-4 mx-auto max-w-[520px] text-[16px] leading-7 text-textMuted">
                A structured, proven approach that delivers consistency and value across every
                hospitality FF&amp;E project.
              </p>
            </motion.div>

              <div className="mt-12">
              {/* 1 col on mobile; 6-col staggered pyramid on md+ */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
                {processSteps.map((s, idx) => {
                  const Icon = s.icon;
                  const colClass =
                    idx === 0
                      ? "md:col-span-2"
                      : idx === 1
                        ? "md:col-span-2"
                        : idx === 2
                          ? "md:col-span-2"
                          : idx === 3
                            ? "md:col-start-2 md:col-span-2"
                            : "md:col-start-4 md:col-span-2";
                  return (
                    <motion.article
                      key={s.key}
                      {...fadeInUp}
                      className={`rounded-md border border-border bg-white p-6 shadow-sm ${colClass}`}
                    >
                        <div className="flex flex-col items-center text-center gap-4">
                          <div className="grid h-14 w-14 place-items-center rounded-md bg-[#0A1D3A]">
                            <Icon className="h-6 w-6 text-[#AC7B4A]" />
                          </div>

                          <div className="text-[11px] uppercase tracking-[0.22em] text-processMuted">
                            Step {s.number}
                          </div>

                          <h3 className="font-serif text-[22px] leading-[1.2] text-textDark">
                            {s.title}
                          </h3>

                          <p className="text-[14px] leading-6 text-textMuted">{s.short}</p>
                        </div>
                    </motion.article>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link
                  href="/pinnacle-process"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-copper hover:underline"
                >
                  Explore the Full Process <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FEATURED PROJECTS */}
        <section className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 text-center">
              <motion.div {...fadeInUp} className="flex flex-col items-center">
                <div className="flex justify-center">
                  <span className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">
                    Our Work
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-[28px] leading-[1.15] text-white sm:mt-6 sm:text-[36px] md:text-[42px]">
                  Featured Projects
                </h2>
                <Link href="/projects" className="mt-2 inline-block text-[14px] font-medium text-white/45 hover:text-white/80">
                  View All Projects →
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6">
              {/* Top wide card */}
              {featuredProjects[0] ? (
                <motion.article
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    href={`/project/${featuredProjects[0].slug}`}
                    className="group relative block overflow-hidden rounded-md bg-gray-200 shadow-soft"
                  >
                    <div className="aspect-[16/9] sm:aspect-[16/6]">
                      <img
                        src={featuredProjects[0].image}
                        alt={`${featuredProjects[0].name} project image`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,39,68,0.92)_0%,rgba(15,39,68,0.45)_55%,rgba(0,0,0,0)_100%)] transition-colors group-hover:bg-[linear-gradient(to_top,rgba(15,39,68,0.95)_0%,rgba(15,39,68,0.55)_55%,rgba(0,0,0,0)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-8">
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-eyebrow text-[#AC7B4A]">
                          {featuredProjects[0].brand}
                        </div>
                        <h3 className="mt-2 font-serif text-[20px] leading-[1.2] text-white sm:text-[28px] sm:leading-[1.15]">
                          {featuredProjects[0].name}
                        </h3>
                        <div className="mt-2 inline-flex items-center gap-2 text-[13px] text-white/70">
                          <MapPin className="h-4 w-4" /> {featuredProjects[0].location}
                        </div>
                      </div>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-white/35">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ) : null}

              {/* Two smaller cards */}
              <div className="grid gap-6 md:grid-cols-2">
                {[featuredProjects[1], featuredProjects[2]].filter(Boolean).map((p) => (
                  <motion.article
                    key={p.slug}
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link
                      href={`/project/${p.slug}`}
                      className="group relative block overflow-hidden rounded-md bg-gray-200 shadow-soft"
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={p.image}
                          alt={`${p.name} project image`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,39,68,0.92)_0%,rgba(15,39,68,0.45)_55%,rgba(0,0,0,0)_100%)] transition-colors group-hover:bg-[linear-gradient(to_top,rgba(15,39,68,0.95)_0%,rgba(15,39,68,0.55)_55%,rgba(0,0,0,0)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-7">
                        <div className="min-w-0">
                          <div className="text-[11px] uppercase tracking-eyebrow text-[#AC7B4A]">{p.brand}</div>
                          <h3 className="mt-2 font-serif text-[18px] leading-[1.2] text-white sm:text-[22px] sm:leading-[1.15]">{p.name}</h3>
                          <div className="mt-2 inline-flex items-center gap-2 text-[13px] text-white/70">
                            <MapPin className="h-4 w-4" /> {p.location}
                          </div>
                        </div>
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white transition-colors group-hover:bg-white/35">
                          <ArrowUpRight className="h-5 w-5" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — WHY PINNACLE SOUTH */}
        <section className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[0.55fr_1fr]">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <div>
                <span className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">
                  Why Pinnacle South
                </span>
              </div>
              <h2 className="mt-6 font-serif text-[28px] leading-[1.15] text-textDark sm:text-[36px] md:text-[40px] md:leading-[1.1]">
                <span className="block font-bold">Built on Trust,</span>
                <span className="block italic font-normal text-processMuted">
                  Delivered with Precision
                </span>
              </h2>
              <p className="mt-6 text-[16px] leading-7 text-textMuted">
                Pinnacle South brings the experience, resources, and commitment needed to support
                hospitality projects of every scale — from boutique renovations to full-service new
                builds.
              </p>
              <div className="mt-10 border-t border-border pt-6">
                <div className="mx-auto grid max-w-xs grid-cols-2 gap-8 md:mx-0">
                  {[
                    { value: "25+", label: "YEARS EXPERIENCE" },
                    { value: "200+", label: "PROJECTS DELIVERED" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-[24px] font-semibold text-textDark leading-none">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-eyebrow text-processMuted">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="grid gap-px rounded-md border border-border bg-border sm:grid-cols-2 md:grid-cols-3 items-stretch">
                {[
                  {
                    icon: Building2,
                    title: "Hospitality Expertise",
                    description:
                      "Deep knowledge of brand standards, design approval processes, and the operational demands unique to hospitality projects.",
                  },
                  {
                    icon: Network,
                    title: "Premium Vendor Network",
                    description:
                      "Established manufacturer relationships that deliver quality products at competitive pricing with reliable lead times.",
                  },
                  {
                    icon: Calendar,
                    title: "Project Coordination",
                    description:
                      "Disciplined communication, milestone tracking, and proactive scheduling keep every engagement on time and on budget.",
                  },
                  {
                    icon: Palette,
                    title: "Design-Aligned Sourcing",
                    description:
                      "Procurement that honors your design intent while satisfying brand standards and ownership expectations.",
                  },
                  {
                    icon: Shield,
                    title: "Reliable Execution",
                    description:
                      "Proven logistics, quality assurance, and installation support that minimize risk and ensure seamless delivery.",
                  },
                  {
                    icon: Handshake,
                    title: "Long-Term Partnership",
                    description:
                      "Client relationships built on trust and transparency, spanning multiple projects and many years of collaboration.",
                  },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <motion.div
                      key={f.title}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                      }}
                      className="flex h-full flex-col gap-3 bg-white p-5 sm:p-8"
                    >
                      <div className="flex items-start gap-3">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-[#F4E6D8] text-[#AC7B4A]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-[15px] font-semibold text-textDark">{f.title}</h3>
                      </div>
                      <p className="text-[13px] leading-[1.7] text-textMuted">{f.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 — OUR WORK GALLERY (Carousel + Lightbox) */}
        <section className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">OUR WORK</div>
              <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-textDark sm:mt-6 sm:text-[36px] md:text-[42px] md:leading-[1.15]">
                A Glimpse of Our Work
              </h2>
            </motion.div>

            <div className="mt-10">
              <GalleryCarousel items={projectHeroGallery} />
            </div>
          </div>
        </section>

        {/* SECTION 8 — BRANDS & NETWORK */}
        <section className="bg-cream py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="flex justify-center">
                <span className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">
                  Our Network
                </span>
              </div>
              <h2 className="mx-auto mt-4 max-w-[600px] font-serif text-[28px] leading-[1.2] text-textDark sm:mt-6 sm:text-[36px] md:text-[42px] md:leading-[1.15]">
                Brands We Serve &amp; Partners We Trust
              </h2>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
              {[
                {
                  href: "/hotel-brands",
                  image: "/images/hotel-brands-hero.png",
                  title: "Hotel Brands",
                  description:
                    "We manage brand standards, review cycles, and approval workflows to keep projects moving without surprises.",
                },
                {
                  href: "/vendor-partners",
                  image: "/images/vendor-hero.png",
                  title: "Vendor Partners",
                  description:
                    "We align manufacturers and suppliers to project timelines, specifications, and installation readiness.",
                },
              ].map((c) => (
                <motion.article
                  key={c.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href={c.href} className="group relative block overflow-hidden aspect-[3/4] bg-gray-200">
                    <img
                      src={c.image}
                      alt={`${c.title} preview image`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,39,68,0.15),rgba(15,39,68,0.85))] transition-colors group-hover:bg-[linear-gradient(180deg,rgba(15,39,68,0.10),rgba(15,39,68,0.92))]" />
                    <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/30 text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-8">
                      <div className="text-[11px] uppercase tracking-eyebrow text-copper">Explore</div>
                      <h3 className="mt-2 font-serif text-[22px] text-white sm:text-[28px]">{c.title}</h3>
                      <p className="mt-3 max-w-[420px] text-[14px] leading-6 text-white/80">
                        {c.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — INSIGHTS PREVIEW */}
        <section className="bg-cream py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="inline-flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-copper" aria-hidden="true" />
                <span className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">Insights</span>
                <span className="h-px w-10 bg-copper" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-[28px] leading-[1.2] text-textDark sm:mt-6 sm:text-[36px] md:text-[44px] md:leading-[1.1]">
                Latest from Pinnacle South
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-7 text-textMuted">
                Industry perspectives, project insights, and thought leadership from our team.
              </p>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3"
            >
              {latestPosts.map((p, idx) => (
                <motion.article
                  key={p.slug}
                  variants={itemFade}
                  className="border border-border bg-white"
                >
                  <div className="relative aspect-[16/10] bg-gray-200">
                    <img
                      src={p.image}
                      alt={`${p.title} blog image`}
                      className="h-full w-full object-cover"
                    />
                    {/* Removed hardcoded overlay text to match the design. */}
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 text-[13px] text-processMuted">
                      <Calendar className="h-4 w-4 text-copper" />
                      <span>{p.date}</span>
                    </div>
                    <h3 className="mt-4 text-[18px] font-semibold leading-[1.4] text-textDark">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-6 text-textMuted line-clamp-3">
                      {p.excerpt}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={`/insights/${p.slug}`}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-copper hover:underline"
                      >
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 border-b border-copper text-[15px] font-medium text-copper hover:opacity-90"
              >
                View All Insights <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10 — BOTTOM CTA BAND */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-[28px] leading-[1.15] text-white sm:text-[36px] md:text-[44px] md:leading-[1.1]">
              Ready to Start Your Next Project?
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-white/75 sm:text-[16px]">
              Connect with Pinnacle South to discuss your hospitality FF&amp;E requirements. Our
              team is ready to support your vision from concept through completion.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
              >
                Contact Pinnacle South <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-[14px] font-semibold text-white/90 hover:bg-white/10 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}

