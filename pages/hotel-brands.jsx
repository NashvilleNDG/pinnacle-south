import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import hotelBrandsData from "@/data/hotelBrands.json";

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

export default function HotelBrandsPage() {
  const { segments, brandGroups } = hotelBrandsData;

  return (
    <Layout>
      <Head>
        <title>Hotel Brands | Pinnacle South FF&amp;E</title>
        <meta
          name="description"
          content="Pinnacle South serves respected hospitality brands across the United States, delivering FF&E solutions built to each brand's exact standards."
        />
        <meta property="og:title" content="Hotel Brands | Pinnacle South FF&E" />
        <meta
          property="og:description"
          content="Pinnacle South serves respected hospitality brands across the United States, delivering FF&E solutions built to each brand's exact standards."
        />
        <meta property="og:image" content="/images/hotel-brands-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section
          id="hotel-brands-hero"
          aria-label="Hotel brands hero"
          className="relative min-h-[60vh]"
        >
          <div className="absolute inset-0">
            <img
              src="/images/hotel-brands-hero.png"
              alt="Hotel brands hero background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 text-center sm:px-6">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <motion.h1
                variants={itemFade}
                className="font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-[56px]"
              >
                Hotel Brands
              </motion.h1>
              <motion.p
                variants={itemFade}
                className="mx-auto mt-6 max-w-[580px] text-[18px] leading-[1.7] text-white/80"
              >
                Pinnacle South serves respected hospitality brands across the United States, delivering
                FF&amp;E solutions built to each brand&apos;s exact standards.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — BRAND EXPERIENCE / DEEP KNOWLEDGE */}
        <section
          id="brand-experience"
          aria-label="Brand experience and segments"
          className="bg-white py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div>
                <span className="text-[12px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                  BRAND EXPERIENCE
                </span>
              </div>
              <h2 className="mt-3 font-serif text-[38px] font-bold leading-[1.15] text-[#1c2b3a]">
                Deep Knowledge Across Every Segment
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#6b7a8d]">
                Our experience spans multiple hotel brands and hospitality segments. We understand the
                unique standards, approval processes, and operational expectations each brand requires —
                and we deliver accordingly, every time.
              </p>
              <div className="mt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-[#AC7B4A] hover:underline"
                >
                  View Our Project Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {segments.map((segment) => (
                <motion.article
                  key={segment.title}
                  variants={itemFade}
                  className="border border-[#e5ddd4] bg-[#f5f0eb] p-6"
                >
                  <div className="border-l-4 border-[#AC7B4A] pl-5">
                    <h3 className="text-[16px] font-semibold text-[#1c2b3a]">{segment.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.7] text-[#6b7a8d]">
                      {segment.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — BRAND GROUPS */}
        <section
          id="brand-groups"
          aria-label="Hotel brand groups"
          className="bg-[#f5f0eb] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {brandGroups.map((group, groupIndex) => {
              const gridCols =
                group.brands.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

              return (
                <motion.section
                  key={group.group}
                  aria-label={group.group}
                  className={groupIndex !== brandGroups.length - 1 ? "mb-20" : ""}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="border-b border-[#e5ddd4] pb-4 text-center">
                    <h2 className="text-[26px] font-semibold text-[#1c2b3a]">
                      {group.group}
                    </h2>
                  </div>

                  <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`mt-10 grid gap-6 ${gridCols}`}
                  >
                    {group.brands.map((brand) => (
                      <motion.article
                        key={brand.name}
                        variants={itemFade}
                        className="flex flex-col overflow-hidden border border-[#e5ddd4] bg-white h-full"
                      >
                        <div className="flex h-[160px] flex-col items-center justify-center bg-[#0A1D3A] px-8 py-10">
                          {brand.logo ? (
                            <img
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              className="max-h-[160px] w-auto max-w-[320px] object-contain"
                            />
                          ) : (
                            <>
                              <div className="grid h-14 w-14 place-items-center rounded-sm bg-white/20">
                                <span className="text-[18px] font-semibold text-white">
                                  {brand.initials}
                                </span>
                              </div>
                              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/60">
                                Logo Placeholder
                              </div>
                            </>
                          )}
                        </div>
                        <div className="border-t border-[#e5ddd4] bg-white p-6 text-center flex-1 flex flex-col">
                          <h3 className="text-[17px] font-semibold text-[#1c2b3a]">
                            {brand.name}
                          </h3>
                          <p className="mt-2 text-[14px] leading-[1.7] text-[#6b7a8d] line-clamp-3 flex-1">
                            {brand.description}
                          </p>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                </motion.section>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 — BOTTOM CTA BAND */}
        <motion.section
          id="hotel-brands-cta"
          aria-label="Hotel brands call to action"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-[40px] font-bold leading-[1.1] text-white sm:text-[48px]">
              Working with a Hotel Brand?
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-7 text-white/70">
              We have experience navigating brand standards and approval processes. Let&apos;s
              discuss your brand-specific FF&amp;E needs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
              >
                Contact Pinnacle South
                <ArrowRight className="h-4 w-4" />
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


