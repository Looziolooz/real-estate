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

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => { }, 10);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const langs: Lang[] = ["it", "sv", "en"];

  return (
    <div ref={ref} className="relative select-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase border border-[var(--line)] bg-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-all duration-200"
      >
        <span>{flags[lang]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-250 ease-[var(--ease)] ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full mt-1.5 min-w-[160px] bg-[var(--bg)] border border-[var(--line)] shadow-lg z-50 transition-all duration-250 ease-[var(--ease)] origin-top-right ${
          open
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
        }`}
      >
        {langs.map((l, i) => (
          <button
            key={l}
            onClick={() => {
              setLang(l);
              setOpen(false);
            }}
            className={`group relative flex items-center gap-3 w-full px-4 py-3 text-sm font-sans text-left transition-all duration-150 ${
              lang === l
                ? "bg-[var(--ink)] text-[var(--bg)]"
                : "text-[var(--ink-2)] hover:bg-[var(--bg-paper)] hover:pl-5"
            } ${i > 0 ? "border-t border-[var(--line)]" : ""}`}
          >
            <span
              className={`inline-flex items-center justify-center w-7 h-5 text-[10px] font-mono tracking-widest uppercase border transition-colors duration-150 ${
                lang === l
                  ? "border-[var(--bg)] text-[var(--bg)]"
                  : "border-[var(--line-2)] text-[var(--muted)] group-hover:border-[var(--ink)]"
              }`}
            >
              {flags[l]}
            </span>
            <span className="flex-1">{labels[l]}</span>
            {lang === l && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
