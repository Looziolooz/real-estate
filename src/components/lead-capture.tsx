"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";

export default function LeadCapture() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    type: "Villa",
  });

  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="lead-section" id="kontakt">
      <div className="wrap">
        <div className="lead-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              {t("lead.eyebrow")}
            </div>
            <h2 className="h1" style={{ color: "var(--bg)" }}>
              {t("lead.title1")}
              <br />
              <span className="italic" style={{ color: "var(--accent-2)" }}>
                {t("lead.title2")}
              </span>{" "}
              {t("lead.title3")}
            </h2>
            <p
              className="body-serif"
              style={{
                color: "rgba(255,255,255,0.7)",
                marginTop: 20,
                fontFamily: "var(--font-display)",
                maxWidth: 460,
              }}
            >
              {t("lead.subtitle")}
            </p>

            <div className="lead-stats" style={{ marginTop: 56 }}>
              <div className="lead-stat">
                <div className="num">{t("lead.stat1")}</div>
                <div className="label">{t("lead.stat1label")}</div>
              </div>
              <div className="lead-stat">
                <div className="num">{t("lead.stat2")}</div>
                <div className="label">{t("lead.stat2label")}</div>
              </div>
              <div className="lead-stat">
                <div className="num">{t("lead.stat3")}</div>
                <div className="label">{t("lead.stat3label")}</div>
              </div>
              <div className="lead-stat">
                <div className="num">{t("lead.stat4")}</div>
                <div className="label">{t("lead.stat4label")}</div>
              </div>
            </div>
          </div>

          <form className="lead-form" onSubmit={submit}>
            <div className="field-row">
              <div className="field">
                <label>{t("lead.form.name")}</label>
                <input
                  type="text"
                  placeholder={t("lead.form.namePlaceholder")}
                  value={form.name}
                  onChange={onChange("name")}
                  required
                />
              </div>
              <div className="field">
                <label>{t("lead.form.phone")}</label>
                <input
                  type="tel"
                  placeholder={t("lead.form.phonePlaceholder")}
                  value={form.phone}
                  onChange={onChange("phone")}
                />
              </div>
            </div>
            <div className="field">
              <label>{t("lead.form.email")}</label>
              <input
                type="email"
                placeholder={t("lead.form.emailPlaceholder")}
                value={form.email}
                onChange={onChange("email")}
                required
              />
            </div>
            <div className="field">
              <label>{t("lead.form.address")}</label>
              <input
                type="text"
                placeholder={t("lead.form.addressPlaceholder")}
                value={form.address}
                onChange={onChange("address")}
              />
            </div>
            <div className="field-row">
              <div className="field">
                <label>{t("lead.form.type")}</label>
                <select
                  value={form.type}
                  onChange={onChange("type")}
                  style={{
                    appearance: "none",
                    backgroundImage:
                      'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1.6\'><path d=\'m6 9 6 6 6-6\'/></svg>")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                  }}
                >
                  <option>Villa</option>
                  <option>{t("search.apartment")}</option>
                  <option>{t("search.townhouse")}</option>
                  <option>{t("search.farm")}</option>
                  <option>Fritidshus</option>
                </select>
              </div>
              <div className="field">
                <label>{t("lead.form.timing")}</label>
                <select
                  style={{
                    appearance: "none",
                    backgroundImage:
                      'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1.6\'><path d=\'m6 9 6 6 6-6\'/></svg>")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                  }}
                >
                  <option>{t("lead.form.timing3")}</option>
                  <option>{t("lead.form.timing6")}</option>
                  <option>{t("lead.form.timing12")}</option>
                  <option>{t("lead.form.timingCurious")}</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>{t("lead.form.message")}</label>
              <textarea
                placeholder={t("lead.form.messagePlaceholder")}
                value={form.message}
                onChange={onChange("message")}
              />
            </div>
            <button className="btn btn-submit" type="submit">
              {submitted ? t("lead.form.thanks") : t("lead.form.submit")}
              <Icon name={submitted ? "sparkle" : "arrow"} size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
