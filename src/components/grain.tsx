"use client";

import { useReducedMotion } from "@/lib/motion";

/**
 * One film-grain plate over the whole page.
 *
 * It is what stops the large flat fields of sand from looking like untextured
 * CSS, and it hides the banding in the hero's very low-contrast gradient. The
 * tile is an inlined SVG turbulence, so it costs no request and no decode.
 */
export default function Grain() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return <div aria-hidden="true" className="nh-grain" />;
}
