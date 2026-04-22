"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { heroAssets } from "@/data/figma-assets";
import { contacts } from "@/data/site-content";

export function MobileHeader() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "ru" ? "en" : "ru";

  return (
    <header
      className="mobile-header"
      style={{ "--mobile-menu-background": `url(${heroAssets.topMenuBackground})` } as CSSProperties}
    >
      <div className="mobile-header__inner">
        <nav className="mobile-header__home" aria-label="Mobile main navigation">
          <Link className="mobile-header__text-link mobile-header__text-link--home" href="/">
            Main page
          </Link>
        </nav>

        <div className="mobile-header__contacts" aria-label="Mobile contact links">
          <Link className="mobile-header__button mobile-header__button--cv" href={contacts.cv}>
            CV
          </Link>
          <a className="mobile-header__button mobile-header__button--telegram" href={contacts.telegram} target="_blank" rel="noreferrer">
            TG
          </a>
          <a className="mobile-header__button mobile-header__button--mail" href={`mailto:${contacts.email}`}>
            Mail
          </a>
        </div>

        <div className="mobile-header__side">
          <Link className="mobile-header__text-link mobile-header__text-link--wall" href="/wall" onClick={() => setLanguage("en")}>
            The wall
          </Link>
          <button
            type="button"
            className="mobile-header__text-link mobile-header__text-link--language"
            aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
            onClick={() => setLanguage(nextLanguage)}
          >
            {language === "ru" ? "En" : "Ru"}
          </button>
        </div>
      </div>
    </header>
  );
}
