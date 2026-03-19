import { FC } from "react";
import Link from "next/link";

import DoctorLabel from "@/components/shared/DoctorLabel";
import { Button } from "@/components/ui/button";

import { urlFor } from "@/lib/urlFor";
import { fetchLastArticles } from "@/lib/articles";

const LastArticles: FC = async () => {
  const articles = await fetchLastArticles();

  return (
    <section className="container py-12 flex flex-col items-start gap-6">
      <h2 className="text-3xl font-bold text-slate-900">Останні статті</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(
          ({
            slug,
            image,
            title,
            description,
            category,
            doctor,
            publishedAt,
          }) => (
            <article className="group" key={slug}>
              <Link className="grid h-full" href={`/blog/${slug}`}>
                <div className="ease-out-quad w-fit overflow-hidden transition-all duration-300 group-hover:ring group-hover:ring-black">
                  <img
                    className="ease-out-quad aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={urlFor(image)
                      .width(1040)
                      .height(580)
                      .auto("format")
                      .quality(75)
                      .url()}
                    srcSet={[
                      `${urlFor(image).width(520).height(290).auto("format").quality(75).url()} 520w`,
                      `${urlFor(image).width(640).height(357).auto("format").quality(75).url()} 640w`,
                      `${urlFor(image).width(750).height(418).auto("format").quality(75).url()} 750w`,
                      `${urlFor(image).width(828).height(462).auto("format").quality(75).url()} 828w`,
                      `${urlFor(image).width(960).height(535).auto("format").quality(75).url()} 960w`,
                      `${urlFor(image).width(1040).height(580).auto("format").quality(75).url()} 1040w`,
                    ].join(", ")}
                    sizes="(min-width: 520px) 520px, 100vw"
                    alt={title}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <p className="text-sm font-semibold tracking-wide text-slate-600 uppercase">
                    {category.title}
                  </p>
                  <h3 className="ease-out-quad text-xl font-bold text-balance text-slate-900 transition-colors duration-300 group-hover:text-cyan-700">
                    {title}
                  </h3>
                  <p className="text-slate-600">{description}</p>
                  <DoctorLabel
                    className="pt-4 mt-auto"
                    {...doctor}
                    date={publishedAt}
                  />
                </div>
              </Link>
            </article>
          ),
        )}
      </div>
      <Button className="self-center" variant="primaryFilled" asChild>
        <Link href="/blog">Переглянути усі дописи</Link>
      </Button>
    </section>
  );
};

export default LastArticles;
