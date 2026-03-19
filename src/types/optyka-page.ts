import type { PortableTextBlock } from "@portabletext/types";

import { SanityImage } from "./sanity";

export interface OptykaContentBlock {
  _type: "contentBlock";
  _key: string;
  image: SanityImage;
  content: PortableTextBlock[];
}

export interface OptykaPage {
  _id: string;
  _type: "optyka-page";
  _createdAt: string;
  _updatedAt: string;
  title: string;
  description?: string;
  slug: string;
  bannerImage: SanityImage;
  seoTitle?: string;
  seoDescription?: string;
  blocks?: OptykaContentBlock[];
}
