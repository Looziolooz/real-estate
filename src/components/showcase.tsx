"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/components/lang-context";
import { gsap, ScrollTrigger } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";

/* Six frames. All licence-clean and served from this project — see ASSETS.md.
   No captions: attaching Swedish addresses to generic architecture photography
   would be inventing property claims, and a portfolio band does not need them
   to do its job. */
const FRAMES = [
  { src: "/generated/azure-sanctuary.jpg", alt: "showcase.alt1" },
  { src: "/showcase/02-8112680.jpg", alt: "showcase.alt2" },
  { src: "/generated/aether-heights.jpg", alt: "showcase.alt3" },
  { src: "/showcase/04-38782153.jpg", alt: "showcase.alt4" },
  { src: "/showcase/05-9209878.jpg", alt: "showcase.alt5" },
  { src: "/generated/exclusive-collection.jpg", alt: "showcase.alt6" },
];

/**
 * A horizontal band of frames that advances as the page scrolls.
 *
 * On a pointer device the section pins and the track translates on X, so
 * vertical scrolling reads the strip sideways. On touch and under reduced
 * motion the pin is dropped entirely and the same markup becomes an ordinary
 * swipeable scroller with snap points: pinning on a phone hijacks the one
 * gesture the user actually has, and a scroll-jacked band is exactly what the
 * reduced-motion preference is asking us not to build.
 */
export default function Showcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useReveal(sectionRef);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    // matchMedia so the pin is created only where it belongs, and is torn down
    // cleanly by GSAP when the viewport crosses the breakpoint.
    const mm = gsap.matchMedia();

    mm.add(
      {
        pinned: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        if (!ctx.conditions?.pinned) return;

        // Distance the track must travel: its full width minus one viewport.
        const distance = () => track.scrollWidth - pin.clientWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            // Pin for exactly as long as the horizontal travel, so the strip
            // finishes precisely as the section releases.
            end: () => `+=${distance()}`,
            pin: pin,
            scrub: 0.6,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { x: 0 });
        };
      },
    );

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="showcase">
      <div ref={pinRef} className="showcase-pin">
        <div className="wrap showcase-head">
          <h2 data-anim="mask-line" className="h2">
            <span>{t("showcase.title")}</span>
          </h2>
          <p data-anim="fade-up" data-delay="0.12" className="showcase-sub">
            {t("showcase.subtitle")}
          </p>
        </div>

        <div ref={trackRef} className="showcase-track">
          {FRAMES.map((f, i) => (
            <figure key={f.src} className="showcase-frame">
              <img
                src={f.src}
                alt={t(f.alt)}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
