import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import { DoctorsGrid } from "@/components/likari-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Офтальмологи в Ужгороді | Лікарі Центру Горячева",
  description:
    "Команда офтальмологів та офтальмохірургів Центру Дмитра Горячева в Ужгороді. Спеціалізації лікарів, досвід та запис на консультацію.",
  img: "img/likari/likari-og.jpg",
  canonical: "likari",
});

export default function DoctorsPage() {
  return (
    <>
      <TopBanner
        title="Офтальмологи в Ужгороді - команда Центру Дмитра Горячева"
        desc="Досвід, якому варто довіритись"
        img={{ url: "/img/likari/baner.jpg", alt: "Лікарі" }}
      />
      <DoctorsGrid title="Наша команда" />
    </>
  );
}
