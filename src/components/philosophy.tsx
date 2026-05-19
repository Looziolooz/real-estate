"use client";

import { useLang } from "@/components/lang-context";
import { PRINCIPLES } from "@/data/listings";

export default function Philosophy() {
  const { t } = useLang();

  const principles = PRINCIPLES.map((p) => ({
    ...p,
    name: t(p.name),
    desc: t(p.desc),
  }));

  return (
    <section className="philosophy" id="filosofi">
      <div className="wrap">
        <div className="phil-grid">
          <div className="phil-img">
            <img
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=85&auto=format&fit=crop"
              alt="Scandinavian interior"
            />
            <span className="phil-img-meta">{t("philosophy.quote")}</span>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              {t("philosophy.eyebrow")}
            </div>
            <h2 className="h1">
              {t("philosophy.title1")}
              <span style={{ color: "var(--accent)" }}>.</span>
              <br />
              <span className="italic" style={{ color: "var(--muted)" }}>
                {t("philosophy.title2")}
              </span>
            </h2>
            <p className="body-serif" style={{ marginTop: 24, maxWidth: 540 }}>
              {t("philosophy.subtitle")}
            </p>

            <div className="principles">
              {principles.map((p) => (
                <div key={p.n} className="principle">
                  <div className="num">— {p.n}</div>
                  <div className="name">{p.name}</div>
                  <div className="desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
