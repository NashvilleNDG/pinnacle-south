import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Head from "next/head";
import Layout from "@/components/Layout";
import projects from "@/data/projects.json";

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

export default function ProjectsPage({ projects: projectList }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectList;
    if (activeFilter === "courtyard") return projectList.filter((p) => p.brand.includes("Courtyard"));
    if (activeFilter === "homewood") return projectList.filter((p) => p.brand.includes("Homewood"));
    if (activeFilter === "hampton") return projectList.filter((p) => p.brand.includes("Hampton"));
    return projectList;
  }, [activeFilter, projectList]);

  const itemListJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: projectList.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: p.name,
        url: `https://www.pinnaclesouth.net/project/${p.slug}/`,
      })),
    }),
    [projectList]
  );

  const tabs = [
    { key: "all", label: "ALL" },
    { key: "courtyard", label: "COURTYARD BY MARRIOTT" },
    { key: "homewood", label: "HOMEWOOD SUITES" },
    { key: "hampton", label: "HAMPTON INN & SUITES" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const gridStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const featured = filteredProjects[0];
  const secondary = filteredProjects[1];
  const rest = filteredProjects.slice(2, 5);

  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>Our Projects | Pinnacle South Hospitality FF&amp;E</title>
        <meta
          name="description"
          content="A portfolio of hospitality FF&E projects that reflect our commitment to quality, precision, and enduring client partnerships."
        />
        <meta property="og:title" content="Our Projects | Pinnacle South Hospitality FF&E" />
        <meta
          property="og:description"
          content="A portfolio of hospitality FF&E projects that reflect our commitment to quality, precision, and enduring client partnerships."
        />
        <meta property="og:image" content="/images/project-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section id="hero" aria-label="Projects hero" className="relative min-h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="/images/project-hero.png"
              alt="Hospitality FF&E projects hero background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 text-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
              className="max-w-3xl"
            >
              <motion.h1
                variants={cardItem}
                className="font-serif text-[48px] font-bold leading-[1.05] text-white sm:text-[56px]"
              >
                Our Projects
              </motion.h1>
              <motion.p
                variants={cardItem}
                className="mx-auto mt-6 max-w-[580px] text-[18px] leading-[1.7] text-white/80"
              >
                A portfolio of hospitality FF&amp;E projects that reflect our commitment to quality, precision,
                and enduring client partnerships.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — FILTER TABS + PROJECT GRID */}
        <section id="portfolio" aria-label="Project portfolio" className="bg-cream pb-24 pt-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-3">
              {tabs.map((t) => {
                const isActive = t.key === activeFilter;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setActiveFilter(t.key)}
                    className={`px-5 py-2.5 text-[12px] font-semibold uppercase tracking-eyebrow transition-colors rounded-none ${
                      isActive
                        ? "bg-[#0A1D3A] text-white border border-[#0A1D3A]"
                        : "border border-border bg-transparent text-textMuted hover:bg-white/40"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeFilter}
              variants={gridStagger}
              initial="hidden"
              animate={filteredProjects.length ? "show" : "hidden"}
              viewport={{ once: true }}
              className="mt-10"
            >
              <div className="grid gap-2">
                {/* Row 1 */}
                <div className="grid gap-2 lg:grid-cols-[1.85fr_1fr]">
                  {featured ? (
                    <motion.article variants={cardItem}>
                      <Link
                        href={`/project/${featured.slug}`}
                        className="group relative block overflow-hidden rounded-none cursor-pointer aspect-[4/3] bg-gray-200"
                      >
                        <img
                          src={featured.image}
                          alt={`${featured.name} hospitality FF&E renovation`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,39,68,0.90)_0%,rgba(15,39,68,0.3)_50%,rgba(0,0,0,0)_100%)] group-hover:opacity-95 transition-opacity" />
                        <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                          {featured.brand}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <h2 className="font-serif text-[22px] leading-[1.2] text-white">
                            {featured.name}
                          </h2>
                          <div className="mt-1 inline-flex items-center gap-1 text-[13px] text-white/70">
                            <MapPin className="h-[13px] w-[13px]" /> {featured.location}
                          </div>
                          <p className="mt-2 text-[14px] leading-6 text-white/70 line-clamp-2">
                            {featured.summary ||
                              "A hospitality FF&E project delivered with planning, sourcing, procurement, and execution support."}
                          </p>
                        </div>
                      </Link>
                    </motion.article>
                  ) : (
                    <div className="aspect-[4/3] bg-gray-200" />
                  )}

                  {secondary ? (
                    <motion.article variants={cardItem}>
                      <Link
                        href={`/project/${secondary.slug}`}
                        className="group relative block overflow-hidden rounded-none cursor-pointer aspect-[4/3] bg-gray-200"
                      >
                        <img
                          src={secondary.image}
                          alt={`${secondary.name} hospitality FF&E project`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,39,68,0.90)_0%,rgba(15,39,68,0.3)_50%,rgba(0,0,0,0)_100%)] group-hover:opacity-95 transition-opacity" />
                        <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                          {secondary.brand}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <h2 className="font-serif text-[18px] leading-[1.2] text-white">
                            {secondary.name}
                          </h2>
                          <div className="mt-1 inline-flex items-center gap-1 text-[13px] text-white/70">
                            <MapPin className="h-[13px] w-[13px]" /> {secondary.location}
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ) : (
                    <div className="aspect-[4/3] bg-gray-200" />
                  )}
                </div>

                {/* Row 2 */}
                <div className="grid gap-2 md:grid-cols-3">
                  {rest.length
                    ? rest.map((p) => (
                        <motion.article key={p.slug} variants={cardItem}>
                          <Link
                            href={`/project/${p.slug}`}
                            className="group relative block overflow-hidden rounded-none cursor-pointer aspect-[4/3] bg-gray-200"
                          >
                            <img
                              src={p.image}
                              alt={`${p.name} hospitality FF&E project`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,39,68,0.90)_0%,rgba(15,39,68,0.3)_50%,rgba(0,0,0,0)_100%)] group-hover:opacity-95 transition-opacity" />
                            <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                              {p.brand}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6">
                              <h2 className="font-serif text-[18px] leading-[1.2] text-white">
                                {p.name}
                              </h2>
                              <div className="mt-1 inline-flex items-center gap-1 text-[13px] text-white/70">
                                <MapPin className="h-[13px] w-[13px]" /> {p.location}
                              </div>
                            </div>
                          </Link>
                        </motion.article>
                      ))
                    : null}
                </div>

                {!filteredProjects.length ? (
                  <div className="mt-10 rounded-none border border-border bg-white p-8">
                    <p className="text-[16px] leading-7 text-textMuted">
                      No projects match this filter yet.
                    </p>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — BOTTOM CTA BAND */}
        <motion.section
          id="cta"
          aria-label="Have a project in mind"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1D3A] py-24"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-[48px] font-bold leading-[1.1] text-white">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-7 text-white/70">
              Let us know about your upcoming hospitality project. We&apos;d love to explore how Pinnacle South
              can contribute.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-copper px-8 py-3 text-[14px] font-semibold text-white hover:opacity-95 transition-opacity"
              >
                Discuss a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}

