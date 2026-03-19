import { notFound } from "next/navigation";

import RteBlock from "@/components/shared/RteBlock";
import TopBanner from "@/components/shared/TopBanner";

import { genMetaData } from "@/lib/metadata";
import { fetchAllSlugArticles, fetchArticleBySlug } from "@/lib/articles";

import { TypeArticlePageParams } from "@/types/pageParams";

export async function generateStaticParams() {
  const articles = await fetchAllSlugArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: TypeArticlePageParams) {
  const { slug } = await params;

  const article = await fetchArticleBySlug(slug);

  if (!article) return {};

  return genMetaData({
    title: article.title,
    description: article.description,
    img: article.image,
    canonical: `blog/katehoriia/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: TypeArticlePageParams) {
  const { slug } = await params;

  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return notFound();
  }

  return (
    <>
      <TopBanner
        title={article.title}
        img={{ url: article.image, alt: article.title }}
        date={article.publishedAt}
        doctor={article.doctor}
        category={article.category.title}
      />
      <div className="container">
        <article className="prose prose-slate lg:prose-lg prose-headings:text-slate-900 mx-auto py-12">
          <RteBlock value={article.body} />
        </article>
      </div>
    </>
  );
}
