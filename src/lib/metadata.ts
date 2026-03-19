import { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

type TypeGenMetadata = {
  canonical: string;
  asLayout?: boolean;
  img: string;
} & Pick<Metadata, "title" | "description">;

export const genMetaData: (params: TypeGenMetadata) => Metadata = ({
  asLayout,
  canonical,
  ...params
}) => ({
  ...params,
  ...getShareMeta({
    title: params.title as string,
    description: params.description as string,
    img: params.img,
  }),
  alternates: {
    canonical: `${SITE_URL}/${canonical}`.trim().replace(/\/$/, ""),
  },
  ...(asLayout
    ? {
        icons: {
          icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            {
              url: "/android-icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          apple: [{ url: "/apple-icon-180x180", sizes: "180x180" }],
        },
        manifest: "/manifest.json",
        other: {
          "theme-color": "#eeeeee",
          "msapplication-TileColor": "#eeeeee",
          "msapplication-TileImage": "/ms-icon-144x144.png",
        },
      }
    : {}),
});

export const getShareMeta: (props: {
  title: string;
  description: string;
  img: string;
  overrideTitle?: boolean;
  route?: string;
}) => Pick<Metadata, "openGraph" | "twitter"> = ({
  title,
  description,
  img,
  route,
  overrideTitle = false,
}) => {
  const imgUrl = img.startsWith("https") ? img : `${SITE_URL}/${img}`;

  return {
    ...(overrideTitle ? { title, description } : {}),
    ...(!!route
      ? {
          alternates: {
            canonical: `${SITE_URL}/${route}`.replace(/\/$/, ""),
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: title,
      images: [
        {
          url: imgUrl,
          secureUrl: imgUrl,
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imgUrl],
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  };
};
