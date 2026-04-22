"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { mobileAssets } from "@/components/mobile/mobile-assets";
import { mobileCaseCopy } from "@/components/mobile/mobile-copy";

const additionalItems = [
  {
    id: "moskvich",
    href: "https://moskvich-m.ru/models/m70",
    logo: mobileAssets.additionalMoskvichLogo,
    logoAlt: "Moskvich",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--moskvich",
    title: "M-series web redesign",
    role: "art-d, designer",
    year: "2024",
    image: mobileAssets.additionalMoskvichImage,
    imageAlt: "Moskvich redesign preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--moskvich",
  },
  {
    id: "kultura",
    href: "https://kultura.mos.ru/",
    logo: mobileAssets.additionalKulturaLogo,
    logoAlt: "Культура Москвы",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--kultura",
    title: "Web concept",
    role: "designer",
    year: "2024",
    image: mobileAssets.additionalKulturaImage,
    imageAlt: "Культура Москвы preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--kultura",
  },
  {
    id: "stoloto",
    href: "https://www.stoloto.ru/",
    logo: mobileAssets.additionalStolotoDotsLogo,
    logoAlt: "Stoloto",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--stoloto",
    title: "Game machines interface",
    role: "art-d, designer",
    year: "2024",
    image: mobileAssets.additionalStolotoDotsImage,
    imageAlt: "Stoloto game machines preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--stoloto",
  },
  {
    id: "postamat",
    href: "https://www.mos.ru/city/projects/postamat/",
    logo: mobileAssets.additionalPostamatLogo,
    logoAlt: "Мой Постамат",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--postamat",
    title: "Interface for postamat",
    role: "art-d, designer",
    year: "2024",
    image: mobileAssets.additionalPostamatImage,
    imageAlt: "Postamat interface preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--postamat",
  },
  {
    id: "auchan",
    href: "https://www.auchan.ru/",
    logo: mobileAssets.additionalAuchanLogo,
    logoAlt: "Auchan",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--auchan",
    title: "Web redesign",
    role: "designer",
    year: "2024",
    image: mobileAssets.additionalAuchanImage,
    imageAlt: "Auchan redesign preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--auchan",
  },
  {
    id: "haier",
    href: "https://haieronline.ru/",
    logo: mobileAssets.additionalHaierLogo,
    logoAlt: "Haier",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--haier",
    title: "Web redesign",
    role: "designer",
    year: "2024",
    image: mobileAssets.additionalHaierImage,
    imageAlt: "Haier redesign preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--haier",
  },
  {
    id: "borishoff",
    href: "https://borishof.ru/",
    logo: mobileAssets.additionalBorishoffLogo,
    logoAlt: "БорисХоф",
    logoClassName: "mobile-additional-cases__logo mobile-additional-cases__logo--borishoff",
    title: "App design",
    role: "art-d",
    year: "2025",
    image: mobileAssets.additionalBorishoffImage,
    imageAlt: "Borishoff app preview",
    imageClassName: "mobile-additional-cases__image mobile-additional-cases__image--borishoff",
  },
] as const;

export function MobileAdditionalCases() {
  const { language } = useLanguage();
  const copy = mobileCaseCopy[language];
  const localizedItems = additionalItems.map((item, index) => ({
    ...item,
    title: copy.additionalItems[index][0],
    role: copy.additionalItems[index][1],
  }));

  return (
    <section className="mobile-additional-cases" aria-labelledby="mobile-additional-cases-title">
      <div className="mobile-additional-cases__heading">
        <h2 id="mobile-additional-cases-title" className="mobile-additional-cases__title">{copy.additionalTitle}</h2>
        <p className="mobile-additional-cases__subtitle">{copy.additionalSubtitle}</p>
      </div>

      <div className="mobile-additional-cases__list">
        {localizedItems.map((item) => (
          <article key={item.id} className="mobile-additional-cases__item">
            <div className="mobile-additional-cases__row">
              <div className="mobile-additional-cases__meta">
                <div className={item.logoClassName}>
                  <Image alt={item.logoAlt} src={item.logo} fill sizes="144px" />
                </div>
                <div className="mobile-additional-cases__copy">
                  <p>{item.title}</p>
                  <p>{item.role}</p>
                </div>
                <div className="mobile-additional-cases__meta-footer">
                  <p className="mobile-additional-cases__year">{item.year}</p>
                  <Link className="mobile-additional-cases__link" href={item.href}>
                    {language === "ru" ? "Ссылка" : "Link"}
                  </Link>
                </div>
              </div>

              <div className={item.imageClassName}>
                <Image alt={item.imageAlt} src={item.image} fill sizes="176px" />
              </div>
            </div>
          </article>
        ))}

        <article className="mobile-additional-cases__item mobile-additional-cases__item--last">
          <div className="mobile-additional-cases__row">
            <div className="mobile-additional-cases__meta">
              <div className="mobile-additional-cases__logo mobile-additional-cases__logo--finance">
                <Image alt="Финансовая культура" src={mobileAssets.additionalFinanceLogo} fill sizes="120px" />
              </div>
              <div className="mobile-additional-cases__copy">
                <p>{copy.additionalItems[7][0]}</p>
                <p>{copy.additionalItems[7][1]}</p>
              </div>
              <div className="mobile-additional-cases__meta-footer">
                <p className="mobile-additional-cases__year">2023</p>
                <Link className="mobile-additional-cases__link" href="https://fincult.info/">
                  {language === "ru" ? "Ссылка" : "Link"}
                </Link>
              </div>
            </div>

            <div className="mobile-additional-cases__image mobile-additional-cases__image--finance">
              <Image alt="Финансовая культура preview" src={mobileAssets.additionalFinanceImage} fill sizes="176px" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
