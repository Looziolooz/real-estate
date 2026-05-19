"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";

const priceOptions = [
  { value: "", key: "search.any" },
  { value: "upp-till-10", key: "search.upTo10" },
  { value: "10-20", key: "search.10to20" },
  { value: "20-35", key: "search.20to35" },
  { value: "over-35", key: "search.over35" },
];

const typeOptions = [
  { value: "", key: "search.all" },
  { value: "villa", key: "search.villa" },
  { value: "lagenhet", key: "search.apartment" },
  { value: "radhus", key: "search.townhouse" },
  { value: "gard", key: "search.farm" },
];

export default function Hero() {
  const { t } = useLang();
  const [loc, setLoc] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  return (
    <section className="hero" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div
        className="wrap"
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="signature">{t("signature")}</div>

        <div className="hero-grid">
          <div className="fade-up">
            <div className="eyebrow" style={{ marginBottom: 32 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 24,
                  height: 1,
                  background: "var(--accent)",
                  verticalAlign: "middle",
                  marginRight: 14,
                }}
              ></span>
              {t("hero.eyebrow")}
            </div>
            <h1 className="h-display">
              {t("hero.title1")}
              <br />
              <span
                className="italic"
                style={{ color: "var(--accent)", fontWeight: 400 }}
              >
                {t("hero.title2")}
              </span>{" "}
              {t("hero.title3")}
            </h1>
            <p className="lead" style={{ marginTop: 28, maxWidth: 520 }}>
              {t("hero.subtitle")}
            </p>

            <div
              className="hero-stats"
              style={{
                display: "flex",
                gap: 48,
                marginTop: 56,
                paddingTop: 32,
                borderTop: "1px solid var(--line)",
              }}
            >
              <div>
                <div className="h2" style={{ marginBottom: 4 }}>
                  248
                </div>
                <div className="meta">{t("hero.stat1")}</div>
              </div>
              <div>
                <div className="h2" style={{ marginBottom: 4 }}>
                  14 år
                </div>
                <div className="meta">{t("hero.stat2")}</div>
              </div>
              <div>
                <div className="h2" style={{ marginBottom: 4 }}>
                  4,9
                  <span style={{ fontSize: 16, color: "var(--muted)" }}>
                    {t("hero.stat3suffix")}
                  </span>
                </div>
                <div className="meta">{t("hero.stat3")}</div>
              </div>
            </div>
          </div>

          <div
            className="fade-up delay-2"
            style={{ position: "relative" }}
          >
            <div className="hero-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85&auto=format&fit=crop"
                alt="Modern scandinavian home interior"
              />
              <div className="hero-img-tag">{t("hero.featured")}</div>
              <div className="hero-img-meta">{t("hero.featuredlabel")}</div>
            </div>
          </div>
        </div>

        <div className="fade-up delay-3" style={{ paddingBottom: 48 }}>
          <div className="search-bar">
            <label className="search-field">
              <span className="search-label">{t("search.placeholder")}</span>
              <input
                className="search-value"
                placeholder={t("search.placeholder")}
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
              />
            </label>
            <label className="search-field">
              <span className="search-label">{t("search.price")}</span>
              <select
                className="search-value"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ appearance: "none", border: "none" }}
              >
                {priceOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {t(o.key)}
                  </option>
                ))}
              </select>
            </label>
            <label className="search-field">
              <span className="search-label">{t("search.type")}</span>
              <select
                className="search-value"
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{ appearance: "none", border: "none" }}
              >
                {typeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {t(o.key)}
                  </option>
                ))}
              </select>
            </label>
            <button className="search-cta">
              <Icon name="search" size={15} stroke={1.8} />
              <span style={{ marginLeft: 8 }}>{t("search.submit")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
