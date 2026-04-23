"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useState } from "react";
import { heroAssets } from "@/data/figma-assets";

const LOADER_SESSION_KEY = "portfolio-site-loader-seen";

export function SiteLoader() {
  const [phase, setPhase] = useState<"checking" | "open" | "closing" | "closed">("checking");
  const [blurPhase, setBlurPhase] = useState<"idle" | "active" | "closing">("idle");
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

    logos.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const hasSeenLoader = window.sessionStorage.getItem(LOADER_SESSION_KEY) === "1";
    if (hasSeenLoader) {
      const skipTimer = window.setTimeout(() => setPhase("closed"), 0);
      return () => {
        window.clearTimeout(skipTimer);
      };
    }

    window.sessionStorage.setItem(LOADER_SESSION_KEY, "1");

    const logoInterval = 120;
    const settleDuration = 460;
    const fadeDuration = 1120;
    const stopTime = logos.length * logoInterval + 360;
    const closeTime = stopTime + settleDuration;
    const totalDuration = closeTime + fadeDuration;
    const openTimer = window.setTimeout(() => {
      setPhase("open");
      setBlurPhase("active");
    }, 24);
    const logoTimer = window.setInterval(() => {
      setLogoIndex((current) => (current + 1) % logos.length);
    }, logoInterval);
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + 100 / (totalDuration / 60);
        return next >= 100 ? 100 : next;
      });
    }, 60);
    const stopTimer = window.setTimeout(() => {
      window.clearInterval(logoTimer);
      window.clearInterval(progressTimer);
      setProgress(100);
    }, stopTime);
    const closeTimer = window.setTimeout(() => {
      setPhase("closing");
      setBlurPhase("closing");
    }, closeTime);
    const hideTimer = window.setTimeout(() => {
      setPhase("closed");
      setBlurPhase("idle");
    }, totalDuration);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(stopTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(hideTimer);
      window.clearInterval(logoTimer);
      window.clearInterval(progressTimer);
    };
  }, [logos]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.classList.toggle("site-loader-active", blurPhase === "active");
    document.body.classList.toggle("site-loader-closing", blurPhase === "closing");

    return () => {
      document.body.classList.remove("site-loader-active");
      document.body.classList.remove("site-loader-closing");
    };
  }, [blurPhase]);

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
