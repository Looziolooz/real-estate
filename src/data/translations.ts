/**
 * Meridia — copy.
 *
 * Single language. The previous build carried it/sv/en with a toggle; the
 * rebrand is English-only (PRODUCT.md § Capabilities), so the shape is kept —
 * `Record<Lang, ...>` with one member — rather than ripping `t()` out of forty
 * components for no gain.
 *
 * ⚠️ Every property, figure and note below is AUTHORED DEMONSTRATION CONTENT.
 * There are no real listings, prices, clients or results. Nothing here may be
 * presented as fact, and the replacement list lives in README.md.
 */

export type Lang = "en";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // ---- the horizontal plate band ------------------------------------
    "showcase.title": "Nine houses, plotted",
    "showcase.subtitle":
      "The whole catalogue, end to end. Four years of looking, and everything that did not survive it is missing on purpose.",
    "showcase.alt1": "Low house against a hillside, warm light in the windows",
    "showcase.alt2": "Timber volume with vertical cladding and a dark roof",
    "showcase.alt3": "House with a fully glazed gable among trees",
    "showcase.alt4": "Dark timber pavilion at dusk",
    "showcase.alt5": "A-frame house among pines",
    "showcase.alt6": "Double-height living room with raking light",

    // ---- the full-bleed band ------------------------------------------
    "band.line1": "You will not stand in the room",
    "band.line2": "before you decide.",
    "band.caption": "Which is why we measure it for you",

    // ---- navigation ----------------------------------------------------
    "nav.home": "The Catalogue",
    "nav.search": "Latitudes",
    "nav.sell": "How it works",
    "nav.philosophy": "What we look for",
    "nav.about": "About",
    "nav.journal": "Notes",
    "nav.consultation": "Book a viewing",
    "nav.menu": "Menu",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",

    // ---- hero ----------------------------------------------------------
    "hero.eyebrow": "Nine entries · Six latitudes",
    "hero.title1": "The house that",
    "hero.title2": "faces",
    "hero.title3": "the winter sun.",
    "hero.subtitle":
      "Nine houses in warm places, chosen over four years. Each one plotted with the measurements you cannot take from a dark country — where the light falls in January, how far the water is, how long the flight takes.",
    "hero.stat1": "Houses in the catalogue",
    "hero.stat2": "Spent finding them",
    "hero.stat3": "Latitudes covered",
    "hero.stat3suffix": "°N",
    "hero.featured": "Plate IV · Entry 02 of 09",
    "hero.featuredlabel": "25°44′ N  79°15′ W · observed march",

    // ---- the finder ------------------------------------------------------
    "search.placeholder": "Coast, island or region",
    "search.price": "Winter sun",
    "search.type": "Kind of house",
    "search.any": "Any",
    "search.upTo10": "Under 5 hours a day",
    "search.10to20": "5 – 6 hours a day",
    "search.20to35": "6 – 7 hours a day",
    "search.over35": "Over 7 hours a day",
    "search.all": "All",
    "search.villa": "House",
    "search.apartment": "Apartment",
    "search.townhouse": "Pavilion",
    "search.farm": "Estate",
    "search.submit": "Plot it",

    "signature": "A catalogue of nine · Observed since 2022",

    // ---- the catalogue ---------------------------------------------------
    "listings.eyebrow": "The catalogue · 2026",
    "listings.title1": "Everything we kept",
    "listings.title2": "after the discarding.",
    "listings.subtitle":
      "Nine houses is the whole portfolio. It is small because the point of Meridia is what is missing from it.",
    "listings.viewAll": "The whole catalogue",
    "listings.filter.region": "Latitude",
    "listings.filter.all": "All latitudes",
    "listings.filter.type": "Kind",
    "listings.filter.sort": "Order",
    "listings.sort.featured": "By plate",
    "listings.sort.priceUp": "Winter sun (least)",
    "listings.sort.priceDown": "Winter sun (most)",
    "listings.sort.size": "Size (m²)",
    "listings.count": "entries",
    "listings.countSingle": "entry",
    "listings.empty": "Nothing at this latitude — widen the search.",

    // ---- an entry --------------------------------------------------------
    "listing.viewDetails": "Open the plate",
    "listing.save": "Mark",
    "listing.showing": "Viewing",
    "listing.new": "New",
    "listing.exclusive": "Off-plate",
    "listing.rooms": "rooms",
    "listing.plot": "Plot",
    "listing.type": "Kind",
    "listing.year": "Built",
    "listing.area": "Living area",
    "listing.price": "Guide",
    "listing.bookVisit": "Book a viewing",
    "listing.contactAgent": "Ask about this house",
    "listing.agent": "Who found it",

    // ---- what we look for -------------------------------------------------
    "philosophy.eyebrow": "What we look for",
    "philosophy.title1": "A second home is not an asset",
    "philosophy.title2": "It is a month of your year.",
    "philosophy.subtitle":
      "We buy for the version of you who arrives in January, not the one who signs in June. That means light before floor area, shelter before frontage, and a walk to water you would actually take.",
    "philosophy.quote": "January is the only month that tells the truth",
    "philosophy.imgLabel": "Plate VI · Interior, observed",
    "principle.01.name": "Winter first",
    "principle.01.desc":
      "Every house is visited in the worst month it has. A place that holds up in January holds up in August without being asked.",
    "principle.02.name": "Measured, not described",
    "principle.02.desc":
      "Sun hours, sea distance, flight time, January mean. Numbers you can check against a house you have never stood in.",
    "principle.03.name": "Nine, not nine hundred",
    "principle.03.desc":
      "The catalogue stays small. Adding a house means removing one, and that constraint is the entire product.",
    "principle.04.name": "Slow on purpose",
    "principle.04.desc":
      "Most people take a winter to decide. Nothing here is built to rush that, and no house is held back to create urgency.",

    // ---- notes from the catalogue (not testimonials) -----------------------
    "testimonials.eyebrow": "From the field notes",
    "testimonials.title1": "What we wrote down",
    "testimonials.title2": "when we first saw them.",
    "testimonials.prev": "Previous",
    "testimonials.next": "Next",

    // ---- enquiry ----------------------------------------------------------
    "lead.eyebrow": "Book a viewing",
    "lead.title1": "Tell us the",
    "lead.title2": "month",
    "lead.title3": "you would arrive.",
    "lead.subtitle":
      "We will tell you what the light does then, what is open, and whether the house is worth the flight. If it is not, we will say so.",
    "lead.stat1": "9",
    "lead.stat1label": "Houses in the catalogue",
    "lead.stat2": "6",
    "lead.stat2label": "Latitudes",
    "lead.stat3": "4 yrs",
    "lead.stat3label": "Spent finding them",
    "lead.stat4": "1",
    "lead.stat4label": "Viewing at a time",
    "lead.form.name": "Name",
    "lead.form.namePlaceholder": "Your name",
    "lead.form.phone": "Phone",
    "lead.form.phonePlaceholder": "+00 000 000 000",
    "lead.form.email": "Email",
    "lead.form.emailPlaceholder": "you@example.com",
    "lead.form.address": "Which entry",
    "lead.form.addressPlaceholder": "Plate IV — or 'not sure yet'",
    "lead.form.type": "Kind of house",
    "lead.form.timing": "When would you go",
    "lead.form.timing3": "This winter",
    "lead.form.timing6": "Within six months",
    "lead.form.timing12": "Within the year",
    "lead.form.timingCurious": "Just looking",
    "lead.form.message": "Anything else (optional)",
    "lead.form.messagePlaceholder": "What the house would have to do for you…",
    "lead.form.submit": "Request the viewing",
    "lead.form.thanks": "Noted — we will write back",

    // ---- footer -------------------------------------------------------------
    "footer.description":
      "A catalogue of nine houses in warm places, kept deliberately small.",
    "footer.properties": "The catalogue",
    "footer.forSale": "Open entries",
    "footer.upcoming": "Being observed",
    "footer.sold": "Closed",
    "footer.holiday": "By latitude",
    "footer.farms": "Estates",
    "footer.services": "How it works",
    "footer.sellWithUs": "Bringing us a house",
    "footer.valuation": "Book a viewing",
    "footer.discrete": "Off-plate entries",
    "footer.international": "Buying across a border",
    "footer.company": "Meridia",
    "footer.contact": "Contact",
    "footer.career": "Working with us",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",
    "footer.conduct": "How we work",
    "footer.org": "Meridia — demonstration build",
    "footer.copyright": "© 2026 Meridia",

    // Field notes on the houses themselves — deliberately NOT invented client
    // endorsements. PRODUCT.md forbids fabricating customers or results.
    "testimonial.1.text":
      "Arrived at four in the afternoon in January and the terrace was still warm. That is the whole reason this one is in the catalogue.",
    "testimonial.1.name": "Plate II",
    "testimonial.1.loc": "Observed 14 January",
    "testimonial.2.text":
      "The walk to the water is 240 metres and it is downhill on the way back, which sounds like nothing and is not nothing at seventy.",
    "testimonial.2.name": "Plate IV",
    "testimonial.2.loc": "Observed 2 March",
    "testimonial.3.text":
      "Every room faces the wrong way except the one you will live in. We nearly discarded it. Then we saw that room at eight in the morning.",
    "testimonial.3.name": "Plate VI",
    "testimonial.3.loc": "Observed 21 November",
    "testimonial.4.text":
      "Six hours forty of usable sun in midwinter, measured on site, not modelled. The highest reading in the catalogue.",
    "testimonial.4.name": "Plate VII",
    "testimonial.4.loc": "Observed 9 January",
  },
};
