"use client";

import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: 18 }}>
              Nordhem<span className="dot"></span>
            </div>
            <p
              className="body-serif"
              style={{ fontSize: 15, maxWidth: 360, color: "var(--ink-2)" }}
            >
              {t("footer.description")}
            </p>
            <div className="footer-social" style={{ marginTop: 24 }}>
              <a href="#" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t("footer.properties")}</h4>
            <ul>
              <li><a href="#">{t("footer.forSale")}</a></li>
              <li><a href="#">{t("footer.upcoming")}</a></li>
              <li><a href="#">{t("footer.sold")}</a></li>
              <li><a href="#">{t("footer.holiday")}</a></li>
              <li><a href="#">{t("footer.farms")}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("footer.services")}</h4>
            <ul>
              <li><a href="#">{t("footer.sellWithUs")}</a></li>
              <li><a href="#">{t("footer.valuation")}</a></li>
              <li><a href="#">{t("footer.discrete")}</a></li>
              <li><a href="#">{t("footer.international")}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("footer.company")}</h4>
            <ul>
              <li><a href="#">{t("nav.about")}</a></li>
              <li><a href="#">{t("nav.philosophy")}</a></li>
              <li><a href="#">{t("nav.journal")}</a></li>
              <li><a href="#">{t("footer.career")}</a></li>
              <li><a href="#">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>{t("footer.copyright")}</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "var(--muted)" }}>
              {t("footer.privacy")}
            </a>
            <a href="#" style={{ color: "var(--muted)" }}>
              {t("footer.cookies")}
            </a>
            <a href="#" style={{ color: "var(--muted)" }}>
              {t("footer.conduct")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
