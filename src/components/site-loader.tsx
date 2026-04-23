"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { heroAssets } from "@/data/figma-assets";

const LOADER_SESSION_KEY = "portfolio-site-loader-seen";

export function SiteLoader() {
  const [phase, setPhase] = useState<"checking" | "open" | "closing" | "closed">("checking");
  const [logoIndex, setLogoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
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

    const settleDuration = 220;
    const fadeDuration = 560;
    const stopTime = 980;
    const closeTime = stopTime + settleDuration;
    const totalDuration = closeTime + fadeDuration;
    const openTimer = window.setTimeout(() => setPhase("open"), 40);
    const logoTimer = window.setInterval(() => {
      setLogoIndex((current) => (current + 1) % logos.length);
    }, 100);
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 100 / (totalDuration / 50);
        return next >= 100 ? 100 : next;
      });
    }, 50);
    const stopTimer = window.setTimeout(() => {
      window.clearInterval(logoTimer);
      window.clearInterval(progressTimer);
      setProgress(100);
    }, stopTime);
    const closeTimer = window.setTimeout(() => {
      setPhase("closing");
    }, closeTime);
    const hideTimer = window.setTimeout(() => setPhase("closed"), totalDuration);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(stopTimer);
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
      className={`site-loader${phase === "open" ? " site-loader--open" : ""}${phase === "closing" ? " site-loader--closing" : ""}`}
    >
      <div className="site-loader__identity">
        <p className="site-loader__name">Andrey Tsarёv</p>
        <p className="site-loader__role">designer, art-d</p>
      </div>
      <div className="site-loader__logo-stage">
        <img
          alt=""
          className="site-loader__logo"
          src={logos[logoIndex]}
        />
      </div>
      <div className="site-loader__track" aria-hidden="true">
        <span className="site-loader__progress" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
    </div>
  );
}
