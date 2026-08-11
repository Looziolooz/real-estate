"use client";

import { useRef, useState } from "react";
import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";
import CountUp from "@/components/count-up";
import Magnetic from "@/components/magnetic";
import BgVideo from "@/components/bg-video";
import { useReveal } from "@/lib/use-reveal";
import { LISTINGS } from "@/data/listings";

/** Split a line into words so the entrance staggers across it rather than
 *  lifting the whole line as one block. */
function Words({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="hero-word"
          style={accent ? { color: "var(--accent)", fontStyle: "italic" } : undefined}
        >
          {w}
          {" "}
        </span>
      ))}
    </>
  );
}

/** Swedish grouping: thin space for thousands, comma for decimals. */
const sv = (value: number, decimals = 0) =>
  value.toLocaleString("sv-SE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/* Defined at module scope, not inline in the JSX. CountUp keys its effect on
   `format`, so a closure rebuilt on every render would kill and restart the
   tween each time — the number would never finish counting. */
const fmtCount = (v: number) => sv(v);
const fmtYears = (v: number) => `${sv(v)} yrs`;

/** The hero shows one entry: Plate IV, the same one the copy names. */
const FEATURED = LISTINGS.find((l) => l.plate === "IV") ?? LISTINGS[0];

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
  const sectionRef = useRef<HTMLElement>(null);

  // The hero is on screen at load, so it plays straight away rather than
  // waiting for a scroll trigger that would already have fired.
  useReveal(sectionRef, { immediate: true });

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
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
          <div>
            <div
              data-anim="fade-up"
              className="eyebrow"
              style={{ marginBottom: 32 }}
            >
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

            {/* One mask per line rather than one around the pair, so each line
                genuinely wipes up from behind its own edge. */}
            <h1 className="h-display hero-headline">
              <span data-anim="mask-line" data-delay="0.1" data-stagger="0.045">
                <Words text={t("hero.title1")} />
              </span>
              <span data-anim="mask-line" data-delay="0.26" data-stagger="0.045">
                <Words text={t("hero.title2")} accent />
                <Words text={t("hero.title3")} />
              </span>
            </h1>

            <p
              data-anim="fade-up"
              data-delay="0.34"
              className="lead"
              style={{ marginTop: 28, maxWidth: 520 }}
            >
              {t("hero.subtitle")}
            </p>

            <div
              data-anim="fade-up"
              data-delay="0.44"
              data-stagger="0.09"
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
                  <CountUp to={9} format={fmtCount} delay={0.5} />
                </div>
                <div className="meta">{t("hero.stat1")}</div>
              </div>
              <div>
                <div className="h2" style={{ marginBottom: 4 }}>
                  <CountUp to={4} format={fmtYears} delay={0.6} />
                </div>
                <div className="meta">{t("hero.stat2")}</div>
              </div>
              <div>
                <div className="h2" style={{ marginBottom: 4 }}>
                  <CountUp to={38} format={fmtCount} delay={0.7} />
                  <span style={{ fontSize: 16, color: "var(--muted)" }}>
                    {t("hero.stat3suffix")}
                  </span>
                </div>
                <div className="meta">{t("hero.stat3")}</div>
              </div>
            </div>
          </div>

          <div
            data-anim="fade-up"
            data-delay="0.28"
            data-y="40"
            style={{ position: "relative" }}
          >
            {/* The featured property is now a slow moving shot rather than a
                still — and, unlike the still it replaces, it is served from
                this project rather than hotlinked from Unsplash. */}
            <div className="hero-img-wrap">
              <BgVideo
                src="/video/hero-interior.mp4"
                poster="/video/hero-interior.jpg"
                restMs={4000}
              />
              <div className="hero-img-tag">{t("hero.featured")}</div>
              <div className="hero-img-meta">{t("hero.featuredlabel")}</div>
            </div>

            {/* The readings float over the plate rather than sitting under the
                copy: they are the thing this audience cannot verify, so they
                belong on top of the photograph, not beneath it. */}
            <div
              className="hero-readings"
              data-anim="fade-up"
              data-delay="0.7"
              data-stagger="0.1"
              data-y="26"
            >
              <div className="reading-card">
                <span className="v">{FEATURED.readings.janMean}</span>
                <span className="k">Jan. mean</span>
              </div>
              <div className="reading-card">
                <span className="v">{FEATURED.readings.winterSun}</span>
                <span className="k">Winter sun</span>
              </div>
              <div className="reading-card">
                <span className="v">{FEATURED.readings.toWater}</span>
                <span className="k">To water</span>
              </div>
            </div>
          </div>
        </div>

        <div data-anim="fade-up" data-delay="0.54" style={{ paddingBottom: 48 }}>
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
            <Magnetic strength={8}>
              <button className="search-cta">
                <Icon name="search" size={15} stroke={1.8} />
                <span style={{ marginLeft: 8 }}>{t("search.submit")}</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
