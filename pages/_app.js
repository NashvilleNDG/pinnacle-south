import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useLayoutEffect, useEffect, useRef } from "react";

const SCROLL_KEY_PREFIX = "scroll_";
const SCROLL_OPTIONS = { top: 0, left: 0, behavior: "auto" };

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isBackForwardRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      isBackForwardRef.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      const path = router.asPath;
      if (path && typeof window !== "undefined") {
        try {
          sessionStorage.setItem(SCROLL_KEY_PREFIX + path, String(window.scrollY));
        } catch (_) {}
      }
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => router.events.off("routeChangeStart", handleRouteChangeStart);
  }, [router.asPath, router.events]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const path = router.asPath;
    if (!path) return;
    try {
      if (isBackForwardRef.current) {
        isBackForwardRef.current = false;
        const key = SCROLL_KEY_PREFIX + path;
        const saved = sessionStorage.getItem(key);
        if (saved !== null) {
          const y = parseInt(saved, 10);
          if (!Number.isNaN(y)) {
            window.scrollTo({ top: y, left: 0, behavior: "auto" });
          } else {
            window.scrollTo(SCROLL_OPTIONS);
          }
          sessionStorage.removeItem(key);
        } else {
          window.scrollTo(SCROLL_OPTIONS);
        }
      } else {
        window.scrollTo(SCROLL_OPTIONS);
      }
    } catch (_) {
      window.scrollTo(SCROLL_OPTIONS);
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
