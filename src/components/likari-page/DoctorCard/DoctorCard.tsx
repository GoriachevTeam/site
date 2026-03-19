import { FC } from "react";

import RteBlock from "@/components/shared/RteBlock";

import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/urlFor";

import { DoctorCardProps } from "./interfaces";

const DoctorCard: FC<DoctorCardProps> = ({ name, bio, image, className }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <img
        className="-mx-6 w-screen max-w-screen md:mx-0 md:w-full md:object-cover aspect-square"
        src={urlFor(image).width(800).url()}
        srcSet={[
          `${urlFor(image).width(400).url()} 400w`,
          `${urlFor(image).width(800).url()} 800w`,
          `${urlFor(image).width(1200).url()} 1200w`,
        ].join(", ")}
        sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
        loading="lazy"
        alt={name}
      />
      <div>
        <h3 className="pt-4 pb-2 text-lg font-bold text-balance xl:text-xl">
          {name}
        </h3>
        <RteBlock className="prose max-w-none text-base" value={bio} />
      </div>
    </div>
  );
};

export default DoctorCard;
