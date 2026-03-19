import { FC } from "react";

import MixedImage from "../MixedImage";
import DoctorLabel from "../DoctorLabel";
import OnlineRegButton from "../OnlineRegButton";

import { getDate } from "@/lib/utils";

import { TopBannerProps } from "./interfaces";

const TopBanner: FC<TopBannerProps> = ({
  title,
  desc,
  img,
  date,
  doctor,
  category,
}) => {
  const parsedDate = getDate(date);
  return (
    <section className="relative isolate z-40 bg-slate-50 h-95 md:h-190 after:absolute after:inset-0 after:z-0 after:bg-linear-to-b after:from-transparent after:to-black after:opacity-60">
      <div className="container relative z-10 container flex h-full flex-col items-start justify-end gap-3 py-6 text-slate-50 lg:py-12">
        {date ? (
          <time className="text-sm text-shadow-xs">{parsedDate}</time>
        ) : null}
        <h1 className="max-w-prose text-3xl font-bold text-balance uppercase md:text-5xl">
          {title}
        </h1>
        {desc ? (
          <p className="max-w-prose text-base md:text-xl lg:text-lg">{desc}</p>
        ) : null}
        {doctor ? (
          <div className="flex items-center gap-3">
            <DoctorLabel
              className="[&_.name]:text-inherit [&_.name]:text-sm [&_.name]:font-normal [&_.photo]:size-8"
              {...doctor}
            />
            <span className="text-cyan-200">•</span>
            <span className="text-sm">{category}</span>
          </div>
        ) : (
          <OnlineRegButton />
        )}
      </div>
      <MixedImage
        className="absolute inset-0 -z-10 bottom-0 size-full object-cover"
        image={img}
        loading="eager"
      />
    </section>
  );
};

export default TopBanner;
