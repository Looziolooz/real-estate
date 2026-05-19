export interface FilterOption {
  id: string;
  labelKey: string;
}

export const REGIONS: FilterOption[] = [
  { id: "alla", labelKey: "listings.filter.all" },
  { id: "stockholm", labelKey: "Stockholm" },
  { id: "skargard", labelKey: "Skärgården" },
  { id: "vastra", labelKey: "Västkusten" },
  { id: "skane", labelKey: "Skåne" },
];

export const TYPES: FilterOption[] = [
  { id: "alla", labelKey: "listings.filter.all" },
  { id: "villa", labelKey: "Villa" },
  { id: "lagenhet", labelKey: "Lägenhet" },
  { id: "radhus", labelKey: "Radhus" },
  { id: "gard", labelKey: "Gård" },
];
