import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import { Articles, CategoriesNav } from "@/components/blog-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Статті про здоров’я очей - Центр Дмитра Горячева",
  description:
    "Дізнайтеся, як зберегти зір та вчасно розпізнати хвороби очей. Поради від офтальмологів центру Дмитра Горячева. Читайте експертні статті у нашому блозі!",
  img: "img/articles/blog-bg.hpg",
  canonical: "blog",
});

export default function BlogPage() {
  return (
    <>
      <TopBanner
        title="Блог"
        desc="Все, що варто знати про зір, лікування та профілактику від фахівців центру Дмитра Горячева."
        img={{ url: "/img/articles/blog-bg.jpg", alt: "Банер блогу" }}
      />
      <div className="container">
        <CategoriesNav />
        <Articles />
      </div>
    </>
  );
}
