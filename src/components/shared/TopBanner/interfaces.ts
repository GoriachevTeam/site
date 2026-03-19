import { Doctor } from "@/types/sanity";
import { TypeMixedImg } from "@/types/common";

export interface TopBannerProps {
  img: TypeMixedImg;
  title: string;
  desc?: string;
  date?: string;
  doctor?: Pick<Doctor, "image" | "shortName">;
  category?: string;
}
