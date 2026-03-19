import { HTMLProps } from "react";

export interface SourceVideoProps extends HTMLProps<HTMLVideoElement> {
  mp4: string;
  webm: string;
}
