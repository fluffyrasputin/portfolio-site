"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { heroAssets } from "@/data/figma-assets";
import { contacts } from "@/data/site-content";

const heroProjectItems = [
  "ATOM auto",
  "Pochta bank,",
  "Bitrix24,",
  "Stoloto,",
  "Auchan,",
  "Moskvich,",
  "Haier,",
  "Borishoff",
  "Moscow Postamat",
  "Culture of MSC",
] as const;

const footerProjectStatuses = [
  "art-d, designer",
  "art-d, designer",
  "lead-d, designer",
  "lead-d, designer",
  "designer",
  "designer",
  "designer",
  "designer",
  "art-d, designer",
  "lead-d, designer",
] as const;

const pageCopy = {
  ru: {
    heroRole: ["Руководитель digital-дизайна", "арт-директор", "дизайнер"],
    heroProjectsLabel: "Проекты",
    heroAndMore: "и другое",
    heroPromo:
      "Создаю уникальные визуальные образы, делаю дизайн компаний узнаваемым, работаю с новыми устройствами, и помогаю командам расти",
    atomMore: "Подробнее",
    atomStatus: "арт-директор • дизайнер • 24-26",
    atomDescription:
      "Эта легендарная компания успела перевернуть автомобильный рынок, стать настоящей рок-звездой индустрии, но закончила так же драматично и преждевременно",
    atomCopyOne:
      "Сделал целую UI-систему, на которой были построены все интерфейсы вокруг проекта: множество концептов, уникальный look&feel, виджеты главной страницы, HMX, анимации, иллюстрации и многое другое.",
    atomCopyTwo:
      "Сделал целую UI-систему, на которой были собраны все интерфейсы вокруг проекта: много концептов, уникальный look&feel, виджеты главной, HMX, анимации, иллюстрации и многое другое.",
    obuTitle: "Ещё один автомобильный проект",
    obuStatus: "арт-директор • дизайнер",
    obuCopy:
      "Определил look & feel, сделал сервисные и главные экраны: виджеты, климат-контроль, медиа и музыку, экран всех приложений, звонки, камеры и другое.",
    pochtaName: "ПРИЛОЖЕНИЕ ПОЧТА БАНКА",
    pochtaStatus: "арт-директор • дизайнер",
    pochtaMore: "Подробнее",
    pochtaTag: "редизайн",
    pochtaCopy:
      "Сделал полностью новое приложение.\nВсе разделы и вкладки были переработаны, большая часть UX собрана заново, включая быстрые платежи и решения для роста нужных банковских метрик. Продукт стал лучше работать и на пенсионную аудиторию, и на более молодую.\nПереработал иллюстрации, собрал дизайн-систему, гайдлайны, анимации, профили и баннеры.",
    pochtaDescription:
      "Почта Банк — один из крупнейших розничных банков России с самой широкой сетью: более 30 000 точек обслуживания в 83 регионах и клиентской базой более 21 миллиона человек.",
    bitrixStatus: "ведущий дизайнер",
    bitrixMore: "Подробнее",
    bitrixTag: "редизайн",
    bitrixDescriptionOne:
      "Битрикс24 — одна из крупнейших бизнес-экосистем, которой доверяют более 15 миллионов компаний в более чем 150 странах.",
    bitrixDescriptionTwo:
      "Сделал полностью новый UI для сайта с собственной философией и сильной центральной идеей.",
    bitrixBottomLeftOne: "Но не только сайт",
    bitrixBottomLeftTwo:
      "Я также сделал предложение по редизайну внутренней системы, чтобы сделать её гораздо дружелюбнее и приятнее в ежедневной работе.",
    bitrixBottomRightOne: "Но в прод это не пошло,",
    bitrixBottomRightTwo: "поэтому пусть спокойно живёт здесь",
    stolotoName: "СТОЛОТО",
    stolotoStatus: "ведущий дизайнер",
    stolotoMore: "Подробнее",
    stolotoTag: "редизайн",
    stolotoDescription:
      "Один из самых заметных лотерейных продуктов в России. Для него был собран новый визуальный язык, обновлены сценарии покупки и акцентирован сам продукт.",
    stolotoCopyOne:
      "Сделал новое приложение. Все разделы и вкладки были переработаны, большая часть UX собрана заново, включая быстрые платежи и решения для роста продуктовых метрик.",
    stolotoCopyTwo:
      "Переработал иллюстрации, собрал дизайн-систему, гайдлайны, анимации, профили и баннеры.",
    additionalTitle: "Ещё",
    additionalSubtitle: "Последние, но не менее важные",
    financeTitle: "Редизайн сайта",
    financeRole: "дизайнер",
    up: "Наверх",
    footerRole: ["Руководитель digital-дизайна", "арт-директор", "дизайнер"],
    footerProjectsLabel: "Проекты",
    footerAndMore: "и другое",
    footerTelegram: "Телеграм",
    footerMail: "Почта",
  },
  en: {
    heroRole: ["Digital design team-lead", "art-d", "designer"],
    heroProjectsLabel: "Projects",
    heroAndMore: "and more",
    heroPromo:
      "Creating beautiful visuals, making companies' design unique, working with never known devices, delivering teams growth",
    atomMore: "More",
    atomStatus: "art-d • designer • 24-26",
    atomDescription:
      "This legendary company managed to revolutionize the automotive market, becoming the rock star of the industry, but it met its end just as dramatically and prematurely",
    atomCopyOne:
      "Made a whole UI system that was build all interfaces around it, lots of concepts that produced a unique look&feel, main page widgets, HMX, animations, ilutstrarions etc.",
    atomCopyTwo:
      "Made a whole UI system that was biuld all interfaces around it, lots of concepts that produced a unique look&feel, main page widgets, HMX, animations, ilutstrarions etc.",
    obuTitle: "Another automotive",
    obuStatus: "art-d • designer",
    obuCopy:
      "Defined look & feel, created service and main screens such as widgets, climate-control, media and music, all apps page, calls, cameras etc.",
    pochtaName: "POCHTA BANK APP",
    pochtaStatus: "art-d • designer",
    pochtaMore: "More",
    pochtaTag: "redesign",
    pochtaCopy:
      "Made a whole new app.\nAll of the sections and tabs redisgned, most of the UX is remade, including fast-paymant features and highers CTR to bank needed metrics, targeting pensioners and new young audience to prevent (привлечь)\nReworked illutstrations, created a design-system, guidelines, animations, profiles and banners",
    pochtaDescription:
      "Pochta Bank is one of the largest retail banks in Russia, with the broadest network: over 30,000 service points in 83 regions and a customer base of over 21 million.",
    bitrixStatus: "lead-designer",
    bitrixMore: "More",
    bitrixTag: "redesign",
    bitrixDescriptionOne:
      "Bitrix24 is one of the largest business ecosystems, trusted by over 15 million companies in over 150 countries.",
    bitrixDescriptionTwo:
      "Created a whole new UI for a web-site with it's own philosophy and big idea",
    bitrixBottomLeftOne: "But not only website",
    bitrixBottomLeftTwo:
      "I also made a proposal to redisgn a inner system to create a much friendly, connectivity design to work with joy",
    bitrixBottomRightOne: "But it didn't go to prod,",
    bitrixBottomRightTwo: "so let it rest here in peace",
    stolotoName: "STOLOTO",
    stolotoStatus: "lead-designer",
    stolotoMore: "More",
    stolotoTag: "redesign",
    stolotoDescription:
      "One of the most visible lottery products in Russia. The work included a new visual language, updated purchase scenarios, and a stronger focus on the core product.",
    stolotoCopyOne:
      "Made a whole new app. All of the sections and tabs redisgned, most of the UX is remade, including fast-paymant features and highers CTR to bank needed metrics.",
    stolotoCopyTwo:
      "Reworked illutstrations, created a design-system, guidelines, animations, profiles and banners.",
    additionalTitle: "Etc.",
    additionalSubtitle: "Last, but not least",
    financeTitle: "Web redesign",
    financeRole: "designer",
    up: "UP",
    footerRole: ["Digital design team-lead", "art-d", "designer"],
    footerProjectsLabel: "Projects",
    footerAndMore: "and more",
    footerTelegram: "Telegram",
    footerMail: "Mail",
  },
} as const;

