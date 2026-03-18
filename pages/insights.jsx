import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Layout from "@/components/Layout";
import posts from "@/data/posts.json";

export async function getStaticProps() {
  return { props: { posts } };
}

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

export default function InsightsPage({ posts }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((p) => p.categoryTag === activeFilter);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const getCategoryColor = (categoryTag) => {
    if (categoryTag === "ffe-insight") return "bg-[#0f2744]";
    if (categoryTag === "industry-trends") return "bg-emerald-800";
    if (categoryTag === "company-values") return "bg-teal-800";
    return "bg-[#0f2744]";
  };

  const tabs = [];

  return (
    <Layout>
      <Head>
        <title>Insights &amp; Blog | Pinnacle South FF&amp;E</title>
        <meta
          name="description"
          content="Industry perspectives, FF&E expertise, and thought leadership from the Pinnacle South team."
        />
        <meta
          property="og:title"
          content="Insights &amp; Blog | Pinnacle South FF&E"
        />
        <meta
          property="og:description"
          content="Industry perspectives, FF&E expertise, and thought leadership from the Pinnacle South team."
        />
        <meta property="og:image" content="/images/about-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section
          id="insights-hero"
          aria-label="Insights hero"
          className="relative min-h-[60vh]"
        >
          <div className="absolute inset-0">
            <img
              src="/images/about-hero.png"
              alt="Insights hero background"
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
                Insights &amp; Blog
              </motion.h1>
              <motion.p
                variants={itemFade}
                className="mx-auto mt-6 max-w-[520px] text-[18px] leading-[1.7] text-white/80"
              >
                Industry perspectives, FF&amp;E expertise, and thought leadership from the Pinnacle
                South team.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — FILTER TABS + ARTICLES */}
        <section
          id="insights-list"
          aria-label="Insights articles"
          className="bg-[#f5f0eb] pt-16 pb-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Category tabs removed */}

            {!featuredPost ? (
              <div className="mt-16 rounded-sm border border-dashed border-[#d3c7b8] bg-white/60 px-8 py-10 text-center text-[15px] text-[#6b7a8d]">
                No articles are available for this topic yet. Please check back soon for new insights
                from the Pinnacle South team.
              </div>
            ) : (
              <>
                {/* Featured article */}
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 flex flex-col overflow-hidden border border-[#e5ddd4] bg-white lg:flex-row"
                >
                  <div className="relative w-full lg:w-[55%]">
                    <div className="aspect-[16/9] lg:h-full lg:aspect-auto">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute left-4 top-4 inline-flex items-center rounded-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white ${getCategoryColor(
                        featuredPost.categoryTag
                      )}`}
                    >
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-center bg-white p-8 lg:w-[45%] lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#8a9bb0]">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#8a9bb0]" />
                        <span>{featuredPost.date}</span>
                      </span>
                      <span className="text-[#c1b7ab]">•</span>
                      <span className="inline-flex items-center gap-2">
                        <User className="h-4 w-4 text-[#8a9bb0]" />
                        <span>{featuredPost.author}</span>
                      </span>
                    </div>
                    <h2 className="mt-4 text-[26px] font-bold leading-[1.3] text-[#1c2b3a]">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[#6b7a8d]">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={`/insights/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#b5804a] hover:underline"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>

                {/* Remaining articles grid */}
                {remainingPosts.length > 0 && (
                  <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-6 grid gap-6 md:grid-cols-2"
                  >
                    {remainingPosts.map((post) => (
                      <motion.article
                        key={post.slug}
                        variants={itemFade}
                        className="overflow-hidden border border-[#e5ddd4] bg-white"
                      >
                        <div className="relative">
                          <div className="aspect-[16/10]">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div
                            className={`absolute left-4 top-4 inline-flex items-center rounded-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white ${getCategoryColor(
                              post.categoryTag
                            )}`}
                          >
                            {post.category}
                          </div>
                        </div>
                        <div className="bg-white p-6">
                          <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#8a9bb0]">
                            <span>{post.date}</span>
                            <span className="text-[#c1b7ab]">•</span>
                            <span>{post.author}</span>
                          </div>
                          <h3 className="mt-2 text-[18px] font-semibold leading-[1.4] text-[#1c2b3a] line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-[14px] leading-[1.6] text-[#6b7a8d] line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="mt-4">
                            <Link
                              href={`/insights/${post.slug}`}
                              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#b5804a] hover:underline"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

