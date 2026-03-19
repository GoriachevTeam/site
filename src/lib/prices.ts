import { cacheLife, cacheTag } from "next/cache";

import { client } from "./sanity";

import { Price } from "@/types/sanity";

export async function fetchAllPrices(): Promise<Price[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("prices");

  const prices: Price[] = await client.fetch(
    `*[_type == "price"] | order(_createdAt desc){
      _id,
      name,
      serviceSlug,
      prices[] {
        title,
        description,
        price     
      },
    }`,
  );

  return prices;
}

export async function fetchPricesByService(
  serviceSlug: string,
): Promise<Price> {
  "use cache";

  cacheLife("hours");
  cacheTag("prices");

  const price: Price = await client.fetch(
    `*[_type == "price" && serviceSlug == $serviceSlug][0] {
      pageTitle,
      serviceSlug,
      prices[] {
        title,
        description,
        price     
      },
    }`,
    { serviceSlug },
  );

  return price;
}
