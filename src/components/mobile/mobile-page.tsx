"use client";

import { BottomSigns } from "@/components/bottom-signs";
import { MobileAdditionalCases } from "@/components/mobile/mobile-additional-cases";
import { MobileHeader } from "@/components/mobile/mobile-header";
import { MobilePageEnd } from "@/components/mobile/mobile-page-end";
import { MobileCaseAtom } from "@/components/mobile/mobile-case-atom";
import { MobileCaseBitrix } from "@/components/mobile/mobile-case-bitrix";
import { MobileCaseObj } from "@/components/mobile/mobile-case-obj";
import { MobileCasePochta } from "@/components/mobile/mobile-case-pochta";
import { MobileCaseStoloto } from "@/components/mobile/mobile-case-stoloto";
import { MobileHero } from "@/components/mobile/mobile-hero";

export function MobilePage() {
  return (
    <>
      <MobileHeader />
      <section className="mobile-page" aria-label="Mobile page content">
        <div className="mobile-page__container">
          <MobileHero />
          <MobileCaseAtom />
          <MobileCaseObj />
          <MobileCasePochta />
          <MobileCaseBitrix />
          <MobileCaseStoloto />
          <MobileAdditionalCases />
          <MobilePageEnd />
        </div>
      </section>
      <BottomSigns />
    </>
  );
}
