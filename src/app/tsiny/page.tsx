import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import { PriceAccordions } from "@/components/prices-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Ціни на послуги офтальмолога в Ужгороді | Goriachev",
  description:
    "Актуальні ціни на діагностику зору, консультації, лазерну корекцію, лікування катаракти, глаукоми та інші офтальмологічні послуги.",
  img: "img/prices/prices-og.jpeg",
  canonical: "tsiny",
});

export default function PricesPage() {
  return (
    <>
      <TopBanner
        title="Ціни на офтальмологічні послуги в Ужгороді"
        desc="Здоровий зір ближче, ніж здається."
        img={{ url: "/img/prices/prices-bg.jpeg", alt: "Ціни" }}
      />
      <div className="container">
        <PriceAccordions />
      </div>
    </>
  );
}
