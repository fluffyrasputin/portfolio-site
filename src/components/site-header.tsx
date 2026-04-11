"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { heroAssets } from "@/data/figma-assets";
import { LanguageSwitcher } from "@/components/language-switcher";
import { contacts, dictionaries } from "@/data/site-content";

export function SiteHeader() {
  const { language } = useLanguage();
  const dict = dictionaries[language];

  return (
    <header
      className="site-header"
      style={{ "--top-menu-background": `url(${heroAssets.topMenuBackground})` } as CSSProperties}
    >
      <div className="site-header__inner">
        <nav className="site-header__nav site-header__nav--left" aria-label="Main navigation">
          <Link className="site-header__text-link site-header__text-link--left site-header__text-link--active" href="/">
            {dict.navigation.home}
          </Link>
        </nav>

        <div className="site-header__center">
          {contacts.cv ? <Link className="site-header__button site-header__button--small" href={contacts.cv}>{dict.contacts.cv}</Link> : null}
          {contacts.telegram ? (
            <a className="site-header__button site-header__button--wide" href={contacts.telegram} target="_blank" rel="noreferrer">
              {dict.contacts.telegram}
            </a>
          ) : null}
          {contacts.email ? (
            <a className="site-header__button site-header__button--small" href={`mailto:${contacts.email}`}>
              {dict.contacts.email}
            </a>
          ) : null}
        </div>

        <div className="site-header__side">
          <LanguageSwitcher />
          <Link className="site-header__text-link site-header__text-link--right" href="/wall">
            {dict.navigation.wall}
          </Link>
        </div>
      </div>
    </header>
  );
}
