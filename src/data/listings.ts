export interface Listing {
  id: string;
  title: string;
  location: string;
  region: "stockholm" | "skargard" | "vastra" | "skane";
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
    id: "stocksund-villa",
    title: "Villa Stocksund",
    location: "Stocksund, Danderyd",
    region: "stockholm",
    type: "villa",
    price: 28500000,
    priceLabel: "28 500 000 kr",
    sqm: 312,
    rooms: 7,
    badge: "Ny",
    tagline: "Sekelskifteshus vid vattnet med privat brygga",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85&auto=format&fit=crop",
    description: "En generös sekelskiftesvilla med ursprungliga detaljer, högt i tak och stora salar mot Stora Värtan. Renoverad med största respekt för originalet - tegelugn, kassettak och brädgolv i furu. Egen sjötomt om 2 400 m² med brygga och båthus.",
    year: 1904,
    plot: 2400,
    chips: ["Sjötomt", "Brygga", "K-märkt"],
  },
  {
    id: "sodermalm-loft",
    title: "Vindsvåning på Söder",
    location: "Mariaberget, Stockholm",
    region: "stockholm",
    type: "lagenhet",
    price: 14750000,
    priceLabel: "14 750 000 kr",
    sqm: 142,
    rooms: 4,
    badge: "Visning",
    tagline: "Vindsvåning med utsikt över Riddarfjärden",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85&auto=format&fit=crop",
    description: "Råvindsinredd år 2019 av Tham & Videgård. Öppen planlösning under takstolar i furu, kalksten på golvet och måttbeställd köksö i ek. Två takterrasser om totalt 38 m² med fri sikt över fjärden.",
    year: 2019,
    plot: null,
    chips: ["Takterrass", "Hiss", "Utsikt"],
  },
  {
    id: "skane-godsegendom",
    title: "Söderslätt Gård",
    location: "Skåne, Trelleborgs kommun",
    region: "skane",
    type: "gard",
    price: 42000000,
    priceLabel: "42 000 000 kr",
    sqm: 540,
    rooms: 11,
    badge: "Exklusiv",
    tagline: "Skånsk godsegendom från 1820-talet",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=85&auto=format&fit=crop",
    description: "En av Söderslätts vackrast bevarade gårdar. Huvudbyggnad i fyrlängad form, äppellund, smedja och stallar. Brukad åkermark om 38 hektar ingår. Förmedlas exklusivt och med diskretion.",
    year: 1824,
    plot: 380000,
    chips: ["38 hektar", "Ekonomibyggnader", "Diskret"],
  },
  {
    id: "djurgarden-radhus",
    title: "Radhus vid Djurgården",
    location: "Norra Djurgården, Stockholm",
    region: "stockholm",
    type: "radhus",
    price: 19900000,
    priceLabel: "19 900 000 kr",
    sqm: 198,
    rooms: 6,
    badge: null,
    tagline: "Modernt radhus i skogsnära läge",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=85&auto=format&fit=crop",
    description: "Arkitektritat radhus från 2021 i en sluten by om sju hus, ritat av Marge Arkitekter. Trä, betong och stora glaspartier mot ekhagen. Garage, bastu och privat innergård.",
    year: 2021,
    plot: 180,
    chips: ["Bastu", "Garage", "Nyproduktion"],
  },
  {
    id: "varmdo-strand",
    title: "Skärgårdshus, Värmdö",
    location: "Värmdö, Stockholms skärgård",
    region: "skargard",
    type: "villa",
    price: 22500000,
    priceLabel: "22 500 000 kr",
    sqm: 224,
    rooms: 6,
    badge: "Ny",
    tagline: "Året-runt-boende vid Kanholmsfjärden",
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1400&q=85&auto=format&fit=crop",
    description: "Modernt skärgårdshus om två plan, helt i trä, ritat 2018. Öppen spis i sten, glasfasad mot fjärden och utomhusbastu vid stranden. Sjötomt om 4 100 m² med egen brygga.",
    year: 2018,
    plot: 4100,
    chips: ["Sjötomt", "Bastu", "Brygga"],
  },
  {
    id: "goteborg-stadsvilla",
    title: "Stadsvilla i Lorensberg",
    location: "Lorensberg, Göteborg",
    region: "vastra",
    type: "villa",
    price: 17800000,
    priceLabel: "17 800 000 kr",
    sqm: 268,
    rooms: 8,
    badge: null,
    tagline: "Patriciervilla från sekelskiftet",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=85&auto=format&fit=crop",
    description: "Klassisk stadsvilla från 1908 i Göteborgs mest exklusiva kvarter. Renoverad med ursprungliga kakelugnar, parkettgolv i ek och fullhöjdsfönster. Trädgård om 920 m² med uppvuxna bokar.",
    year: 1908,
    plot: 920,
    chips: ["Trädgård", "Kakelugnar", "K-märkt"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "testimonial.1.text",
    name: "testimonial.1.name",
    loc: "testimonial.1.loc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85&auto=format&fit=crop",
  },
  {
    text: "testimonial.2.text",
    name: "testimonial.2.name",
    loc: "testimonial.2.loc",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=85&auto=format&fit=crop",
  },
  {
    text: "testimonial.3.text",
    name: "testimonial.3.name",
    loc: "testimonial.3.loc",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&auto=format&fit=crop",
  },
  {
    text: "testimonial.4.text",
    name: "testimonial.4.name",
    loc: "testimonial.4.loc",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85&auto=format&fit=crop",
  },
];

export const PRINCIPLES: Principle[] = [
  { n: "01", name: "principle.01.name", desc: "principle.01.desc" },
  { n: "02", name: "principle.02.name", desc: "principle.02.desc" },
  { n: "03", name: "principle.03.name", desc: "principle.03.desc" },
  { n: "04", name: "principle.04.name", desc: "principle.04.desc" },
];
