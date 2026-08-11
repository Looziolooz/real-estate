/**
 * ⚠️ AUTHORED DEMONSTRATION CONTENT.
 *
 * None of these houses exist. The names, coordinates, guide prices, readings
 * and descriptions were written to build and judge the design, exactly as a
 * comp is set with real-looking copy. PRODUCT.md forbids presenting any of it
 * as fact; README.md carries the replacement list.
 *
 * What is real: the photographs. Four are generated for this project
 * (`/generated/`), the rest are licensed and self-hosted — see ASSETS.md.
 * Nothing here is hotlinked.
 */

export interface Listing {
  id: string;
  title: string;
  location: string;
  region: "caribbean" | "mediterranean" | "atlantic" | "indian";
  type: "villa" | "lagenhet" | "radhus" | "gard";
  price: number;
  priceLabel: string;
  sqm: number;
  rooms: number;
  badge: string | null;
  tagline: string;
  img: string;
  description: string;
  year: number;
  plot: number | null;
  chips: string[];
  /** The four readings a buyer cannot take from a dark country. */
  readings: { janMean: string; winterSun: string; toWater: string; flight: string };
  coords: string;
  plate: string;
}

export interface Testimonial {
  text: string;
  name: string;
  loc: string;
  avatar: string;
}

export interface Principle {
  n: string;
  name: string;
  desc: string;
}

export interface Region {
  id: string;
  label: string;
}

export interface Type {
  id: string;
  label: string;
}

