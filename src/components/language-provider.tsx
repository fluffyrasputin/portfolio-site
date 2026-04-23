"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { LanguageToast } from "@/components/language-toast";
import type { Language } from "@/types/site";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const storedLanguage = window.localStorage.getItem("portfolio-language");
    return storedLanguage === "ru" || storedLanguage === "en" ? storedLanguage : "en";
  });
  const [toastPhase, setToastPhase] = useState<"closed" | "open" | "closing">("closed");
  const toastHoldTimerRef = useRef<number | null>(null);
  const toastCloseTimerRef = useRef<number | null>(null);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState((currentLanguage) => {
      if (currentLanguage === "en" && nextLanguage === "ru") {
        if (toastHoldTimerRef.current !== null) {
          window.clearTimeout(toastHoldTimerRef.current);
        }

        if (toastCloseTimerRef.current !== null) {
          window.clearTimeout(toastCloseTimerRef.current);
        }

        setToastPhase("open");
        toastHoldTimerRef.current = window.setTimeout(() => {
          setToastPhase("closing");
          toastCloseTimerRef.current = window.setTimeout(() => {
            setToastPhase("closed");
            toastCloseTimerRef.current = null;
          }, 300);
          toastHoldTimerRef.current = null;
        }, 5000);
      }

      return nextLanguage;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    return () => {
      if (toastHoldTimerRef.current !== null) {
        window.clearTimeout(toastHoldTimerRef.current);
      }
      if (toastCloseTimerRef.current !== null) {
        window.clearTimeout(toastCloseTimerRef.current);
      }
    };
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <LanguageToast
        phase={toastPhase}
        title="Родной, лучше оставь английский"
        description="Тексты могут перевестись некорректно, я тебя предупредил"
      />
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
