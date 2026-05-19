"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "@/components/lang-context";
import type { Lang } from "@/data/translations";

const labels: Record<Lang, string> = {
  it: "Italiano",
  sv: "Svenska",
  en: "English",
};

const flags: Record<Lang, string> = {
  it: "IT",
  sv: "SV",
  en: "EN",
};

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const langs: Lang[] = ["it", "sv", "en"];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase border border-[var(--line)] bg-transparent text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200"
      >
        <span>{flags[lang]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 min-w-[140px] bg-[var(--bg)] border border-[var(--line)] shadow-lg z-50">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm font-sans text-left transition-colors duration-150 ${
                lang === l
                  ? "bg-[var(--ink)] text-[var(--bg)]"
                  : "text-[var(--ink-2)] hover:bg-[var(--bg-paper)]"
              }`}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase">{flags[l]}</span>
              <span>{labels[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
