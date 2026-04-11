import type { SiteDictionary } from "@/types/site";

export const contacts = {
  telegram: "https://t.me/andreytsarev",
  email: "eggy0510@gmail.com",
  cv: "/cv",
};

export const dictionaries: Record<"ru" | "en", SiteDictionary> = {
  ru: {
    navigation: {
      home: "Главная",
      wall: "Стена",
    },
    header: {
      role: "Портфолио и база для будущего роста",
      contacts: "Контакты",
    },
    home: {
      eyebrow: "Песочница Андрея",
      title: "Портфолио, которое легко расширять.",
      subtitle: "Сначала переносим дизайн из Figma, потом спокойно добавляем страницы, анимации и новые блоки.",
      description:
        "Это стартовая архитектура. Она нужна, чтобы сайт не развалился, когда ты захочешь добавить язык, кейсы, стену, видео или новые секции.",
      primaryCta: "Открыть CV",
      secondaryCta: "Написать в Telegram",
      casesTitle: "Кейсы",
      casesText:
        "Ниже лежит список проектов, которые уже видны в макете. Позже каждый из них станет отдельной страницей.",
      caseOpen: "Открыть кейс",
      caseDraft: "черновик",
      notesTitle: "Что уже заложено",
      notes: [
        "Одна база для desktop и mobile.",
        "Переключение языка без перезагрузки страницы.",
        "Отдельная страница Стена под текст и медиа.",
        "Простая структура, чтобы ты сам не потерялся в файлах.",
      ],
    },
    cases: {
      eyebrow: "Кейсы",
      title: "Заготовки страниц под будущие работы.",
      description:
        "Сейчас у каждого кейса уже есть свой адрес, своя запись в данных и место под будущее наполнение.",
      open: "Открыть кейс",
      back: "Назад к кейсам",
      metaYear: "Год",
      metaStatus: "Статус",
      metaTags: "Теги",
      draftTitle: "Это пока черновая страница.",
      draftText:
        "Когда начнём второй этап, сюда добавим обложку, задачу, процесс, экраны, результаты и медиа.",
    },
    wall: {
      eyebrow: "Стена",
      title: "Пустая заготовка под будущий раздел.",
      description:
        "Сейчас это спокойный каркас. Потом сюда можно положить текст, картинку, gif или видео без перестройки всего сайта.",
      mediaTitle: "Место под медиа",
      mediaText:
        "Сюда потом можно вставить изображение, анимированный файл или видео-блок.",
      note: "Когда пришлёшь контент, мы заменим этот блок на настоящий.",
    },
    cv: {
      eyebrow: "CV",
      title: "Отдельная страница под резюме.",
      description:
        "Сейчас это подготовленное место. Позже ты просто положишь PDF в папку `public/cv`, и страница начнёт показывать документ.",
      fileReady: "PDF найден",
      fileMissing: "PDF пока не найден",
      filePathLabel: "Ожидаемый путь",
      openPdf: "Открыть PDF",
      downloadPdf: "Скачать PDF",
      placeholderTitle: "Пока здесь заглушка.",
      placeholderText:
        "Положи файл в `public/cv/andrey-carev-cv.pdf`. После этого на странице появится встроенный просмотр и кнопка скачивания.",
    },
    contacts: {
      telegram: "Telegram",
      email: "Почта",
      cv: "CV",
      unavailable: "добавим позже",
    },
  },
  en: {
    navigation: {
      home: "Home",
      wall: "Wall",
    },
    header: {
      role: "Portfolio and a base for future growth",
      contacts: "Contacts",
    },
    home: {
      eyebrow: "Andrey's sandbox",
      title: "A portfolio that is easy to grow.",
      subtitle: "First we move the design from Figma, then we safely add pages, animations, and new blocks.",
      description:
        "This is the starter architecture. It keeps the site clean when you later add a second language, case pages, a wall, video, or new sections.",
      primaryCta: "Open CV",
      secondaryCta: "Message on Telegram",
      casesTitle: "Cases",
      casesText:
        "Below is the list of projects already visible in the mockup. Later each one can become its own page.",
      caseOpen: "Open case",
      caseDraft: "draft",
      notesTitle: "Already prepared",
      notes: [
        "One base for desktop and mobile.",
        "Language switch without page reload.",
        "Separate Wall page for text and media.",
        "Simple structure so the files stay easy to understand.",
      ],
    },
    cases: {
      eyebrow: "Cases",
      title: "Starter pages for future case studies.",
      description:
        "Right now each case already has its own route, its own data record, and a place for future content.",
      open: "Open case",
      back: "Back to cases",
      metaYear: "Year",
      metaStatus: "Status",
      metaTags: "Tags",
      draftTitle: "This page is still a draft.",
      draftText:
        "When we start the second phase, we will add the cover, task, process, screens, results, and media here.",
    },
    wall: {
      eyebrow: "Wall",
      title: "An empty starter page for the future section.",
      description:
        "Right now this is a calm scaffold. Later we can place text, an image, a gif, or a video here without rebuilding the whole site.",
      mediaTitle: "Media slot",
      mediaText:
        "Later this area can hold an image, an animated asset, or a video block.",
      note: "When you send the real content, we will replace this block with the real one.",
    },
    cv: {
      eyebrow: "CV",
      title: "A dedicated page for the resume.",
      description:
        "Right now this is a prepared slot. Later you can simply place a PDF into `public/cv`, and the page will start showing the document.",
      fileReady: "PDF found",
      fileMissing: "PDF not found yet",
      filePathLabel: "Expected path",
      openPdf: "Open PDF",
      downloadPdf: "Download PDF",
      placeholderTitle: "This is a placeholder for now.",
      placeholderText:
        "Put the file into `public/cv/andrey-carev-cv.pdf`. After that the page will show an embedded preview and a download button.",
    },
    contacts: {
      telegram: "Telegram",
      email: "Email",
      cv: "CV",
      unavailable: "add later",
    },
  },
};
