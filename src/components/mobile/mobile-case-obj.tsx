"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";
import { formatCaseText } from "@/lib/russian-typography";

export function MobileCaseObj() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const formatText = (text: string) => formatCaseText(language, text);

  return (
    <section className="mobile-case mobile-case--obj" aria-label="Case Object">
      <div className="mobile-case-obj__logo">
        <Image alt="OBJ" src={mobileAssets.objLogo} width={358} height={53} sizes="358px" />
      </div>

      <div className="mobile-case-obj__intro">
        <div className="mobile-case-obj__meta">
          <div className="mobile-case-obj__title-block">
            <p className="mobile-case-obj__title">{copy.objTitle}</p>
            <p className="mobile-case__status">{copy.objStatus}</p>
          </div>
        </div>
        <div className="mobile-case-obj__description">
          <Image alt="" src={mobileAssets.objDescription} width={201} height={64} sizes="201px" />
        </div>
      </div>

      <div className="mobile-case-obj__car">
        <Image alt="Covered concept car" src={mobileAssets.objCar} width={358} height={179} sizes="358px" />
      </div>

      <p className="mobile-case-obj__copy">{formatText(copy.objCopy)}</p>

      <div className="mobile-case-obj__music">
        <Image alt="OBJ music interface" src={mobileAssets.objMusic} width={358} height={201} sizes="358px" />
      </div>
    </section>
  );
}
