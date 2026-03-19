import { cacheLife, cacheTag } from "next/cache";

import { client } from "./sanity";

import { Article, Category } from "@/types/sanity";

export async function fetchLastArticles(): Promise<Article[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("articles", "last-articles");

  const articles: Article[] = await client.fetch(
    `*[_type == "post"]
    | order(_createdAt desc)[0...3]{
      _id,
      title,
      description,
      "slug": slug.current,
      doctor->{
        shortName,
        image
      },
      image,
      category->{
        title
      },
      publishedAt,
    }`,
  );

  return articles;
}

export async function fetchAllSlugArticles(): Promise<
  Pick<Article, "slug" | "_updatedAt">[]
> {
  "use cache";

  cacheLife("hours");
  cacheTag("articles", "slug-articles");

  const articles: Pick<Article, "slug" | "_updatedAt">[] = await client.fetch(
    `*[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }`,
  );

  return articles;
}

export async function fetchAllArticlesByCategory(
  category: string = "",
): Promise<Article[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("articles", `all-articles:${category || ""}`);

  const articles: Article[] = await client.fetch(
    `*[_type == "post" && (!defined($category) || category->slug.current == $category)]{
    _id,
    title,
    description,
    "slug": slug.current,
    doctor->{
      shortName,
      image
    },
    image,
    category->{
      title,
      "slug": slug.current
    },
    publishedAt,
  }`,
    { category: category || null },
  );

  return articles;
}

export async function fetchArticleBySlug(slug: string): Promise<Article> {
  "use cache";

  cacheLife("hours");
  cacheTag("articles", `blog-category:${slug}`);

  const article: Article = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          description,
          "slug": slug.current,
          doctor->{
            shortName,
            image
          },
          "image": image.asset->url,
          category->{
            title,
            "slug": slug.current
          },
          body,
          publishedAt,
      }`,
    { slug },
  );

  return article;
}

// CATEGORIES
export async function fetchAllCategories(): Promise<
  Pick<Category, "slug" | "title">[]
> {
  "use cache";

  cacheLife("hours");
  cacheTag("articles", "blog-categories");

  const categories: Pick<Category, "slug" | "title">[] = await client.fetch(
    `*[_type == "category"]{
      title,
      "slug": slug.current
    }`,
  );

  return categories;
}

export async function fetchCategoryBySlug(
  slug: string,
): Promise<Pick<Category, "slug" | "title" | "description">> {
  "use cache";

  cacheLife("hours");
  cacheTag("articles", `blog-category:${slug}`);

  const category: Pick<Category, "slug" | "title" | "description"> =
    await client.fetch(
      `*[_type == "category" && slug.current == $slug][0]{
        title,
        description,
        "slug": slug.current
      }`,
      { slug },
    );

  return category;
}
