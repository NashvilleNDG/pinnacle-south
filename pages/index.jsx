import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import ContactFormSection from "@/components/ContactFormSection";
import projects from "@/data/projects.json";

export async function getStaticProps() {
  return {
    props: { projectTiles: projects.slice(0, 6) },
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HOME_SIGNATURE_QUOTES = [
  "We’re great problem solvers, but we’re also problem avoiders.",
  "Great hotels start with great rooms. And great rooms start here.",
];

export default function HomePage({ projectTiles }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pinnacle South",
    url: "https://www.pinnaclesouth.net",
    logo: "https://www.pinnaclesouth.net/images/logo.png",
    description:
      "Pinnacle South provides design, procurement, and installation for hospitality FF&E—one integrated team for hotel owners and developers.",
    address: [
      { "@type": "PostalAddress", addressLocality: "Griffin", addressRegion: "Georgia", addressCountry: "US" },
      { "@type": "PostalAddress", addressLocality: "Franklin", addressRegion: "Tennessee", addressCountry: "US" },
    ],
    telephone: ["(800) 781-9010", "(615) 905-9115"],
  };

  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>Pinnacle South | Design, Purchasing &amp; Installation for Hospitality FF&amp;E</title>
        <meta
          name="description"
          content="One uncompromising team for hospitality FF&E: design, procurement, and installation. Request a no-cost, no-obligation bid for your next project."
        />
        <meta
          property="og:title"
          content="Pinnacle South | Design, Purchasing & Installation for Hospitality FF&E"
        />
        <meta
          property="og:description"
          content="One uncompromising team for hospitality FF&E: design, procurement, and installation."
        />
        <meta property="og:image" content="/images/home-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>

      <main className="bg-cream">
        {/* HERO */}
        <section id="top" className="relative min-h-screen scroll-mt-28">
          <div className="absolute inset-0">
            <img
              src="/images/home-hero.png"
              alt="Pinnacle South hospitality FF&E"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1D3A]/92 via-[#0f2744]/75 to-[#1a3a5c]/55" />
          </div>

          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 sm:py-32 lg:px-12">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="show"
              className="max-w-4xl"
            >
              <motion.div variants={itemFade}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e8c9a8] backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Hospitality FF&amp;E
                </span>
              </motion.div>

              <motion.h1
                variants={itemFade}
                className="mt-8 font-serif text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[52px] lg:text-[58px]"
              >
                <span className="block">3 Essential FF&amp;E Services:</span>
                <span className="mt-1 block bg-gradient-to-r from-[#f0d4b8] via-white to-[#f0d4b8] bg-clip-text text-transparent">
                  Design, Purchasing, Installation
                </span>
                <span className="mt-4 block text-[26px] font-semibold italic text-white/95 sm:text-[32px] md:text-[36px]">
                  One Uncompromising Company
                </span>
              </motion.h1>

              <motion.div
                variants={itemFade}
                className="mt-10 space-y-4 text-[17px] leading-[1.75] text-white/88 sm:text-[18px]"
              >
                <p className="font-serif text-[20px] italic text-white/95 sm:text-[22px]">
                  Every hotel has a story to tell.
                </p>
                <p>
                  There are business stories and vacation stories. There are sea stories, love stories, and
                  mountain tales. Some hotels give history lessons while others are urban legends.
                </p>
                <p className="font-medium text-white">
                  We make sure your story is special – and better than others.
                </p>
              </motion.div>

              <motion.div
                variants={itemFade}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#8f6438]"
                >
                  Request a No-Obligation Bid
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#our-company"
                  className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/5 px-8 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  Explore Pinnacle South
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative border-t border-white/10 bg-[#0A1D3A]/95 backdrop-blur-md">
            <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 py-6 sm:gap-8 sm:px-6 lg:px-12">
              {[
                { label: "Design", sub: "Concept to completion" },
                { label: "Purchasing", sub: "Sourcing & value" },
                { label: "Installation", sub: "Done right" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#AC7B4A]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-[13px] text-white/70">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR COMPANY */}
        <section id="our-company" className="scroll-mt-28 py-16 sm:py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-20">
            <motion.div
              {...fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-[0_24px_60px_rgba(15,39,68,0.18)] ring-1 ring-black/5">
                <img
                  src="/images/home-page2.png"
                  alt="Pinnacle South team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 max-w-[200px] rounded-2xl bg-[#0A1D3A] p-5 text-left text-white shadow-[0_12px_40px_rgba(10,29,58,0.4)] ring-1 ring-white/15 sm:-right-6 sm:p-6">
                <div className="text-[22px] font-bold leading-tight sm:text-[26px]">Since 2003</div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/90">
                  Serving hospitality
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#AC7B4A]">
                Our Company
              </span>
              <h2 className="mt-4 font-serif text-[32px] font-bold leading-[1.15] text-textDark sm:text-[40px]">
                Hospitality&apos;s top talent, one accountable team
              </h2>
              <div className="mt-8 space-y-5 text-[16px] leading-[1.85] text-textMuted">
                <p>
                  The Pinnacle team includes some of hospitality&apos;s top talent, each with a unique ability
                  to enhance your hotel.
                </p>
                <p>
                  Our skills include interior design, architecture, product buying, project expediting,
                  construction, installation, and more.
                </p>
                <p>
                  Our experience includes all brands, all sizes of properties, and all styles of hotels. We
                  translate our years of experience into your rooms. Your guests will be impressed and your
                  wallet will be grateful.
                </p>
                <p>
                  We&apos;re one of the few &quot;one stop&quot; FF&amp;E companies and we serve you with a professional
                  in-house staff. No sub-contractors and everyone is directly accountable to you.
                </p>
                <p>
                  By bundling services, you deal with fewer vendors so there are fewer chances for mistakes.
                  You benefit further from lower costs, high quality control, and more options. Projects are
                  completed on time and in budget. Rooms are in service and in your revenue stream faster.
                </p>
                <p>
                  FF&amp;E projects can be challenging, but we&apos;ve been making them a little easier since 2003. By
                  pushing quality up, costs down, and ourselves to the limit.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES — 4 pillars */}
        <section id="our-services" className="scroll-mt-28 bg-white py-16 sm:py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="mx-auto max-w-3xl text-center">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#AC7B4A]">
                What We Deliver
              </span>
              <p className="mt-4 text-[16px] leading-7 text-textMuted">
                Every phase is built to protect your timeline, budget, and brand standards.
              </p>
            </motion.div>

            <div className="mt-14 flex flex-col gap-12 sm:gap-14">
              <div>
                <motion.h2
                  {...fadeInUp}
                  className="text-center font-serif text-[32px] font-bold text-textDark sm:text-[42px]"
                >
                  Our Design
                </motion.h2>
                <motion.article
                  id="our-design"
                  {...fadeInUp}
                  className="mt-6 scroll-mt-28 group relative overflow-hidden rounded-2xl border border-border bg-cream p-8 shadow-sm transition-shadow hover:shadow-soft md:grid md:grid-cols-[1fr_1.1fr] md:items-stretch md:gap-10 md:p-10"
                >
                <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-gray-200 md:min-h-[280px]">
                  <img
                    src="/images/about-hero.png"
                    alt="Hotel design environment"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-8 flex flex-col justify-center md:mt-0">
                  <div className="space-y-4 text-[15px] leading-[1.8] text-textMuted">
                    <p>
                      In today&apos;s competitive marketplace, being different is essential. Not different just to
                      be different, but different to be better. To stay ahead of the competition.
                    </p>
                    <p>
                      Our incredible designers create incredible hotels. Because they know something unique
                      beats something cookie-cutter every time.
                    </p>
                    <p>
                      Some hotels are designed for efficiency, some for the experience. We do both. From
                      concept to completion.
                    </p>
                    <p>
                      Our team immerses your guests in the comforts of home, the convenience of the office, and
                      the indulgence of a vacation. All at the same time.
                    </p>
                    <p>
                      We put your hotel&apos;s best face forward with a look that combines comfort and convenience.
                      With a stylish personality that improves guest reviews and satisfaction scores. That
                      increases repeat visits, RevPAR, and ROI.
                    </p>
                    <p className="font-medium text-textDark">
                      When your guests leave the hotel, your hotel doesn&apos;t leave them.
                    </p>
                  </div>
                </div>
              </motion.article>
              </div>

              <div>
                <motion.h2
                  {...fadeInUp}
                  className="text-center font-serif text-[32px] font-bold text-textDark sm:text-[42px]"
                >
                  Our Procurement
                </motion.h2>
                <motion.article
                  id="our-procurement"
                  {...fadeInUp}
                  className="mt-6 scroll-mt-28 group relative overflow-hidden rounded-2xl border border-border bg-cream p-8 shadow-sm transition-shadow hover:shadow-soft md:grid md:grid-cols-[1.1fr_1fr] md:items-stretch md:gap-10 md:p-10"
                >
                <div className="flex flex-col justify-center">
                  <div className="space-y-4 text-[15px] leading-[1.8] text-textMuted">
                    <p>
                      We are your procurement partner for hundreds of buying decisions and thousands of dollars
                      in expenditures.
                    </p>
                    <p>
                      So we want you to have confidence and peace of mind knowing that we have rapport – and a
                      credit line -- with manufacturers and suppliers in many different product categories.
                    </p>
                    <p>
                      First, we help you choose the right products for the design you have approved. Then we find
                      the best source for those products – managing and negotiating such important variables as
                      unit price, volume discounts, payment terms, warranties, quality, durability, and delivery
                      dates.
                    </p>
                    <p>
                      Through our extensive network of vendors, we also ensure proper delivery schedules and
                      shipping logistics. This means your products arrive at the right time, in the right
                      sequence, and in the right condition at reasonable freight costs.
                    </p>
                    <p className="font-medium text-textDark">
                      It&apos;s thoughtful procurement that protects your investment. With thorough attention to
                      small details. With common sense delivered in an uncommon way.
                    </p>
                  </div>
                </div>
                <div className="relative mt-8 min-h-[220px] overflow-hidden rounded-xl bg-gray-200 md:mt-0 md:min-h-[280px]">
                  <img
                    src="/images/process-hero.png"
                    alt="FF&E procurement and project coordination"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.article>
              </div>

              <div>
                <motion.h2
                  {...fadeInUp}
                  className="text-center font-serif text-[32px] font-bold text-textDark sm:text-[42px]"
                >
                  Our Installation
                </motion.h2>
                <motion.article
                  id="our-installation"
                  {...fadeInUp}
                  className="mt-6 scroll-mt-28 group relative overflow-hidden rounded-2xl border border-border bg-cream p-8 shadow-sm transition-shadow hover:shadow-soft md:grid md:grid-cols-[1fr_1.1fr] md:items-stretch md:gap-10 md:p-10"
                >
                <div className="relative min-h-[220px] overflow-hidden rounded-xl bg-gray-200 md:min-h-[280px]">
                  <img
                    src="/images/contact-hero.jpg"
                    alt="Professional hospitality FF&E installation"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-8 flex flex-col justify-center md:mt-0">
                  <div className="space-y-4 text-[15px] leading-[1.8] text-textMuted">
                    <p>Hotels are good at wearing things out.</p>
                    <p>
                      Products – especially carpeting, draperies, wallpaper, and electronics – must be properly
                      installed according to manufacturer specifications if you want higher performance and less
                      wear. If you want warranties to stay valid. If you want less risks for your guests.
                    </p>
                    <p>
                      Our installation crews have special training and trade certification. They also have an
                      obsessive commitment to doing the right things the right way.
                    </p>
                    <p>
                      Because we believe that if a job is worth doing, it&apos;s worth doing exceptionally.
                      That&apos;s a refreshingly simple business philosophy and all of us at Pinnacle South take it
                      very seriously.
                    </p>
                  </div>
                </div>
              </motion.article>
              </div>

              <motion.article
                id="our-service"
                {...fadeInUp}
                className="relative scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#102a47] via-[#0A1D3A] to-[#071223] p-8 text-white shadow-[0_28px_70px_rgba(7,18,35,0.5)] sm:p-10 md:p-14"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#AC7B4A]/70 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#AC7B4A]/10 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#0f2744]/80 blur-3xl"
                  aria-hidden
                />

                <div className="relative">
                  <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4a574]">
                      How we partner
                    </span>
                    <div className="mt-5 flex flex-col items-center gap-5">
                      <span className="grid h-16 w-16 place-items-center rounded-2xl border border-[#AC7B4A]/35 bg-gradient-to-br from-white/[0.12] to-white/[0.04] text-[#e8c9a8] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                        <Users className="h-8 w-8" strokeWidth={1.5} aria-hidden />
                      </span>
                      <h3 className="font-serif text-[30px] font-bold leading-tight sm:text-[38px]">
                        Our Service
                      </h3>
                    </div>
                  </header>

                  <div className="mx-auto mt-12 max-w-5xl border-t border-white/10 pt-12">
                    <div className="grid gap-10 text-left md:grid-cols-2 md:gap-x-16 md:gap-y-6">
                      <div className="space-y-5 text-[15px] leading-[1.85] text-white/82">
                        <p className="text-[16px] font-medium leading-[1.75] text-white/95">
                          Pinnacle South is not a &quot;big box&quot; FF&amp;E company. We&apos;re a boutique firm that&apos;s big on
                          personal service — and thinks outside the box.
                        </p>
                        <p>
                          We offer all the services you need, but only in the amount you need them. No more and no
                          less. With no big bureaucracy. You can conveniently check on any aspect of your project
                          at any time.
                        </p>
                        <p>
                          Our established contacts with vendors help you achieve the pricing and terms you want,
                          especially meeting tight deadlines.
                        </p>
                        <p>
                          Our extensive brand relationships help us negotiate design approvals for your property
                          that are reasonable, owner-friendly, and faster.
                        </p>
                      </div>
                      <div className="space-y-5 text-[15px] leading-[1.85] text-white/82 md:border-l md:border-white/10 md:pl-16">
                        <p>
                          We are never satisfied until you are. And our responsibilities don&apos;t end when a project is
                          finished. We remain conveniently available so you remain satisfied.
                        </p>
                        <p>
                          Yes, we&apos;re good at what we do. As importantly, we are true to our word. A handshake still
                          means something to us.
                        </p>
                        <p className="rounded-lg border border-[#AC7B4A]/25 bg-white/[0.04] px-5 py-4 text-[15px] leading-[1.75] text-white/90">
                          Our business is about products and procedures, but it&apos;s also about people — about bonds
                          we form, friendships we develop, and values we share.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="our-projects" className="scroll-mt-28 bg-[#0A1D3A] py-16 sm:py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#AC7B4A]">
                Our Projects
              </span>
              <h2 className="mt-4 font-serif text-[32px] font-bold text-white sm:text-[42px]">
                A glimpse of our work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-white/70">
                Real properties, real timelines — FF&amp;E delivered with precision across the Southeast and
                beyond.
              </p>
            </motion.div>

            {projectTiles.length > 0 ? (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projectTiles.map((p) => (
                  <motion.div key={p.slug} {...fadeInUp}>
                    <Link
                      href={`/project/${p.slug}`}
                      className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-800"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3A] via-[#0A1D3A]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#AC7B4A]">
                          {p.brand}
                        </div>
                        <div className="mt-1 font-serif text-[18px] font-semibold text-white">{p.name}</div>
                        <div className="mt-2 inline-flex items-center gap-1 text-[13px] text-white/75">
                          <MapPin className="h-3.5 w-3.5" />
                          {p.location}
                          <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* CAREERS */}
        <section id="careers" className="scroll-mt-28 border-t border-border bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <motion.div {...fadeInUp}>
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#AC7B4A]">
                Employment Opportunities
              </span>
              <h2 className="mt-4 font-serif text-[30px] font-bold text-textDark sm:text-[36px]">
                Build your career with Pinnacle South
              </h2>
              <p className="mt-6 text-[16px] leading-[1.85] text-textMuted">
                We offer great career opportunities for people with proven skills, high motivation, and a solid
                work ethic. If your background is interior design, procurement, installation, or sales, we
                welcome hearing from you. Send us an e-mail with your experience and why you believe you might
                be a good addition to our team.
              </p>
              <a
                href="mailto:info@pinnaclesouth.net?subject=Careers%20at%20Pinnacle%20South"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-[#0f2744] px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#1a3a5c]"
              >
                Email your résumé
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Signature quotes — above contact */}
        <section
          aria-label="Words we live by"
          className="relative border-t border-border bg-[#0A1D3A] py-16 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#AC7B4A]">
                Words we live by
              </span>
            </motion.div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-12 md:mt-12 md:grid-cols-2 md:gap-14 lg:gap-16">
              {HOME_SIGNATURE_QUOTES.map((text, i) => (
                <motion.figure
                  key={text}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-sm border border-white/[0.08] bg-white/[0.04] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-white/[0.04] sm:p-10"
                >
                  <div
                    className="absolute left-8 top-0 h-1 w-12 -translate-y-px bg-[#AC7B4A] sm:left-10"
                    aria-hidden
                  />
                  <blockquote className="pt-2">
                    <p className="font-serif text-[20px] font-medium italic leading-[1.55] text-white sm:text-[22px]">
                      {text}
                    </p>
                  </blockquote>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-28 bg-cream">
          <div className="bg-gradient-to-b from-white to-cream pt-10 pb-5 sm:pt-12 sm:pb-6 md:pt-14 md:pb-7">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
              <motion.div {...fadeInUp}>
                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#AC7B4A]">
                  Contact Us
                </span>
                <h2 className="mt-4 font-serif text-[30px] font-bold leading-[1.2] text-textDark sm:text-[38px]">
                  Experience the FF&amp;E difference that is Pinnacle South
                </h2>
              </motion.div>
            </div>
          </div>

          <ContactFormSection
            idPrefix="home"
            sectionId="contact-form"
            title="Start the Conversation"
            sectionClassName="bg-cream pt-2 pb-12 sm:pt-3 sm:pb-16 md:pb-20"
            showMap={false}
          />
        </section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-[#0A1D3A] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-[30px] font-bold text-white sm:text-[40px]">
              Ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-white/75">
              Call us today or send a message — we respond within one business day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+18007819010"
                className="inline-flex w-full items-center justify-center rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438] sm:w-auto"
              >
                Call (800) 781-9010
              </a>
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Send a message
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
    </Layout>
  );
}
