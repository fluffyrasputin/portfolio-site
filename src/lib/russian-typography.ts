import type { Language } from "@/types/site";

const SHORT_RUSSIAN_WORDS = [
  "это",
  "без",
  "для",
  "при",
  "над",
  "под",
  "про",
  "но",
  "не",
  "на",
  "ни",
  "по",
  "из",
  "за",
  "до",
  "от",
  "об",
  "во",
  "ко",
  "со",
  "а",
  "и",
  "в",
  "с",
  "к",
  "у",
  "о",
] as const;

const SHORT_RUSSIAN_WORDS_PATTERN = new RegExp(
  `(^|[\\s\\u00A0])(${SHORT_RUSSIAN_WORDS.join("|")})(\\s+)`,
  "giu",
);

export function preventRussianWidows(text: string) {
  return text.replace(SHORT_RUSSIAN_WORDS_PATTERN, (_, prefix: string, word: string) => {
    return `${prefix}${word}\u00A0`;
  });
}

export function formatCaseText(language: Language, text: string) {
  if (language !== "ru") {
    return text;
  }

  return preventRussianWidows(text);
}
