import { cacheLife, cacheTag } from "next/cache";

import { client } from "./sanity";

import { OptykaPage } from "@/types/optyka-page";

export async function fetchOptykaPage(): Promise<OptykaPage> {
  "use cache";

  cacheLife("hours");
  cacheTag("page");

  const page: OptykaPage = await client.fetch(
    `*[_type=="optyka-page"][0]{
    _id,
    title,
    description,
    "slug": slug.current,
    bannerImage {
      asset->,
      crop,
      alt
    },
    seoTitle,
    seoDescription,
    blocks[] {
      image {
        asset->,
        crop,
        alt
      },
      content
    }
  }`,
  );

  return page;
}
