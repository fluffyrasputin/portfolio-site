"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  );
}

export function SecretSnakeHotkey() {
  const pathname = usePathname();
  const digitSequenceRef = useRef("");

  useEffect(() => {
    function handleKeyup(event: KeyboardEvent) {
      if (pathname === "/secret-snake" || pathname === "/secret-1803" || pathname === "/secret-1904") {
        return;
      }

      if (window.matchMedia("(max-width: 767px)").matches) {
        return;
      }

      if (isEditableTarget(event.target)) {
        return;
      }

      if (event.code === "Enter") {
        event.preventDefault();
        window.location.assign("/secret-snake");
        return;
      }

      const digitMatch = event.code.match(/^(Digit|Numpad)(\d)$/);
      if (!digitMatch) {
        digitSequenceRef.current = "";
        return;
      }

      digitSequenceRef.current = `${digitSequenceRef.current}${digitMatch[2]}`.slice(-4);

      if (digitSequenceRef.current === "1803") {
        event.preventDefault();
        digitSequenceRef.current = "";
        window.location.assign("/secret-1803");
      }
    }

    window.addEventListener("keyup", handleKeyup, true);
    return () => {
      window.removeEventListener("keyup", handleKeyup, true);
    };
  }, [pathname]);

  return null;
}
