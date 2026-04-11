export type Language = "ru" | "en";

export type CaseItem = {
  id: string;
  slug: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  status: Record<Language, string>;
  year: string;
  tags: string[];
  cover: {
    kind: "image" | "gif" | "video" | "none";
    src: string;
    alt: Record<Language, string>;
  };
  links: {
    live: string;
    wall: string;
  };
  draft: boolean;
};

export type SiteDictionary = {
  navigation: {
    home: string;
    wall: string;
  };
  header: {
    role: string;
    contacts: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    casesTitle: string;
    casesText: string;
    caseOpen: string;
    caseDraft: string;
    notesTitle: string;
    notes: string[];
  };
  cases: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    back: string;
    metaYear: string;
    metaStatus: string;
    metaTags: string;
    draftTitle: string;
    draftText: string;
  };
  wall: {
    eyebrow: string;
    title: string;
    description: string;
    mediaTitle: string;
    mediaText: string;
    note: string;
  };
  cv: {
    eyebrow: string;
    title: string;
    description: string;
    fileReady: string;
    fileMissing: string;
    filePathLabel: string;
    openPdf: string;
    downloadPdf: string;
    placeholderTitle: string;
    placeholderText: string;
  };
  contacts: {
    telegram: string;
    email: string;
    cv: string;
    unavailable: string;
  };
};
