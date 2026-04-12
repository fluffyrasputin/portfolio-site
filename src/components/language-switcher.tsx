"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "ru" ? "en" : "ru";

  return (
    <button
      type="button"
      className="lang-switcher site-header__text-link site-header__text-link--right"
      aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
      onClick={() => setLanguage(nextLanguage)}
    >
      {language === "ru" ? "En" : "Ru"}
    </button>
  );
}
