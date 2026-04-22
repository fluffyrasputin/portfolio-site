"use client";

import { BottomSigns } from "@/components/bottom-signs";
import { DesktopHeader } from "@/components/desktop/desktop-header";
import { MobileHeader } from "@/components/mobile/mobile-header";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { getLocalizedCaseField } from "@/data/cases";
import { dictionaries } from "@/data/site-content";
import { formatCaseText } from "@/lib/russian-typography";
import type { CaseItem } from "@/types/site";

export function CaseDetailPage({ item }: { item: CaseItem }) {
  const { language } = useLanguage();
  const dict = dictionaries[language];
  const formatText = (text: string) => formatCaseText(language, text);

  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className="page-shell" id="top">
        <section className="section">
          <div className="section__intro">
            <p className="eyebrow">{dict.cases.eyebrow}</p>
            <h1 className="page-title">{getLocalizedCaseField(item, language, "title")}</h1>
            <p className="hero__description">{formatText(getLocalizedCaseField(item, language, "description"))}</p>
          </div>

          <div className="case-meta">
            <div className="case-meta__item">
              <span>{dict.cases.metaYear}</span>
              <strong>{item.year}</strong>
            </div>
            <div className="case-meta__item">
              <span>{dict.cases.metaStatus}</span>
              <strong>{getLocalizedCaseField(item, language, "status")}</strong>
            </div>
            <div className="case-meta__item">
              <span>{dict.cases.metaTags}</span>
              <strong>{item.tags.join(", ")}</strong>
            </div>
          </div>

          <section className="draft-panel" aria-label={dict.cases.draftTitle}>
            <p className="eyebrow">Draft</p>
            <h2>{dict.cases.draftTitle}</h2>
            <p>{dict.cases.draftText}</p>
          </section>

          <Link className="button button--ghost" href="/#cases">
            {dict.cases.back}
          </Link>
        </section>
      </div>
      <BottomSigns />
    </>
  );
}
