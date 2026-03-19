import { FC } from "react";
import Image from "next/image";

import { EQUIPMENT_LOGOS } from "./constants";

const Equipment: FC = () => (
  <section className="container py-12">
    <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-8">
      Використовуємо сучасне обладнання компаній світових лідерів галузі
    </h2>
    <div className="mx-auto grid max-w-lg grid-cols-3 justify-items-center gap-4 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
      {EQUIPMENT_LOGOS.map(({ name, img }) => (
        <Image
          className="h-full w-fit"
          src={img}
          width={250}
          height={40}
          alt={name}
          key={name}
        />
      ))}
    </div>
  </section>
);

export default Equipment;
