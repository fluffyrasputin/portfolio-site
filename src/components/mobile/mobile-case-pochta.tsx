"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";
import { formatCaseText } from "@/lib/russian-typography";

export function MobileCasePochta() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const formatText = (text: string) => formatCaseText(language, text);

  return (
    <section className="mobile-case mobile-case--pochta" aria-label="Case Pochta Bank">
      <div className="mobile-case-pochta__logo">
        <Image alt="Pochta Bank" src={mobileAssets.pochtaLogo} width={358} height={55} sizes="358px" />
      </div>

      <div className="mobile-case-pochta__intro">
        <div className="mobile-case-pochta__meta">
          <div className="mobile-case-pochta__title-block">
            <p>{copy.pochtaTitle}</p>
            <p className="mobile-case__status">{copy.pochtaStatus}</p>
          </div>
          <Link className="mobile-case__more" href="/cases/pochtabank">More</Link>
        </div>
        <p className="mobile-case-pochta__description">{formatText(copy.pochtaDescription)}</p>
      </div>

      <div className="mobile-case-pochta__phone">
        <Image alt="Pochta Bank app phone" src={mobileAssets.pochtaPhone} width={358} height={725} sizes="358px" />
      </div>

      <div className="mobile-case-pochta__copy">
        <p>{formatText(copy.pochtaCopyOne)}</p>
        <p>{formatText(copy.pochtaCopyTwo)}</p>
      </div>

      <div className="mobile-case-pochta__card">
        <Image alt="Pochta Bank eagle card" src={mobileAssets.pochtaCopyCard} width={358} height={236} sizes="358px" />
      </div>

      <div className="mobile-case-pochta__lower">
        <div className="mobile-case-pochta__fast-pay">
          <Image alt="Pochta Bank payments list" src={mobileAssets.pochtaFastPay} width={165} height={265} sizes="165px" />
        </div>
        <div className="mobile-case-pochta__msc">
          <Image alt="Pochta Bank red emblem" src={mobileAssets.pochtaMsc} width={177} height={177} sizes="177px" />
        </div>
        <div className="mobile-case-pochta__plashki">
          <Image alt="Pochta Bank cards stack" src={mobileAssets.pochtaPlashki} width={358} height={198} sizes="358px" />
        </div>
      </div>
    </section>
  );
}
