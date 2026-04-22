"use client";

import { usePathname } from "next/navigation";
import { DesktopFloatingUp } from "@/components/desktop/desktop-floating-up";
import { DesktopPlayer } from "@/components/desktop/desktop-player";

const ENABLED_PATHS = new Set(["/", "/wall"]);

export function PersistentFloatingControls() {
  const pathname = usePathname();

  if (!ENABLED_PATHS.has(pathname)) {
    return null;
  }

  return (
    <div className="persistent-floating-controls">
      <DesktopFloatingUp />
      <DesktopPlayer />
    </div>
  );
}
