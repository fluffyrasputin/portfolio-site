"use client";

import Image from "next/image";
import Link from "next/link";
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

const additionalCases = [
  {
    id: "moskvich",
    logo: heroAssets.additionalMoskvichLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--moskvich",
    title: "M-series web redesign",
    role: "art-d, designer",
    year: "2024",
    image: heroAssets.additionalMoskvichImage,
    imageAlt: "Moskvich redesign preview",
    imageClassName: "additional-cases__image additional-cases__image--moskvich",
  },
  {
    id: "kultura",
    logo: heroAssets.additionalKulturaLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--kultura",
    title: "Web concept",
    role: "designer",
    year: "2024",
    image: heroAssets.additionalKulturaImage,
    imageAlt: "Культура Москвы preview",
    imageClassName: "additional-cases__image additional-cases__image--kultura",
  },
  {
    id: "stoloto-dots",
    logo: heroAssets.additionalStolotoDotsLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--stoloto",
    title: "Game machines interface",
    role: "art-d, designer",
    year: "2024",
    image: heroAssets.additionalStolotoDotsImage,
    imageAlt: "Stoloto game machines preview",
    imageClassName: "additional-cases__image additional-cases__image--stoloto",
  },
  {
    id: "postamat",
    logo: heroAssets.additionalPostamatLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--postamat",
    title: "Interface for postamat",
    role: "art-d, designer",
    year: "2024",
    image: heroAssets.additionalPostamatImage,
    imageAlt: "Postamat interface preview",
    imageClassName: "additional-cases__image additional-cases__image--postamat",
  },
  {
    id: "auchan",
    logo: heroAssets.additionalAuchanLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--auchan",
    title: "Interface for postamat",
    role: "art-d, designer",
    year: "2024",
    image: heroAssets.additionalAuchanImage,
    imageAlt: "Auchan interface preview",
    imageClassName: "additional-cases__image additional-cases__image--auchan",
  },
  {
    id: "haier",
    logo: heroAssets.additionalHaierLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--haier",
    title: "Web redesign",
    role: "designer",
    year: "2024",
    image: heroAssets.additionalHaierImage,
    imageAlt: "Haier web redesign preview",
    imageClassName: "additional-cases__image additional-cases__image--haier",
  },
  {
    id: "borishoff",
    logo: heroAssets.additionalBorishoffLogo,
    logoClassName: "additional-cases__logo additional-cases__logo--borishoff",
    title: "App design",
    role: "art-d",
    year: "2025",
    image: heroAssets.additionalBorishoffImage,
    imageAlt: "Borishoff app design preview",
    imageClassName: "additional-cases__image additional-cases__image--borishoff",
  },
] as const;

function FinanceCultureLogo() {
  return (
    <div className="additional-cases__finance-logo" aria-hidden="true">
      <Image alt="" src={heroAssets.additionalFinanceLogo} fill sizes="184px" />
    </div>
  );
}

