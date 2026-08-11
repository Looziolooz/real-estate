"use client";

import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";
import type { Listing } from "@/data/listings";

export default function ListingCard({
  listing,
  span,
  tall,
  liked,
  morphing,
  onLike,
  onOpen,
}: {
  listing: Listing;
  span: string;
  tall: boolean;
  liked: boolean;
  /** True while this listing owns the open drawer, so the card yields its
   *  flip id to the drawer's image for the duration. */
  morphing: boolean;
  onLike: () => void;
  onOpen: () => void;
}) {
  const { t } = useLang();

  return (
    <article
      data-anim="fade-up"
      className={`listing ${span} ${tall ? "tall" : ""}`}
      onClick={onOpen}
      style={{ cursor: "pointer" }}
    >
      <div className="listing-img">
        {/* Flip target. Rendered only while this listing is *not* the open one,
            so exactly one element in the document ever carries a given
            data-flip-id — the invariant the morph depends on. */}
        {!morphing && (
          <div className="flip-frame" data-flip-id={listing.id}>
            <img src={listing.img} alt={listing.title} />
          </div>
        )}
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