const imageSizes = {
  heroWolf: "(max-width: 640px) 254px, 254px",
  heroPortrait: "(max-width: 640px) 96px, 96px",
  heroProjectLogo: "(max-width: 640px) 13px, 13px",
  promoIcon: "(max-width: 640px) 24px, 24px",
  full: "(max-width: 640px) calc(100vw - 32px), 620px",
  medium: "(max-width: 640px) calc(100vw - 32px), 411px",
  card: "(max-width: 640px) calc(100vw - 32px), 306px",
  narrow: "(max-width: 640px) calc(100vw - 32px), 201px",
  tiny: "(max-width: 640px) 128px, 128px",
  slim: "(max-width: 640px) 185px, 185px",
  mini: "(max-width: 640px) 105px, 105px",
  face: "(max-width: 640px) 96px, 96px",
  badge: "(max-width: 640px) 20px, 20px",
  footerPortrait: "(max-width: 640px) 180px, 180px",
  financeLogo: "(max-width: 640px) 184px, 184px",
} as const;

const heroProjectLogos = [
  heroAssets.heroProjectLogo1,
  heroAssets.heroProjectLogo2,
  heroAssets.heroProjectLogo3,
  heroAssets.heroProjectLogo4,
  heroAssets.heroProjectLogo5,
  heroAssets.heroProjectLogo6,
  heroAssets.heroProjectLogo7,
  heroAssets.heroProjectLogo8,
  heroAssets.heroProjectLogo9,
  heroAssets.heroProjectLogo10,
] as const;