export const LISTINGS: Listing[] = [
  {
    id: "bimini-pavilion",
    title: "The Sandbar Pavilion",
    location: "North Bimini, Bahamas",
    region: "caribbean",
    type: "radhus",
    price: 6,
    priceLabel: "6h 40 winter sun",
    sqm: 250,
    rooms: 4,
    badge: "Plate IV",
    tagline: "A single-storey pavilion on a sandbar, shaded end to end",
    img: "/generated/azure-sanctuary.jpg",
    description:
      "One room deep, so every space has water on both sides. The roof oversails far enough that the glazing is in shade from ten until four, which is why it stays cool without being dark. The walk to the water is 240 metres, and it is downhill on the way back.",
    year: 2019,
    plot: 4100,
    chips: ["Sandbar", "Shaded terrace", "Own jetty"],
    readings: { janMean: "24°", winterSun: "6h 40", toWater: "240 m", flight: "9h 05" },
    coords: "25°44′ N  79°15′ W",
    plate: "IV",
  },
  {
    id: "malibu-bluff",
    title: "The Bluff House",
    location: "Malibu, California",
    region: "atlantic",
    type: "villa",
    price: 6,
    priceLabel: "6h 10 winter sun",
    sqm: 300,
    rooms: 6,
    badge: null,
    tagline: "Cantilevered concrete holding the Pacific on its western face",
    img: "/generated/aether-heights.jpg",
    description:
      "The whole west elevation is glass, which is a liability everywhere except here: the bluff faces the low winter sun square on. Two volumes, one cantilevered over the slope. In January the terrace is usable until dusk.",
    year: 2016,
    plot: 2400,
    chips: ["Bluff", "Winter terrace", "Infinity pool"],
    readings: { janMean: "19°", winterSun: "6h 10", toWater: "310 m", flight: "11h 20" },
    coords: "34°02′ N  118°42′ W",
    plate: "II",
  },
  {
    id: "raking-light-house",
    title: "The Raking Light House",
    location: "Alentejo, Portugal",
    region: "mediterranean",
    type: "villa",
    price: 5,
    priceLabel: "5h 50 winter sun",
    sqm: 265,
    rooms: 5,
    badge: "New",
    tagline: "One double-height room that earns the whole house",
    img: "/generated/exclusive-collection.jpg",
    description:
      "Every room faces the wrong way except the one you will live in. We nearly discarded it — then saw that room at eight in the morning, with the light raking the length of the travertine. Plaster, oak and stone, and almost nothing else.",
    year: 2021,
    plot: 1800,
    chips: ["Double height", "Travertine", "Courtyard"],
    readings: { janMean: "16°", winterSun: "5h 50", toWater: "18 km", flight: "3h 10" },
    coords: "38°01′ N  8°00′ W",
    plate: "VI",
  },
  {
    id: "pine-slope-cabin",
    title: "The Pine Slope House",
    location: "Sierra de Tramuntana, Mallorca",
    region: "mediterranean",
    type: "radhus",
    price: 5,
    priceLabel: "5h 20 winter sun",
    sqm: 198,
    rooms: 6,
    badge: null,
    tagline: "Timber and glass set into a south-facing slope",
    img: "/showcase/05-9209878.jpg",
    description:
      "Built into the slope so the upper floor opens straight onto the hillside. The pines take the afternoon sun off the terrace in August and let it through entirely in January, which is the arrangement you want and almost never get.",
    year: 2020,
    plot: 900,
    chips: ["South slope", "Pines", "Terrace"],
    readings: { janMean: "15°", winterSun: "5h 20", toWater: "6 km", flight: "3h 25" },
    coords: "39°44′ N  2°42′ E",
    plate: "V",
  },
  {
    id: "dusk-pavilion",
    title: "The Dusk Pavilion",
    location: "Praia da Luz, Algarve",
    region: "atlantic",
    type: "radhus",
    price: 6,
    priceLabel: "6h 05 winter sun",
    sqm: 176,
    rooms: 4,
    badge: null,
    tagline: "Dark timber, lit from within, facing the last of the light",
    img: "/showcase/04-38782153.jpg",
    description:
      "Small, and deliberately so. The whole west side opens, and the overhang is deep enough to sit under in rain. Stained timber outside, lime plaster inside; the contrast is the point at the hour it was named for.",
    year: 2022,
    plot: 620,
    chips: ["West facing", "Deep overhang", "Compact"],
    readings: { janMean: "17°", winterSun: "6h 05", toWater: "400 m", flight: "3h 05" },
    coords: "37°05′ N  8°43′ W",
    plate: "VII",
  },
  {
    id: "vail-winter-house",
    title: "The Cold Counterpoint",
    location: "Vail, Colorado",
    region: "indian",
    type: "gard",
    price: 4,
    priceLabel: "4h 30 winter sun",
    sqm: 400,
    rooms: 8,
    badge: "Off-plate",
    tagline: "The one entry in the catalogue that is not warm",
    img: "/generated/summit-pavilion.jpg",
    description:
      "Kept in the catalogue deliberately. Some buyers want the opposite of a beach, and this is the measure against which the warm entries are judged: three storeys of stained timber, quarried stone and full-height glazing, built into the slope beneath the ridge.",
    year: 2018,
    plot: 3600,
    chips: ["Ski-in", "Stone", "Triple glazing"],
    readings: { janMean: "-4°", winterSun: "4h 30", toWater: "—", flight: "10h 40" },
    coords: "39°38′ N  106°22′ W",
    plate: "IX",
  },
  {
    id: "granite-shore-house",
    title: "The Granite Shore House",
    location: "Paros, Cyclades",
    region: "mediterranean",
    type: "villa",
    price: 5,
    priceLabel: "5h 35 winter sun",
    sqm: 210,
    rooms: 5,
    badge: null,
    tagline: "Low white volumes stepped down bare rock to the water",
    img: "/showcase/01-11616132.jpg",
    description:
      "Three volumes stepped down the rock so no room looks into another. The meltemi is the reason the terraces are sunken; in winter that same shelter is what makes them usable at all.",
    year: 2017,
    plot: 1500,
    chips: ["Sheltered terraces", "Bare rock", "Sea access"],
    readings: { janMean: "13°", winterSun: "5h 35", toWater: "90 m", flight: "3h 40" },
    coords: "37°05′ N  25°09′ E",
    plate: "I",
  },
  {
    id: "orchard-barn",
    title: "The Orchard Barn",
    location: "Val d'Orcia, Tuscany",
    region: "mediterranean",
    type: "gard",
    price: 4,
    priceLabel: "4h 55 winter sun",
    sqm: 340,
    rooms: 7,
    badge: null,
    tagline: "A working barn kept as a barn, with one wall opened to the valley",
    img: "/showcase/02-8112680.jpg",
    description:
      "Converted without pretending it was ever a house. The south wall was opened to full height and everything else left alone: stone, beams, and a threshing floor that is now the living room.",
    year: 1890,
    plot: 12000,
    chips: ["Olive grove", "Original beams", "South wall"],
    readings: { janMean: "9°", winterSun: "4h 55", toWater: "—", flight: "2h 30" },
    coords: "43°04′ N  11°37′ E",
    plate: "III",
  },
  {
    id: "glazed-gable-house",
    title: "The Glazed Gable",
    location: "Tramuntana foothills, Mallorca",
    region: "mediterranean",
    type: "villa",
    price: 5,
    priceLabel: "5h 45 winter sun",
    sqm: 285,
    rooms: 6,
    badge: "New",
    tagline: "One gable given entirely to glass, facing the low sun",
    img: "/showcase/03-12932834.jpg",
    description:
      "The whole south gable is glazed, which in most orientations would be a mistake. Here it faces 18° west of south, so the room is lit from noon until the sun goes behind the ridge — and is in shade by ten in July.",
    year: 2019,
    plot: 2100,
    chips: ["Glazed gable", "Ridge shelter", "Winter terrace"],
    readings: { janMean: "14°", winterSun: "5h 45", toWater: "11 km", flight: "3h 25" },
    coords: "39°42′ N  2°38′ E",
    plate: "VIII",
  },
];

/* Field notes on the houses, not client endorsements — PRODUCT.md forbids
   inventing customers or results. The avatar field is retained for the
   component's shape and points at the plate the note belongs to. */
export const TESTIMONIALS: Testimonial[] = [
  {
    text: "testimonial.1.text",
    name: "testimonial.1.name",
    loc: "testimonial.1.loc",
    avatar: "/generated/azure-sanctuary.jpg",
  },
  {
    text: "testimonial.2.text",
    name: "testimonial.2.name",
    loc: "testimonial.2.loc",
    avatar: "/generated/aether-heights.jpg",
  },
  {
    text: "testimonial.3.text",
    name: "testimonial.3.name",
    loc: "testimonial.3.loc",
    avatar: "/generated/exclusive-collection.jpg",
  },
  {
    text: "testimonial.4.text",
    name: "testimonial.4.name",
    loc: "testimonial.4.loc",
    avatar: "/showcase/04-38782153.jpg",
  },
];

export const PRINCIPLES: Principle[] = [
  { n: "01", name: "principle.01.name", desc: "principle.01.desc" },
  { n: "02", name: "principle.02.name", desc: "principle.02.desc" },
  { n: "03", name: "principle.03.name", desc: "principle.03.desc" },
  { n: "04", name: "principle.04.name", desc: "principle.04.desc" },
];
