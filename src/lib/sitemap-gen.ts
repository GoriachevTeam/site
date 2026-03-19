import { cacheLife, cacheTag } from "next/cache";

import { SITE_URL } from "./metadata";

import { TypeSitemapLink } from "@/types/common";
import { SERVICE_LINKS } from "@/components/layouts/AppLayout/Header/constants";
import { fetchAllCategories, fetchAllSlugArticles } from "./articles";

const STATIC_PAGES = [
  {
    route: "",
    priority: 1,
  },
  {
    route: "likari",
    priority: 0.8,
  },
  {
    route: "optyka",
    priority: 0.8,
  },
  {
    route: "tsiny",
    priority: 0.8,
  },
  {
    route: "blog",
    priority: 0.8,
  },
  {
    route: "kontakty",
    priority: 0.8,
  },
  ...SERVICE_LINKS.map(({ url }) => ({
    route: url.slice(1),
    priority: 0.8,
  })),
];

export const getSitemapUrl = (url: string, priority: number) => ({
  url: `${SITE_URL}${url ? `/${url}` : ""}`.trim(),
  lastModified: new Date().toISOString().split("T")[0],
  changeFrequency: "monthly",
  priority,
});

export const STATIC_URLS = STATIC_PAGES.map(({ route, priority }) =>
  getSitemapUrl(route, priority),
);

export async function generateSitemapXml() {
  "use cache";

  cacheLife("hours");
  cacheTag("sitemap");

  const [postsRes, categoriesRes] = await Promise.all([
    fetchAllSlugArticles(),
    fetchAllCategories(),
  ]);

  const lastModified = new Date().toISOString().split("T")[0];

  const urls: TypeSitemapLink[] = [
    ...STATIC_URLS,
    ...categoriesRes.map((c) => ({
      url: `${SITE_URL}/blog/katehoriia/${c.slug}`,
      changeFrequency: "weekly",
      priority: 0.5,
      lastModified,
    })),
    ...postsRes.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      changeFrequency: "weekly",
      priority: 0.6,
      lastModified: p._updatedAt?.split("T")[0],
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `<url>
                <loc>${u.url}</loc>
                ${u.lastModified ? `<lastmod>${u.lastModified}</lastmod>` : ""}
                ${u.changeFrequency ? `<changefreq>${u.changeFrequency}</changefreq>` : ""}
                ${u.priority ? `<priority>${u.priority}</priority>` : ""}
              </url>`,
    )
    .join("")}
  </urlset>`;

  return xml.trim();
}
