import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import vendorPartners from "@/data/vendorPartners.json";

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

export default function VendorPartnersPage() {
  const { benefits, categories } = vendorPartners;

  return (
    <Layout>
      <Head>
        <title>Vendor Partners | Pinnacle South FF&amp;E</title>
        <meta
          name="description"
          content="Our curated network of manufacturers and suppliers ensures quality, value, and reliability across every hospitality FF&E project."
        />
        <meta property="og:title" content="Vendor Partners | Pinnacle South FF&E" />
        <meta
          property="og:description"
          content="Our curated network of manufacturers and suppliers ensures quality, value, and reliability across every hospitality FF&E project."
        />
        <meta property="og:image" content="/images/vendor-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-cream">
        {/* SECTION 1 â€” HERO */}
        <section
          id="vendor-partners-hero"
          aria-label="Vendor partners hero"
          className="relative min-h-[60vh]"
        >
          <div className="absolute inset-0">
            <img
              src="/images/vendor-hero.png"
              alt="Vendor partners hero background"
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
                Vendor Partners
              </motion.h1>
              <motion.p
                variants={itemFade}
                className="mx-auto mt-6 max-w-[580px] text-[18px] leading-[1.7] text-white/80"
              >
                Our curated network of manufacturers and suppliers ensures quality, value, and reliability
                across every hospitality FF&amp;E project.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 â€” PARTNERSHIPS INTRO */}
        <section
          id="partnerships-intro"
          aria-label="Vendor partnerships introduction"
          className="bg-white py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              {...fadeInUp}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#b5804a]" aria-hidden="true" />
                <span className="text-[12px] uppercase tracking-[0.22em] text-[#b5804a]">
                  OUR NETWORK
                </span>
              </div>
              <h2 className="mt-3 font-serif text-[38px] font-bold leading-[1.15] text-[#1c2b3a]">
                Partnerships Built Over Decades
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#6b7a8d]">
                Over 25 years in the hospitality FF&amp;E industry, Pinnacle South has cultivated strong
                relationships with manufacturers and suppliers who share our commitment to quality,
                reliability, and service. These partnerships are a direct benefit to every client we serve.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-[#b5804a] hover:underline"
                >
                  Discuss Your Project
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
              {benefits.map((benefit) => (
                <motion.article
                  key={benefit.title}
                  variants={itemFade}
                  className="border border-[#e5ddd4] bg-[#f5f0eb] p-6"
                >
                  <div className="border-l-4 border-[#b5804a] pl-5">
                    <h3 className="text-[16px] font-semibold text-[#1c2b3a]">{benefit.title}</h3>
                    <p className="mt-1 text-[14px] leading-[1.7] text-[#6b7a8d]">
                      {benefit.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 â€” VENDOR CATEGORIES */}
        <section
          id="vendor-categories"
          aria-label="Vendor categories"
          className="bg-[#f5f0eb] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {categories.map((category, idx) => (
              <motion.section
                key={category.category}
                aria-label={category.category}
                className={idx !== categories.length - 1 ? "mb-20" : ""}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="border-b border-[#e5ddd4] pb-4">
                  <h2 className="text-[24px] font-semibold text-[#1c2b3a]">
                    {category.category}
                  </h2>
                </div>

                <motion.div
                  variants={containerStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {category.vendors.map((vendor) => (
                    <motion.article
                      key={vendor.name}
                      variants={itemFade}
                      className="overflow-hidden border border-[#e5ddd4] bg-white"
                    >
                      <div className="flex min-h-[160px] flex-col items-center justify-center bg-[#f5f0eb] px-8 py-10">
                        <div className="grid h-13 w-13 place-items-center rounded-sm bg-[#0f2744]">
                          <span className="text-[18px] font-semibold text-white">
                            {vendor.initials}
                          </span>
                        </div>
                        <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[#8a9bb0]">
                          Logo Placeholder
                        </div>
                      </div>
                      <div className="border-t border-[#e5ddd4] bg-white p-6">
                        <h3 className="text-[17px] font-semibold text-[#1c2b3a]">
                          {vendor.name}
                        </h3>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#b5804a]">
                          {vendor.categoryTag}
                        </div>
                        <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7a8d] line-clamp-3">
                          {vendor.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.section>
            ))}
          </div>
        </section>

        {/* SECTION 4 â€” BOTTOM CTA BAND */}
        <motion.section
          id="vendor-partners-cta"
          aria-label="Vendor partners call to action"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-[40px] font-bold leading-[1.1] text-white sm:text-[48px]">
              Interested in Partnering?
            </h2>
            <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-7 text-white/70">
              We&apos;re always looking to expand our network with quality manufacturers and suppliers. Reach
              out to discuss partnership opportunities.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#9F816D] px-8 py-3 text-[14px] font-semibold text-white hover:opacity-95 transition-opacity"
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
