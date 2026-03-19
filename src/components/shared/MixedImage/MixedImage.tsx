import { FC } from "react";
import Image from "next/image";

import { urlFor } from "@/lib/urlFor";

import { SanityImage } from "@/types/sanity";
import { TypeMixedImg } from "@/types/common";
import { MixedImageProps } from "./interfaces";
import { cn } from "@/lib/utils";

function isSanityImage(image: TypeMixedImg): image is SanityImage {
  return "asset" in image;
}

const MixedImage: FC<MixedImageProps> = ({
  image,
  width,
  height,
  fill,
  priority,
  className,
  loading,
}) => {
  if (isSanityImage(image)) {
    const buildSrc = (w: number, h: number) =>
      urlFor(image).width(w).height(h).auto("format").url();

    return (
      <img
        className={cn("size-full object-cover", className)}
        src={buildSrc(width || 1920, height || 1240)}
        srcSet={[
          `${buildSrc(640, 360)}  640w`,
          `${buildSrc(828, 465)}  828w`,
          `${buildSrc(1080, 607)} 1080w`,
          `${buildSrc(1280, 720)} 1280w`,
          `${buildSrc(1920, 1080)} 1920w`,
        ].join(", ")}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        alt={image.alt}
      />
    );
  }

  return (
    <Image
      src={image.url}
      alt={image.alt}
      {...(fill ? { fill } : { width: width ?? 1920, height: height ?? 1240 })}
      priority={priority}
      className={cn("size-full object-cover", className)}
      loading={loading}
    />
  );
};

export default MixedImage;
