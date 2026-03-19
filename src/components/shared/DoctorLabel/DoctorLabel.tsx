import { FC } from "react";

import { urlFor } from "@/lib/urlFor";
import { cn, getDate } from "@/lib/utils";

import { DoctorLabelProps } from "./interfaces";

const DoctorLabel: FC<DoctorLabelProps> = ({
  image,
  shortName,
  date,
  className,
}) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className="photo flex aspect-square size-14 items-center justify-center overflow-hidden rounded-full">
      <img
        className="rounded-full object-cover"
        src={urlFor(image)
          .width(160)
          .height(160)
          .auto("format")
          .quality(75)
          .url()}
        srcSet={[
          `${urlFor(image)
            .width(80)
            .height(80)
            .auto("format")
            .quality(75)
            .url()} 80w`,
          `${urlFor(image)
            .width(160)
            .height(160)
            .auto("format")
            .quality(75)
            .url()} 160w`,
        ].join(", ")}
        sizes="80px"
        alt={shortName || "Doctor photo"}
        width={80}
        height={80}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div>
      <p className="name font-semibold text-slate-900">{shortName}</p>
      <time className="text-sm text-slate-600">{getDate(date)}</time>
    </div>
  </div>
);

export default DoctorLabel;
