"use client";

import { useState, useRef } from "react";
import { useLang } from "@/components/lang-context";
import { TESTIMONIALS } from "@/data/listings";
import { Icon } from "@/components/icons";

export default function Testimonials() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const testimonials = TESTIMONIALS.map((test) => ({
    ...test,
    text: t(test.text),
    name: t(test.name),
    loc: t(test.loc),
  }));

  const scrollBy = (dir: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".testi-card") as HTMLElement;
    if (!card) return;
    const w = card.getBoundingClientRect().width + 24;
    trackRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
    setIdx((prev) =>
      Math.max(0, Math.min(testimonials.length - 1, prev + dir)),
    );
  };

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              {t("testimonials.eyebrow")}
            </div>
            <h2 className="h1">
              {t("testimonials.title1")}{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                {t("testimonials.title2")}
              </span>
            </h2>
          </div>
          <div className="testi-controls">
            <button
              className="testi-dot"
              onClick={() => scrollBy(-1)}
              aria-label={t("testimonials.prev")}
              disabled={idx === 0}
            >
              <Icon name="arrowLeft" size={15} />
            </button>
            <button
              className="testi-dot"
              onClick={() => scrollBy(1)}
              aria-label={t("testimonials.next")}
              disabled={idx >= testimonials.length - 1}
            >
              <Icon name="arrow" size={15} />
            </button>
          </div>
        </div>

        <div className="testi-track" ref={trackRef}>
          {testimonials.map((test, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-quote-mark">&quot;</div>
              <p className="testi-text">{test.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">
                  <img src={test.avatar} alt={test.name} />
                </div>
                <div>
                  <div className="testi-name">{test.name}</div>
                  <div className="testi-loc">{test.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
