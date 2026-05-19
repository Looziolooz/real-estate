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
