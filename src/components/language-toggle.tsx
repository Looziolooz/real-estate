"use client";

import { useLang } from "@/components/lang-context";
import type { Lang } from "@/data/translations";

const flags: Record<Lang, string> = {
  it: "IT",
  sv: "SV",
  en: "EN",
};

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  const langs: Lang[] = ["it", "sv", "en"];

  return (
    <div className="flex items-center gap-1 border border-[var(--line)]">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 text-[11px] font-mono tracking-widest uppercase transition-colors duration-200 ${
            lang === l
              ? "bg-[var(--ink)] text-[var(--bg)]"
              : "text-[var(--muted)] hover:text-[var(--ink)] bg-transparent"
          }`}
        >
          {flags[l]}
        </button>
      ))}
    </div>
  );
}
