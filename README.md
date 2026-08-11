# Nordhem

> **Italiano** · [Svenska](#svenska) · [English](#english)

---

## Italiano

**Nordhem** è un progetto Next.js 16 + Tailwind CSS v4 che replica il sito di un'agenzia immobiliare scandinava di fascia alta. L'interfaccia è un porting fedele di un prototipo React standalone, con supporto multilingua integrato.

### Caratteristiche

- **Tre lingue**: Italiano, Svedese, Inglese — toggle nella navbar
- **Design system completo**: palette, tipografia (Instrument Serif, JetBrains Mono, Space Grotesk), animazioni
- **Sezioni**: Hero con ricerca, Marquee città scorrevole, Griglia proprietà asimmetrica con filtri, Detail drawer, Filosofia, Testimonial carosello, Lead capture form, Footer
- **Next.js 16** con App Router e Turbopack
- **Tailwind CSS v4** con PostCSS
- **TypeScript** — tipizzato end-to-end

### Struttura

```
src/
├── app/
│   ├── globals.css        # CSS puro, nessun componente Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Pagina principale
├── components/
│   ├── lang-context.tsx   # Provider multilingua (IT/SV/EN)
│   ├── language-toggle.tsx
│   ├── icons.tsx          # Sistema icone SVG inline
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── marquee.tsx
│   ├── listing-card.tsx
│   ├── listinsg-section.tsx
│   ├── drawer.tsx
│   ├── philosophy.tsx
│   ├── testimonials.tsx
│   ├── lead-capture.tsx
│   └── footer.tsx
└── data/
    ├── translations.ts    # ~250 chiavi tradotte
    ├── listinsg.ts        # 6 proprietà + dati
    └── regions.ts
```

### Installazione

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Tech Stack

| Strumento       | Versione |
|----------------|----------|
| Next.js        | 16.2.6   |
| React          | 19.2.4   |
| Tailwind CSS   | 4.x      |
| TypeScript     | 5.x      |
| Font Google    | Instrument Serif, JetBrains Mono, Space Grotesk |

---

## Svenska

**Nordhem** är ett Next.js 16 + Tailwind CSS v4-projekt som återskapar en exklusiv skandinavisk fastighetsmäklarwebbplats. Gränssnittet är en trogen överföring från en fristående React-prototyp med inbyggt flerspråksstöd.

### Funktioner

- **Tre språk**: Svenska, Italienska, Engelska — växla i navigeringsfältet
- **Komplett designsystem**: palett, typografi (Instrument Serif, JetBrains Mono, Space Grotesk), animationer
- **Sektioner**: Hero med sökning, rullande stadsmarquee, asymmetriskt egendomsrutnät med filter, detaljpanel, filosofi, testimonialkarusell, leadformulär, sidfot
- **Next.js 16** med App Router och Turbopack
- **Tailwind CSS v4** med PostCSS
- **TypeScript** — fullständigt typat

### Struktur

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── lang-context.tsx
│   ├── language-toggle.tsx
│   ├── icons.tsx
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── marquee.tsx
│   ├── listing-card.tsx
│   ├── listinsg-section.tsx
│   ├── drawer.tsx
│   ├── philosophy.tsx
│   ├── testimonials.tsx
│   ├── lead-capture.tsx
│   └── footer.tsx
└── data/
    ├── translations.ts
    ├── listinsg.ts
    └── regions.ts
```

### Installation

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

### Bygg

```bash
npm run build
npm start
```

### Teknikstack

| Verktyg         | Version |
|----------------|---------|
| Next.js        | 16.2.6  |
| React          | 19.2.4  |
| Tailwind CSS   | 4.x     |
| TypeScript     | 5.x     |
| Google Fonts   | Instrument Serif, JetBrains Mono, Space Grotesk |

---

## English

**Nordhem** is a Next.js 16 + Tailwind CSS v4 project that replicates an upscale Scandinavian real estate agency website. The interface is a faithful port of a standalone React prototype with built-in multilingual support.

### Features

- **Three languages**: English, Swedish, Italian — switch via navbar toggle
- **Complete design system**: palette, typography (Instrument Serif, JetBrains Mono, Space Grotesk), animations
- **Sections**: Hero with search, scrolling city marquee, asymmetric property grid with filters, detail drawer, philosophy, testimonial carousel, lead capture form, footer
- **Next.js 16** with App Router and Turbopack
- **Tailwind CSS v4** with PostCSS
- **TypeScript** — end-to-end typed

### Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── lang-context.tsx
│   ├── language-toggle.tsx
│   ├── icons.tsx
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── marquee.tsx
│   ├── listing-card.tsx
│   ├── listinsg-section.tsx
│   ├── drawer.tsx
│   ├── philosophy.tsx
│   ├── testimonials.tsx
│   ├── lead-capture.tsx
│   └── footer.tsx
└── data/
    ├── translations.ts
    ├── listinsg.ts
    └── regions.ts
```

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Tech Stack

| Tool            | Version |
|----------------|---------|
| Next.js        | 16.2.6  |
| React          | 19.2.4  |
| Tailwind CSS   | 4.x     |
| TypeScript     | 5.x     |
| Google Fonts   | Instrument Serif, JetBrains Mono, Space Grotesk |

---

## Motion layer

Ported from the ZENITH layout study. It is additive: every file below is new,
and the existing components were touched only to hang animation onto what was
already there. The layout, the copy and the Swedish content are unchanged.

| What | Where | Technique |
|---|---|---|
| Config, plugins, smooth scroll | `src/lib/motion.ts` | GSAP + ScrollTrigger + Flip, Lenis on GSAP's ticker |
| Section entrances | `src/lib/use-reveal.ts` | declarative `[data-anim]` attributes → ScrollTrigger |
| Background video | `src/components/bg-video.tsx` | lazy `src`, pauses off-screen, poster-only under reduced motion |
| Full-bleed band | `src/components/video-band.tsx` | scrubbed `clip-path` open + parallax drift over video |
| Card → drawer | `src/app/page.tsx` + `drawer.tsx` | **GSAP Flip** — one continuous object, not a cross-fade |
| Hero figures | `src/components/count-up.tsx` | counts once on enter; the real figure stays in the DOM |
| Cursor, buttons, grain | `cursor.tsx`, `magnetic.tsx`, `grain.tsx` | `gsap.quickTo`, eased release, inline SVG turbulence |

### Two things worth knowing before editing

**`Flip.from` needs `targets`.** The card and the drawer are different DOM
nodes. By default Flip animates the elements recorded in the state — and those
were unmounted by the re-render, so without `targets: "[data-flip-id]"` the new
node simply appears at its destination with no flight. It looks like a working
morph in a DOM-state test and is plainly wrong on screen.

**The drawer sheds two properties mid-morph.** `.drawer.morphing` drops the
slide `transform` (which would otherwise put the panel off-screen while Flip
measured where the image should land) and `overflow-y: auto` (which would shear
the image off at the panel edge on the way in). The class comes off when the
morph lands. Since `.drawer.open` is `translateX(0)`, removing `transform:none`
is visually identical — nothing jumps.

### Reduced motion

`prefers-reduced-motion: reduce` is a hard gate, not a dimmer: no Lenis, no
custom cursor, no grain, no ScrollTrigger, no Flip, and the hero renders a
single static frame. `globals.css` forces every `[data-anim]` element visible,
so no content depends on a timeline having run.

### Known, not fixed

The "all" chip on the **type** filter reads *Alla regioner*. `REGIONS` and
`TYPES` share one translation key (`listings.filter.all`) in `src/data/regions.ts`,
so both read as regions. It needs a second key across the three languages —
left alone as a content change rather than a motion one.

### On the hero backdrop

An earlier pass put a WebGL landscape behind the hero. It was removed: the hero
already has a featured image on the right, so a second scene behind it competed
rather than supported, and it dragged the left half off nordhem's sand into a
murkier olive. The lesson is in the layout, not the technique — a generated
backdrop needs a hero with nothing else in it.

The featured panel is now a video, and there is a full-bleed video band between
the philosophy and the testimonials. Both are self-hosted; see ASSETS.md.

### Video weight

The hero clip (2.1 MB) loads immediately because it is above the fold. The band
clip (4.7 MB) has no `src` until an IntersectionObserver says it is within 300px
of the viewport, so it costs nothing on first paint — verified: at the top of
the page `video.currentSrc` on the band is empty.
