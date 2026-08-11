"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/motion";

interface Props {
  to: number;
  /** Rendered value. Keep the locale formatting here, not in the tween. */
  format: (value: number) => string;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Counts to `to` the first time it scrolls into view, then stops observing.
 *
 * The final string is what React renders and what stays in the DOM; the tween
 * only overwrites it once it starts. So the real figure is what a screen
 * reader, a crawler, and anyone with reduced motion actually gets.
 */
export default function CountUp({
  to,
  format,
  duration = 1.8,
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: to,
      duration,
      delay,
      ease: "power2.out",
      paused: true,
      onUpdate: () => {
        el.textContent = format(counter.value);
      },
      onComplete: () => {
        el.textContent = format(to);
      },
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        el.textContent = format(0);
        tween.play();
      },
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [to, format, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {format(to)}
    </span>
  );
}
