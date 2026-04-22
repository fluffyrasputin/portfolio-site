"use client";

import Link from "next/link";
import { contacts } from "@/data/site-content";
import { useLanguage } from "@/components/language-provider";

const desktopFooterCopy = {
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
    projectItems: [
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
      "and more",
    ],
    statuses: [
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
    ],
    telegram: "Telegram",
    mail: "Mail",
  },
} as const;

export function DesktopPageEnd() {
  const { language } = useLanguage();
  const copy = desktopFooterCopy[language];
  const displayName = language === "ru" ? "Царёв Андрей" : "Tsarёv Andrey";

  return (
    <section className="page-end" aria-label="Page end">
      <a className="back-to-top" href="#top" aria-label="Вернуться наверх страницы">
        <span className="back-to-top__label">{copy.up}</span>
      </a>

      <footer className="portfolio-footer">
        <div className="portfolio-footer__left">
          <p className="portfolio-footer__name">{displayName}</p>
          <div className="portfolio-footer__portrait">
            <video
              aria-hidden="true"
              className="portfolio-footer__portrait-media"
              src="/media/figma/Car Drive Video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>

        <div className="portfolio-footer__center">
          <div className="portfolio-footer__role">
            {copy.role.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="portfolio-footer__divider" aria-hidden="true" />
          <div className="portfolio-footer__projects-block">
            <p className="portfolio-footer__projects-label">{copy.projectsLabel}</p>
            <Link className="portfolio-footer__cv" href={contacts.cv}>
              CV
            </Link>
            <div className="portfolio-footer__projects-grid">
              <div className="portfolio-footer__projects-list">
                {copy.projectItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="portfolio-footer__statuses">
                {copy.statuses.map((item, index) => (
                  <p key={`${item}-${index}`}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-footer__contacts">
          <a className="portfolio-footer__contact-button portfolio-footer__contact-button--tg" href={contacts.telegram} target="_blank" rel="noreferrer">
            {copy.telegram}
          </a>
          <a className="portfolio-footer__contact-button portfolio-footer__contact-button--mail" href={`mailto:${contacts.email}`}>
            {copy.mail}
          </a>
        </div>
      </footer>
    </section>
  );
}
