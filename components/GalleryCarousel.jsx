import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function GalleryCarousel({ items = [] }) {
  const fallbackItems = useMemo(
    () => [
      { src: "https://picsum.photos/seed/pinnacle-gallery-1/1200/800", alt: "Gallery placeholder 1" },
      { src: "https://picsum.photos/seed/pinnacle-gallery-2/1200/800", alt: "Gallery placeholder 2" },
      { src: "https://picsum.photos/seed/pinnacle-gallery-3/1200/800", alt: "Gallery placeholder 3" },
      { src: "https://picsum.photos/seed/pinnacle-gallery-4/1200/800", alt: "Gallery placeholder 4" },
      { src: "https://picsum.photos/seed/pinnacle-gallery-5/1200/800", alt: "Gallery placeholder 5" },
      { src: "https://picsum.photos/seed/pinnacle-gallery-6/1200/800", alt: "Gallery placeholder 6" },
    ],
    []
  );

  const galleryItems = Array.isArray(items) && items.length ? items : fallbackItems;
  const len = galleryItems.length;

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartXRef = useRef(null);

  const wrapIndex = (i) => {
    if (!len) return 0;
    return ((i % len) + len) % len;
  };

  const scrollToIndex = (nextIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children?.[nextIndex];
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  const goPrev = () => {
    if (!len) return;
    const next = wrapIndex(activeIndex - 1);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const goNext = () => {
    if (!len) return;
    const next = wrapIndex(activeIndex + 1);
    setActiveIndex(next);
    scrollToIndex(next);
  };

  const openLightbox = (idx) => {
    if (!len) return;
    setLightboxIndex(wrapIndex(idx));
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goLightboxPrev = () => setLightboxIndex((i) => wrapIndex(i - 1));
  const goLightboxNext = () => setLightboxIndex((i) => wrapIndex(i + 1));

  useEffect(() => {
    if (!len) return;
    setActiveIndex((v) => wrapIndex(v));
  }, [len]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goLightboxPrev();
      if (e.key === "ArrowRight") goLightboxNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  const current = galleryItems[lightboxIndex];

  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous images"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A1D3A] text-white shadow-soft transition-colors hover:bg-[#1a3a5c]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* TRACK */}
          <div
            ref={trackRef}
            className="flex gap-0 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-4"
          >
            {galleryItems.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className="flex-[0_0_100%] shrink-0 md:flex-[0_0_33.333%]"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="block w-full overflow-hidden rounded-lg bg-gray-200"
                  aria-label={`Open image: ${item.alt || "Gallery image"}`}
                >
                  <div className="h-[250px] md:h-[300px]">
                    <img
                      src={item.src}
                      alt={item.alt || "Gallery image"}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next images"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A1D3A] text-white shadow-soft transition-colors hover:bg-[#1a3a5c]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* DOT INDICATORS */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {galleryItems.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  scrollToIndex(idx);
                }}
                aria-label={`Go to image ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#AC7B4A]"
                    : "bg-[#e5ddd4] hover:bg-[#d9cec2]"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <div
            className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-soft transition-colors hover:bg-white/30"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={goLightboxPrev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-soft transition-colors hover:bg-white/30"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={goLightboxNext}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-soft transition-colors hover:bg-white/30"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            <div
              className="relative w-full"
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches?.[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                const startX = touchStartXRef.current;
                if (startX === null) return;

                const endX = e.changedTouches?.[0]?.clientX ?? startX;
                const delta = endX - startX;
                touchStartXRef.current = null;

                if (Math.abs(delta) < 45) return;
                if (delta > 0) goLightboxPrev();
                if (delta < 0) goLightboxNext();
              }}
            >
              <img
                src={current?.src}
                alt={current?.alt || "Lightbox image"}
                className="mx-auto max-h-[90vh] w-auto max-w-full object-contain"
              />

              {current?.alt ? (
                <div className="pointer-events-none absolute bottom-6 left-1/2 w-full max-w-2xl -translate-x-1/2 px-4">
                  <div className="rounded-md bg-black/45 px-4 py-2 text-center text-[14px] font-medium text-white">
                    {current.alt}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

