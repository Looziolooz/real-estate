"use client";

import { useState } from "react";
import { LangProvider } from "@/components/lang-context";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Listings from "@/components/listings-section";
import Philosophy from "@/components/philosophy";
import Testimonials from "@/components/testimonials";
import LeadCapture from "@/components/lead-capture";
import Footer from "@/components/footer";
import Drawer from "@/components/drawer";
import type { Listing } from "@/data/listings";

export default function Home() {
  const [openListing, setOpenListing] = useState<Listing | null>(null);

  return (
    <LangProvider>
      <Nav />
      <Hero />
      <Marquee />
      <Listings onOpen={setOpenListing} />
      <Philosophy />
      <Testimonials />
      <LeadCapture />
      <Footer />
      <Drawer listing={openListing} onClose={() => setOpenListing(null)} />
    </LangProvider>
  );
}
