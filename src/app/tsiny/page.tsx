import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import { PriceAccordions } from "@/components/prices-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Ціни на послуги офтальмології - Центр Дмитра Горячева в Ужгороді",
  description:
    "Актуальні ціни на лікування зору в Ужгороді. Лазерна корекція та видалення катаракти в центрі Дмитра Горячева. Фіксована вартість без доплат. Оберіть свою послугу",
  img: "img/prices/prices-og.jpeg",
  canonical: "tsiny",
});

export default function PricesPage() {
  return (
    <>
      <TopBanner
        title="Ціни"
        desc="Здоровий зір ближче, ніж здається."
        img={{ url: "/img/prices/prices-bg.jpeg", alt: "Ціни" }}
      />
      <div className="container">
        <PriceAccordions />
      </div>
    </>
  );
}
