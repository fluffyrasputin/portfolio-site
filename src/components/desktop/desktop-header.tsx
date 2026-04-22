"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { heroAssets } from "@/data/figma-assets";
import { contacts } from "@/data/site-content";

export function DesktopHeader() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "ru" ? "en" : "ru";

  return (
    <header
      className="desktop-header"
      style={{ "--desktop-menu-background": `url(${heroAssets.topMenuBackground})` } as CSSProperties}
    >
      <div className="desktop-header__inner">
        <nav className="desktop-header__home" aria-label="Desktop main navigation">
          <Link className="desktop-header__text-link desktop-header__text-link--home" href="/">
            Main page
          </Link>
        </nav>

        <div className="desktop-header__contacts" aria-label="Desktop contact links">
          <Link className="desktop-header__button desktop-header__button--cv" href={contacts.cv}>
            CV
          </Link>
          <a className="desktop-header__button desktop-header__button--telegram" href={contacts.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a className="desktop-header__button desktop-header__button--mail" href={`mailto:${contacts.email}`}>
            Mail
          </a>
        </div>

        <div className="desktop-header__side">
          <button
            type="button"
            className="desktop-header__text-link desktop-header__text-link--language"
            aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
            onClick={() => setLanguage(nextLanguage)}
          >
            {language === "ru" ? "En" : "Ru"}
          </button>
          <Link className="desktop-header__text-link desktop-header__text-link--wall" href="/wall" onClick={() => setLanguage("en")}>
            The wall
          </Link>
        </div>
      </div>
    </header>
  );
}
