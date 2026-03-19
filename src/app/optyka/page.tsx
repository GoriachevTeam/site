import { notFound } from "next/navigation";

import RteBlock from "@/components/shared/RteBlock";
import TopBanner from "@/components/shared/TopBanner";
import InfoBlock from "@/components/shared/InfoBlock";

import { urlFor } from "@/lib/urlFor";
import { genMetaData } from "@/lib/metadata";
import { fetchOptykaPage } from "@/lib/optyka-page";

export async function generateMetadata() {
  const page = await fetchOptykaPage();

  if (!page) return {};

  const og = urlFor(page.bannerImage)
    .width(1200)
    .height(630)
    .format("webp")
    .quality(70)
    .url();

  return genMetaData({
    title: page.title,
    description: page.description,
    img: og,
    canonical: page.slug,
  });
}

export default async function OptykaPage() {
  const page = await fetchOptykaPage();

  if (!page) {
    return notFound();
  }

  const { title, description, bannerImage, blocks } = page;

  return (
    <>
      <TopBanner title={title} desc={description} img={bannerImage} />
      <section className="lg:py-12">
        {blocks?.map(({ image, content }, idx) => (
          <InfoBlock reverse={idx % 2 !== 0} img={image} key={idx}>
            <RteBlock className="[&_h2]:m-0" value={content} />
          </InfoBlock>
        ))}
      </section>
    </>
  );
}
