"use client";

import { useState, useMemo } from "react";
import { useLang } from "@/components/lang-context";
import { LISTINGS } from "@/data/listings";
import { REGIONS, TYPES } from "@/data/regions";
import ListingCard from "@/components/listing-card";
import { Icon } from "@/components/icons";

const spanPattern = ["span-7", "span-5", "span-5", "span-7", "span-8", "span-4"];

export default function Listings({ onOpen }: { onOpen: (l: any) => void }) {
  const { t } = useLang();
  const [region, setRegion] = useState("alla");
  const [type, setType] = useState("alla");
  const [sort, setSort] = useState("featured");
  const [liked, setLiked] = useState(new Set(["sodermalm-loft"]));

  const filtered = useMemo(() => {
    let list = LISTINGS.filter(
      (l) =>
        (region === "alla" || l.region === region) &&
        (type === "alla" || l.type === type),
    );
    if (sort === "price-up") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-down") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "size") list = [...list].sort((a, b) => b.sqm - a.sqm);
    return list;
  }, [region, type, sort]);

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="bostader">
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              {t("listings.eyebrow")}
            </div>
            <h2 className="h1">
              {t("listings.title1")}{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                {t("listings.title2")}
              </span>
            </h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: 580 }}>
              {t("listings.subtitle")}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a
              href="#"
              className="underline-link"
              style={{ color: "var(--ink)" }}
            >
              {t("listings.viewAll")}
            </a>
          </div>
        </div>

        <div className="filter-bar">
          <span className="filter-label">{t("listings.filter.region")}</span>
          {REGIONS.map((r) => (
            <button
              key={r.id}
              className={`chip ${region === r.id ? "active" : ""}`}
              onClick={() => setRegion(r.id)}
            >
              {r.labelKey}
            </button>
          ))}
          <span className="filter-divider"></span>
          <span className="filter-label">{t("listings.filter.type")}</span>
          {TYPES.map((tOption) => (
            <button
              key={tOption.id}
              className={`chip ${type === tOption.id ? "active" : ""}`}
              onClick={() => setType(tOption.id)}
            >
              {tOption.labelKey}
            </button>
          ))}
          <span className="filter-divider"></span>
          <span className="filter-label">{t("listings.filter.sort")}</span>
          <select
            className="chip"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              appearance: "none",
              paddingRight: 30,
              backgroundImage:
                'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\'><path d=\'m6 9 6 6 6-6\'/></svg>")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            <option value="featured">{t("listings.sort.featured")}</option>
            <option value="price-up">{t("listings.sort.priceUp")}</option>
            <option value="price-down">{t("listings.sort.priceDown")}</option>
            <option value="size">{t("listings.sort.size")}</option>
          </select>
          <div style={{ marginLeft: "auto", fontSize: 13, color: "var(--muted)" }}>
            {filtered.length}{" "}
            {filtered.length === 1 ? t("listings.countSingle") : t("listings.count")}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div style={{ padding: "120px 0", textAlign: "center" }}>
            <p className="lead italic" style={{ color: "var(--muted)" }}>
              {t("listings.empty")}
            </p>
          </div>
        ) : (
          <div className="listings">
            {filtered.map((l, i) => {
              const span = spanPattern[i % spanPattern.length];
              const tall = span === "span-5" || span === "span-4";
              return (
                <ListingCard
                  key={l.id}
                  listing={l}
                  span={span}
                  tall={tall}
                  liked={liked.has(l.id)}
                  onLike={() => toggleLike(l.id)}
                  onOpen={() => onOpen(l)}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
