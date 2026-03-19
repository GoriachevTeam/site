import { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "@portabletext/react";

export interface Category {
  _id: string;
  title: string;
  description: string;
  slug: string;
}

export interface Doctor {
  _id: string;
  name: string;
  shortName: string;
  image: SanityImageSource;
  bio: PortableTextBlock[];
  sort: number;
}

export interface Article {
  _id: string;
  title: string;
  description: string;
  slug: string;
  doctor: Pick<Doctor, "shortName" | "image">;
  image: string;
  category: Pick<Category, "title">;
  body: PortableTextBlock[];
  publishedAt: string;
  _updatedAt: string;
}

export interface Price {
  _id: string;
  name: string;
  serviceSlug: string;
  pageTitle: string;
  prices: TypePriceOption[];
}

export type TypePriceOption = {
  title: string;
  description?: string;
  price: string;
};

export interface SanityImageAsset {
  _type: "reference";
  _ref: string;
}

export interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
  // hotspot?: {
  //   x: number;
  //   y: number;
  //   height: number;
  //   width: number;
  // };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  alt?: string;
}
