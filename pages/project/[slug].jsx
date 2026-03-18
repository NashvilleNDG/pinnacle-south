import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Head from "next/head";
import Layout from "@/components/Layout";
import projects from "@/data/projects.json";

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null;
  const relatedProjects = projects.filter((p) => p.slug !== params.slug).slice(0, 3);
  return {
    props: {
      project,
      relatedProjects,
    },
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
      staggerChildren: 0.15,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectDetailPage({ project, relatedProjects }) {
  if (!project) return null;

  const description =
    project.summary || "FF&E project by Pinnacle South";

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description,
    image: project.image ? `https://www.pinnaclesouth.net${project.image}` : undefined,
    url: `https://www.pinnaclesouth.net/project/${project.slug}/`,
    about: project.brand,
    locationCreated: project.location,
    provider: {
      "@type": "Organization",
      name: "Pinnacle South",
      url: "https://www.pinnaclesouth.net",
    },
  };

  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const gallerySlots = [gallery[0], gallery[1], gallery[2]];

  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>{project.name} | Pinnacle South</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${project.name} | Pinnacle South`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={project.image || "/images/hero/projects-hero.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
        />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section id="hero" aria-label="Project hero" className="relative h-[70vh]">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={`${project.name} project hero image`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="absolute bottom-0 left-0 p-12">
            <motion.div variants={containerStagger} initial="hidden" animate="show" className="max-w-3xl">
              <motion.div variants={itemFade}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" /> All Projects
                </Link>
              </motion.div>

              <motion.div variants={itemFade} className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-sm bg-white/20 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
                  {project.brand}
                </span>
                <span className="inline-flex items-center gap-1 text-[14px] text-white/70">
                  <MapPin className="h-[14px] w-[14px]" />
                  {project.location}
                </span>
              </motion.div>

              <motion.h1
                variants={itemFade}
                className="mt-3 max-w-[600px] font-serif text-[44px] font-bold leading-[1.1] text-white sm:text-[52px]"
              >
                {project.name}
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — MAIN CONTENT BODY */}
        <section id="overview" aria-label="Project overview" className="bg-cream py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.6fr] lg:items-start">
            <div>
              {project.quote ? (
                <blockquote className="border-l-4 border-copper pl-6 py-2">
                  <p className="font-serif text-[20px] italic leading-[1.6] text-textDark">
                    “{project.quote}”
                  </p>
                </blockquote>
              ) : null}

              {project.overview ? (
                <section aria-label="Project overview text">
                  <h2 className="mt-8 text-[24px] font-bold text-textDark">Project Overview</h2>
                  <p className="mt-4 text-[16px] leading-[1.8] text-textMuted">{project.overview}</p>
                </section>
              ) : null}

              <section aria-label="Project gallery">
                <h2 className="mt-10 text-[24px] font-bold text-textDark">Project Gallery</h2>
                <div className="mt-5 grid gap-2 md:grid-cols-3">
                  {gallerySlots.map((src, idx) =>
                    src ? (
                      <img
                        key={src}
                        src={src}
                        alt={`${project.name} gallery image ${idx + 1}`}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    ) : (
                      <div key={`ph-${idx}`} className="aspect-[4/3] w-full bg-gray-200" />
                    )
                  )}
                </div>
              </section>

              {project.spotlight ? (
                <section aria-label="Project spotlight">
                  <h2 className="mt-10 text-[24px] font-bold text-textDark">Project Spotlight</h2>
                  <div className="mt-4 text-[14px] font-semibold uppercase tracking-eyebrow text-copper">
                    How We Delivered
                  </div>
                  <p className="mt-4 text-[16px] leading-[1.8] text-textMuted">{project.spotlight}</p>
                </section>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="grid gap-6">
                {Array.isArray(project.services) && project.services.length ? (
                  <div className="border border-border bg-white p-6">
                    <div className="mb-4 text-[11px] uppercase tracking-eyebrow text-copper">
                      SERVICES PROVIDED
                    </div>
                    <ul className="space-y-3">
                      {project.services.map((s) => (
                        <li key={s} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-copper" />
                          <span className="text-[15px] text-textDark">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="border border-border bg-white p-6">
                  <div className="mb-4 text-[11px] uppercase tracking-eyebrow text-copper">
                    PROJECT DETAILS
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-eyebrow text-processMuted">BRAND</div>
                      <div className="mt-1 text-[15px] font-semibold text-textDark">{project.brand}</div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-eyebrow text-processMuted">LOCATION</div>
                      <div className="mt-1 text-[15px] font-semibold text-textDark">{project.location}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-navyDark p-6">
                  <h3 className="text-[18px] font-semibold text-white">Start a Similar Project</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/70">
                    Let&apos;s discuss how Pinnacle South can deliver for your next hospitality development.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-copper py-3 text-[14px] font-semibold text-white hover:opacity-95 transition-opacity"
                  >
                    Get in Touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SECTION 3 — MORE PROJECTS */}
        <section id="more-projects" aria-label="More projects" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[22px] font-bold text-textDark">More Projects</h2>
              <Link href="/projects" className="text-[14px] font-medium text-copper hover:underline">
                View All →
              </Link>
            </div>

            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-2 md:grid-cols-3"
            >
              {relatedProjects.map((p) => (
                <motion.article key={p.slug} variants={itemFade}>
                  <Link
                    href={`/project/${p.slug}`}
                    className="group relative block overflow-hidden rounded-none aspect-[4/3] bg-gray-200"
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} hospitality FF&E project`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,39,68,0.90)_0%,rgba(15,39,68,0.3)_50%,rgba(0,0,0,0)_100%)]" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                      {p.brand}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="font-serif text-[18px] leading-[1.2] text-white">{p.name}</div>
                      <div className="mt-1 inline-flex items-center gap-1 text-[13px] text-white/70">
                        <MapPin className="h-[13px] w-[13px]" /> {p.location}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — BOTTOM CTA BAND */}
        <motion.section
          id="cta"
          aria-label="Ready to start your project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navyDark py-20"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-[44px] font-bold leading-[1.1] text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-7 text-white/70">
              Connect with Pinnacle South to discuss your hospitality FF&amp;E requirements. Our team is ready to
              support your vision from concept through completion.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-copper px-8 py-3 text-[14px] font-semibold text-white hover:opacity-95 transition-opacity"
              >
                Request a Consultation
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

