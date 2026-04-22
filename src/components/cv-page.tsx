"use client";

import { BottomSigns } from "@/components/bottom-signs";
import { DesktopHeader } from "@/components/desktop/desktop-header";
import { MobileHeader } from "@/components/mobile/mobile-header";
import { useLanguage } from "@/components/language-provider";
import { dictionaries } from "@/data/site-content";

type CvPageProps = {
  pdfPath: string;
  pdfExists: boolean;
};

export function CvPage({ pdfPath, pdfExists }: CvPageProps) {
  const { language } = useLanguage();
  const dict = dictionaries[language];

  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <div className="page-shell" id="top">
        <section className="section">
          <div className="section__intro">
            <p className="eyebrow">{dict.cv.eyebrow}</p>
            <h1 className="page-title">{dict.cv.title}</h1>
            <p className="hero__description">{dict.cv.description}</p>
          </div>

          <div className="cv-status" data-ready={pdfExists}>
            <strong>{pdfExists ? dict.cv.fileReady : dict.cv.fileMissing}</strong>
            <span>
              {dict.cv.filePathLabel}: <code>{pdfPath.replace(/^\//, "public/")}</code>
            </span>
          </div>

          {pdfExists ? (
            <div className="cv-viewer">
              <div className="hero__actions">
                <a className="button" href={pdfPath} target="_blank" rel="noreferrer">
                  {dict.cv.openPdf}
                </a>
                <a className="button button--ghost" href={pdfPath} download>
                  {dict.cv.downloadPdf}
                </a>
              </div>
              <iframe
                className="cv-viewer__frame"
                src={pdfPath}
                title="Curriculum Vitae PDF"
              />
            </div>
          ) : (
            <section className="draft-panel" aria-label={dict.cv.placeholderTitle}>
              <p className="eyebrow">PDF</p>
              <h2>{dict.cv.placeholderTitle}</h2>
              <p>{dict.cv.placeholderText}</p>
            </section>
          )}
        </section>
      </div>
      <BottomSigns />
    </>
  );
}
