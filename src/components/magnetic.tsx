"use client";

import { cloneElement, useEffect, useRef, type ReactElement } from "react";
import { gsap, useFinePointer, useReducedMotion } from "@/lib/motion";

interface Props {
  children: ReactElement<{ ref?: React.Ref<HTMLElement> }>;
  /** How far the element is allowed to lean, in px. */
  strength?: number;
}

/**
 * Leans its child towards the pointer while hovered, then eases it home.
 *
 * Applied only to the page's few real calls to action — used everywhere it
 * stops being a signal and becomes noise. It wraps rather than renders, so the
 * child keeps its own classes and semantics.
 */
export default function Magnetic({ children, strength = 10 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !fine || reduced) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      gsap.to(el, {
        x: dx * strength,
        y: dy * strength * 0.5,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    // Eased, not sprung: an elastic overshoot is a piece of playfulness the
    // rest of the page does not have.
    const leave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "power3.out" });
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      gsap.killTweensOf(el);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [fine, reduced, strength]);

  return cloneElement(children, { ref });
}
