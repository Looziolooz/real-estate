"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-context";
import LanguageToggle from "@/components/language-toggle";
import { Icon } from "@/components/icons";

export default function Nav() {
  const { t } = useLang();
  const [active, setActive] = useState("nav.home");
  const links = ["nav.home", "nav.search", "nav.sell", "nav.philosophy", "nav.about", "nav.journal"];

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            setActive("nav.home");
          }}
        >
          Nordhem<span className="dot"></span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className={active === l ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActive(l);
              }}
            >
              {t(l)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button className="btn btn-primary">
            {t("nav.consultation")}
            <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
