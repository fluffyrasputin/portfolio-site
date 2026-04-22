"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { heroAssets } from "@/data/figma-assets";

const LOADER_SESSION_KEY = "portfolio-site-loader-seen";

export function SiteLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const hasSeenLoader = window.sessionStorage.getItem(LOADER_SESSION_KEY) === "1";
    if (!hasSeenLoader) {
      window.sessionStorage.setItem(LOADER_SESSION_KEY, "1");
    }

    return !hasSeenLoader;
  });
  const [closing, setClosing] = useState(false);
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
    if (typeof window === "undefined" || !visible) {
      return;
    }

    const totalDuration = 1400;
    const closeTimer = window.setTimeout(() => setClosing(true), 1050);
    const hideTimer = window.setTimeout(() => setVisible(false), totalDuration);
    const logoTimer = window.setInterval(() => {
      setLogoIndex((current) => (current + 1) % logos.length);
    }, 100);
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 100 / (totalDuration / 50);
        return next >= 100 ? 100 : next;
      });
    }, 50);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(logoTimer);
      window.clearInterval(progressTimer);
    };
  }, [logos.length, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`site-loader${closing ? " site-loader--closing" : ""}`}
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
