"use client";

import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

type RevealKind = "fade-up" | "mask-line" | "reveal";

interface Options {
  /** Play immediately instead of on scroll — for content already in view. */
  immediate?: boolean;
  /** Extra seconds before the whole batch starts. */
  delay?: number;
  /** Gate on some external readiness. */
  enabled?: boolean;
}

/**
 * Wires every `[data-anim]` descendant of `scope` to a scroll-triggered
 * entrance.
 *
 * This replaces the `.fade-up` / `.delay-N` CSS animations, which fired on page
 * load regardless of where the element was: everything below the fold finished
 * animating before it was ever on screen, so only the hero ever actually
 * animated for the visitor. These fire when the element arrives, once.
 *
 * Per-element knobs, all optional attributes:
 *   data-delay="0.4"    seconds, on top of the batch delay
 *   data-stagger="0.08" seconds between this element's own children
 *   data-y="60"         travel distance in px, overriding the default
 */
export function useReveal(
  scope: RefObject<HTMLElement | null>,
  { immediate = false, delay = 0, enabled = true }: Options = {},
) {
  useEffect(() => {
    const root = scope.current;
    if (!root || !enabled) return;

    // Reduced motion: globals.css has already forced everything visible, and
    // we deliberately create no timelines at all.
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = Array.from(
        root.querySelectorAll<HTMLElement>("[data-anim]"),
      );

      targets.forEach((el) => {
        const kind = (el.dataset.anim ?? "fade-up") as RevealKind;
        const ownDelay = parseFloat(el.dataset.delay ?? "0") + delay;
        const stagger = parseFloat(el.dataset.stagger ?? "0");
        const travel = parseFloat(el.dataset.y ?? "");

        const common = {
          duration: 0.9,
          ease: "power3.out",
          delay: ownDelay,
          overwrite: "auto" as const,
        };

        const trigger = immediate
          ? undefined
          : {
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            };

        if (kind === "mask-line") {
          // Type wiping up from behind its own overflow mask.
          gsap.fromTo(
            el.children,
            { yPercent: 108, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              ...common,
              duration: 1.05,
              stagger: stagger || 0.09,
              ...trigger,
            },
          );
          return;
        }

        const y = Number.isNaN(travel) ? 36 : travel;

        /* A dark ground gives an opacity fade almost nothing to travel
           against, so the entrance also comes out of a short blur. GSAP owns
           it — as a CSS rule it would keep matching after the tween and pin
           the element in soft focus permanently. */
        const from = { y, opacity: 0, filter: "blur(7px)" };
        const to = { y: 0, opacity: 1, filter: "blur(0px)" };

        if (stagger && el.children.length) {
          gsap.fromTo(el.children, from, {
            ...to,
            ...common,
            stagger,
            ...trigger,
          });
          gsap.set(el, { opacity: 1 });
          return;
        }

        gsap.fromTo(el, from, { ...to, ...common, ...trigger });
      });
    }, root);

    // Layout settles after fonts and images land; stale trigger positions are
    // the usual cause of "it animated too early".
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [scope, immediate, delay, enabled]);
}
