import { FC } from "react";
import Image from "next/image";

import { TypeInstructionsBlock } from "../../interfaces";
// import { INSTRUCTIONS } from "./constants";

const InstructionsBlock: FC<TypeInstructionsBlock> = ({ title, options }) => (
  <section className="py-12">
    <h2 className="font-bold text-balance text-black text-2xl md:text-3xl pb-8">
      {title}
    </h2>
    <div className="grid grid-cols-2 gap-12 md:grid-cols-3 xl:grid-cols-4">
      {options.map(({ text, icon }, idx) => {
        return (
          <div className="flex flex-col gap-3" key={idx}>
            <Image
              className="object-cover aspect-square"
              src={`/svg/instructions/${icon}.svg`}
              width={90}
              height={90}
              alt={text}
            />
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default InstructionsBlock;
