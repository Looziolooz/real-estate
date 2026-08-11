# ASSETS — nordhem

## Video — self-hosted, licenza commerciale verificata

| File | Sorgente | Soggetto | Data | Licenza |
|---|---|---|---|---|
| `public/video/hero-interior.mp4` (2.1 MB, 960×540) | Pexels [video 10135156](https://www.pexels.com/video/modern-minimalist-living-room-10135156/) | Interno contemporaneo, panoramica lenta | 2026-08-10 | Pexels License |
| `public/video/nordic-winter.mp4` (4.7 MB, 1280×720) | Pexels [video 14413889](https://www.pexels.com/video/winter-wonderland-in-norway-14413889/) | Paesaggio invernale norvegese | 2026-08-10 | Pexels License |
| `public/video/*.jpg` | primo fotogramma estratto dai file qui sopra | poster | 2026-08-10 | come sopra |

**Pexels License** (verificata su <https://www.pexels.com/license/> il 2026-08-10): uso
commerciale consentito, attribuzione non richiesta, modifica consentita. Vietato:
rivendere copie non modificate, ridistribuire su piattaforme stock concorrenti,
usare come marchio, o suggerire un endorsement. Un video di sfondo decorativo su
un sito cliente rientra pienamente nei termini.

I file sono **scaricati e serviti da `public/`**, mai in hotlink dal CDN di Pexels:
se Pexels cambia URL o rimuove il clip, il sito non se ne accorge.

### Perché non generati

`/text-to-video` richiede `REPLICATE_API_TOKEN`, non configurato su questa
macchina. La regola del repo prevede esattamente questa alternativa — stock
licenziato con licenza documentata — ed è la strada presa. I poster sono stati
estratti via canvas nel browser: il ffmpeg incluso in Playwright è una build
ridotta senza `libx264`/`-movflags`, quindi non è utilizzabile per transcodifica.
Per questo le clip sono state scaricate direttamente nella resa più leggera
offerta da Pexels invece che ricompresse.


## ⚠️ Listing photography is on a third-party CDN

Every listing in `src/data/listings.ts`, the hero image, and the testimonial
avatars load from `images.unsplash.com`. This predates the motion work and was
**not** introduced by it, but it is worth stating plainly because it breaks the
repo rule in the root `AGENTS.md`: if Unsplash stops serving those URLs, or the
photo is taken down, the site loses its imagery.

Fixing it means generating or licensing Swedish property photography and
serving it from `public/`. Not done here — it is a content job, not a motion
job, and it needs the Canva quota (exhausted at the time of writing) or the
client's own licensed shots.

## Generated imagery, held in reserve

| File | Sorgente | Prompt (sintesi) | Data | Licenza |
|---|---|---|---|---|
| `public/generated/aether-heights.jpg` | Canva MCP (design `DAHR5VG6D-U`) | Cliffside villa, Malibu, golden hour — concrete and glass over the Pacific | 2026-08-10 | generato, uso cliente |
| `public/generated/azure-sanctuary.jpg` | Canva MCP (design `DAHR5UIxnJQ`) | Beachfront pavilion, Bimini — white stone and pale timber on powder sand | 2026-08-10 | generato, uso cliente |
| `public/generated/summit-pavilion.jpg` | Canva MCP (design `DAHR5SyHi5k`) | Alpine chalet, Vail — stained timber, stone and glass in snow, blue hour | 2026-08-10 | generato, uso cliente |
| `public/generated/exclusive-collection.jpg` | Canva MCP (design `DAHR5bT7Xcw`) | Double-height living space — travertine, plaster, linen, warm oak | 2026-08-10 | generato, uso cliente |

These four were produced for the ZENITH layout study and are **not currently
used by any component**. They are kept because the Canva generation quota is
exhausted, which makes them presently irreplaceable, and because they are the
only licence-clean photography this project owns. None of them is a Swedish
subject, so none is a drop-in replacement for a listing.

## The hero backdrop is not a file

`src/components/hero-canvas.tsx` renders the hero background in WebGL — low
timber volumes across still water, dissolving into haze, in the palette from
`globals.css`. There is no image and no video behind the headline, so there is
nothing to license and no host that can take it down. It pauses itself when the
hero scrolls away and renders a single static frame under
`prefers-reduced-motion`.

## Icons and fonts

Icons are hand-drawn SVG paths in `src/components/icons.tsx` — no icon
dependency. Fonts are Instrument Serif, Space Grotesk and JetBrains Mono from
Google Fonts (SIL Open Font License), imported at the top of `globals.css`.
