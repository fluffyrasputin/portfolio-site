"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";
import { formatCaseText } from "@/lib/russian-typography";

export function MobileCaseBitrix() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const formatText = (text: string) => formatCaseText(language, text);

  return (
    <section className="mobile-case mobile-case--bitrix" aria-label="Case Bitrix24">
      <div className="mobile-case-bitrix__logo">
        <Image alt="Bitrix24" src={mobileAssets.bitrixLogo} width={358} height={64} sizes="358px" />
      </div>

      <div className="mobile-case-bitrix__intro">
        <div className="mobile-case-bitrix__meta">
          <div className="mobile-case-bitrix__title-block">
            <p>{copy.bitrixTitle}</p>
            <p className="mobile-case__status">{copy.bitrixStatus}</p>
          </div>
          <Link className="mobile-case__more" href="/cases/bitrix24">More</Link>
        </div>
        <p className="mobile-case-bitrix__description">{formatText(copy.bitrixDescription)}</p>
      </div>

      <div className="mobile-case-bitrix__faces">
        <Image alt="Bitrix24 faces" src={mobileAssets.bitrixFacesCombined} width={358} height={79} sizes="358px" />
      </div>

      <p className="mobile-case-bitrix__copy-top">{formatText(copy.bitrixCopyTop)}</p>

      <div className="mobile-case-bitrix__block">
        <Image alt="Bitrix24 main block" src={mobileAssets.bitrixBlock} width={358} height={275} sizes="358px" />
      </div>

      <div className="mobile-case-bitrix__copy-bottom">
        <p>{formatText(copy.bitrixCopyBottomOne)}</p>
        <p>{formatText(copy.bitrixCopyBottomTwo)}</p>
        <p>{formatText(copy.bitrixCopyBottomThree)}</p>
      </div>

      <div className="mobile-case-bitrix__last">
        <Image alt="Bitrix24 lower screen" src={mobileAssets.bitrixLast} width={358} height={221} sizes="358px" />
      </div>
    </section>
  );
}
