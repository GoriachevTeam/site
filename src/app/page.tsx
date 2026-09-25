import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { DoctorsGrid } from "@/components/likari-page";
import {
  WhyWe,
  Equipment,
  MainBanner,
  LastArticles,
  Responsibilities,
  MedicalClinicSchema,
} from "@/components/home-page";

import { genMetaData } from "@/lib/metadata";

export const metadata: Metadata = genMetaData({
  title: "Офтальмологічний центр в Ужгороді | Центр Дмитра Горячева",
  description:
    "Офтальмологічний центр Дмитра Горячева в Ужгороді: діагностика зору, лазерна корекція, лікування катаракти, глаукоми та захворювань сітківки.",
  img: "share-og.png",
  canonical: "",
});

export default function Home() {
  return (
    <>
      <Head>
        <MedicalClinicSchema />
      </Head>
      <MainBanner />
      <WhyWe />
      <Equipment />
      <DoctorsGrid title="Наші лікарі — професіонали" maxToDispaly={4}>
        <Button className="mt-6 mx-auto" variant="primaryFilled" asChild>
          <Link href="/likari">Усі лікарі нашого центру</Link>
        </Button>
      </DoctorsGrid>
      <Responsibilities />
      <LastArticles />
    </>
  );
}
