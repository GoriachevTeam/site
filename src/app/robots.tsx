import { SITE_URL } from "@/lib/metadata";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_ENV === "production";

  if (!isProd) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    // rules: {
    //   userAgent: "*",
    //   allow: "/",
    // },
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Yandex", disallow: "/" },
      { userAgent: "YandexBot", disallow: "/" },
      { userAgent: "YandexImages", disallow: "/" },
      { userAgent: "Mail.Ru", disallow: "/" },
      { userAgent: "Mail.RuBot", disallow: "/" },
      { userAgent: "StackRambler", disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
