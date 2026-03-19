import { Metadata } from "next";
import Link from "next/link";

import TopBanner from "@/components/shared/TopBanner";
import InfoBlock from "@/components/shared/InfoBlock";

import { ADRESSES } from "@/lib/adresses";
import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Контакти та запис | Центр Дмитра Горячева у Львові",
  description:
    "Адреса та телефон Центру Дмитра Горячева у Львові. Зручна карта доїзду та графік роботи. Запишіться на діагностику зору онлайн за 1 хвилину!",
  img: "img/contact/contact-og.jpeg",
  canonical: "kontakty",
});

export default function ContactsPage() {
  return (
    <>
      <TopBanner
        title="Контакти"
        desc="Ми завжди на звʼязку. Перший крок - за вами."
        img={{ url: "/img/contacts/contacts-bg.jpeg", alt: "Контакти" }}
      />
      <section className="py-12">
        {ADRESSES.map(({ name, link, desc, title, photo }, idx) => (
          <InfoBlock
            reverse={idx % 2 !== 0}
            img={{
              url: photo,
              alt: title,
            }}
            key={idx}
          >
            <h2 className="not-prose">{title}</h2>
            <p>{desc}</p>
            <h3>Графік роботи:</h3>
            <p>
              Пн-Пт: 09:00 – 18:00
              <br />
              Сб: 10:00 – 16:00, Нд: вихідний
            </p>
            <ul>
              <li>
                <strong>
                  <Link href="tel:+380667900090">+38 0(66) 790 0 090</Link>
                </strong>
              </li>
            </ul>
            <p key={idx}>
              <a
                className="underline-offset-4 hover:underline"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {name}
              </a>
            </p>
          </InfoBlock>
        ))}
      </section>
    </>
  );
}
