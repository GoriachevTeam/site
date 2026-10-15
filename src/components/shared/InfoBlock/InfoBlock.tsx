import { FC } from "react";

import MixedImage from "../MixedImage";

import { cn } from "@/lib/utils";

import { InfoBlockProps } from "./interfaces";

const InfoBlock: FC<InfoBlockProps> = ({
  img,
  className,
  skipContainer,
  reverse,
  children,
  sectionClassName,
}) => (
  <section
    className={cn("infoBlock py-12", sectionClassName, {
      container: !skipContainer,
    })}
  >
    <div
      className={cn(className || "grid gap-8 xl:gap-12 items-center", {
        "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1":
          !reverse && reverse !== undefined,
        "lg:grid-cols-2": !!img,
      })}
    >
      {img ? (
        <div className="-mx-6 md:mx-0">
          <MixedImage
            className="object-cover"
            image={img}
            width={800}
            height={700}
          />
        </div>
      ) : null}
      <div className="prose max-w-none flex-1 [&_h2]:font-bold [&_h2]:text-balance [&_h2]:text-black [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:not-prose [&_h2]:pb-4">
        {children}
      </div>
    </div>
  </section>
);

export default InfoBlock;
