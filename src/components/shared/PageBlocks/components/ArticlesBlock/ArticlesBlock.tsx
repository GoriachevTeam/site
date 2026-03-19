import { FC } from "react";
import Image from "next/image";

import { TypeArticlesBlock } from "../../interfaces";

const ArticlesBlock: FC<TypeArticlesBlock> = ({ title, articles }) => (
  <section className="py-12">
    <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-6">
      {title}
    </h2>
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12">
      {articles.map(({ name, desc, img }, idx) => (
        <article className="snap-center" key={idx}>
          <div className="-mx-6 md:mx-0">
            <Image
              className="w-full object-cover"
              src={img}
              width={800}
              height={500}
              alt={name}
            />
          </div>
          <h3 className="pt-4 pb-1 text-xl font-bold">{name}</h3>
          <div className="prose whitespace-pre-line">{desc}</div>
        </article>
      ))}
    </div>
  </section>
);

export default ArticlesBlock;
