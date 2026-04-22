"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";
import { formatCaseText } from "@/lib/russian-typography";

export function MobileCaseStoloto() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const formatText = (text: string) => formatCaseText(language, text);

  return (
    <section className="mobile-case mobile-case--stoloto" aria-label="Case Stoloto">
      <div className="mobile-case-stoloto__logo">
        <Image alt="Stoloto" src={mobileAssets.stolotoLogo} width={358} height={55} sizes="358px" />
      </div>

      <div className="mobile-case-stoloto__intro">
        <div className="mobile-case-stoloto__meta">
          <div className="mobile-case-stoloto__title-block">
            <p>{copy.stolotoTitle}</p>
            <p className="mobile-case__status">{copy.stolotoStatus}</p>
          </div>
          <Link className="mobile-case__more" href="/cases/stoloto">More</Link>
        </div>
        <p className="mobile-case-stoloto__description">{formatText(copy.stolotoDescription)}</p>
      </div>

      <div className="mobile-case-stoloto__block">
        <Image alt="Stoloto dark screens" src={mobileAssets.stolotoBlock} width={358} height={371} sizes="358px" />
      </div>

      <div className="mobile-case-stoloto__mascots-top">
        <Image alt="Stoloto top mascots" src={mobileAssets.stolotoTwoMatryoshkas} width={358} height={260} sizes="358px" />
      </div>

      <div className="mobile-case-stoloto__copy-row">
        <div className="mobile-case-stoloto__copy">
          {[copy.stolotoCopyOne, copy.stolotoCopyTwo].filter(Boolean).map((item) => (
            <p key={item}>{formatText(item)}</p>
          ))}
        </div>
        <div className="mobile-case-stoloto__mascot-right">
          <Image alt="Stoloto right mascot" src={mobileAssets.stolotoSingleMatryoshka} width={162} height={301} sizes="162px" />
        </div>
      </div>

      <div className="mobile-case-stoloto__right">
        <Image alt="Stoloto phone interface" src={mobileAssets.stolotoRight} width={358} height={735} sizes="358px" />
      </div>

      <div className="mobile-case-stoloto__end">
        <Image alt="Stoloto end graphic" src={mobileAssets.stolotoLotteries} width={358} height={477} sizes="358px" />
      </div>
    </section>
  );
}
