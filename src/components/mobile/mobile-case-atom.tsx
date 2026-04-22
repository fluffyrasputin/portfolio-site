"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";
import { formatCaseText } from "@/lib/russian-typography";

export function MobileCaseAtom() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const formatText = (text: string) => formatCaseText(language, text);

  return (
    <section className="mobile-case mobile-case--atom" aria-label="Case Atom">
      <div className="mobile-case-atom__logo">
        <Image alt="ATOM" src={mobileAssets.atomLogo} width={358} height={55} sizes="358px" />
      </div>

      <div className="mobile-case-atom__intro">
        <div className="mobile-case-atom__meta">
          <div className="mobile-case-atom__title-block">
            <p>{copy.atomTitle}</p>
            <p className="mobile-case__status">{copy.atomStatus}</p>
          </div>
          <Link className="mobile-case__more" href="/cases/atom">
            More
          </Link>
        </div>
        <p className="mobile-case-atom__description">{formatText(copy.atomDescription)}</p>
      </div>

      <div className="mobile-case-atom__car">
        <Image
          alt="ATOM car side view"
          src={mobileAssets.atomCarSide}
          width={358}
          height={173}
          sizes="358px"
        />
      </div>

      <div className="mobile-case-atom__steering">
        <Image
          alt="ATOM steering interface"
          src={mobileAssets.atomSteering}
          width={358}
          height={261}
          sizes="358px"
        />
      </div>

      <div className="mobile-case-atom__text-kamaz">
        <p className="mobile-case-atom__copy">{formatText(copy.atomCopyOne)}</p>
        <div className="mobile-case-atom__kamaz">
          <Image alt="" src={mobileAssets.atomKamaz} width={105} height={150} sizes="105px" />
        </div>
      </div>

      <div className="mobile-case-atom__cards">
        <Image alt="ATOM cards" src={mobileAssets.atomCards} width={358} height={193} sizes="358px" />
      </div>

      <div className="mobile-case-atom__photo-copy">
        <div className="mobile-case-atom__small-photo">
          <Image alt="" src={mobileAssets.atomSmallPhoto} width={128} height={75} sizes="128px" />
        </div>
        <p className="mobile-case-atom__copy">{formatText(copy.atomCopyTwo)}</p>
      </div>

      <div className="mobile-case-atom__thin">
        <Image alt="" src={mobileAssets.atomThin} width={177} height={86} sizes="177px" />
      </div>

      <div className="mobile-case-atom__radar">
        <Image
          alt="ATOM radar interface"
          src={mobileAssets.atomRadar}
          width={358}
          height={320}
          sizes="358px"
        />
      </div>

      <div className="mobile-case-atom__last">
        <Image
          alt="ATOM final visual"
          src={mobileAssets.atomLast}
          width={358}
          height={201}
          sizes="358px"
        />
      </div>
    </section>
  );
}
