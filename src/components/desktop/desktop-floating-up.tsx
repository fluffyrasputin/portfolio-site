"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const upCopy = {
  ru: "Наверх",
  en: "UP",
} as const;

function ArrowUpIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="desktop-floating-up__icon">
      <path d="M12 5.5 6.5 11l1.4 1.4 3.1-3.1V18h2V9.3l3.1 3.1 1.4-1.4L12 5.5Z" fill="currentColor" />
    </svg>
  );
}

export function DesktopFloatingUp() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY >= 1000);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      className={`desktop-floating-up${isVisible ? " desktop-floating-up--visible" : ""}`}
      href="#top"
      aria-label={upCopy[language]}
    >
      <ArrowUpIcon />
    </a>
  );
}
