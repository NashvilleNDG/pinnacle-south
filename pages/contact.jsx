import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, Phone, Send, Shield } from "lucide-react";
import Layout from "@/components/Layout";

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
        {/* SECTION 1 — HERO */}
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
                className="text-[13.75px] uppercase tracking-[0.22em] text-[#A68770]"
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

        {/* SECTION 2 — FORM + CONTACT DETAILS */}
        <section
          id="contact-main"
          aria-label="Contact form and details"
          className="bg-cream py-12 sm:py-16 md:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left — Form */}
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="rounded-sm border border-[#e5ddd4] bg-white p-5 sm:p-8 md:p-10"
            >
              <h2 className="font-serif text-[28px] font-bold text-[#0f2744]">
                Start the Conversation
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-[#6b7a8d]">
                Fill out the form below and a senior member of our team will follow up promptly to
                discuss how we can support your project.
              </p>

              <form className="mt-8 space-y-6" aria-label="Contact form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                      placeholder="Company or property name"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="new-build">New-build</option>
                    <option value="renovation">Renovation</option>
                    <option value="brand-conversion">Brand conversion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-details"
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="project-details"
                    name="project-details"
                    rows={5}
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="Tell us about your project — scope, timeline, brand, location, and any specific requirements..."
                  />
                </div>

                <div className="flex flex-col gap-3 text-[12px] text-[#6b7a8d]">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 shrink-0 text-[#6b7a8d]" aria-hidden />
                    Your information is kept strictly confidential.
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-[#6b7a8d]" aria-hidden />
                    We respond within one business day.
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#0f2744] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#1a3a5c] transition-colors sm:w-auto"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </motion.section>

            {/* Right — Contact details + Why work with us */}
            <div className="space-y-6">
              <motion.section
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                aria-label="Contact details"
                className="rounded-sm border border-[#15203A] bg-[#15203A] p-8 shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 shrink-0 bg-[#C4A27B]" aria-hidden />
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C4A27B]">
                    Contact Details
                  </h2>
                </div>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C4A27B]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C4A27B]">
                        Call Us
                      </div>
                      <div className="mt-1 text-[15px] font-semibold leading-snug text-white">
                        <a className="hover:underline" href="tel:+18007819010">(800) 781-9010</a>
                        <br />
                        <a className="hover:underline" href="tel:+17702273476">(770) 227-3476</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C4A27B]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C4A27B]">
                        Email Us
                      </div>
                      <div className="mt-1 text-[15px] font-semibold leading-snug text-white">
                        <a className="hover:underline" href="mailto:info@pinnaclesouth.net">info@pinnaclesouth.net</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C4A27B]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C4A27B]">
                        Our Offices
                      </div>
                      <div className="mt-1 text-[15px] font-semibold leading-snug text-white">
                        Griffin, Georgia<br />
                        Franklin, Tennessee
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C4A27B]" strokeWidth={1.5} />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#C4A27B]">
                        Business Hours
                      </div>
                      <div className="mt-1 text-[15px] font-semibold leading-snug text-white">
                        Mon – Fri: 8:00 AM – 5:00 PM EST
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                aria-label="Why work with us"
                className="rounded-sm border border-[#e8e8e8] bg-[#F9F9F9] p-8 shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
              >
                <h2 className="text-[18px] font-bold leading-tight text-[#333333]">
                  Why Work With Us
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-[1.7] text-[#777777]">
                  <li>25+ years of hospitality FF&amp;E expertise</li>
                  <li>Established relationships with top-tier manufacturers</li>
                  <li>Full-cycle support from specification through installation</li>
                  <li>Transparent communication and budget management</li>
                </ul>
              </motion.section>
            </div>
          </div>
        </section>

        {/* SECTION 3 — MAP */}
        <section
          id="office-map"
          aria-label="Office location map"
          className="bg-white py-16"
        >
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="overflow-hidden border border-[#e5ddd4] bg-[#f5f0eb]"
            >
              <iframe
                title="Pinnacle South Office Location"
                src="https://www.google.com/maps?q=114+W+Solomon+Street+Griffin,+GA+30224-0023&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — BOTTOM CTA BAND */}
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
                className="inline-flex items-center justify-center rounded-sm bg-[#B8977E] px-8 py-3 text-[14px] font-semibold text-white hover:opacity-95 transition-opacity"
              >
                Call (800) 781-9010
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-3 text-[14px] font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Email Our Team
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}

