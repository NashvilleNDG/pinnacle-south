import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ContactFormSection from "@/components/ContactFormSection";

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

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact | Pinnacle South</title>
        <meta
          name="description"
          content="Tell us about your hospitality development. Our team will respond promptly to discuss how we can support your FF&E project."
        />
        <meta property="og:title" content="Contact | Pinnacle South" />
        <meta
          property="og:description"
          content="Get in touch with Pinnacle South to discuss hospitality FF&E procurement, sourcing, and project coordination."
        />
        <meta property="og:image" content="/images/contact-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-cream">
        <section
          id="contact-hero"
          aria-label="Contact hero"
          className="relative min-h-[60vh]"
        >
          <div className="absolute inset-0">
            <img
              src="/images/contact-hero.jpg"
              alt="Hospitality project corridor with meeting rooms"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1D3A]/70" />
          </div>

          <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="show"
              className="max-w-xl text-left text-white"
            >
              <motion.div
                variants={fadeInUp}
                className="text-[13.75px] uppercase tracking-[0.22em] text-[#AC7B4A]"
              >
                Get in Touch
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="mt-3 font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-[52px]"
              >
                Let&apos;s Discuss Your Next Project
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-4 max-w-[520px] text-[16px] leading-[1.7] text-white/80"
              >
                Tell us about your hospitality development. Our team will respond within one business
                day to discuss how we can support your project.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <ContactFormSection />

        <motion.section
          id="contact-cta"
          aria-label="Ready to begin contact CTA"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          className="bg-[#0A1D3A] py-14 sm:py-20 md:py-24"
        >
          <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
              Ready to Begin?
            </div>
            <h2 className="mt-3 font-serif text-[40px] font-bold leading-[1.1] sm:text-[46px]">
              Your Next Hospitality Project
              <span className="block font-serif text-[36px] font-normal italic text-white/85 sm:text-[40px]">
                Starts with a Conversation
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.8] text-white/75">
              Whether you&apos;re planning a new-build, renovation, or brand conversion, Pinnacle South has
              the expertise and relationships to deliver exceptional results.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="tel:+18007819010"
                className="inline-flex items-center justify-center rounded-sm bg-[#AC7B4A] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#8f6438]"
              >
                Call (800) 781-9010
              </Link>
              <a
                href="mailto:info@pinnaclesouth.net"
                className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
