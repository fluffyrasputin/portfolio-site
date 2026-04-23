"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";

export function MobileHero() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const displayName = language === "ru" ? "Царёв Андрей" : "Tsarёv Andrey";

  return (
    <section className="mobile-hero" aria-label="Mobile hero">
      <div className="mobile-hero__photo">
        <Image
          alt="Portrait of Andrey"
          src={mobileAssets.heroPhoto}
          width={56}
          height={56}
          sizes="56px"
        />
      </div>

      <div className="mobile-hero__identity">
        <h1 className="mobile-hero__name">{displayName}</h1>
        <div className="mobile-hero__role">
          {copy.heroRole.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div className="mobile-hero__projects-title">{copy.heroProjectsLabel}</div>

      <div className="mobile-hero__projects">
        <div className="mobile-hero__project-logos" aria-hidden="true">
          {mobileAssets.heroProjectLogos.map((logo, index) => (
            <span className="mobile-hero__project-logo" key={logo}>
              <Image alt="" src={logo} width={13} height={13} sizes="13px" priority={index < 2} />
            </span>
          ))}
        </div>
        <div className="mobile-hero__project-list">
          {copy.heroProjects.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>

      <div className="mobile-hero__wolf">
        <video
          aria-hidden="true"
          src="/media/figma/Wolfy video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </section>
  );
}
