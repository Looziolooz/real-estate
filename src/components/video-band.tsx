"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/components/lang-context";
import BgVideo from "@/components/bg-video";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

/**
 * A full-bleed band of moving landscape between the philosophy and the
 * testimonials — the page taking a breath.
 *
 * Two scroll-driven effects, both scrubbed rather than triggered, so they
 * follow the scroll instead of firing at it:
 *
 *  - the frame opens from a horizontal slit to its full height as it enters
 *    (an animated `clip-path` inset, the same move the ZENITH tabs used);
 *  - the footage drifts vertically inside that frame, slower than the page,
 *    so the band reads as a window onto something further away.
 *
 * The video is deliberately overscaled: parallax moves it, and without the
 * extra height the top and bottom edges would swing into view.
 */
export default function VideoBand() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useReveal(sectionRef);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!section || !frame || !media || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frame,
        { clipPath: "inset(22% 0% 22% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 25%",
            scrub: 0.5,
          },
        },
      );

      gsap.fromTo(
        media,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="video-band">
      <div ref={frameRef} className="video-band-frame">
        <div ref={mediaRef} className="video-band-media">
          <BgVideo
            src="/video/nordic-winter.mp4"
            poster="/video/nordic-winter.jpg"
          />
        </div>

        <div className="video-band-scrim" />

        <div className="video-band-copy">
          <h2 className="h1">
            <span data-anim="mask-line" data-delay="0.05">
              <span>{t("band.line1")}</span>
            </span>
            <span data-anim="mask-line" data-delay="0.14">
              <span className="italic">{t("band.line2")}</span>
            </span>
          </h2>
          <div data-anim="fade-up" data-delay="0.3" className="video-band-cap">
            {t("band.caption")}
          </div>
        </div>
      </div>
    </section>
  );
}
