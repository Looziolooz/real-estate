"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";

/**
 * The one place the motion layer is configured.
 *
 * Everything animated on the site goes through here: plugin registration, the
 * Lenis instance, the shared easing, and the two capability checks. Nothing
 * else calls `gsap.registerPlugin` or `matchMedia` directly, so there is a
 * single answer to "does this browser get the full treatment".
 *
 * Registration is guarded because Next renders these modules on the server
 * during the build; `registerPlugin` there is harmless but pointless, and
 * anything touching `window` at module scope would break the build outright.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

/** Nordhem's existing curve, from `--ease` in globals.css. Kept identical so
 *  GSAP motion and the site's CSS transitions travel the same way. */
export const EASE_GSAP = "power3.out";
export const EASE_MORPH = "power4.inOut";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_QUERY).matches;
}

/** Reactive version, so components can drop heavy visuals entirely. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_QUERY);
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** True only where a real pointer can hover — gates the cursor and magnetics. */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = () => setFine(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return fine;
}

/**
 * Lenis smooth scroll, driven off GSAP's ticker so the inertial scroll and
 * ScrollTrigger advance on the same frame. Run on separate loops they drift by
 * a frame, which is visible as pinned content lagging the page.
 *
 * Disabled wholesale under reduced motion: hijacking the scroll is precisely
 * what that preference asks us not to do.
 */
/* The live Lenis instance, so anchors can hand it a target instead of calling
   native smooth scrolling — which Lenis is already overriding, and which
   therefore fights it and lands in the wrong place. */
let lenisInstance: Lenis | null = null;

/**
 * Scrolls to a section by selector. Uses Lenis when it is driving, falls back
 * to the platform behaviour when it is not (reduced motion, or before mount).
 */
export function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, { offset: -82 }); // sticky header
    return;
  }

  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
}

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenisInstance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenisInstance = null;
      lenis.destroy();
    };
  }, [enabled]);
}

/**
 * Marks <html> as animation-ready. Until this runs, `[data-anim]` elements are
 * transparent (see globals.css) so nothing can flash in at its final position
 * before its timeline attaches. It still runs under reduced motion — the CSS
 * then forces the same elements permanently visible.
 */
export function useMotionReady() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    return () => document.documentElement.classList.remove("motion-ready");
  }, []);
}

export { gsap, ScrollTrigger, Flip };
