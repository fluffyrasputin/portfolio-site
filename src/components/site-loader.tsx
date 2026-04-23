"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { heroAssets } from "@/data/figma-assets";

const LOADER_SESSION_KEY = "portfolio-site-loader-seen";

export function SiteLoader() {
  const [phase, setPhase] = useState<"checking" | "open" | "closing" | "closed">("checking");
  const [progress, setProgress] = useState(0);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const logos = useMemo(
    () => [
      heroAssets.heroProjectLogo1,
      heroAssets.heroProjectLogo2,
      heroAssets.heroProjectLogo3,
      heroAssets.heroProjectLogo4,
      heroAssets.heroProjectLogo5,
      heroAssets.heroProjectLogo6,
      heroAssets.heroProjectLogo7,
      heroAssets.heroProjectLogo8,
      heroAssets.heroProjectLogo9,
      heroAssets.heroProjectLogo10,
    ],
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasSeenLoader = window.sessionStorage.getItem(LOADER_SESSION_KEY) === "1";
    if (hasSeenLoader) {
      const skipTimer = window.setTimeout(() => setPhase("closed"), 0);
      return () => {
        window.clearTimeout(skipTimer);
      };
    }

    window.sessionStorage.setItem(LOADER_SESSION_KEY, "1");

    const totalDuration = 1400;
    let nextLogoIndex = 0;
    const openTimer = window.setTimeout(() => setPhase("open"), 0);
    const closeTimer = window.setTimeout(() => setPhase("closing"), 1050);
    const hideTimer = window.setTimeout(() => setPhase("closed"), totalDuration);
    const logoTimer = window.setInterval(() => {
      nextLogoIndex = (nextLogoIndex + 1) % logos.length;
      if (logoRef.current) {
        logoRef.current.src = logos[nextLogoIndex];
      }
    }, 100);
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 100 / (totalDuration / 50);
        return next >= 100 ? 100 : next;
      });
    }, 50);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(logoTimer);
      window.clearInterval(progressTimer);
    };
  }, [logos.length]);

  if (phase === "closed") {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`site-loader${phase === "closing" ? " site-loader--closing" : ""}`}
    >
      <div className="site-loader__identity">
        <p className="site-loader__name">Andrey Tsarёv</p>
        <p className="site-loader__role">designer, art-d</p>
      </div>
      <div className="site-loader__logo-stage">
        <img
          alt=""
          className="site-loader__logo"
          ref={logoRef}
          src={logos[0]}
        />
      </div>
      <div className="site-loader__track" aria-hidden="true">
        <span className="site-loader__progress" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}
