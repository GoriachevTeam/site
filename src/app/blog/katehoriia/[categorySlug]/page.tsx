import { notFound } from "next/navigation";

import TopBanner from "@/components/shared/TopBanner";
import { Articles, CategoriesNav } from "@/components/blog-page";

import { genMetaData } from "@/lib/metadata";
import { fetchAllCategories, fetchCategoryBySlug } from "@/lib/articles";

import { TypeCategoryPageParams } from "@/types/pageParams";

export async function generateStaticParams() {
  const categories = await fetchAllCategories();

  return categories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: TypeCategoryPageParams) {
  const { categorySlug } = await params;

  const category = await fetchCategoryBySlug(categorySlug);

  if (!category) return {};

  return genMetaData({
    title: category.title,
    description: category.description,
    img: "img/articles/blog-bg.jpg",
    canonical: `blog/katehoriia/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: TypeCategoryPageParams) {
  const { categorySlug } = await params;

  const category = await fetchCategoryBySlug(categorySlug);

  if (!category) {
    return notFound();
  }

  return (
    <>
      <TopBanner
        title={category.title}
        desc={category.description}
        img={{ url: "/img/articles/blog-bg.jpg", alt: category.title }}
      />
      <div className="container">
        <CategoriesNav />
        <Articles category={category.slug} />
      </div>
    </>
  );
}
