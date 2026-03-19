import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Target, Users } from "lucide-react";
import Head from "next/head";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  return { props: {} };
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
      staggerChildren: 0.15,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>About Pinnacle South | Hospitality FF&amp;E Partner</title>
        <meta
          name="description"
          content="A trusted partner in hospitality FF&E, delivering premium solutions through experience, precision, and commitment to every project."
        />
        <meta property="og:title" content="About Pinnacle South | Hospitality FF&E Partner" />
        <meta
          property="og:description"
          content="A trusted partner in hospitality FF&E, delivering premium solutions through experience, precision, and commitment to every project."
        />
        <meta property="og:image" content="/images/about-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section aria-label="About hero" className="relative min-h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="/images/about-hero.png"
              alt="About Pinnacle South hero background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 text-center sm:px-6">
            <motion.div variants={containerStagger} initial="hidden" animate="show" className="max-w-3xl">
              <motion.h1
                variants={itemFade}
                className="font-serif text-[48px] font-bold leading-[1.05] text-white sm:text-[56px]"
              >
                About Pinnacle South
              </motion.h1>
              <motion.p
                variants={itemFade}
                className="mx-auto mt-6 max-w-[600px] text-[18px] leading-[1.7] text-white/80"
              >
                A trusted partner in hospitality FF&amp;E, delivering premium solutions through experience,
                precision, and commitment to every project.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — LEGACY / WHO WE ARE */}
        <section aria-label="Who we are" className="bg-cream py-14 sm:py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                WHO WE ARE
              </div>
              <h2 className="mt-4 font-serif text-[40px] font-bold leading-[1.12] text-[#0A1D3A]">
                A Legacy of Hospitality Excellence
              </h2>
              <p className="mt-5 text-[14px] leading-[1.95] text-textMuted">
                Pinnacle South is an owner-focused FF&amp;E partner for hospitality projects. We
                serve as an extension of your ownership team, managing planning, procurement,
                logistics, and installation from concept through completion.
              </p>
              <p className="mt-5 text-[14px] leading-[1.95] text-textMuted">
                While we work directly for owners, we collaborate closely with hotel brands and
                vendor partners to align design intent, meet brand requirements, and ensure smooth
                project delivery.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative flex justify-end"
            >
              <div className="relative w-full max-w-[560px]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white shadow-soft">
                  <img
                    src="/images/home-page2.png"
                    alt="Pinnacle South team meeting"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 -translate-x-6 translate-y-6 rounded-sm bg-[#0A1D3A] px-8 py-5 shadow-soft">
                  <div className="text-[26px] font-semibold leading-none text-white">100 +</div>
                  <div className="mt-2 text-[12px] text-white/80">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — COMPREHENSIVE FF&E SERVICES */}
        <section aria-label="Comprehensive FF&E services" className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                WHAT WE DO
              </div>
              <h2 className="mt-3 font-serif text-[40px] font-bold leading-[1.12] text-[#0A1D3A]">
                Comprehensive FF&amp;E Services
              </h2>
              <p className="mx-auto mt-3 max-w-[680px] text-[13px] leading-[1.85] text-textMuted">
                From initial project planning through final installation, Pinnacle South provides end-to-end
                FF&amp;E solutions tailored to the hospitality industry.
              </p>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-12 grid gap-8 md:grid-cols-3"
            >
              {[
                {
                  title: "Design Support",
                  description:
                    "We work alongside design teams to ensure FF&E selections align with the project vision, brand standards, and guest experience goals.",
                },
                {
                  title: "Procurement Management",
                  description:
                    "Our procurement team manages vendor relationships, pricing negotiations, purchase orders, and quality assurance to deliver value on every line item.",
                },
                {
                  title: "Project Coordination",
                  description:
                    "Dedicated project managers coordinate timelines, deliveries, and installation schedules to keep projects on track and stakeholders informed.",
                },
              ].map((card) => (
                <motion.article
                  key={card.title}
                  variants={itemFade}
                  className="border border-[#e7dfd6] bg-[#FAF8F5] px-7 py-7 text-center md:text-left"
                >
                  <h3 className="text-[14px] font-semibold leading-[1.3] text-[#0A1D3A]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.85] text-textMuted">{card.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — WHY CLIENTS CHOOSE US */}
        <section aria-label="Why clients choose us" className="bg-[#FAF8F5] py-14 sm:py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:items-start">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                WHY CLIENTS CHOOSE US
              </div>
              <h2 className="mt-4 font-serif text-[44px] font-bold leading-[1.1] text-[#0A1D3A]">
                Built on Experience, Driven by Results
              </h2>

              <ul className="mt-8 space-y-6">
                {[
                  "Over 25 years of hospitality FF&E experience",
                  "Established relationships with premium vendors and manufacturers",
                  "Proven track record with major hotel brands",
                  "Dedicated project coordination from start to finish",
                  "Design-sensitive procurement that honors creative intent",
                  "Reliable logistics and installation support nationwide",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[13px] leading-[1.85] text-textMuted">
                    <span
                      className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#bfb7ad]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:pt-6"
            >
              <div className="ml-auto grid max-w-[560px] gap-8 sm:grid-cols-2">
                {[
                  { value: "25+", label: "Years Experience" },
                  { value: "100+", label: "Projects Delivered" },
                  { value: "5+", label: "Major Brands" },
                  { value: "50+", label: "Vendor Partners" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-sm bg-[#0A1D3A] px-12 py-10 text-center"
                  >
                    <div className="text-[30px] font-semibold leading-none text-white">{s.value}</div>
                    <div className="mt-3 text-[11px] text-white/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — CORE VALUES */}
        <section aria-label="Core values" className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                OUR CORE VALUES
              </div>
              <h2 className="mt-3 font-serif text-[44px] font-bold leading-[1.12] text-[#0A1D3A]">
                The Principles That Guide Us
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] text-[13px] leading-[1.85] text-textMuted">
                At the heart of Pinnacle South are values that shape our approach to every client and every
                project.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-12 grid gap-8 md:grid-cols-2"
            >
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  description:
                    "We operate with honesty and transparency in every interaction, building trust through consistent follow-through and ethical business practices.",
                },
                {
                  icon: Target,
                  title: "Precision",
                  description:
                    "Every detail matters. From procurement specifications to delivery timelines, we maintain exacting standards that ensure project success.",
                },
                {
                  icon: Users,
                  title: "Partnership",
                  description:
                    "We view every client relationship as a long-term partnership, investing in understanding your goals and delivering lasting value.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We hold ourselves to the highest standards of quality, service, and professionalism in everything we do.",
                },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <motion.article
                    key={v.title}
                    variants={itemFade}
                    className="border border-[#eee7df] bg-[#FAF8F5] px-8 py-8"
                  >
                    <div className="flex items-start gap-5">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-[#0A1D3A]">
                        <Icon className="h-5 w-5 text-[#AC7B4A]" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold leading-[1.3] text-[#0A1D3A]">
                          {v.title}
                        </h3>
                        <p className="mt-2 text-[12px] leading-[1.85] text-textMuted">{v.description}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — BOTTOM CTA BAND */}
        <motion.section
          aria-label="Partner with Pinnacle South CTA"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-[38px] font-bold leading-[1.15] text-white sm:text-[44px]">
              Partner with Pinnacle South
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.9] text-white/70">
              Let&apos;s discuss how our experience and commitment can support your next hospitality project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-8 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
              >
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-sm border border-white/25 bg-transparent px-8 py-3 text-[13px] font-semibold text-white/90 hover:bg-white/10 transition-colors"
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

