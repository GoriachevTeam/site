import { Doctor } from "@/types/sanity";

export interface DoctorLabelProps extends Pick<Doctor, "image" | "shortName"> {
  date?: string;
  className?: string;
}
