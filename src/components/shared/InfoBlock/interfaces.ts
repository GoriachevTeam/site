import { PropsWithChildren } from "react";

import { TypeMixedImg } from "@/types/common";

export interface InfoBlockProps extends PropsWithChildren {
  className?: string;
  img: TypeMixedImg;
  reverse?: boolean;
  skipContainer?: boolean;
}
