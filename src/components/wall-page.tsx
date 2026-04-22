"use client";
/* eslint-disable @next/next/no-img-element */

import { BottomSigns } from "@/components/bottom-signs";
import { DesktopHeader } from "@/components/desktop/desktop-header";
import { DesktopPageEnd } from "@/components/desktop/desktop-page-end";
import { useLanguage } from "@/components/language-provider";
import { MobileHeader } from "@/components/mobile/mobile-header";
import { MobilePageEnd } from "@/components/mobile/mobile-page-end";
import {
  wallDesktopAssets,
  wallDesktopMemorialItems,
  wallDesktopPraiseItems,
  wallMobileAssets,
  wallMobileMemorialItems,
  wallMobilePraiseItems,
  type WallAssetItem,
} from "@/data/wall-assets";

const wallCopy = {
  ru: {
    praisesTitle: "Слова что важны",
    praisesText: "Не люблю хвалить себя, но это всё-таки портфолио",
    memorialTitle: "Мемориал продуктам",
    memorialText: "Они исчезли, но навсегда остались в наших сердцах",
  },
  en: {
    praisesTitle: "Words of matter",
    praisesText: "Don't like to praise myself, but that's a portfolio at the end",
    memorialTitle: "Grocieries memorial",
    memorialText: "They disappeared, but remained in our hearts forever",
  },
} as const;

function WallCollage({ items, className, height }: { items: WallAssetItem[]; className: string; height: number }) {
  return (
    <div className={className} style={{ height }}>
      {items.map((item, index) => (
        <div
          className="wall-collage__item"
          key={`${item.src}-${index}`}
          style={{ left: item.x, top: item.y, width: item.width, height: item.height }}
        >
          <img alt={item.alt ?? ""} src={item.src} style={{ objectFit: item.fit ?? "cover" }} />
        </div>
      ))}
    </div>
  );
}

export function WallPage() {
  const { language } = useLanguage();
  const copy = wallCopy[language];

  return (
    <>
      <div id="top" />
      <DesktopHeader />
      <MobileHeader />

      <div className="viewport--desktop">
        <div className="wall-desktop-page">
          <section className="wall-intro wall-intro--desktop">
            <div className="wall-intro__portrait wall-intro__portrait--desktop">
              <img alt="" src={wallDesktopAssets.topPortrait} />
            </div>
            <h1 className="wall-intro__title">{copy.praisesTitle}</h1>
            <p className="wall-intro__text">{copy.praisesText}</p>
          </section>

          <section className="wall-desktop-section wall-desktop-section--praise">
            <WallCollage className="wall-collage wall-collage--desktop" items={wallDesktopPraiseItems} height={1659} />
          </section>

          <section className="wall-intro wall-intro--memorial wall-intro--desktop">
            <div className="wall-intro__portrait wall-intro__portrait--memorial-desktop">
              <img alt="" src={wallDesktopAssets.memorialIllustration} />
            </div>
            <h2 className="wall-intro__title">{copy.memorialTitle}</h2>
            <p className="wall-intro__text">{copy.memorialText}</p>
          </section>

          <section className="wall-desktop-section wall-desktop-section--memorial">
            <WallCollage className="wall-collage wall-collage--desktop" items={wallDesktopMemorialItems} height={1763} />
          </section>

          <DesktopPageEnd />
        </div>
      </div>

      <div className="viewport--mobile">
        <div className="wall-mobile-page">
          <section className="wall-intro wall-intro--mobile">
            <div className="wall-intro__portrait wall-intro__portrait--mobile">
              <img alt="" src={wallMobileAssets.topPortrait} />
            </div>
            <h1 className="wall-intro__title">{copy.praisesTitle}</h1>
            <p className="wall-intro__text">{copy.praisesText}</p>
          </section>

          <section className="wall-mobile-section">
            <WallCollage className="wall-collage wall-collage--mobile" items={wallMobilePraiseItems} height={2442} />
          </section>

          <section className="wall-intro wall-intro--memorial wall-intro--mobile">
            <div className="wall-intro__portrait wall-intro__portrait--memorial-mobile">
              <img alt="" src={wallMobileAssets.memorialIllustration} />
            </div>
            <h2 className="wall-intro__title">{copy.memorialTitle}</h2>
            <p className="wall-intro__text">{copy.memorialText}</p>
          </section>

          <section className="wall-mobile-section wall-mobile-section--memorial">
            <WallCollage className="wall-collage wall-collage--mobile" items={wallMobileMemorialItems} height={2879} />
          </section>

          <MobilePageEnd />
        </div>
      </div>

      <BottomSigns />
    </>
  );
}
