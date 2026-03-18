import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Search,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
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

export default function PinnacleProcessPage() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Project Discovery",
      description:
        "Every successful FF&E project begins with a thorough understanding of the property, brand requirements, design intent, budget parameters, and timeline expectations. During the discovery phase, our team engages directly with project stakeholders to establish clear goals and define scope.",
      activities: [
        "Stakeholder interviews and alignment sessions",
        "Brand standard review and compliance analysis",
        "Budget framework development",
        "Timeline and milestone planning",
      ],
    },
    {
      number: "02",
      icon: Palette,
      title: "Design Alignment",
      description:
        "We collaborate closely with design teams to ensure every FF&E selection supports the creative vision while meeting practical requirements. Our team reviews specifications, recommends alternatives where needed, and ensures selections are viable for procurement and installation.",
      activities: [
        "Design specification review",
        "Product recommendation and alternatives",
        "Sample coordination and approval",
        "Brand standard compliance verification",
      ],
    },
    {
      number: "03",
      icon: Users,
      title: "Vendor Sourcing",
      description:
        "Leveraging our established network of trusted manufacturers and suppliers, we identify the best sources for every line item. Our vendor relationships allow us to secure competitive pricing, favorable terms, and reliable lead times.",
      activities: [
        "Vendor identification and qualification",
        "Competitive bidding and negotiation",
        "Lead time and availability confirmation",
        "Quality assurance standards verification",
      ],
    },
    {
      number: "04",
      icon: ShoppingCart,
      title: "Procurement Management",
      description:
        "Our procurement team manages the full purchasing cycle with precision and accountability. From purchase order generation through delivery confirmation, we maintain detailed tracking and proactive communication.",
      activities: [
        "Purchase order management",
        "Production monitoring and updates",
        "Quality inspection coordination",
        "Budget tracking and variance reporting",
      ],
    },
    {
      number: "05",
      icon: Truck,
      title: "Logistics Coordination",
      description:
        "Timely delivery is critical to hospitality project success. We coordinate shipping, warehousing, and site delivery schedules to align with construction timelines and minimize disruption.",
      activities: [
        "Shipping and freight management",
        "Warehouse receiving and staging",
        "Delivery scheduling and site coordination",
        "Damage assessment and claims management",
      ],
    },
    {
      number: "06",
      icon: CheckCircle2,
      title: "Installation & Completion Support",
      description:
        "Our involvement extends through the installation phase. We coordinate with installation crews, oversee quality standards, manage punch lists, and ensure every space meets design and brand expectations.",
      activities: [
        "Installation crew coordination",
        "On-site quality oversight",
        "Punch list management",
        "Final walk-through and project close-out",
      ],
    },
  ];

  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>The Pinnacle Process | Pinnacle South FF&amp;E</title>
        <meta
          name="description"
          content="A structured, proven approach that reduces risk, improves alignment, and supports efficient hospitality project execution."
        />
        <meta property="og:title" content="The Pinnacle Process | Pinnacle South FF&E" />
        <meta
          property="og:description"
          content="A structured, proven approach that reduces risk, improves alignment, and supports efficient hospitality project execution."
        />
        <meta property="og:image" content="/images/process-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section id="hero" aria-label="Process hero" className="relative min-h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="/images/process-hero.png"
              alt="The Pinnacle Process hero background"
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
                The Pinnacle Process
              </motion.h1>
              <motion.p
                variants={itemFade}
                className="mx-auto mt-6 max-w-[580px] text-[18px] leading-[1.7] text-white/80"
              >
                A structured, proven approach that reduces risk, improves alignment, and supports efficient
                hospitality project execution.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — THE 6 PROCESS STEPS */}
        <section id="process-steps" aria-label="Process steps" className="bg-cream pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="space-y-24">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const isOdd = idx % 2 === 0;

                const contentMotion =
                  isOdd
                    ? { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 } }
                    : { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } };

                const cardMotion =
                  isOdd
                    ? { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 } }
                    : { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 } };

                return (
                  <article
                    key={s.number}
                    className={`grid gap-12 lg:grid-cols-2 lg:items-start ${isOdd ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}`}
                  >
                    <motion.div
                      {...fadeInUp}
                      initial={contentMotion.initial}
                      whileInView={contentMotion.whileInView}
                      className="text-center md:text-left"
                    >
                      <div className="flex items-center justify-center gap-4 md:justify-start">
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0A1D3A] text-white">
                          <Icon className="h-[22px] w-[22px] text-white" />
                        </div>
                        <div className="text-[48px] font-bold leading-none text-textDark">{s.number}</div>
                      </div>
                      <h2 className="mt-4 text-[32px] font-bold leading-[1.15] text-textDark">{s.title}</h2>
                      <p className="mx-auto mt-3 max-w-[480px] text-[16px] leading-[1.8] text-textMuted md:mx-0">
                        {s.description}
                      </p>
                    </motion.div>

                    <motion.div
                      {...fadeInUp}
                      initial={cardMotion.initial}
                      whileInView={cardMotion.whileInView}
                    >
                      <div className="border border-border bg-white p-8">
                        <div className="mb-4 text-[11px] uppercase tracking-eyebrow text-copper">
                          KEY ACTIVITIES
                        </div>
                        <ul className="space-y-3">
                          {s.activities.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-[15px] leading-[1.6] text-textMuted">
                              <ArrowRight className="mt-[3px] h-[14px] w-[14px] shrink-0 text-copper" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY THE PINNACLE PROCESS MATTERS */}
        <section id="why-it-matters" aria-label="Why the process matters" className="bg-white py-14 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center">
              <div className="text-[12px] uppercase tracking-eyebrow text-[#AC7B4A]">THE DIFFERENCE</div>
              <h2 className="mt-6 font-serif text-[28px] font-bold leading-[1.15] text-textDark md:text-[44px] md:leading-[1.1]">
                Why the Pinnacle Process Matters
              </h2>
              <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[1.8] text-textMuted">
                Hospitality projects are complex, multi-stakeholder endeavors with tight timelines and high
                expectations. The Pinnacle Process provides a structured framework that reduces risk, improves
                design and budget alignment, and supports efficient execution from concept through completion.
              </p>
              <p className="mx-auto mt-4 max-w-[700px] text-[17px] leading-[1.8] text-textMuted">
                By combining deep industry expertise with proven project management practices, we help our
                clients avoid costly delays, maintain quality standards, and deliver properties that meet both
                brand expectations and guest experience goals.
              </p>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-12 grid gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: "Risk Reduction",
                  description: "Structured processes minimize procurement and delivery risk",
                },
                {
                  title: "Better Alignment",
                  description: "Design, budget, and timeline stay synchronized",
                },
                {
                  title: "Efficient Execution",
                  description: "Proven coordination reduces delays and rework",
                },
              ].map((b) => (
                <motion.article key={b.title} variants={itemFade} className="border border-border bg-cream p-8 text-center">
                  <h3 className="text-[17px] font-semibold text-textDark">{b.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-textMuted">{b.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — BOTTOM CTA BAND */}
        <motion.section
          id="cta"
          aria-label="Discuss your project CTA"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-[48px] font-bold leading-[1.1] text-white">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-7 text-white/70">
              Experience the Pinnacle Process firsthand. Connect with our team to discuss how we can support
              your next hospitality project.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
              >
                Discuss a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
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

