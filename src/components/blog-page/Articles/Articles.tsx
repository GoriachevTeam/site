import { FC } from "react";
import Link from "next/link";

import DoctorLabel from "@/components/shared/DoctorLabel";

import { urlFor } from "@/lib/urlFor";
import { fetchAllArticlesByCategory } from "@/lib/articles";

import { ArticlesProps } from "./interfaces";

const Articles: FC<ArticlesProps> = async ({ category }) => {
  const articles = await fetchAllArticlesByCategory(category);

  return (
    <section className="py-12">
      <div className="flex flex-col">
        {articles.map(
          ({
            title,
            description,
            category,
            slug,
            doctor,
            image,
            publishedAt,
          }) => (
            <article
              className="-mt-px grid grid-cols-1 border border-x-0 border-black first:mt-0 lg:grid-cols-[400px_1fr]"
              key={slug}
            >
              <aside className="order-1 flex items-center gap-4 border-black pb-6 lg:order-0 lg:flex-col lg:items-start lg:gap-2 lg:border-r lg:px-6 lg:py-12">
                <DoctorLabel
                  className="grid [&_.photo]:size-16 lg:[&_.photo]:size-22"
                  {...doctor}
                  date={publishedAt}
                />
              </aside>
              <Link
                className="grid h-full group block py-6 lg:p-12"
                href={`/blog/${slug}`}
              >
                <div className="ease-out-quad w-fit overflow-hidden transition-all duration-300 group-hover:ring group-hover:ring-black">
                  <img
                    className="ease-out-quad transition-transform duration-300 group-hover:scale-105"
                    src={urlFor(image)
                      .width(820)
                      .height(460)
                      .auto("format")
                      .quality(75)
                      .url()}
                    srcSet={[
                      `${urlFor(image).width(640).height(359).auto("format").quality(75).url()} 640w`,
                      `${urlFor(image).width(750).height(421).auto("format").quality(75).url()} 750w`,
                      `${urlFor(image).width(820).height(460).auto("format").quality(75).url()} 820w`,
                      `${urlFor(image).width(828).height(464).auto("format").quality(75).url()} 828w`,
                      `${urlFor(image).width(960).height(539).auto("format").quality(75).url()} 960w`,
                      `${urlFor(image).width(1080).height(606).auto("format").quality(75).url()} 1080w`,
                      `${urlFor(image).width(1280).height(718).auto("format").quality(75).url()} 1280w`,
                      `${urlFor(image).width(1640).height(920).auto("format").quality(75).url()} 1640w`,
                    ].join(", ")}
                    sizes="(min-width: 820px) 820px, 100vw"
                    alt={title}
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      maxWidth: "820px",
                      maxHeight: "460px",
                      aspectRatio: "820 / 460",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 pt-6">
                  <p className="text-sm font-semibold tracking-wide text-slate-600 uppercase">
                    {category.title}
                  </p>
                  <h3 className="ease-out-quad max-w-prose text-2xl font-bold text-balance text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 lg:text-4xl">
                    {title}
                  </h3>
                  <p className="max-w-prose pt-2 text-slate-600">
                    {description}
                  </p>
                </div>
              </Link>
            </article>
          ),
        )}
      </div>
    </section>
  );
};

export default Articles;
