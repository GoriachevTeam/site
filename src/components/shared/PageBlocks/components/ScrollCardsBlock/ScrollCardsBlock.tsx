import { FC } from "react";
import Image from "next/image";

import { TypeScrollCards } from "../../interfaces";

const ScrollCardsBlock: FC<TypeScrollCards> = ({ title, cards }) => {
  return (
    <section className="py-12">
      <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-6">
        {title}
      </h2>
      <div className="-mx-6 grid snap-x snap-mandatory scroll-smooth auto-cols-[minmax(320px,1fr)] grid-flow-col gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0">
        {cards.map(({ name, desc, img }, idx) => (
          <article className="snap-center" key={idx}>
            <div>
              <Image
                className="w-full object-cover"
                src={img}
                width={800}
                height={500}
                alt={name}
              />
            </div>
            <h3 className="pt-4 pb-1 text-xl font-bold">{name}</h3>
            <div className="prose whitespace-pre-line">
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ScrollCardsBlock;
