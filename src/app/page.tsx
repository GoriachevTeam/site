import Link from "next/link";

import Equipment from "@/components/home-page/Equipment";
import { Button } from "@/components/ui/button";
import { DoctorsGrid } from "@/components/likari-page";
import {
  LastArticles,
  MainBanner,
  Responsibilities,
  WhyWe,
} from "@/components/home-page";

export default function Home() {
  return (
    <>
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
