"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { contacts } from "@/data/site-content";

const heroProjectItems = [
  "ATOM auto",
  "Pochta bank,",
  "Bitrix24,",
  "Stoloto,",
  "Auchan,",
  "Moskvich,",
  "Haier,",
  "Borishoff",
  "Moscow Postamat",
  "Culture of MSC",
] as const;

const footerProjectStatuses = [
  "art-d, designer",
  "art-d, designer",
  "lead-d, designer",
  "lead-d, designer",
  "designer",
  "designer",
  "designer",
  "designer",
  "art-d, designer",
  "lead-d, designer",
] as const;

const footerCopy = {
  ru: {
    up: "Наверх",
    role: ["digital-дизайн тимлид", "арт-директор", "дизайнер"],
    projectsLabel: "Проекты",
    projectItems: [
      "ATOM авто",
      "Почта Банк,",
      "Битрикс24,",
      "Столото,",
      "Ашан,",
      "Москвич,",
      "Haier,",
      "Борисхофф",
      "Мой постамат",
      "Культура мск",
      "и другое",
    ],
    statuses: [
      "арт-д, дизайнер",
      "арт-д, дизайнер",
      "вед-д, дизайнер",
      "вед-д, дизайнер",
      "дизайнер",
      "дизайнер",
      "дизайнер",
      "дизайнер",
      "арт-д, дизайнер",
      "вед-д, дизайнер",
    ],
    telegram: "Телеграм",
    mail: "Почта",
  },
  en: {
    up: "UP",
    role: ["Digital design team-lead", "art-d", "designer"],
    projectsLabel: "Projects",
    projectItems: [...heroProjectItems, "and more"],
    statuses: [...footerProjectStatuses],
    telegram: "Telegram",
    mail: "Mail",
  },
} as const;

export function MobilePageEnd() {
  const { language } = useLanguage();
  const copy = footerCopy[language];
  const displayName = language === "ru" ? "Царёв Андрей" : "Tsarёv Andrey";

  return (
    <section className="mobile-page-end" aria-label="Page end">
      <a className="mobile-page-end__up" href="#top">
        {copy.up}
      </a>

      <footer className="mobile-footer">
        <p className="mobile-footer__name">{displayName}</p>

        <nav className="mobile-footer__contacts" aria-label="Footer links">
          <a className="mobile-footer__contact-button mobile-footer__contact-button--telegram" href={contacts.telegram} target="_blank" rel="noreferrer">
            {copy.telegram}
          </a>
          <a className="mobile-footer__contact-button mobile-footer__contact-button--mail" href={`mailto:${contacts.email}`}>
            {copy.mail}
          </a>
        </nav>

        <div className="mobile-footer__role">
          {copy.role.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="mobile-footer__projects-block">
          <div className="mobile-footer__rail" aria-hidden="true" />
          <p className="mobile-footer__projects-label">{copy.projectsLabel}</p>
          <Link className="mobile-footer__cv" href={contacts.cv}>CV</Link>
          <div className="mobile-footer__projects-grid">
            <div className="mobile-footer__projects-list">
              {copy.projectItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="mobile-footer__statuses">
              {copy.statuses.map((item, index) => (
                <p key={`${item}-${index}`}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mobile-footer__portrait">
          <video
            aria-hidden="true"
            className="mobile-footer__portrait-media"
            src="/media/figma/Car Drive Video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      </footer>
    </section>
  );
}
