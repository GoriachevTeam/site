import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import { DoctorsGrid } from "@/components/likari-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Офтальмологи центру Дмитра Горячева: команда професіоналів",
  description:
    "Досвідчені офтальмологи центру Дмитра Горячева у Львові. Експертне лікування зору та індивідуальний підхід. Поверніть чіткість зору — записуйтесь на прийом!",
  img: "img/likari/likari-og.jpeg",
  canonical: "likari",
});

export default function DoctorsPage() {
  return (
    <>
      <TopBanner
        title="Лікарі"
        desc="Досвід, якому варто довіритись"
        img={{ url: "/img/likari/baner.jpg", alt: "Лікарі" }}
      />
      <DoctorsGrid title="Наша команда" />
    </>
  );
}
