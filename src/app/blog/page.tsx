import { Metadata } from "next";

import TopBanner from "@/components/shared/TopBanner";
import { Articles, CategoriesNav } from "@/components/blog-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Блог про здоров’я очей | Центр Дмитра Горячева",
  description:
    "Матеріали офтальмологів Центру Дмитра Горячева про здоров’я очей, діагностику, профілактику, лікування та сучасну офтальмологію.",
  img: "img/articles/blog-bg.hpg",
  canonical: "blog",
});

export default function BlogPage() {
  return (
    <>
      <TopBanner
        title="Блог про здоров’я очей"
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
