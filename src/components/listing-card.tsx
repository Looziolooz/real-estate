"use client";

import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";
import type { Listing } from "@/data/listings";

export default function ListingCard({
  listing,
  span,
  tall,
  liked,
  onLike,
  onOpen,
}: {
  listing: Listing;
  span: string;
  tall: boolean;
  liked: boolean;
  onLike: () => void;
  onOpen: () => void;
}) {
  const { t } = useLang();

  return (
    <article
      className={`listing ${span} ${tall ? "tall" : ""}`}
      onClick={onOpen}
      style={{ cursor: "pointer" }}
    >
      <div className="listing-img">
        <img src={listing.img} alt={listing.title} />
        {listing.badge && (
          <span
            className={`listing-badge ${listing.badge === "Ny" ? "new" : ""}`}
          >
            {listing.badge}
          </span>
        )}
        <button
          className={`listing-fav ${liked ? "liked" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onLike();
          }}
          aria-label={t("listing.save")}
        >
          <Icon name="heart" size={16} stroke={1.6} />
        </button>
        <div className="listing-overlay-cta">
          <span>{t("listing.viewDetails")}</span>
          <Icon name="arrowUpRight" size={14} />
        </div>
      </div>
      <div className="listing-meta-row">
        <span className="listing-location">{listing.location}</span>
        <span className="listing-price">{listing.priceLabel}</span>
      </div>
      <h3 className="listing-title">{listing.title}</h3>
      <div className="listing-specs">
        <span>{listing.sqm} m²</span>
        <span>
          {listing.rooms} {t("listing.rooms")}
        </span>
        <span>{listing.year}</span>
      </div>
    </article>
  );
}
