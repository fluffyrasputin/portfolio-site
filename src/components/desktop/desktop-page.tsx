"use client";

import { BottomSigns } from "@/components/bottom-signs";
import { DesktopHeader } from "@/components/desktop/desktop-header";
import { HomePage } from "@/components/home-page";

export function DesktopPage() {
  return (
    <>
      <DesktopHeader />
      <HomePage />
      <BottomSigns />
    </>
  );
}
