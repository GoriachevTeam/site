import { SanityImage } from "./sanity";

export type TypeImg = {
  url: string;
  alt: string;
};

export type TypeMixedImg = TypeImg | SanityImage;

export type TypeSitemapLink = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
};
