import { notFound } from "next/navigation";

import TopBanner from "@/components/shared/TopBanner";
import PageBlocks from "@/components/shared/PageBlocks";
import ServicePrices from "@/components/posluhy-page/ServicePrices";

import { genMetaData } from "@/lib/metadata";
import { fetchPricesByService } from "@/lib/prices";
import { SERVICES } from "@/components/posluhy-page/constants";

import { TypeServicePageParams } from "@/types/pageParams";

export async function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: TypeServicePageParams) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return {};

  return genMetaData({
    title: service.name,
    description: service.desc,
    img: service.img,
    canonical: `posluhy/${service.slug}`,
  });
}

export default async function ServicePage({ params }: TypeServicePageParams) {
  const { slug } = await params;

  const prices = await fetchPricesByService(`/${slug}`);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service || !prices) {
    return notFound();
  }

  return (
    <>
      <TopBanner
        title={service.name}
        desc={service.desc}
        img={{ url: service.img, alt: service.name }}
      />
      <div className="container">
        {service.blocks ? <PageBlocks blocks={service.blocks} /> : null}
        <ServicePrices title={prices.pageTitle} prices={prices.prices} />
      </div>
    </>
  );
}