function FinanceCultureLogo() {
  return (
    <div className="additional-cases__finance-logo" aria-hidden="true">
      <Image alt="" src={heroAssets.additionalFinanceLogo} fill sizes={imageSizes.financeLogo} />
    </div>
  );
}

export function HomePage() {
  const { language } = useLanguage();
  const copy = pageCopy[language];
  const localizedHeroProjectItems =
    language === "ru"
      ? [
          "ATOM auto",
          "Почта Банк,",
          "Bitrix24,",
          "Stoloto,",
          "Auchan,",
          "Москвич,",
          "Haier,",
          "Borishoff",
          "Мой Постамат",
          "Культура МСК",
        ]
      : heroProjectItems;
  const localizedFooterProjectStatuses =
    language === "ru"
      ? [
          "арт-д, дизайнер",
          "арт-д, дизайнер",
          "вед-д, дизайнер",
          "вед-д, дизайнер",
          "дизайнер",
          "дизайнер",
          "дизайнер",
          "дизайнер",
          "арт-д, дизайнер",
          "вед-д, дизайнер",
        ]
      : footerProjectStatuses;
  const additionalCases = [
    {
      id: "moskvich",
      logo: heroAssets.additionalMoskvichLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--moskvich",
      title: language === "ru" ? "Редизайн M-series" : "M-series web redesign",
      role: language === "ru" ? "арт-д, дизайнер" : "art-d, designer",
      year: "2024",
      image: heroAssets.additionalMoskvichImage,
      imageAlt: language === "ru" ? "Превью редизайна Москвич" : "Moskvich redesign preview",
      imageClassName: "additional-cases__image additional-cases__image--moskvich",
    },
    {
      id: "kultura",
      logo: heroAssets.additionalKulturaLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--kultura",
      title: language === "ru" ? "Веб-концепт" : "Web concept",
      role: language === "ru" ? "дизайнер" : "designer",
      year: "2024",
      image: heroAssets.additionalKulturaImage,
      imageAlt: language === "ru" ? "Превью Культуры Москвы" : "Культура Москвы preview",
      imageClassName: "additional-cases__image additional-cases__image--kultura",
    },
    {
      id: "stoloto-dots",
      logo: heroAssets.additionalStolotoDotsLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--stoloto",
      title: language === "ru" ? "Интерфейс игровых автоматов" : "Game machines interface",
      role: language === "ru" ? "арт-д, дизайнер" : "art-d, designer",
      year: "2024",
      image: heroAssets.additionalStolotoDotsImage,
      imageAlt: language === "ru" ? "Превью игровых автоматов Столото" : "Stoloto game machines preview",
      imageClassName: "additional-cases__image additional-cases__image--stoloto",
    },
    {
      id: "postamat",
      logo: heroAssets.additionalPostamatLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--postamat",
      title: language === "ru" ? "Интерфейс постамата" : "Interface for postamat",
      role: language === "ru" ? "арт-д, дизайнер" : "art-d, designer",
      year: "2024",
      image: heroAssets.additionalPostamatImage,
      imageAlt: language === "ru" ? "Превью интерфейса постамата" : "Postamat interface preview",
      imageClassName: "additional-cases__image additional-cases__image--postamat",
    },
    {
      id: "auchan",
      logo: heroAssets.additionalAuchanLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--auchan",
      title: language === "ru" ? "Интерфейс постамата" : "Interface for postamat",
      role: language === "ru" ? "арт-д, дизайнер" : "art-d, designer",
      year: "2024",
      image: heroAssets.additionalAuchanImage,
      imageAlt: language === "ru" ? "Превью Auchan" : "Auchan interface preview",
      imageClassName: "additional-cases__image additional-cases__image--auchan",
    },
    {
      id: "haier",
      logo: heroAssets.additionalHaierLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--haier",
      title: language === "ru" ? "Редизайн сайта" : "Web redesign",
      role: language === "ru" ? "дизайнер" : "designer",
      year: "2024",
      image: heroAssets.additionalHaierImage,
      imageAlt: language === "ru" ? "Превью редизайна Haier" : "Haier web redesign preview",
      imageClassName: "additional-cases__image additional-cases__image--haier",
    },
    {
      id: "borishoff",
      logo: heroAssets.additionalBorishoffLogo,
      logoClassName: "additional-cases__logo additional-cases__logo--borishoff",
      title: language === "ru" ? "Дизайн приложения" : "App design",
      role: language === "ru" ? "арт-д" : "art-d",
      year: "2025",
      image: heroAssets.additionalBorishoffImage,
      imageAlt: language === "ru" ? "Превью приложения Borishoff" : "Borishoff app design preview",
      imageClassName: "additional-cases__image additional-cases__image--borishoff",
    },
  ] as const;

  return (
    <div className={`page-shell page-shell--${language}`} id="top">
      <section className="hero hero--figma">
        <div className="hero-figma">
          <div className="hero-figma__identity">
            <h1 className="hero-figma__name">Tsarёv Andrey</h1>
            <div className="hero-figma__role">
              {copy.heroRole.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="hero-figma__wolf-wrap" aria-hidden="true">
            <Image alt="" className="hero-figma__wolf" src={heroAssets.wolf} fill priority sizes={imageSizes.heroWolf} />
          </div>

          <Image
            alt="Portrait of Andrey"
            className="hero-figma__portrait"
            src={heroAssets.portrait}
            width={96}
            height={96}
            priority
          />

          <div className="hero-figma__projects">
            <p className="hero-figma__label">{copy.heroProjectsLabel}</p>
            <div className="hero-figma__project-list">
              <div className="hero-figma__project-logos" aria-hidden="true">
                {heroProjectLogos.map((logo) => (
                  <div key={logo} className="hero-figma__project-logo">
                    <Image alt="" src={logo} fill sizes={imageSizes.heroProjectLogo} />
                  </div>
                ))}
              </div>
              <div className="hero-figma__project-names">
                {localizedHeroProjectItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
                <p>{copy.heroAndMore}</p>
              </div>
            </div>
          </div>

          <div className="hero-figma__promo">
            <Image alt="" className="hero-figma__promo-icon" src={heroAssets.soul} width={24} height={24} />
            <div className="hero-figma__promo-text">
              <p>{copy.heroPromo}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="figma-cases-flow">
        <section className="atom-case" aria-labelledby="atom-case-title">
          <div className="atom-case__header">
            <div className="atom-case__logo">
              <Image alt="ATOM" src={heroAssets.atomLogo} fill sizes={imageSizes.full} />
            </div>

            <div className="atom-case__intro">
              <div className="atom-case__meta">
                <div className="atom-case__title-block">
                  <h2 id="atom-case-title" className="atom-case__title">
                    ATOM AUTOMOTIVE
                  </h2>
                  <p className="atom-case__status">{copy.atomStatus}</p>
                </div>

                <Link className="atom-case__more" href="/cases/atom">
                  {copy.atomMore}
                </Link>
              </div>

              <p className="atom-case__description">{copy.atomDescription}</p>
            </div>
          </div>

          <div className="atom-case__car">
            <Image alt="ATOM car side view" src={heroAssets.atomCarSide} fill sizes={imageSizes.full} />
          </div>

          <div className="atom-case__block-two">
            <div className="atom-case__block-copy">
              <p>{copy.atomCopyOne}</p>
              <div className="atom-case__kamaz">
                <Image alt="" aria-hidden="true" src={heroAssets.atomKamaz} fill sizes={imageSizes.mini} />
              </div>
            </div>

            <div className="atom-case__steering">
              <Image alt="ATOM interface with steering wheel visual" src={heroAssets.atomMainSteering} fill sizes={imageSizes.medium} />
            </div>
          </div>

          <div className="atom-case__block-three">
            <div className="atom-case__block-three-left">
              <div className="atom-case__cards">
                <Image alt="ATOM cards" src="/media/figma/atom-cards.png" fill sizes={imageSizes.card} />
              </div>

              <div className="atom-case__small-copy">
                <p>{copy.atomCopyTwo}</p>
                <div className="atom-case__small-photo">
                  <Image alt="" aria-hidden="true" src="/media/figma/atom-small-photo.jpg" fill sizes={imageSizes.tiny} />
                </div>
              </div>
            </div>

            <div className="atom-case__block-three-right">
              <div className="atom-case__narrow-top">
                <Image alt="" aria-hidden="true" src="/media/figma/atom-thin.png" fill sizes={imageSizes.slim} />
              </div>
              <div className="atom-case__radar">
                <Image alt="ATOM radar interface" src="/media/figma/atom-radar.png" fill sizes={imageSizes.card} />
              </div>
            </div>
          </div>

          <div className="atom-case__last-image">
            <Image alt="ATOM final dark interface" src="/media/figma/atom-final.png" fill sizes={imageSizes.full} />
          </div>
        </section>

        <section className="obu-case" aria-labelledby="obu-case-title">
          <div className="obu-case__header">
            <div className="obu-case__logo">
              <Image alt="OBJ" src={heroAssets.obuLogo} fill sizes={imageSizes.full} />
            </div>
            <div className="obu-case__intro">
              <div className="obu-case__meta">
                <h2 id="obu-case-title" className="obu-case__title">{copy.obuTitle}</h2>
                <p className="obu-case__status">{copy.obuStatus}</p>
              </div>
              <div className="obu-case__description-image">
                <Image alt="" aria-hidden="true" src={heroAssets.obuDescription} fill sizes={imageSizes.narrow} />
              </div>
            </div>
          </div>

          <div className="obu-case__car">
            <Image alt="Covered concept car" src={heroAssets.obuCar} fill sizes={imageSizes.full} />
          </div>

          <p className="obu-case__copy">{copy.obuCopy}</p>

          <div className="obu-case__music">
            <Image alt="OBJ music interface" src={heroAssets.obuMusic} fill sizes={imageSizes.full} />
          </div>
        </section>

        <section className="pb-case" aria-labelledby="pb-case-title">
          <div className="pb-case__header">
            <div className="pb-case__logo">
              <Image alt="Почта Банк" src={heroAssets.pochtaLogo} fill sizes={imageSizes.full} />
            </div>

            <div className="pb-case__intro">
              <div className="pb-case__meta">
                <div className="pb-case__title-block">
                  <h2 id="pb-case-title" className="pb-case__name">{copy.pochtaName}</h2>
                  <p className="pb-case__status">{copy.pochtaStatus}</p>
                </div>
                <Link className="pb-case__more" href="/cases/pochtabank">
                  {copy.pochtaMore}
                </Link>
              </div>
              <p className="pb-case__tag">{copy.pochtaTag}</p>
            </div>
          </div>

          <div className="pb-case__content">
            <div className="pb-case__left">
              <div className="pb-case__phone">
                <Image alt="Pochta bank app phone screen" src={heroAssets.pochtaPhone} fill sizes={imageSizes.card} />
              </div>

              <p className="pb-case__copy">{copy.pochtaCopy}</p>

              <div className="pb-case__description-card">
                <Image alt={language === "ru" ? "Карточки быстрых платежей Почта Банка" : "Pochta bank fast pay cards"} src={heroAssets.pochtaDescriptionCard} fill sizes={imageSizes.narrow} />
              </div>
            </div>

            <div className="pb-case__right">
              <p className="pb-case__description">{copy.pochtaDescription}</p>

              <div className="pb-case__card">
                <Image alt="Pochta bank eagle card" src={heroAssets.pochtaCard} fill sizes={imageSizes.card} />
              </div>

              <div className="pb-case__msc">
                <Image alt="Pochta bank red circle illustration" src={heroAssets.pochtaMscLogo} fill sizes={imageSizes.card} />
              </div>

              <div className="pb-case__pills">
                <Image alt="Pochta bank payments list" src={heroAssets.pochtaPills} fill sizes={imageSizes.card} />
              </div>
            </div>
          </div>
        </section>

        <section className="b24-case" aria-labelledby="b24-case-title">
          <div className="b24-case__logo">
            <Image alt="Битрикс24" id="b24-case-title" src={heroAssets.bitrixLogo} fill sizes={imageSizes.full} />
          </div>

          <div className="b24-case__intro">
            <div className="b24-case__meta">
              <div className="b24-case__title-block">
                <p className="b24-case__name">BITRIX 24</p>
                <p className="b24-case__status">{copy.bitrixStatus}</p>
              </div>
              <Link className="pb-case__more" href="/cases/bitrix24">
                {copy.bitrixMore}
              </Link>
            </div>
            <p className="b24-case__tag">{copy.bitrixTag}</p>
          </div>

          <div className="b24-case__story">
            <div className="b24-case__faces">
              <div className="b24-case__faces-left" aria-hidden="true">
                <div className="b24-case__face b24-case__face--left-one">
                  <Image alt="" src={heroAssets.bitrixFaceOne} fill sizes={imageSizes.face} />
                </div>
                <div className="b24-case__face b24-case__face--left-two">
                  <Image alt="" src={heroAssets.bitrixFaceTwo} fill sizes={imageSizes.face} />
                </div>
                <div className="b24-case__badge b24-case__badge--file">
                  <Image alt="" src={heroAssets.bitrixFileIcon} fill sizes={imageSizes.badge} />
                </div>
              </div>

              <div className="b24-case__faces-right" aria-hidden="true">
                <div className="b24-case__face b24-case__face--right-one">
                  <Image alt="" src={heroAssets.bitrixFaceThree} fill sizes={imageSizes.face} />
                </div>
                <div className="b24-case__badge b24-case__badge--like">
                  <Image alt="" src={heroAssets.bitrixLikeIcon} fill sizes={imageSizes.badge} />
                </div>
                <div className="b24-case__face b24-case__face--right-two">
                  <Image alt="" src={heroAssets.bitrixFaceFour} fill sizes={imageSizes.face} />
                </div>
                <div className="b24-case__face b24-case__face--right-three">
                  <Image alt="" src={heroAssets.bitrixFaceFive} fill sizes={imageSizes.face} />
                </div>
                <div className="b24-case__badge b24-case__badge--brush">
                  <Image alt="" src={heroAssets.bitrixBrushIcon} fill sizes={imageSizes.badge} />
                </div>
              </div>
            </div>

            <div className="b24-case__copy-row">
              <p className="b24-case__description">
                {copy.bitrixDescriptionOne}
              </p>
              <p className="b24-case__description">
                {copy.bitrixDescriptionTwo}
              </p>
            </div>
          </div>

          <div className="b24-case__block">
            <Image alt="Bitrix24 main block" src={heroAssets.bitrixBlock} fill sizes={imageSizes.full} />
          </div>

          <div className="b24-case__bottom">
            <div className="b24-case__bottom-copy">
              <div className="b24-case__bottom-copy-left">
                <p>{copy.bitrixBottomLeftOne}</p>
                <p>{copy.bitrixBottomLeftTwo}</p>
              </div>

              <div className="b24-case__bottom-copy-right">
                <p>{copy.bitrixBottomRightOne}</p>
                <p>{copy.bitrixBottomRightTwo}</p>
              </div>
            </div>

            <div className="b24-case__last">
              <Image alt="Bitrix24 lower screen" src={heroAssets.bitrixLast} fill sizes={imageSizes.full} />
            </div>
          </div>
        </section>

        <section className="stoloto-case" aria-labelledby="stoloto-case-title">
          <div className="stoloto-case__logo">
            <Image alt="Столото" src={heroAssets.stolotoLogo} fill sizes={imageSizes.full} />
          </div>

          <div className="stoloto-case__intro">
            <div className="stoloto-case__meta">
              <div className="stoloto-case__title-block">
                <h2 id="stoloto-case-title" className="stoloto-case__name">{copy.stolotoName}</h2>
                <p className="stoloto-case__status">{copy.stolotoStatus}</p>
              </div>
              <Link className="pb-case__more" href="/cases/stoloto">
                {copy.stolotoMore}
              </Link>
            </div>
            <p className="stoloto-case__tag">{copy.stolotoTag}</p>
          </div>

          <div className="stoloto-case__block">
            <Image alt="Stoloto dark screens" src={heroAssets.stolotoBlock} fill sizes={imageSizes.full} />
          </div>

          <div className="stoloto-case__feature">
            <p className="stoloto-case__description">{copy.stolotoDescription}</p>

            <div className="stoloto-case__matryoshka">
              <Image alt="Stoloto mascots" src={heroAssets.stolotoMatryoshka} fill sizes={imageSizes.full} />
            </div>
          </div>

          <div className="stoloto-case__lower">
            <div className="stoloto-case__lower-left">
              <div className="stoloto-case__copy">
                <p>{copy.stolotoCopyOne}</p>
                <p>{copy.stolotoCopyTwo}</p>
              </div>

              <div className="stoloto-case__lotteries">
                <Image alt="Logos of Stoloto lotteries" src={heroAssets.stolotoLotteries} fill sizes={imageSizes.card} />
              </div>
            </div>

            <div className="stoloto-case__lower-right">
              <Image alt="Stoloto right phone interface" src={heroAssets.stolotoRight} fill sizes={imageSizes.card} />
            </div>
          </div>
        </section>

        <section className="additional-cases" aria-labelledby="additional-cases-title">
          <div className="additional-cases__heading">
            <h2 id="additional-cases-title" className="additional-cases__title">{copy.additionalTitle}</h2>
            <p className="additional-cases__subtitle">{copy.additionalSubtitle}</p>
          </div>

          <div className="additional-cases__list">
            {additionalCases.map((item) => (
              <div key={item.id} className="additional-cases__item">
                <div className="additional-cases__row">
                  <div className="additional-cases__meta">
                    <div className={item.logoClassName}>
                      <Image alt="" src={item.logo} fill sizes={imageSizes.card} />
                    </div>
                    <div className="additional-cases__copy">
                      <p>{item.title}</p>
                      <p>{item.role}</p>
                    </div>
                    <p className="additional-cases__year">{item.year}</p>
                  </div>

                  <div className={item.imageClassName}>
                    <Image alt={item.imageAlt} src={item.image} fill sizes={imageSizes.card} />
                  </div>
                </div>

                <div className="additional-cases__divider" aria-hidden="true" />
              </div>
            ))}

            <div className="additional-cases__row">
              <div className="additional-cases__meta">
                <FinanceCultureLogo />
                <div className="additional-cases__copy">
                  <p>{copy.financeTitle}</p>
                  <p>{copy.financeRole}</p>
                </div>
                <p className="additional-cases__year">2023</p>
              </div>

              <div className="additional-cases__image additional-cases__image--finance">
                <Image alt="Финансовая культура preview" src={heroAssets.additionalFinanceImage} fill sizes={imageSizes.card} />
              </div>
            </div>
          </div>
        </section>

        <section className="page-end" aria-label="Page end">
          <a className="back-to-top" href="#top" aria-label="Вернуться наверх страницы">
            <span className="back-to-top__label">{copy.up}</span>
          </a>

          <footer className="portfolio-footer">
            <div className="portfolio-footer__left">
              <p className="portfolio-footer__name">Tsarёv Andrey</p>
              <div className="portfolio-footer__portrait">
                <Image alt="" aria-hidden="true" src={heroAssets.footerPortrait} fill sizes={imageSizes.footerPortrait} />
              </div>
            </div>

            <div className="portfolio-footer__center">
              <div className="portfolio-footer__role">
                {copy.footerRole.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="portfolio-footer__divider" aria-hidden="true" />
              <div className="portfolio-footer__projects-block">
                <p className="portfolio-footer__projects-label">{copy.footerProjectsLabel}</p>
                <Link className="portfolio-footer__cv" href={contacts.cv}>CV</Link>
                <div className="portfolio-footer__projects-grid">
                  <div className="portfolio-footer__projects-list">
                    {localizedHeroProjectItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    <p>{copy.footerAndMore}</p>
                  </div>
                  <div className="portfolio-footer__statuses">
                    {localizedFooterProjectStatuses.map((item, index) => (
                      <p key={`${item}-${index}`}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-footer__contacts">
              <a className="portfolio-footer__contact-button portfolio-footer__contact-button--tg" href={contacts.telegram} target="_blank" rel="noreferrer">
                {copy.footerTelegram}
              </a>
              <a className="portfolio-footer__contact-button portfolio-footer__contact-button--mail" href={`mailto:${contacts.email}`}>
                {copy.footerMail}
              </a>
            </div>
          </footer>
        </section>
      </div>

    </div>
  );
}
