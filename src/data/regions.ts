export interface FilterOption {
  id: string;
  labelKey: string;
}

/* `labelKey` is passed through `t()`, so a literal here renders as itself and a
   real key resolves — see the chips in listings-section.tsx. Place names stay
   literal; only "all" needs translating. */

export const REGIONS: FilterOption[] = [
  { id: "alla", labelKey: "listings.filter.all" },
  { id: "caribbean", labelKey: "Caribbean" },
  { id: "mediterranean", labelKey: "Mediterranean" },
  { id: "atlantic", labelKey: "Atlantic" },
  { id: "indian", labelKey: "Mountain" },
];

export const TYPES: FilterOption[] = [
  { id: "alla", labelKey: "listings.filter.all" },
  { id: "villa", labelKey: "House" },
  { id: "lagenhet", labelKey: "Apartment" },
  { id: "radhus", labelKey: "Pavilion" },
  { id: "gard", labelKey: "Estate" },
];
