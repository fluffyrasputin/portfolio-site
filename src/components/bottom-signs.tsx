"use client";

import type { CSSProperties } from "react";
import { heroAssets } from "@/data/figma-assets";

export function BottomSigns() {
  return (
    <div
      className="bottom-signs"
      style={{ "--bottom-signs-background": `url(${heroAssets.bottomSignsBackground})` } as CSSProperties}
    >
      <span className="bottom-signs__name">Tsarёv Andrey</span>
      <span className="bottom-signs__year">2026</span>
    </div>
  );
}
