import { cacheLife, cacheTag } from "next/cache";

import { client } from "./sanity";

import { Doctor } from "@/types/sanity";

export async function fetchDoctors(): Promise<Doctor[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("doctors");

  const doctors: Doctor[] = await client.fetch(
    `*[_type == "doctor"] | order(sort asc){
      _id,
      name,
      bio,
      image
    }`,
  );

  return doctors;
}
