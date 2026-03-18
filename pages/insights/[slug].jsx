import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Tag, User } from "lucide-react";
import Layout from "@/components/Layout";
import posts from "@/data/posts.json";

export async function getStaticPaths() {
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  const relatedPosts = posts.filter((p) => p.slug !== params.slug).slice(0, 2);
  return { props: { post, relatedPosts } };
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function PostBody({ post }) {
  if (
    post.slug === "what-hospitality-clients-should-look-for-in-a-procurement-partner"
  ) {
    return (
      <>
        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Choosing the Right FF&amp;E Procurement Partner
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          In the hospitality industry, the quality and timeliness of your furniture, fixtures, and
          equipment (FF&amp;E) procurement directly impacts your project&apos;s success, guest
          experience, and bottom line. Selecting the right procurement partner is one of the most
          important decisions a hotel owner or developer can make.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Industry Experience Matters
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          The hospitality sector has unique requirements that general procurement firms may not
          fully understand. Look for a partner with specific experience in hotel FF&amp;E — one who
          understands brand standards, design approval processes, and the operational demands of
          hospitality projects.
        </p>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          A seasoned partner will anticipate challenges before they arise, from specification
          discrepancies to supply chain disruptions, and have established contingency plans in
          place.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Vendor Relationships Drive Value
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          A strong procurement partner brings established relationships with manufacturers and
          suppliers. These relationships translate into competitive pricing, priority scheduling,
          and quality assurance that would be difficult to achieve independently.
        </p>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Ask potential partners about their vendor network, negotiation process, and quality
          control procedures. The depth of these relationships often determines the value delivered
          to your project.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Communication and Transparency
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Project coordination requires clear, consistent communication. Your procurement partner
          should provide regular status updates, proactive risk identification, and transparent
          budget reporting throughout the project lifecycle.
        </p>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Look for partners who use structured project management practices and can provide detailed
          tracking of every line item from purchase order through installation.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Full-Cycle Support
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          The best procurement partners don&apos;t just place orders — they manage the entire
          process from specification review through logistics, delivery, and installation support.
          This comprehensive approach reduces risk, improves coordination, and ensures a seamless
          transition from construction to opening.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">Conclusion</h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Your FF&amp;E procurement partner should function as an extension of your project team. By
          prioritizing industry experience, vendor relationships, communication, and full-cycle
          support, you can identify a partner that will contribute to your project&apos;s success
          from day one.
        </p>
      </>
    );
  }

  if (post.slug === "industry-trends-shaping-hospitality-ffe-projects") {
    return (
      <>
        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Sustainability as a Baseline Expectation
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Sustainable materials, responsible sourcing, and lifecycle considerations are no longer
          differentiators — they are expected. Hospitality brands are raising their requirements
          around environmental impact, and FF&amp;E programs must evolve accordingly.
        </p>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Procurement partners who understand green certifications, recycling programs, and vendor
          environmental policies can help owners meet these expectations without sacrificing design
          or budget.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Technology Integration in Guest Rooms
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          From integrated power at the nightstand to smart TVs and keyless entry, technology is now
          woven into nearly every FF&amp;E decision. Case goods, lighting, and seating must all be
          evaluated through the lens of how guests charge, connect, and work while on property.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Flexible Public Spaces
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Lobbies and public spaces are being reimagined as flexible environments that can support
          co-working, small group gatherings, and food and beverage experiences. This drives
          demand for modular seating, movable case goods, and durable finishes that can withstand
          high traffic.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Supply Chain Resilience
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Recent global disruptions have highlighted the importance of resilient supply chains.
          Owners are increasingly prioritizing partners who can offer multiple sourcing options,
          realistic lead times, and proactive communication when conditions change.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Aligning Trends with Brand Standards
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          While trends move quickly, brand standards and long-term ROI require a measured approach.
          Successful FF&amp;E programs incorporate relevant innovations while protecting the
          consistency and longevity that hotel brands depend on.
        </p>
      </>
    );
  }

  if (
    post.slug ===
    "service-precision-long-term-partnership-pinnacle-south-core-values"
  ) {
    return (
      <>
        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Service at the Center of Every Project
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          For Pinnacle South, service is more than a promise — it is the lens through which every
          project decision is made. From the first planning call through final installation, our
          goal is to reduce friction for owners, developers, and operators.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Precision in Every Line Item
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Hospitality FF&amp;E projects involve thousands of individual components. Precision in
          specifications, budgeting, and scheduling is essential to avoid costly surprises.
        </p>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Our team reviews every detail — from finish selections to packaging requirements — to
          ensure each item arrives as expected and ready for installation.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Building Long-Term Partnerships
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Many of our client relationships span multiple projects and property cycles. We invest the
          time to understand each owner&apos;s portfolio strategy, preferred design direction, and
          operational priorities so that every new engagement builds on what came before.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Collaboration with Design and Construction Teams
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Successful hospitality projects require alignment between designers, general contractors,
          brand representatives, and ownership. We see ourselves as a connector within that team,
          translating design intent into executable procurement plans.
        </p>

        <h3 className="mt-8 text-[20px] font-semibold text-[#AC7B4A]">
          Values that Guide Every Engagement
        </h3>
        <p className="mt-4 text-[16px] leading-[1.8] text-black">
          Service, precision, and partnership are more than words on a slide — they are the values
          that shape how we hire, how we communicate, and how we show up for our clients every day.
          They are the reason many owners trust Pinnacle South as their long-term FF&amp;E partner.
        </p>
      </>
    );
  }

  return null;
}

export default function InsightDetailPage({ post, relatedPosts }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Pinnacle South",
    },
  };

  return (
    <Layout>
      <Head>
        <title>{`${post.title} | Pinnacle South Insights`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Pinnacle South Insights`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 — HERO */}
        <section
          id="insight-hero"
          aria-label="Insight hero"
          className="relative min-h-[65vh]"
        >
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-end px-6 pb-12">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
            >
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                All Insights
              </Link>
              <div className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#0f2744] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                <Tag className="h-3.5 w-3.5" />
                <span>{post.category}</span>
              </div>
              <h1 className="mt-3 max-w-[650px] font-serif text-[40px] font-bold leading-[1.15] text-white sm:text-[48px]">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — ARTICLE BODY */}
        <section
          id="insight-article"
          aria-label="Insight article content"
          className="bg-[#f5f0eb] py-16"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            {/* Left — Article */}
            <motion.article
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="max-w-2xl"
            >
              <div className="mb-8 flex items-center gap-6 border-b border-[#e5ddd4] pb-5 text-[14px] text-black">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#AC7B4A]" />
                  <span>{post.date}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4 text-[#AC7B4A]" />
                  <span>{post.author}</span>
                </span>
              </div>

              <p className="mb-8 text-[18px] italic font-bold leading-[1.7] text-[#AC7B4A]">
                {post.excerpt}
              </p>

              <PostBody post={post} />

              <div className="mt-10 inline-flex items-center gap-3 text-[12px] text-black">
                <span>Category:</span>
                <span className="rounded-sm border border-[#AC7B4A] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                  {post.category}
                </span>
              </div>
            </motion.article>

            {/* Right — Sidebar */}
            <motion.aside
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6 lg:sticky lg:top-28"
            >
              {/* Card 1 */}
              <section className="border border-[#e5ddd4] bg-white p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                  ABOUT PINNACLE SOUTH
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7a8d]">
                  Pinnacle South is a leading hospitality FF&amp;E company serving hotel owners and
                  developers across the Southeast for over 25 years.
                </p>
                <div className="mt-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#AC7B4A] hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>

              {/* Card 2 */}
              <section className="border border-[#e5ddd4] bg-white p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#AC7B4A]">
                  BROWSE BY TOPIC
                </div>
                <div className="mt-4">
                  {["FF&E Insight", "Industry Trends", "Company Values", "Project Spotlight"].map(
                    (topic, index, arr) => (
                      <Link
                        key={topic}
                        href="/insights"
                        className={`flex items-center justify-between py-3 text-[14px] text-[#1c2b3a] ${
                          index !== arr.length - 1 ? "border-b border-[#e5ddd4]" : ""
                        }`}
                      >
                        <span>{topic}</span>
                        <ChevronRight className="h-4 w-4 text-[#AC7B4A]" />
                      </Link>
                    )
                  )}
                </div>
              </section>

              {/* Card 3 */}
              <section className="bg-[#0f2744] p-6">
                <h3 className="text-[17px] font-semibold text-white">Have a Project?</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/70">
                  Connect with our team to discuss your hospitality FF&amp;E requirements.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#AC7B4A] px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </section>
            </motion.aside>
          </div>
        </section>
      </main>
    </Layout>
  );
}

