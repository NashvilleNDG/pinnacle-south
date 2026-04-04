import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send, Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/**
 * Shared contact form + sidebar from the contact page. Use idPrefix on the home page
 * so field ids stay unique if both pages are ever composed together.
 */
export default function ContactFormSection({
  idPrefix = "",
  title = "Start the Conversation",
  description =
    "YES – I want to experience the FF&E difference that is Pinnacle South. Let's have a no cost, no obligation conversation about my property and my priorities.",
  sectionClassName = "bg-cream py-12 sm:py-16 md:py-20",
  sectionId = "contact-main",
  showMap = true,
}) {
  const id = (suffix) => (idPrefix ? `${idPrefix}-${suffix}` : suffix);

  return (
    <>
      <section
        id={sectionId}
        aria-label="Contact form and details"
        className={sectionClassName}
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="rounded-sm border border-[#e5ddd4] bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(15,39,68,0.06)]"
          >
            <h2 className="font-serif text-[28px] font-bold text-[#0f2744]">{title}</h2>
            <p className="mt-3 text-[15px] leading-[1.75] text-[#1c2b3a]">{description}</p>

            <form className="mt-8 space-y-6" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={id("full-name")}
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Full Name *
                  </label>
                  <input
                    id={id("full-name")}
                    name="full-name"
                    type="text"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor={id("company")}
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Company
                  </label>
                  <input
                    id={id("company")}
                    name="company"
                    type="text"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="Company or ownership group"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={id("email")}
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Email Address *
                  </label>
                  <input
                    id={id("email")}
                    name="email"
                    type="email"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor={id("phone")}
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Phone Number
                  </label>
                  <input
                    id={id("phone")}
                    name="phone"
                    type="tel"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={id("property-name")}
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Property Name *
                  </label>
                  <input
                    id={id("property-name")}
                    name="property-name"
                    type="text"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="Hotel or property name"
                  />
                </div>
                <div>
                  <label
                    htmlFor={id("location")}
                    className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c2b3a]"
                  >
                    Location *
                  </label>
                  <input
                    id={id("location")}
                    name="location"
                    type="text"
                    className="mt-2 w-full border border-[#e5ddd4] bg-white px-3 py-2.5 text-[14px] text-[#1c2b3a] outline-none focus:border-[#0f2744]"
                    placeholder="City, state / region"
                  />
                </div>
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

          <div className="space-y-6">
            <motion.section
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              aria-label="Contact details"
              className="rounded-sm border border-[#15203A] bg-[#15203A] p-8 shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-8 shrink-0 bg-[#AC7B4A]" aria-hidden />
                <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                  Contact Details
                </h2>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                      Call Us
                    </div>
                    <div className="mt-1 text-[15px] font-semibold leading-snug text-[#AC7B4A]">
                      <a className="text-[#AC7B4A] hover:underline" href="tel:+18007819010">
                        (800) 781-9010
                      </a>
                      <br />
                      <a className="text-[#AC7B4A] hover:underline" href="tel:+16159059115">
                        (615) 905-9115
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                      Email Us
                    </div>
                    <div className="mt-1 text-[15px] font-semibold leading-snug text-[#AC7B4A]">
                      <a className="text-[#AC7B4A] hover:underline" href="mailto:info@pinnaclesouth.net">
                        info@pinnaclesouth.net
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                      Our Offices
                    </div>
                    <div className="mt-1 text-[15px] font-semibold leading-snug text-[#AC7B4A]">
                      Griffin, Georgia
                      <br />
                      Franklin, Tennessee
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                      Business Hours
                    </div>
                    <div className="mt-1 text-[15px] font-semibold leading-snug text-[#AC7B4A]">
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
              <h2 className="text-[18px] font-bold leading-tight text-[#333333]">Why Work With Us</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-[1.7] text-[#777777]">
                <li>Hospitality FF&amp;E expertise since 2003</li>
                <li>Established relationships with top-tier manufacturers</li>
                <li>Full-cycle support from specification through installation</li>
                <li>Transparent communication and budget management</li>
              </ul>
            </motion.section>
          </div>
        </div>
      </section>

      {showMap ? (
        <section
          id={idPrefix ? `${idPrefix}-office-map` : "office-map"}
          aria-label="Office location map"
          className="bg-white py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="overflow-hidden rounded-sm border border-[#e5ddd4] bg-[#f5f0eb] shadow-inner"
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
      ) : null}
    </>
  );
}