export function HomePage() {
  return (
    <div className="page-shell" id="top">
      <section className="hero hero--figma">
        <div className="hero-figma">
          <div className="hero-figma__identity">
            <h1 className="hero-figma__name">Tsarёv Andrey</h1>
            <div className="hero-figma__role">
              <p>Digital design team-lead</p>
              <p>art-d</p>
              <p>designer</p>
            </div>
          </div>

          <div className="hero-figma__wolf-wrap" aria-hidden="true">
            <Image alt="" className="hero-figma__wolf" src={heroAssets.wolf} fill sizes="254px" />
          </div>

          <Image
            alt="Portrait of Andrey"
            className="hero-figma__portrait"
            src={heroAssets.portrait}
            width={96}
            height={96}
          />

          <div className="hero-figma__projects">
            <p className="hero-figma__label">Projects</p>
            <div className="hero-figma__project-list">
              <div className="hero-figma__project-logos" aria-hidden="true">
                {heroProjectLogos.map((logo) => (
                  <div key={logo} className="hero-figma__project-logo">
                    <Image alt="" src={logo} fill sizes="13px" />
                  </div>
                ))}
              </div>
              <div className="hero-figma__project-names">
                {heroProjectItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
                <p>and more</p>
              </div>
            </div>
          </div>

          <div className="hero-figma__promo">
            <Image alt="" className="hero-figma__promo-icon" src={heroAssets.soul} width={24} height={24} />
            <div className="hero-figma__promo-text">
              <p>Creating beautiful visuals,</p>
              <p>making companies&apos; design unique,</p>
              <p>working with never known devices,</p>
              <p>delievering teams growth</p>
            </div>
          </div>
        </div>
      </section>

      <div className="figma-cases-flow">
        <section className="atom-case" aria-labelledby="atom-case-title">
          <div className="atom-case__header">
            <div className="atom-case__logo">
              <Image alt="ATOM" src={heroAssets.atomLogo} fill sizes="620px" />
            </div>

            <div className="atom-case__intro">
              <div className="atom-case__meta">
                <div className="atom-case__title-block">
                  <h2 id="atom-case-title" className="atom-case__title">
                    ATOM AUTOMOTIVE
                  </h2>
                  <p className="atom-case__status">art-d • designer • 24-26</p>
                </div>

                <Link className="atom-case__more" href="/cases/atom">
                  More
                </Link>
              </div>

              <p className="atom-case__description">
                This legendary company managed to revolutionize the automotive market, becoming the
                rock star of the industry, but it met its end just as dramatically and prematurely
              </p>
            </div>
          </div>

          <div className="atom-case__car">
            <Image alt="ATOM car side view" src={heroAssets.atomCarSide} fill sizes="620px" />
          </div>

          <div className="atom-case__block-two">
            <div className="atom-case__block-copy">
              <p>
                Made a whole UI system that was build all interfaces around it, lots of concepts that
                produced a unique look&feel, main page widgets, HMX, animations, ilutstrarions etc.
              </p>
              <div className="atom-case__kamaz">
                <Image alt="" aria-hidden="true" src={heroAssets.atomKamaz} fill sizes="105px" />
              </div>
            </div>

            <div className="atom-case__steering">
              <Image alt="ATOM interface with steering wheel visual" src={heroAssets.atomMainSteering} fill sizes="411px" />
            </div>
          </div>

          <div className="atom-case__block-three">
            <div className="atom-case__block-three-left">
              <div className="atom-case__cards">
                <Image alt="ATOM cards" src="https://www.figma.com/api/mcp/asset/5d9734c7-af0c-4239-9a38-2200bab82b0f" fill sizes="306px" />
              </div>

              <div className="atom-case__small-copy">
                <p>
                  Made a whole UI system that was biuld all interfaces around it, lots of concepts
                  that produced a unique look&feel, main page widgets, HMX, animations,
                  ilutstrarions etc.
                </p>
                <div className="atom-case__small-photo">
                  <Image alt="" aria-hidden="true" src="https://www.figma.com/api/mcp/asset/5fa6e2e8-0c8a-4f74-bfa2-6abd712e705f" fill sizes="128px" />
                </div>
              </div>
            </div>

            <div className="atom-case__block-three-right">
              <div className="atom-case__narrow-top">
                <Image alt="" aria-hidden="true" src="https://www.figma.com/api/mcp/asset/c9a42c4c-4ab3-42ee-8ad8-2a9e7bd6acc9" fill sizes="185px" />
              </div>
              <div className="atom-case__radar">
                <Image alt="ATOM radar interface" src="https://www.figma.com/api/mcp/asset/e9cc08c8-e3a4-41ea-a3ff-94972e558c4f" fill sizes="306px" />
              </div>
            </div>
          </div>

          <div className="atom-case__last-image">
            <Image alt="ATOM final dark interface" src="https://www.figma.com/api/mcp/asset/267bff48-a073-4c36-85cb-892ef538b8ac" fill sizes="620px" />
          </div>
        </section>

        <section className="obu-case" aria-labelledby="obu-case-title">
          <div className="obu-case__header">
            <div className="obu-case__logo">
              <Image alt="OBJ" src={heroAssets.obuLogo} fill sizes="620px" />
            </div>
            <div className="obu-case__intro">
              <div className="obu-case__meta">
                <h2 id="obu-case-title" className="obu-case__title">Another automotive</h2>
                <p className="obu-case__status">art-d • designer</p>
              </div>
              <div className="obu-case__description-image">
                <Image alt="" aria-hidden="true" src={heroAssets.obuDescription} fill sizes="201px" />
              </div>
            </div>
          </div>

          <div className="obu-case__car">
            <Image alt="Covered concept car" src={heroAssets.obuCar} fill sizes="620px" />
          </div>

          <p className="obu-case__copy">
            Defined look & feel, created service and main screens such as widgets, climate-control,
            media and music, all apps page, calls, cameras etc.
          </p>

          <div className="obu-case__music">
            <Image alt="OBJ music interface" src={heroAssets.obuMusic} fill sizes="620px" />
          </div>
        </section>

        <section className="pb-case" aria-labelledby="pb-case-title">
          <div className="pb-case__header">
            <div className="pb-case__logo">
              <Image alt="Почта Банк" src={heroAssets.pochtaLogo} fill sizes="620px" />
            </div>

            <div className="pb-case__intro">
              <div className="pb-case__meta">
                <div className="pb-case__title-block">
                  <h2 id="pb-case-title" className="pb-case__name">POCHTA BANK APP</h2>
                  <p className="pb-case__status">art-d • designer</p>
                </div>
                <Link className="pb-case__more" href="/cases/pochtabank">
                  More
                </Link>
              </div>
              <p className="pb-case__tag">redesign</p>
            </div>
          </div>

          <div className="pb-case__content">
            <div className="pb-case__left">
              <div className="pb-case__phone">
                <Image alt="Pochta bank app phone screen" src={heroAssets.pochtaPhone} fill sizes="306px" />
              </div>

              <p className="pb-case__copy">
                Made a whole new app.
                <br />
                All of the sections and tabs redisgned, most of the UX is remade, including fast-paymant
                features and highers CTR to bank needed metrics, targeting pensioners and new young
                audience to prevent (привлечь)
                <br />
                Reworked illutstrations, created a design-system, guidelines, animations, profiles
                and banners
              </p>

              <div className="pb-case__description-card">
                <Image alt="Pochta bank fast pay cards" src={heroAssets.pochtaDescriptionCard} fill sizes="201px" />
              </div>
            </div>

            <div className="pb-case__right">
              <p className="pb-case__description">
                Pochta Bank is one of the largest retail banks in Russia, with the broadest network:
                over 30,000 service points in 83 regions and a customer base of over 21 million.
              </p>

              <div className="pb-case__card">
                <Image alt="Pochta bank eagle card" src={heroAssets.pochtaCard} fill sizes="306px" />
              </div>

              <div className="pb-case__msc">
                <Image alt="Pochta bank red circle illustration" src={heroAssets.pochtaMscLogo} fill sizes="306px" />
              </div>

              <div className="pb-case__pills">
                <Image alt="Pochta bank payments list" src={heroAssets.pochtaPills} fill sizes="306px" />
              </div>
            </div>
          </div>
        </section>

        <section className="b24-case" aria-labelledby="b24-case-title">
          <div className="b24-case__logo">
            <Image alt="Битрикс24" id="b24-case-title" src={heroAssets.bitrixLogo} fill sizes="620px" />
          </div>

          <div className="b24-case__intro">
            <div className="b24-case__meta">
              <div className="b24-case__title-block">
                <p className="b24-case__name">BITRIX 24</p>
                <p className="b24-case__status">lead-designer</p>
              </div>
              <Link className="pb-case__more" href="/cases/bitrix24">
                More
              </Link>
            </div>
            <p className="b24-case__tag">redesign</p>
          </div>

          <div className="b24-case__story">
            <div className="b24-case__faces">
              <div className="b24-case__faces-left" aria-hidden="true">
                <div className="b24-case__face b24-case__face--left-one">
                  <Image alt="" src={heroAssets.bitrixFaceOne} fill sizes="97px" />
                </div>
                <div className="b24-case__face b24-case__face--left-two">
                  <Image alt="" src={heroAssets.bitrixFaceTwo} fill sizes="97px" />
                </div>
                <div className="b24-case__badge b24-case__badge--file">
                  <Image alt="" src={heroAssets.bitrixFileIcon} fill sizes="20px" />
                </div>
              </div>

              <div className="b24-case__faces-right" aria-hidden="true">
                <div className="b24-case__face b24-case__face--right-one">
                  <Image alt="" src={heroAssets.bitrixFaceThree} fill sizes="96px" />
                </div>
                <div className="b24-case__badge b24-case__badge--like">
                  <Image alt="" src={heroAssets.bitrixLikeIcon} fill sizes="20px" />
                </div>
                <div className="b24-case__face b24-case__face--right-two">
                  <Image alt="" src={heroAssets.bitrixFaceFour} fill sizes="96px" />
                </div>
                <div className="b24-case__face b24-case__face--right-three">
                  <Image alt="" src={heroAssets.bitrixFaceFive} fill sizes="96px" />
                </div>
                <div className="b24-case__badge b24-case__badge--brush">
                  <Image alt="" src={heroAssets.bitrixBrushIcon} fill sizes="20px" />
                </div>
              </div>
            </div>

            <div className="b24-case__copy-row">
              <p className="b24-case__description">
                Bitrix24 is one of the largest business ecosystems, trusted by over 15 million
                companies in over 150 countries.
              </p>
              <p className="b24-case__description">
                Created a whole new UI for a web-site with it&apos;s own philosophy and big idea
              </p>
            </div>
          </div>

          <div className="b24-case__block">
            <Image alt="Bitrix24 main block" src={heroAssets.bitrixBlock} fill sizes="620px" />
          </div>

          <div className="b24-case__bottom">
            <div className="b24-case__bottom-copy">
              <div className="b24-case__bottom-copy-left">
                <p>But not only website</p>
                <p>
                  I also made a proposal to redisgn a inner system to create a much friendly,
                  connectivity design to work with joy
                </p>
              </div>

              <div className="b24-case__bottom-copy-right">
                <p>But it didn&apos;t go to prod,</p>
                <p>so let it rest here in peace</p>
              </div>
            </div>

            <div className="b24-case__last">
              <Image alt="Bitrix24 lower screen" src={heroAssets.bitrixLast} fill sizes="620px" />
            </div>
          </div>
        </section>

        <section className="stoloto-case" aria-labelledby="stoloto-case-title">
          <div className="stoloto-case__logo">
            <Image alt="Столото" src={heroAssets.stolotoLogo} fill sizes="620px" />
          </div>

          <div className="stoloto-case__intro">
            <div className="stoloto-case__meta">
              <div className="stoloto-case__title-block">
                <h2 id="stoloto-case-title" className="stoloto-case__name">STOLOTO</h2>
                <p className="stoloto-case__status">lead-designer</p>
              </div>
              <Link className="pb-case__more" href="/cases/stoloto">
                More
              </Link>
            </div>
            <p className="stoloto-case__tag">redesign</p>
          </div>

          <div className="stoloto-case__block">
            <Image alt="Stoloto dark screens" src={heroAssets.stolotoBlock} fill sizes="620px" />
          </div>

          <div className="stoloto-case__feature">
            <p className="stoloto-case__description">
              Pochta Bank is one of the largest retail banks in Russia, with the broadest network:
              over 30,000 service points in 83 regions and a customer base of over 21 million.
            </p>

            <div className="stoloto-case__matryoshka">
              <Image alt="Stoloto mascots" src={heroAssets.stolotoMatryoshka} fill sizes="620px" />
            </div>
          </div>

          <div className="stoloto-case__lower">
            <div className="stoloto-case__lower-left">
              <div className="stoloto-case__copy">
                <p>
                  Made a whole new app.
                  <br />
                  All of the sections and tabs redisgned, most of the UX is remade, including
                  fast-paymant features and highers CTR to bank needed metrics, targeting
                  pensioners and new young audience to prevent (привлечь)
                </p>
                <p>
                  Reworked illutstrations, created a design-system, guidelines, animations,
                  profiles and banners
                </p>
              </div>

              <div className="stoloto-case__lotteries">
                <Image alt="Logos of Stoloto lotteries" src={heroAssets.stolotoLotteries} fill sizes="306px" />
              </div>
            </div>

            <div className="stoloto-case__lower-right">
              <Image alt="Stoloto right phone interface" src={heroAssets.stolotoRight} fill sizes="306px" />
            </div>
          </div>
        </section>

        <section className="additional-cases" aria-labelledby="additional-cases-title">
          <div className="additional-cases__heading">
            <h2 id="additional-cases-title" className="additional-cases__title">Etc.</h2>
            <p className="additional-cases__subtitle">Last, but not least</p>
          </div>

          <div className="additional-cases__list">
            {additionalCases.map((item) => (
              <div key={item.id} className="additional-cases__item">
                <div className="additional-cases__row">
                  <div className="additional-cases__meta">
                    <div className={item.logoClassName}>
                      <Image alt="" src={item.logo} fill sizes="232px" />
                    </div>
                    <div className="additional-cases__copy">
                      <p>{item.title}</p>
                      <p>{item.role}</p>
                    </div>
                    <p className="additional-cases__year">{item.year}</p>
                  </div>

                  <div className={item.imageClassName}>
                    <Image alt={item.imageAlt} src={item.image} fill sizes="306px" />
                  </div>
                </div>

                <div className="additional-cases__divider" aria-hidden="true" />
              </div>
            ))}

            <div className="additional-cases__row">
              <div className="additional-cases__meta">
                <FinanceCultureLogo />
                <div className="additional-cases__copy">
                  <p>Web redesign</p>
                  <p>designer</p>
                </div>
                <p className="additional-cases__year">2023</p>
              </div>

              <div className="additional-cases__image additional-cases__image--finance">
                <Image alt="Финансовая культура preview" src={heroAssets.additionalFinanceImage} fill sizes="305px" />
              </div>
            </div>
          </div>
        </section>

        <section className="page-end" aria-label="Page end">
          <a className="back-to-top" href="#top" aria-label="Вернуться наверх страницы">
            <span className="back-to-top__label">UP</span>
          </a>

          <footer className="portfolio-footer">
            <div className="portfolio-footer__left">
              <p className="portfolio-footer__name">Tsarёv Andrey</p>
              <div className="portfolio-footer__portrait">
                <Image alt="" aria-hidden="true" src={heroAssets.footerPortrait} fill sizes="180px" />
              </div>
            </div>

            <div className="portfolio-footer__center">
              <div className="portfolio-footer__role">
                <p>Digital design team-lead</p>
                <p>art-d</p>
                <p>designer</p>
              </div>
              <div className="portfolio-footer__divider" aria-hidden="true" />
              <div className="portfolio-footer__projects-block">
                <p className="portfolio-footer__projects-label">Projects</p>
                <Link className="portfolio-footer__cv" href={contacts.cv}>CV</Link>
                <div className="portfolio-footer__projects-grid">
                  <div className="portfolio-footer__projects-list">
                    {heroProjectItems.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    <p>and more</p>
                  </div>
                  <div className="portfolio-footer__statuses">
                    {footerProjectStatuses.map((item, index) => (
                      <p key={`${item}-${index}`}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-footer__contacts">
              <a className="portfolio-footer__contact-button portfolio-footer__contact-button--tg" href={contacts.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a className="portfolio-footer__contact-button portfolio-footer__contact-button--mail" href={`mailto:${contacts.email}`}>
                Mail
              </a>
            </div>
          </footer>
        </section>
      </div>

    </div>
  );
}
