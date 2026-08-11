"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

interface Props {
  src: string;
  /** First frame, extracted at build time. Carries the whole thing under
   *  reduced motion, and covers the gap before the file arrives. */
  poster: string;
  className?: string;
  /** Start fetching this far outside the viewport. */
  rootMargin?: string;
  /**
   * Milliseconds to hold on the last frame before looping again. A background
   * clip that restarts the instant it ends reads as a stutter on a quiet page;
   * letting it rest turns the loop into a breath. Omit for a continuous loop.
   */
  restMs?: number;
}

/**
 * A decorative background video that behaves itself.
 *
 * Three rules, all of which a bare <video autoplay loop> breaks:
 *
 *  - **It does not download until it is nearly on screen.** `src` is withheld
 *    until an IntersectionObserver says so, so a clip further down the page
 *    costs nothing on first load.
 *  - **It pauses when it leaves.** Decoding video behind three other sections
 *    is pure battery cost.
 *  - **Under reduced motion it never plays at all** — the poster is rendered as
 *    a plain image and the file is never fetched. That preference is about
 *    movement, and a looping video is movement that cannot be escaped.
 *
 * `muted` + `playsInline` are what make autoplay legal on iOS; without both,
 * Safari refuses and the element sits black.
 */
export default function BgVideo({
  src,
  poster,
  className,
  rootMargin = "300px",
  restMs,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          // Only ask to play if a source is already attached. On the very first
          // intersection it is not: setLoad has merely scheduled a re-render,
          // so the element is still src-less and play() would reject. The
          // `autoPlay` attribute covers that first start once React commits the
          // src; this call is for every later return into view.
          if (el.currentSrc) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin, threshold: 0 },
    );

    io.observe(el);

    // Rest-then-loop. `loop` is off when restMs is set, so the element fires
    // `ended` and we restart it after the pause instead of letting the browser
    // cut straight back to frame zero.
    let restTimer: ReturnType<typeof setTimeout> | undefined;
    const onEnded = () => {
      if (!restMs) return;
      restTimer = setTimeout(() => {
        el.currentTime = 0;
        el.play().catch(() => {});
      }, restMs);
    };
    el.addEventListener("ended", onEnded);

    return () => {
      io.disconnect();
      el.removeEventListener("ended", onEnded);
      if (restTimer) clearTimeout(restTimer);
    };
  }, [reduced, rootMargin, restMs]);

  if (reduced) {
    return <img src={poster} alt="" aria-hidden="true" className={className} />;
  }

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      src={load ? src : undefined}
      // muted + playsInline + autoPlay is the exact combination iOS Safari
      // requires; drop any one of the three and the element sits black.
      // autoPlay is also what starts the very first playback here, since the
      // src only exists after the observer has scheduled a re-render.
      autoPlay
      muted
      loop={!restMs}
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
