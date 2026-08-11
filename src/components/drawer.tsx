"use client";

import { useEffect } from "react";
import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";
import type { Listing } from "@/data/listings";

export default function Drawer({
  listing,
  morphing,
  onClose,
}: {
  listing: Listing | null;
  /** True while the card image is in flight to or from this panel. */
  morphing: boolean;
  onClose: () => void;
}) {
  const { t } = useLang();

  useEffect(() => {
    if (listing) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [listing]);

  return (
    <>
      <div
        className={`drawer-backdrop ${listing ? "open" : ""}`}
        onClick={onClose}
      />
      {/* `.morphing` drops the slide transform and the scroll clip for the
          duration of the flight. The transform would put the panel off-screen
          while Flip measured where the image should land, and `overflow-y:auto`
          would shear the image off at the panel edge on the way in. Once the
          morph lands the class comes off, restoring the scroll — and since
          `.drawer.open` is `translateX(0)`, dropping `transform:none` is
          visually identical, so nothing jumps. */}
      <aside
        className={`drawer ${listing ? "open" : ""} ${morphing ? "morphing" : ""}`}
      >
        {listing && (
          <>
            <button
              className="drawer-close"
              onClick={onClose}
              aria-label="Stäng"
              data-drawer-chrome
            >
              <Icon name="close" size={16} />
            </button>
            <div className="drawer-img">
              <div className="flip-frame" data-flip-id={listing.id}>
                <img src={listing.img} alt={listing.title} />
              </div>
            </div>
            <div className="drawer-body" data-drawer-chrome>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                {listing.location}
              </div>
              <h2
                className="h1"
                style={{ fontSize: "clamp(34px,4vw,52px)" }}
              >
                {listing.title}
              </h2>
              <p
                className="lead italic"
                style={{ color: "var(--muted)", marginTop: 8 }}
              >
                {listing.tagline}
              </p>

              <div className="spec-grid">
                <div className="spec-cell">
                  <div className="label">{t("listing.price")}</div>
                  <div className="val">{listing.priceLabel}</div>
                </div>
                <div className="spec-cell">
                  <div className="label">{t("listing.area")}</div>
                  <div className="val">{listing.sqm} m²</div>
                </div>
                <div className="spec-cell">
                  <div className="label">{t("listing.rooms")}</div>
                  <div className="val">{listing.rooms}</div>
                </div>
                <div className="spec-cell">
                  <div className="label">{t("listing.year")}</div>
                  <div className="val">{listing.year}</div>
                </div>
                <div className="spec-cell">
                  <div className="label">{t("listing.plot")}</div>
                  <div className="val">
                    {listing.plot
                      ? `${listing.plot.toLocaleString("sv-SE")} m²`
                      : "—"}
                  </div>
                </div>
                <div className="spec-cell">
                  <div className="label">{t("listing.type")}</div>
                  <div
                    className="val"
                    style={{ textTransform: "capitalize" }}
                  >
                    {listing.type === "lagenhet"
                      ? t("search.apartment")
                      : listing.type === "gard"
                        ? t("search.farm")
                        : t("search." + listing.type)}
                  </div>
                </div>
              </div>

              <p className="body-serif">{listing.description}</p>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  margin: "28px 0 36px",
                }}
              >
                {listing.chips.map((c) => (
                  <span
                    key={c}
                    className="chip"
                    style={{ pointerEvents: "none", background: "var(--bg-paper)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-primary">
                  {t("listing.bookVisit")}
                  <Icon name="arrow" size={14} />
                </button>
                <button className="btn btn-ghost">
                  {t("listing.contactAgent")}
                </button>
              </div>

              <div
                style={{
                  marginTop: 40,
                  paddingTop: 28,
                  borderTop: "1px solid var(--line)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "var(--bg-paper)",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=85&auto=format&fit=crop"
                    alt="Agent"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 19,
                      fontWeight: 500,
                    }}
                  >
                    Eleonora Lindqvist
                  </div>
                  <div className="meta">
                    {t("listing.agent")} · 08 — 555 142 03
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
