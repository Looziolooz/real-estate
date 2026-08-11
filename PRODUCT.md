# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Affluent Northern European buyers, roughly 45–65, looking for a second home
somewhere warm. They will use it themselves for part of the year; this is not a
yield calculation.

The buying scene is the important fact: the decision starts in a dark northern
winter, months before anyone contacts an agent. It is emotional first and
verified second — long research, many returns to the same few properties,
comparison against a mental picture of a life rather than against a spreadsheet.

## Product Purpose

Meridia presents a curated portfolio of holiday homes in warm climates and
carries a buyer from "somewhere like this" to a booked viewing. Success is a
qualified enquiry on a specific property, not traffic.

## Positioning

Curation over inventory. The portfolio is small and chosen; every property is
shown at length rather than listed. The competing behaviour is the portal with
thousands of results and a filter bar — Meridia's claim is that someone has
already done the discarding.

## Operating Context

- Buyers browse over months, mostly in the evening, mostly on a phone, from a
  cold place, imagining a warm one.
- They return repeatedly to the same handful of properties before enquiring.
- The purchase is cross-border: the buyer is not in the country the property is
  in, and has never stood in the room.

## Capabilities and Constraints

- Static marketing site. No account, no saved search, no live availability.
- Enquiry is the only transaction: a form and a booked call.
- Single language: **English only**. The previous three-language setup
  (it / sv / en) and its toggle are retired with this rebrand.
- Existing stack is kept: Next.js 16 App Router, React 19, TypeScript,
  CSS custom properties, GSAP + Lenis motion layer.
- **Undecided:** which countries the portfolio actually covers. Property names,
  addresses and prices in the current build are placeholders inherited from the
  previous brand and must be replaced with real ones before launch.

## Brand Commitments

- Name: **Meridia**. Chosen this session; no prior logo, wordmark or palette.
- No inherited visual commitments. The previous identity (Nordhem: Swedish
  broker, sand palette, Nordic type) is explicitly retired and is
  anti-reference, not authority.

## Evidence on Hand

- Licence-clean imagery generated for this project in `public/generated/`:
  a Malibu cliffside villa, a Bahamas beach pavilion, a Colorado alpine chalet,
  and a double-height interior. These are the only owned photographs.
- Licensed stock video, self-hosted, in `public/video/` (Pexels License,
  commercial use, documented in ASSETS.md).
- Stock architecture photography in `public/showcase/` (same licence terms).
- **No real property data exists.** There are no genuine listings, prices,
  clients, testimonials or track-record figures. The current "248 homes /
  14 years / 4.9 rating" and all six properties are inherited placeholders.
  Future work must not present them as fact or invent replacements.

## Product Principles

1. **Curation is the product.** Fewer properties, shown longer. Anything that
   makes this feel like a searchable portal works against the positioning.
2. **Sell the life, verify the asset.** The first pass is emotional; the second
   is forensic. Both have to be served, in that order, without the second
   undermining the first.
3. **Built for the returning visitor.** Someone comes back to the same property
   five times over three months. Depth beats novelty.
4. **Phone first, at night.** The real reading scene is a small screen in a dark
   room, not a studio monitor.
5. **Never fabricate the record.** Placeholders stay visibly placeholder until
   real content arrives.

## Accessibility & Inclusion

Motion is decorative throughout; `prefers-reduced-motion` must remain a hard
gate, not a dimmer. The audience skews 45–65, so body text has to survive
zoom and generous default font sizes.
