"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/language-provider";
import { heroAssets } from "@/data/figma-assets";

export function BottomSigns() {
  const { language } = useLanguage();
  const displayName = language === "ru" ? "Царёв Андрей" : "Tsarёv Andrey";

  return (
    <div
      className="bottom-signs"
      style={{ "--bottom-signs-background": `url(${heroAssets.bottomSignsBackground})` } as CSSProperties}
    >
      <span className="bottom-signs__name">{displayName}</span>
      <span className="bottom-signs__year">2026</span>
    </div>
  );
}
