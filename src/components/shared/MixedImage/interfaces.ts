import { ImageProps } from "next/image";

import { TypeMixedImg } from "@/types/common";

export interface MixedImageProps extends Pick<ImageProps, "loading"> {
  image: TypeMixedImg;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}
