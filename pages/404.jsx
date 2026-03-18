import Head from "next/head";
import Layout from "@/components/Layout";

export default function Custom404() {
  return (
    <Layout headerVariant="solid">
      <Head>
        <title>Page Not Found | Pinnacle South</title>
        <meta
          name="description"
          content="The page you’re looking for doesn’t exist. Return home or explore projects and insights."
        />
        <meta property="og:title" content="Page Not Found | Pinnacle South" />
        <meta
          property="og:description"
          content="The page you’re looking for doesn’t exist. Return home or explore projects and insights."
        />
        <meta property="og:image" content="/images/og/404.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-[12px] uppercase tracking-eyebrow text-copper">404</div>
          <h1 className="mt-4 font-serif text-[56px] leading-[1.05] text-textDark">
            This page isn’t available.
          </h1>
          <p className="mt-5 text-[16px] leading-7 text-textMuted">
            The link may be broken, or the page may have been moved.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-sm bg-navyDark px-8 py-3 text-[14px] font-semibold text-white hover:bg-navyMid transition-colors"
            >
              Back to Home
            </a>
            <a href="/projects" className="inline-flex items-center justify-center text-copper hover:underline">
              View Projects →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

