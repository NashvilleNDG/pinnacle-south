import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, X } from "lucide-react";
import Head from "next/head";
import Layout from "@/components/Layout";
import projects from "@/data/projects.json";

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
const HERO_NAMES = ["hero.jpg", "hero.jpeg", "hero.png", "hero.webp"];

function getGalleryFromFolder(folderName) {
  const dir = path.join(process.cwd(), "public", "images", folderName);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      const base = path.basename(file).toLowerCase();
      if (!IMAGE_EXT.includes(ext)) return false;
      if (HERO_NAMES.includes(base)) return false;
      return true;
    })
    .sort()
    .map((file) => `/images/${folderName}/${file}`);
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let project = projects.find((p) => p.slug === params.slug) || null;
  if (project && project.folder) {
    const folderGallery = getGalleryFromFolder(project.folder);
    if (folderGallery.length > 0) {
      project = { ...project, gallery: folderGallery };
    }
  }
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

  const heroImage =
    project.image ||
    (project.folder ? `/images/${project.folder}/hero.jpg` : null);

  const description =
    project.summary || "FF&E project by Pinnacle South";

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description,
    image: heroImage ? `https://www.pinnaclesouth.net${heroImage}` : undefined,
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i <= 0 ? gallery.length - 1 : i - 1));
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i >= gallery.length - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, gallery.length]);

  return (
    <Layout headerVariant="transparent">
      <Head>
        <title>{project.name} | Pinnacle South</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${project.name} | Pinnacle South`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroImage || "/images/hero/projects-hero.jpg"} />
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
              src={heroImage}
              alt={`${project.name} project hero image`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-12 text-center">
            <motion.div variants={containerStagger} initial="hidden" animate="show" className="max-w-3xl">
              <motion.div variants={itemFade}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" /> All Projects
                </Link>
              </motion.div>

              <motion.div variants={itemFade} className="mt-4 flex flex-wrap items-center justify-center gap-3">
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
                className="mt-3 font-serif text-[44px] font-bold leading-[1.1] text-white sm:text-[52px]"
              >
                {project.name}
              </motion.h1>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — MAIN CONTENT BODY */}
        <section id="project-content" aria-label="Project content" className="bg-cream py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.6fr] lg:items-start">
            <div>
              {project.quote ? (
                <blockquote className="border-l-4 border-copper pl-6 py-2">
                  <p className="font-serif text-[20px] italic leading-[1.6] text-textDark">
                    “{project.quote}”
                  </p>
                </blockquote>
              ) : null}

              {gallery.length > 0 ? (
                <section aria-label="Project gallery" className="text-center md:text-left">
                  <h2 className="mt-10 text-[24px] font-bold text-textDark">Project Gallery</h2>
                  <div className="mt-5 grid gap-2 grid-cols-2 md:grid-cols-3">
                    {gallery.map((src, idx) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => {
                          setLightboxIndex(idx);
                          setLightboxOpen(true);
                        }}
                        className="aspect-[4/3] w-full overflow-hidden rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0A1D3A] focus:ring-offset-2"
                      >
                        <img
                          src={src}
                          alt={`${project.name} gallery image ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {lightboxOpen && gallery.length > 0 ? (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Image gallery lightbox"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(false)}
                    className="absolute right-4 top-4 z-10 rounded-full p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Close lightbox"
                  >
                    <X className="h-8 w-8" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex((i) => (i <= 0 ? gallery.length - 1 : i - 1))}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="h-8 w-8" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex((i) => (i >= gallery.length - 1 ? 0 : i + 1))}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next image"
                  >
                    <ArrowRight className="h-8 w-8" />
                  </button>
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setLightboxOpen(false)}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 mx-16 max-h-[90vh] max-w-[90vw]">
                    <img
                      src={gallery[lightboxIndex]}
                      alt={`${project.name} gallery image ${lightboxIndex + 1} of ${gallery.length}`}
                      className="max-h-[90vh] max-w-full object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="mt-2 text-center text-sm text-white/80">
                      {lightboxIndex + 1} / {gallery.length}
                    </div>
                  </div>
                </div>
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

                <div className="border border-border bg-white p-6 text-center md:text-left">
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

                <div className="bg-[#0A1D3A] p-6 text-center md:text-left">
                  <h3 className="text-[18px] font-semibold text-white">Start a Similar Project</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/70">
                    Let&apos;s discuss how Pinnacle South can deliver for your next hospitality development.
                  </p>
                  <div className="mt-4 flex justify-center md:justify-start">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
                    >
                      Get in Touch <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
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

            {/* Per-item whileInView (not stagger on parent) avoids a third card stuck at opacity:0
                while still clickable. min-w-0 prevents grid blowout + horizontal clip under overflow-x-hidden. */}
            <div className="grid gap-2 md:grid-cols-3">
              {relatedProjects.map((p, index) => (
                <motion.article
                  key={p.slug}
                  className="min-w-0"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={`/project/${p.slug}`}
                    className="group relative block min-w-0 overflow-hidden rounded-none aspect-[4/3] bg-gray-200"
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
            </div>
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
          className="bg-[#0A1D3A] py-20"
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
                className="inline-flex items-center justify-center rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
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

