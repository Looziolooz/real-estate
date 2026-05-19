"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "@/components/lang-context";
import type { Lang } from "@/data/translations";

const labels: Record<Lang, string> = {
  it: "Italiano",
  sv: "Svenska",
  en: "English",
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
    <div ref={ref} className="relative select-none">
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[var(--muted)] hover:text-[var(--ink)] transition-colors duration-200"
      >
        <span>{lang.toUpperCase()}</span>
        <span
          className={`inline-block w-[5px] h-[5px] bg-[var(--accent)] rotate-45 transition-all duration-250 ease-[var(--ease)] ${
            open ? "opacity-100" : "opacity-40 group-hover:opacity-80"
          }`}
        ></span>
      </button>

      <div
        className={`absolute right-0 top-full mt-3 min-w-[150px] bg-[var(--bg)] z-50 transition-all duration-250 ease-[var(--ease)] origin-top-right ${
          open
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
        }`}
      >
        {/* registration marks */}
        <span className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] border-t border-l border-[var(--accent)] pointer-events-none"></span>
        <span className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] border-t border-r border-[var(--accent)] pointer-events-none"></span>
        <span className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] border-b border-l border-[var(--accent)] pointer-events-none"></span>
        <span className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] border-b border-r border-[var(--accent)] pointer-events-none"></span>

        <div className="border border-[var(--ink)]">
          {langs.map((l, i) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`group flex items-center gap-3 w-full px-4 py-2.5 text-left transition-all duration-150 ${
                lang === l
                  ? "bg-[var(--ink)] text-[var(--bg)] font-medium"
                  : "text-[var(--ink-2)] hover:bg-[var(--bg-paper)]"
              } ${i > 0 ? "border-t border-[var(--line)]" : ""}`}
            >
              <span className="w-6 text-[10px] font-mono tracking-widest uppercase text-[var(--muted)]">
                {l.toUpperCase()}
              </span>
              <span className="flex-1 text-[13px] font-sans">{labels[l]}</span>
              {lang === l && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--accent)]"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
