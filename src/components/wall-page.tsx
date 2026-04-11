"use client";

import { useLanguage } from "@/components/language-provider";
import { dictionaries } from "@/data/site-content";

export function WallPage() {
  const { language } = useLanguage();
  const dict = dictionaries[language];

  return (
    <div className="page-shell">
      <section className="section wall-hero">
        <p className="eyebrow">{dict.wall.eyebrow}</p>
        <h1>{dict.wall.title}</h1>
        <p className="wall-hero__text">{dict.wall.description}</p>
      </section>

      <section className="media-placeholder">
        <div className="media-placeholder__preview" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="media-placeholder__copy">
          <p className="eyebrow">{dict.wall.mediaTitle}</p>
          <h2>{dict.wall.mediaText}</h2>
          <p>{dict.wall.note}</p>
        </div>
      </section>
    </div>
  );
}
