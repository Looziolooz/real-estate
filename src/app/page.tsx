"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { LangProvider } from "@/components/lang-context";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Listings from "@/components/listings-section";
import Philosophy from "@/components/philosophy";
import VideoBand from "@/components/video-band";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";
import LeadCapture from "@/components/lead-capture";
import Footer from "@/components/footer";
import Drawer from "@/components/drawer";
import Grain from "@/components/grain";
import {
  Flip,
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  useMotionReady,
  useSmoothScroll,
} from "@/lib/motion";
import type { Listing } from "@/data/listings";

export default function Home() {
  const [openListing, setOpenListing] = useState<Listing | null>(null);
  const [morphing, setMorphing] = useState(false);
  const flipState = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useSmoothScroll();
  useMotionReady();

  /* --- morph ---------------------------------------------------------------
     Opening a listing is not a cross-fade into a panel: the card's own image
     travels into the drawer, and back out again on close. Flip measures the
     element before React re-renders, then animates whichever element carries
     the same data-flip-id afterwards from those old coordinates — so the card
     and the drawer read as one continuous object despite being different nodes.

     Only one element may hold a given id at a time, which is why the card
     renders no flip frame while it is the open one.
     ------------------------------------------------------------------------ */

  const open = useCallback((listing: Listing) => {
    returnFocus.current = document.activeElement as HTMLElement | null;

    if (prefersReducedMotion()) {
      setOpenListing(listing);
      return;
    }

    flipState.current = Flip.getState(`[data-flip-id="${listing.id}"]`);
    setMorphing(true);
    setOpenListing(listing);
  }, []);

  const finishClose = useCallback((listing: Listing) => {
    if (!prefersReducedMotion()) {
      flipState.current = Flip.getState(`[data-flip-id="${listing.id}"]`);
      setMorphing(true);
    }
    setOpenListing(null);
    returnFocus.current?.focus?.({ preventScroll: true });
  }, []);

  const close = useCallback(() => {
    const listing = openListing;
    if (!listing) return;

    if (prefersReducedMotion()) {
      finishClose(listing);
      return;
    }

    // Retire the panel's text first, then hand over to the morph. Run at once,
    // the image looks like it is dragging the copy along with it.
    const chrome = document.querySelectorAll("[data-drawer-chrome]");
    gsap.to(chrome, {
      opacity: 0,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => finishClose(listing),
    });
  }, [openListing, finishClose]);

  useLayoutEffect(() => {
    const state = flipState.current;
    flipState.current = null;
    if (!state) return;

    Flip.from(state, {
      // `targets` is mandatory here and easy to miss. By default Flip animates
      // the elements recorded in the state — but those were unmounted by the
      // re-render, so there is nothing left to move and the new node simply
      // appears at its destination. Naming the targets lets Flip re-pair old
      // and new by data-flip-id, which is the entire point of the technique.
      targets: "[data-flip-id]",
      duration: 0.85,
      ease: "power4.inOut",
      absolute: true,
      scale: false,
      onComplete: () => {
        // Hand the drawer back its scroll and its transform, and let
        // ScrollTrigger re-measure — Flip parks elements absolutely mid-flight,
        // so every cached position behind it is stale by the time it lands.
        setMorphing(false);
        ScrollTrigger.refresh();
      },
    });

    if (openListing) {
      gsap.fromTo(
        "[data-drawer-chrome]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.38,
          ease: "power3.out",
          stagger: 0.06,
        },
      );
    }
  }, [openListing]);

  return (
    <LangProvider>
      <Grain />
      <Nav />
      <Hero />
      <Marquee />
      <Listings openId={openListing?.id ?? null} onOpen={open} />
      <Showcase />
      <Philosophy />
      <VideoBand />
      <Testimonials />
      <LeadCapture />
      <Footer />
      <Drawer listing={openListing} morphing={morphing} onClose={close} />
    </LangProvider>
  );
}
