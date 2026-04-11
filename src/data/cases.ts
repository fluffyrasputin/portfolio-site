import type { CaseItem, Language } from "@/types/site";

export const cases: CaseItem[] = [
  {
    id: "atom",
    slug: "atom",
    title: {
      ru: "ATOM",
      en: "ATOM",
    },
    description: {
      ru: "Большой тёмный кейс с технологичным настроением. Позже тут будет полная история проекта.",
      en: "A large dark case with a strong tech mood. Later this page will hold the full project story.",
    },
    status: {
      ru: "Desktop + mobile",
      en: "Desktop + mobile",
    },
    year: "2024",
    tags: ["landing", "ui", "motion"],
    cover: {
      kind: "none",
      src: "",
      alt: {
        ru: "Обложка кейса ATOM появится позже",
        en: "ATOM cover will be added later",
      },
    },
    links: {
      live: "",
      wall: "",
    },
    draft: true,
  },
  {
    id: "obu",
    slug: "obu",
    title: {
      ru: "OBU",
      en: "OBU",
    },
    description: {
      ru: "Светлый продуктовый кейс. Сейчас это только запись в системе, без полной страницы.",
      en: "A lighter product-focused case. Right now it is only registered in the system, without the full page.",
    },
    status: {
      ru: "Desktop + mobile",
      en: "Desktop + mobile",
    },
    year: "2024",
    tags: ["product", "ui"],
    cover: {
      kind: "none",
      src: "",
      alt: {
        ru: "Обложка кейса OBU появится позже",
        en: "OBU cover will be added later",
      },
    },
    links: {
      live: "",
      wall: "",
    },
    draft: true,
  },
  {
    id: "pochtabank",
    slug: "pochtabank",
    title: {
      ru: "Почта Банк",
      en: "Pochtabank",
    },
    description: {
      ru: "Мобильный кейс с экранами и карточками. Полное наполнение добавим позже.",
      en: "A mobile-focused case with screens and cards. Full content will be added later.",
    },
    status: {
      ru: "Mobile focus",
      en: "Mobile focus",
    },
    year: "2023",
    tags: ["mobile", "banking"],
    cover: {
      kind: "none",
      src: "",
      alt: {
        ru: "Обложка кейса Почта Банк появится позже",
        en: "Pochtabank cover will be added later",
      },
    },
    links: {
      live: "",
      wall: "",
    },
    draft: true,
  },
  {
    id: "bitrix24",
    slug: "bitrix24",
    title: {
      ru: "Битрикс24",
      en: "Bitrix24",
    },
    description: {
      ru: "Интерфейсный кейс, который позже удобно развернуть в отдельную подробную страницу.",
      en: "An interface case that can later grow into a detailed standalone page.",
    },
    status: {
      ru: "Future case page",
      en: "Future case page",
    },
    year: "2023",
    tags: ["dashboard", "saas"],
    cover: {
      kind: "none",
      src: "",
      alt: {
        ru: "Обложка кейса Битрикс24 появится позже",
        en: "Bitrix24 cover will be added later",
      },
    },
    links: {
      live: "",
      wall: "",
    },
    draft: true,
  },
  {
    id: "stoloto",
    slug: "stoloto",
    title: {
      ru: "Столото",
      en: "Stoloto",
    },
    description: {
      ru: "Яркий кейс с карточками и промо-блоками. Сейчас подготовлена только база маршрута.",
      en: "A bright case with cards and promo blocks. Right now only the route base is prepared.",
    },
    status: {
      ru: "Future case page",
      en: "Future case page",
    },
    year: "2022",
    tags: ["promo", "visual"],
    cover: {
      kind: "none",
      src: "",
      alt: {
        ru: "Обложка кейса Столото появится позже",
        en: "Stoloto cover will be added later",
      },
    },
    links: {
      live: "",
      wall: "",
    },
    draft: true,
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getLocalizedCaseField<T extends keyof Pick<CaseItem, "title" | "description" | "status">>(
  item: CaseItem,
  language: Language,
  field: T,
) {
  return item[field][language];
}
